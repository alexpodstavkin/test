"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function getDeadline(): Date {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("grantDeadline");
    if (stored) {
      const d = new Date(stored);
      if (d.getTime() > Date.now()) return d;
    }
  }
  const d = new Date();
  d.setDate(d.getDate() + 3); // 3 дня по умолчанию
  d.setHours(d.getHours() + 6);
  if (typeof window !== "undefined") {
    window.localStorage.setItem("grantDeadline", d.toISOString());
  }
  return d;
}

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1000),
  };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-0">
      <span className="text-2xl md:text-3xl font-bold leading-none text-[var(--n-shark-1)] tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] md:text-xs text-[var(--n-mine-shaft)] uppercase tracking-[0.06em]">
        {label}
      </span>
    </div>
  );
}

export function HeroCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = getDeadline();
    const tick = () => setT(diff(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 min-h-[420px]">
      {/* Сертификат гранта целиком */}
      <div
        className="relative flex-1 rounded-lg overflow-hidden min-h-[300px]"
        style={{ background: "var(--surface-dark)" }}
      >
        <Image
          src="/screenshots/hero-grant.png"
          alt="Сертификат на грант 100 000 ₽ от Университета Зерокодер"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Белая ячейка с таймером */}
      <div className="rounded-lg bg-white px-4 py-4 hairline">
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-purple-heart)] text-center mb-2">
          До закрытия гранта
        </p>
        <div className="flex items-start justify-center gap-2 md:gap-3">
          <Cell value={t.d} label="дн" />
          <span className="text-xl md:text-2xl font-bold text-[var(--n-seashell)] leading-none" aria-hidden>:</span>
          <Cell value={t.h} label="час" />
          <span className="text-xl md:text-2xl font-bold text-[var(--n-seashell)] leading-none" aria-hidden>:</span>
          <Cell value={t.m} label="мин" />
          <span className="text-xl md:text-2xl font-bold text-[var(--n-seashell)] leading-none" aria-hidden>:</span>
          <Cell value={t.s} label="сек" />
        </div>
      </div>
    </div>
  );
}
