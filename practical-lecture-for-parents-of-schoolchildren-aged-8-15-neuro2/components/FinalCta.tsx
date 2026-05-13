'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

const ages = Array.from({ length: 8 }, (_, i) => 8 + i);

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // GetCourse webhook будет подключён через /api/register
    setSubmitted(true);
  }

  return (
    <section id="register" className="relative overflow-hidden bg-night py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(177,94,255,0.35), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[480px] w-[480px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,228,141,0.45), transparent 70%)',
        }}
      />

      <div className="container-edge relative">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          {/* Copy column */}
          <div className="reveal md:col-span-7">
            <span className="h-eyebrow !text-brand-300">
              {'{DATETIME}'} · 13:00 МСК
            </span>
            <h2 className="mt-4 text-display-md font-extrabold leading-tight text-white">
              Зарегистрируйтесь на бесплатную лекцию-практикум
            </h2>
            <p className="mt-5 max-w-[58ch] text-body-lg text-white/80">
              и узнайте, как нейросети помогают улучшить оценки ребёнка
              и закрыть пробелы в знаниях без списывания готовых ответов
              в интернете.
            </p>
          </div>

          {/* Form column */}
          <div className="reveal md:col-span-5">
            <div className="rounded-xl bg-white p-6 text-ink-900 shadow-cardHover md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle weight="fill" size={48} className="text-cta-500" />
                  <h3 className="text-heading font-bold">Готово!</h3>
                  <p className="text-body text-ink-700">
                    Мы записали вас на лекцию-практикум. Подробности придут в&nbsp;SMS.
                  </p>
                </div>
              ) : (
                <form className="grid gap-4" onSubmit={onSubmit} noValidate>
                  <div className="grid gap-2">
                    <label htmlFor="parent" className="text-body-sm font-semibold text-ink-700">
                      Ваше имя
                    </label>
                    <input
                      id="parent"
                      name="parent"
                      required
                      autoComplete="name"
                      placeholder="Анна"
                      className="rounded-md border border-ink-200 bg-white px-4 py-3 text-body text-ink-900 outline-none transition-opacity placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="age" className="text-body-sm font-semibold text-ink-700">
                      Возраст ребёнка
                    </label>
                    <select
                      id="age"
                      name="age"
                      required
                      defaultValue=""
                      className="rounded-md border border-ink-200 bg-white px-4 py-3 text-body text-ink-900 outline-none transition-opacity focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    >
                      <option value="" disabled>
                        Выберите возраст
                      </option>
                      {ages.map((a) => (
                        <option key={a} value={a}>
                          {a} лет
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-body-sm font-semibold text-ink-700">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="rounded-md border border-ink-200 bg-white px-4 py-3 text-body text-ink-900 outline-none transition-opacity placeholder:text-ink-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-2 w-full">
                    Зарегистрироваться бесплатно
                    <ArrowRight weight="bold" size={18} />
                  </button>

                  <label className="mt-1 flex items-start gap-3 text-body-sm text-ink-700">
                    <input
                      type="checkbox"
                      required
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-ink-200 text-brand-500 focus:ring-brand-500"
                    />
                    <span>
                      Согласен с{' '}
                      <a href="#" className="font-semibold text-brand-700 underline-offset-2 hover:underline">
                        политикой обработки персональных данных
                      </a>
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
