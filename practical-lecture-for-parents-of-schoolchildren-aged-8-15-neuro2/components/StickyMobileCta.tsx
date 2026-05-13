'use client';

import { ArrowRight } from '@phosphor-icons/react';

export function StickyMobileCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
      <a
        href="#register"
        className="btn-primary pointer-events-auto flex w-full justify-center"
      >
        Зарегистрироваться бесплатно
        <ArrowRight weight="bold" size={18} />
      </a>
    </div>
  );
}
