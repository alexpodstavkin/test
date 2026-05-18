'use client';

import { ArrowRight, CalendarBlank, Sparkle, Users } from '@phosphor-icons/react';
import { nbsp } from '@/lib/nbsp';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-14 lg:pb-32"
      style={{
        background:
          'linear-gradient(180deg, #EAD2FF 0%, #B15EFF 60%, #9B51E0 100%)',
      }}
    >
      {/* Soft light overlay glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,255,255,0.55), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,228,141,0.55), transparent 70%)',
        }}
      />

      <div className="container-edge relative">
        {/* Hero bento */}
        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {/* Main copy card */}
          <div className="card reveal md:col-span-8 md:p-10 lg:p-14">
            <p className="mb-4 flex items-center gap-2 text-body-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              <CalendarBlank weight="fill" size={16} />
              {'{DATETIME}'} · 13:00 МСК
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="badge-brand">
                <Sparkle weight="fill" size={14} />
                Бесплатная лекция-практикум
              </span>
              <span className="badge-brand">
                <Users weight="fill" size={14} />
                {nbsp('Для родителей школьников 8–15 лет')}
              </span>
            </div>

            <h1 className="h-display mb-6 md:mb-8">
              Расскажем, как повысить{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #B15EFF 0%, #9B51E0 60%, #00E48D 110%)',
                }}
              >
                {nbsp('успеваемость ребёнка в новом учебном году')}
              </span>{' '}
              {nbsp('с помощью современных технологий')}
            </h1>

            <p className="mb-8 max-w-[58ch] text-body-lg text-ink-700 md:mb-10">
              {nbsp(
                'Во время эфира узнаете, как нейросети помогают улучшить оценки ребёнка и закрыть пробелы в знаниях без списывания готовых ответов в интернете.',
              )}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#register" className="btn-primary">
                Зарегистрироваться бесплатно
                <ArrowRight weight="bold" size={18} />
              </a>
            </div>
          </div>

          {/* Side photo placeholder */}
          <div className="reveal md:col-span-4">
            <div
              className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-white/40 shadow-card md:min-h-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(234,210,255,0.7) 100%)',
              }}
              aria-label="Место для фото"
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-[clamp(96px,16vw,200px)] font-extrabold leading-none text-brand-500/30"
                aria-hidden
              >
                ФОТО
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
