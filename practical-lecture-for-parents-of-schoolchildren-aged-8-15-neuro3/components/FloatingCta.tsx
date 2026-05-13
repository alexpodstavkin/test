'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

/**
 * Floating registration button — appears after Hero and hides
 * when the final CTA section enters the viewport. Centered, fixed at bottom.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('main > section'); // first section = hero
    const cta = document.querySelector('#register');

    const update = () => {
      if (!hero || !cta) return;
      const heroRect = hero.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();
      const vh = window.innerHeight;
      const pastHero = heroRect.bottom < 80; // hero scrolled off the top
      const ctaInView = ctaRect.top < vh * 0.7; // CTA is approaching viewport
      setVisible(pastHero && !ctaInView);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center transition-opacity duration-200 md:flex ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <a
        href="#register"
        className={`btn-primary !px-7 !py-4 !text-base shadow-[0_12px_40px_-12px_rgba(0,228,141,0.55)] ${
          visible ? 'pointer-events-auto' : ''
        }`}
      >
        Зарегистрироваться бесплатно
        <ArrowRight weight="bold" size={18} />
      </a>
    </div>
  );
}
