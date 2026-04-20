#!/usr/bin/env python3
"""
Play the tick_tack bot at https://xo.sigma-school.ru/play/ and try to win.

Rules (from the game page):
- 15x15 board, 5-in-a-row wins.
- First move must be at (7, 7).
- Every subsequent move must be adjacent (king-distance 1) to any existing stone.
- X moves first.

This script:
- Chooses our side (default: we play X, bot plays O).
- For each of our turns, runs a small alpha-beta search with a pattern-based
  heuristic to pick a strong move.
- Calls the server's /move endpoint to get the bot's reply.
- Stops when either side makes 5-in-a-row, or when the bot reports it is "stuck".

Usage:
    python3 beat_bot.py                   # play as X (bot plays O), depth 4
    python3 beat_bot.py --bot X           # play as O, let bot play X
    python3 beat_bot.py --depth 3         # change our search depth
    python3 beat_bot.py --o-depth 4       # bot depth for O
"""

from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.request

N = 15
BASE_URL = "https://xo.sigma-school.ru/play"


# ---------- server ----------

def post(path: str, data: dict) -> dict:
    req = urllib.request.Request(
        f"{BASE_URL}/{path}",
        data=json.dumps(data).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read())


# ---------- board ----------

def make_grid(history):
    g = [[0] * N for _ in range(N)]
    for i, (r, c) in enumerate(history):
        g[r][c] = 1 if i % 2 == 0 else 2
    return g


def adjacent_empty(history, grid):
    if not history:
        return [(7, 7)]
    seen = set()
    out = []
    for r, c in history:
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                if dr == 0 and dc == 0:
                    continue
                nr, nc = r + dr, c + dc
                if 0 <= nr < N and 0 <= nc < N and grid[nr][nc] == 0 and (nr, nc) not in seen:
                    seen.add((nr, nc))
                    out.append((nr, nc))
    return out


def check_win_at(grid, r, c, who):
    """Is there a 5-in-a-row containing (r,c) for `who`?"""
    for dr, dc in ((0, 1), (1, 0), (1, 1), (1, -1)):
        cnt = 1
        nr, nc = r + dr, c + dc
        while 0 <= nr < N and 0 <= nc < N and grid[nr][nc] == who:
            cnt += 1
            nr += dr; nc += dc
        nr, nc = r - dr, c - dc
        while 0 <= nr < N and 0 <= nc < N and grid[nr][nc] == who:
            cnt += 1
            nr -= dr; nc -= dc
        if cnt >= 5:
            return True
    return False


def any_win(grid, who):
    for r in range(N):
        for c in range(N):
            if grid[r][c] == who and check_win_at(grid, r, c, who):
                return True
    return False


# ---------- evaluation ----------

# Pattern scoring on a single line.
# Windows of length 6 over line[i:i+6] let us distinguish "open" vs "closed" ends.
# For each window, count p (player stones) and o (opponent stones).
# A window with o>0 contributes 0.
# Weights:
#   5 in a row: HUGE
#   open-4 (_PPPP_): very strong
#   four one-sided (XPPPP_ / _PPPPX): strong
#   open-3: strong
#   three: medium
#   open-2: small
#
# We approximate with a table over (p, o, left_open, right_open) in a 5-window
# inside a 7-cell view. Simpler: scan windows of 5, track left/right neighbor if any.

def score_line_for(line, who):
    """Score line for player `who`."""
    opp = 3 - who
    L = len(line)
    score = 0
    # Enumerate all 5-windows, with knowledge of neighbor cells on both sides.
    for i in range(L - 4):
        w = line[i:i + 5]
        o_cnt = w.count(opp)
        if o_cnt:
            continue
        p_cnt = w.count(who)
        if p_cnt == 0:
            continue
        # look at neighbors
        left = line[i - 1] if i - 1 >= 0 else -1  # treat off-board as blocked (-1)
        right = line[i + 5] if i + 5 < L else -1
        left_open = (left == 0)
        right_open = (right == 0)
        left_blocked = (left == opp or left == -1)
        right_blocked = (right == opp or right == -1)

        if p_cnt == 5:
            score += 10_000_000
        elif p_cnt == 4:
            # 4 stones + 1 empty in window
            # open-four if both sides open => someone can complete to 5 next move
            if left_open and right_open:
                score += 200_000
            elif left_blocked and right_blocked:
                score += 0
            else:
                score += 10_000
        elif p_cnt == 3:
            # 3 stones + 2 empties in a 5-window
            if left_open and right_open:
                score += 5_000
            elif left_open or right_open:
                score += 500
            else:
                score += 50
        elif p_cnt == 2:
            if left_open and right_open:
                score += 100
            elif left_open or right_open:
                score += 20
            else:
                score += 2
        else:  # p_cnt == 1
            score += 1
    return score


def collect_lines(grid):
    lines = []
    for r in range(N):
        lines.append([grid[r][c] for c in range(N)])
    for c in range(N):
        lines.append([grid[r][c] for r in range(N)])
    for d in range(-N + 1, N):
        line = []
        for r in range(N):
            c = r + d
            if 0 <= c < N:
                line.append(grid[r][c])
        if len(line) >= 5:
            lines.append(line)
    for d in range(2 * N - 1):
        line = []
        for r in range(N):
            c = d - r
            if 0 <= c < N:
                line.append(grid[r][c])
        if len(line) >= 5:
            lines.append(line)
    return lines


def evaluate(grid, me):
    opp = 3 - me
    my_score = 0
    opp_score = 0
    for line in collect_lines(grid):
        my_score += score_line_for(line, me)
        opp_score += score_line_for(line, opp)
    # slight bias to defense: blocking a threat is slightly preferred
    return my_score - int(opp_score * 1.1)


# ---------- search ----------

def order_moves(history, grid, candidates, me):
    """Rank candidate moves by a one-ply heuristic."""
    scored = []
    to_move = 1 if len(history) % 2 == 0 else 2
    for r, c in candidates:
        grid[r][c] = to_move
        s = evaluate(grid, me)
        grid[r][c] = 0
        scored.append((s if to_move == me else -s, r, c))
    scored.sort(reverse=True)
    return [(r, c) for _, r, c in scored]


def immediate_win_move(history, grid, to_move, candidates):
    for r, c in candidates:
        grid[r][c] = to_move
        if check_win_at(grid, r, c, to_move):
            grid[r][c] = 0
            return (r, c)
        grid[r][c] = 0
    return None


def alphabeta(history, grid, depth, alpha, beta, me):
    to_move = 1 if len(history) % 2 == 0 else 2
    # terminal: did the previous move produce a win?
    if history:
        lr, lc = history[-1]
        prev = 1 if (len(history) - 1) % 2 == 0 else 2
        if check_win_at(grid, lr, lc, prev):
            return (1_000_000 - len(history)) if prev == me else (-1_000_000 + len(history))
    if depth == 0:
        return evaluate(grid, me)

    candidates = adjacent_empty(history, grid)
    if not candidates:
        return evaluate(grid, me)

    # Hard prune: at interior depths, keep top-K after one-ply ordering
    top_k = 8 if depth >= 3 else 12
    ordered = order_moves(history, grid, candidates, me)[:top_k]

    # Tactical shortcut: if current side has an immediate winning move, take it.
    win_move = immediate_win_move(history, grid, to_move, ordered)
    if win_move is not None:
        r, c = win_move
        grid[r][c] = to_move
        history.append([r, c])
        val = (1_000_000 - len(history)) if to_move == me else (-1_000_000 + len(history))
        history.pop()
        grid[r][c] = 0
        return val

    if to_move == me:
        best = -10 ** 18
        for r, c in ordered:
            grid[r][c] = to_move
            history.append([r, c])
            v = alphabeta(history, grid, depth - 1, alpha, beta, me)
            history.pop()
            grid[r][c] = 0
            if v > best:
                best = v
            if best > alpha:
                alpha = best
            if alpha >= beta:
                break
        return best
    else:
        best = 10 ** 18
        for r, c in ordered:
            grid[r][c] = to_move
            history.append([r, c])
            v = alphabeta(history, grid, depth - 1, alpha, beta, me)
            history.pop()
            grid[r][c] = 0
            if v < best:
                best = v
            if best < beta:
                beta = best
            if alpha >= beta:
                break
        return best


def choose_move(history, me, depth):
    grid = make_grid(history)
    if not history:
        return (7, 7)
    candidates = adjacent_empty(history, grid)
    to_move = 1 if len(history) % 2 == 0 else 2
    assert to_move == me

    # 1) immediate win
    w = immediate_win_move(history, grid, me, candidates)
    if w:
        return w

    # 2) immediate block: if opponent can win next move, block
    opp = 3 - me
    for r, c in candidates:
        grid[r][c] = opp
        if check_win_at(grid, r, c, opp):
            grid[r][c] = 0
            return (r, c)
        grid[r][c] = 0

    # 3) alpha-beta over ordered candidates
    ordered = order_moves(history, grid, candidates, me)[:14]
    best_val = -10 ** 18
    best = ordered[0]
    alpha, beta = -10 ** 18, 10 ** 18
    for r, c in ordered:
        grid[r][c] = me
        history.append([r, c])
        v = alphabeta(history, grid, depth - 1, alpha, beta, me)
        history.pop()
        grid[r][c] = 0
        if v > best_val:
            best_val = v
            best = (r, c)
        if v > alpha:
            alpha = v
    return best


# ---------- driver ----------

def play(bot_role: str, our_depth: int, o_depth: int, sleep: float = 0.0):
    """bot_role: "X" or "O" — which side the SERVER bot plays."""
    assert bot_role in ("X", "O")
    human_is_o = (bot_role == "X")
    me = 2 if human_is_o else 1
    my_letter = "O" if human_is_o else "X"
    bot_letter = bot_role
    print(f"We play {my_letter}, bot plays {bot_letter}. Our depth={our_depth}, bot o_depth={o_depth}.")

    history: list[list[int]] = []

    def show():
        grid = make_grid(history)
        print("    " + " ".join(f"{c:2d}" for c in range(N)))
        for r in range(N):
            row = []
            for c in range(N):
                v = grid[r][c]
                row.append(" ." if v == 0 else (" X" if v == 1 else " O"))
            print(f"{r:2d}: " + " ".join(row))
        print()

    move_no = 0
    while True:
        move_no += 1
        who_turn = 1 if len(history) % 2 == 0 else 2
        if who_turn == me:
            t0 = time.time()
            r, c = choose_move(history, me, our_depth)
            dt = time.time() - t0
            history.append([r, c])
            print(f"[{move_no}] we ({my_letter}) -> ({r},{c})   [think {dt:.2f}s]")
            grid = make_grid(history)
            if check_win_at(grid, r, c, me):
                show()
                print(f"*** WE WIN as {my_letter} in {len(history)} moves! ***")
                return True
        else:
            body = {"history": history, "role": bot_role, "o_depth": o_depth}
            t0 = time.time()
            data = post("move", body)
            dt = time.time() - t0
            if data.get("error"):
                print("server error:", data["error"])
                return False
            if data.get("kind") == "stuck":
                show()
                print(f"*** bot ({bot_letter}) is STUCK after {dt:.2f}s — effectively we win ***")
                return True
            r, c = data["move"]
            history.append([r, c])
            print(f"[{move_no}] bot ({bot_letter}) -> ({r},{c})  kind={data['kind']}  [server {data['elapsed_ms']}ms / rt {dt:.2f}s]")
            grid = make_grid(history)
            if check_win_at(grid, r, c, 3 - me):
                show()
                print(f"*** bot ({bot_letter}) wins in {len(history)} moves :( ***")
                return False

        if sleep:
            time.sleep(sleep)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--bot", choices=["X", "O"], default="O",
                    help="which side the SERVER bot plays (default O, we play X)")
    ap.add_argument("--depth", type=int, default=4, help="our search depth")
    ap.add_argument("--o-depth", type=int, default=4, help="bot's o_depth")
    ap.add_argument("--sleep", type=float, default=0.0, help="sleep between turns")
    args = ap.parse_args()
    ok = play(args.bot, args.depth, args.o_depth, sleep=args.sleep)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
