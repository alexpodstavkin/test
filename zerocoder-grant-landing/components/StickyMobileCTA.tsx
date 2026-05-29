"use client";

import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#cta-1"
      className={`md:hidden fixed left-3 right-3 bottom-3 z-40 h-14 flex items-center justify-center rounded-lg bg-[var(--surface-cta)] text-white font-semibold text-[15px] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      Получить грант на обучение
    </a>
  );
}
