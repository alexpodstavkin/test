'use client';

import { ArrowRight, CalendarBlank, Sparkle, Users } from '@phosphor-icons/react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-16 pt-6 md:pb-24 md:pt-8 lg:pb-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(177,94,255,0.32), rgba(177,94,255,0.05) 60%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,228,141,0.35), transparent 70%)',
        }}
      />

      <div className="container-edge relative">
        {/* Top strip — logo + date + CTA (НЕ sticky) */}
        <div className="flex items-center justify-between gap-3 pb-10 md:pb-16">
          <a
            href="#"
            className="flex items-center gap-2 text-ink-900 transition-opacity hover:opacity-70"
            aria-label="Зерокодер"
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white"
              style={{
                background: 'linear-gradient(135deg, #B15EFF 0%, #9B51E0 100%)',
              }}
            >
              <Sparkle weight="fill" size={20} />
            </span>
            <span className="text-heading-sm font-extrabold tracking-tight">
              Зерокодер
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span className="hidden text-body-sm font-medium text-ink-700 sm:inline-flex">
              {'{DATETIME}'} · 13:00 МСК
            </span>
            <a href="#register" className="btn-primary !py-2.5 !px-4 !text-body-sm">
              Зарегистрироваться
            </a>
          </div>
        </div>

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
                Для родителей школьников 8–15 лет
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
                успеваемость ребёнка в&nbsp;школе
              </span>{' '}
              с помощью современных технологий
            </h1>

            <p className="mb-8 max-w-[58ch] text-body-lg text-ink-700 md:mb-10">
              Во время эфира узнаете, как нейросети помогают улучшить оценки ребёнка
              и закрыть пробелы в знаниях без списывания готовых ответов в интернете.
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
              className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-ink-100 shadow-card md:min-h-0"
              style={{
                background:
                  'linear-gradient(180deg, #EAD2FF 0%, #B15EFF 60%, #9B51E0 100%)',
              }}
              aria-label="Место для фото"
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-[clamp(96px,16vw,200px)] font-extrabold leading-none text-white/25"
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
