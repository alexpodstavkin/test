'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

/**
 * Floating registration button.
 * Hidden while Hero is visible, shown after, hidden again when #register enters viewport.
 * Centred at the bottom on ≥md, full-width pill on mobile.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const main = document.getElementById('main');
    const hero = main?.querySelector<HTMLElement>('section');
    const cta = document.getElementById('register');
    if (!hero || !cta) return;

    let heroOut = false;
    let ctaIn = false;
    const update = () => setVisible(heroOut && !ctaIn);

    const heroObs = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: '0px 0px -100% 0px' }
    );

    const ctaObs = new IntersectionObserver(
      ([entry]) => {
        ctaIn = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );

    heroObs.observe(hero);
    ctaObs.observe(cta);

    return () => {
      heroObs.disconnect();
      ctaObs.disconnect();
    };
  }, []);

  return (
    <a
      href="#register"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-xl bg-cta-500 px-6 py-3.5 text-body font-bold text-ink-900 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-700 md:bottom-6 md:left-1/2 md:right-auto md:w-auto md:-translate-x-1/2 md:rounded-full md:px-6 md:py-3 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ boxShadow: '0 18px 40px -16px rgba(0, 228, 141, 0.55)' }}
    >
      Зарегистрироваться бесплатно
      <ArrowRight weight="bold" size={18} />
    </a>
  );
}
