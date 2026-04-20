// Paste this whole thing into the browser console on https://xo.sigma-school.ru/play/
// Then run:   __autoPlay()
// It will play your side automatically (whichever side the toggle shows you are).
// Options:    __autoPlay(5)           // search depth (default 4)
//             __autoStop()            // abort mid-game
(function () {
  const N = 15;

  function adjacentEmpty(hist) {
    if (!hist.length) return [[7, 7]];
    const occ = new Set(hist.map(([r, c]) => r * N + c));
    const seen = new Set();
    const out = [];
    for (const [r, c] of hist) {
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
        if (!dr && !dc) continue;
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
        const k = nr * N + nc;
        if (occ.has(k) || seen.has(k)) continue;
        seen.add(k);
        out.push([nr, nc]);
      }
    }
    return out;
  }

  function makeGrid(hist) {
    const g = Array.from({ length: N }, () => new Int8Array(N));
    for (let i = 0; i < hist.length; i++) {
      const [r, c] = hist[i];
      g[r][c] = i % 2 === 0 ? 1 : 2;
    }
    return g;
  }

  function checkWinAt(g, r, c, who) {
    const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (const [dr, dc] of dirs) {
      let cnt = 1, nr = r + dr, nc = c + dc;
      while (nr >= 0 && nr < N && nc >= 0 && nc < N && g[nr][nc] === who) { cnt++; nr += dr; nc += dc; }
      nr = r - dr; nc = c - dc;
      while (nr >= 0 && nr < N && nc >= 0 && nc < N && g[nr][nc] === who) { cnt++; nr -= dr; nc -= dc; }
      if (cnt >= 5) return true;
    }
    return false;
  }

  function scoreLine(line, who) {
    const opp = 3 - who;
    let score = 0;
    const L = line.length;
    for (let i = 0; i <= L - 5; i++) {
      let p = 0, o = 0;
      for (let k = 0; k < 5; k++) {
        const v = line[i + k];
        if (v === who) p++;
        else if (v === opp) o++;
      }
      if (o || !p) continue;
      const left = i - 1 >= 0 ? line[i - 1] : -1;
      const right = i + 5 < L ? line[i + 5] : -1;
      const lo = left === 0, ro = right === 0;
      const lb = (left === opp || left === -1), rb = (right === opp || right === -1);
      if (p === 5) score += 1e7;
      else if (p === 4) { if (lo && ro) score += 200000; else if (!(lb && rb)) score += 10000; }
      else if (p === 3) { if (lo && ro) score += 5000; else if (lo || ro) score += 500; else score += 50; }
      else if (p === 2) { if (lo && ro) score += 100; else if (lo || ro) score += 20; else score += 2; }
      else score += 1;
    }
    return score;
  }

  function collectLines(g) {
    const lines = [];
    for (let r = 0; r < N; r++) { const l = []; for (let c = 0; c < N; c++) l.push(g[r][c]); lines.push(l); }
    for (let c = 0; c < N; c++) { const l = []; for (let r = 0; r < N; r++) l.push(g[r][c]); lines.push(l); }
    for (let d = -N + 1; d < N; d++) { const l = []; for (let r = 0; r < N; r++) { const c = r + d; if (c >= 0 && c < N) l.push(g[r][c]); } if (l.length >= 5) lines.push(l); }
    for (let d = 0; d < 2 * N - 1; d++) { const l = []; for (let r = 0; r < N; r++) { const c = d - r; if (c >= 0 && c < N) l.push(g[r][c]); } if (l.length >= 5) lines.push(l); }
    return lines;
  }

  function evaluate(g, me) {
    const opp = 3 - me;
    let my = 0, op = 0;
    for (const l of collectLines(g)) { my += scoreLine(l, me); op += scoreLine(l, opp); }
    return my - Math.floor(op * 1.1);
  }

  function orderMoves(hist, g, cands, me) {
    const toMove = hist.length % 2 === 0 ? 1 : 2;
    const scored = cands.map(([r, c]) => {
      g[r][c] = toMove;
      const s = evaluate(g, me);
      g[r][c] = 0;
      return { s: toMove === me ? s : -s, r, c };
    });
    scored.sort((a, b) => b.s - a.s);
    return scored.map(x => [x.r, x.c]);
  }

  function immediateWin(g, cands, who) {
    for (const [r, c] of cands) {
      g[r][c] = who;
      if (checkWinAt(g, r, c, who)) { g[r][c] = 0; return [r, c]; }
      g[r][c] = 0;
    }
    return null;
  }

  function alphabeta(hist, g, depth, alpha, beta, me) {
    if (hist.length) {
      const [lr, lc] = hist[hist.length - 1];
      const prev = (hist.length - 1) % 2 === 0 ? 1 : 2;
      if (checkWinAt(g, lr, lc, prev)) {
        return prev === me ? 1e6 - hist.length : -1e6 + hist.length;
      }
    }
    if (depth === 0) return evaluate(g, me);
    const cands = adjacentEmpty(hist);
    if (!cands.length) return evaluate(g, me);
    const topK = depth >= 3 ? 8 : 12;
    const ordered = orderMoves(hist, g, cands, me).slice(0, topK);
    const toMove = hist.length % 2 === 0 ? 1 : 2;
    const win = immediateWin(g, ordered, toMove);
    if (win) return toMove === me ? 1e6 - (hist.length + 1) : -1e6 + (hist.length + 1);
    if (toMove === me) {
      let best = -Infinity;
      for (const [r, c] of ordered) {
        g[r][c] = toMove; hist.push([r, c]);
        const v = alphabeta(hist, g, depth - 1, alpha, beta, me);
        hist.pop(); g[r][c] = 0;
        if (v > best) best = v;
        if (best > alpha) alpha = best;
        if (alpha >= beta) break;
      }
      return best;
    } else {
      let best = Infinity;
      for (const [r, c] of ordered) {
        g[r][c] = toMove; hist.push([r, c]);
        const v = alphabeta(hist, g, depth - 1, alpha, beta, me);
        hist.pop(); g[r][c] = 0;
        if (v < best) best = v;
        if (best < beta) beta = best;
        if (alpha >= beta) break;
      }
      return best;
    }
  }

  function chooseMove(hist, me, depth) {
    const g = makeGrid(hist);
    if (!hist.length) return [7, 7];
    const cands = adjacentEmpty(hist);
    const w = immediateWin(g, cands, me);
    if (w) return w;
    const opp = 3 - me;
    for (const [r, c] of cands) {
      g[r][c] = opp;
      if (checkWinAt(g, r, c, opp)) { g[r][c] = 0; return [r, c]; }
      g[r][c] = 0;
    }
    const ordered = orderMoves(hist, g, cands, me).slice(0, 14);
    let bestVal = -Infinity, best = ordered[0];
    let alpha = -Infinity, beta = Infinity;
    for (const [r, c] of ordered) {
      g[r][c] = me; hist.push([r, c]);
      const v = alphabeta(hist, g, depth - 1, alpha, beta, me);
      hist.pop(); g[r][c] = 0;
      if (v > bestVal) { bestVal = v; best = [r, c]; }
      if (v > alpha) alpha = v;
    }
    return best;
  }

  let stop = false;
  window.__autoStop = function () { stop = true; };

  window.__autoPlay = async function (depth) {
    depth = depth || 4;
    stop = false;
    // Read which side the page says we play.
    const botRole = document.querySelector("input[name=botRole]:checked").value;
    const humanIsO = botRole === "X";
    const me = humanIsO ? 2 : 1;  // 1 = X, 2 = O
    console.log(`autoplay: we are ${humanIsO ? "O" : "X"}, depth=${depth}`);

    // Safety cap.
    for (let step = 0; step < 250 && !stop; step++) {
      if (window.gameOver) { console.log("game over"); return; }
      const hist = window.history;
      if (!hist) { console.log("no history on window"); return; }
      const turn = hist.length % 2 === 0 ? 1 : 2;
      if (turn === me) {
        // Clone history into plain arrays in case it contains something exotic.
        const histCopy = hist.map(x => [x[0], x[1]]);
        const [r, c] = chooseMove(histCopy, me, depth);
        console.log(`auto -> (${r},${c})`);
        const cell = document.getElementById(`c${r}_${c}`);
        if (!cell) { console.log("cell not found"); return; }
        cell.click();
        // Give the page a beat to update history and kick the bot.
        await new Promise(res => setTimeout(res, 200));
      } else {
        // Wait for the bot's move to land.
        await new Promise(res => setTimeout(res, 300));
      }
    }
    if (stop) console.log("stopped");
  };

  console.log("autoplay loaded. Run: __autoPlay()   (or __autoPlay(5) for depth 5)");
})();
