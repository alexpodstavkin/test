'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react/dist/ssr';

export function FinalCta() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="section-pad bg-surface-mute">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Dark CTA card */}
          <div className="card-dark md:col-span-7 md:p-12">
            <span className="h-eyebrow !text-brand-300">
              {'{DATETIME}'} · 13:00 МСК · бесплатно
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              14 навыков,{' '}
              <span style={{ color: 'var(--cta-500)' }}>
                которые нужны вашему ребёнку 8–15 лет
              </span>{' '}
              уже сегодня — для успешной учёбы и жизни
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg leading-snug text-white/85 md:text-xl">
              За 120 минут разберём, какие 14 навыков должны быть у ребёнка прямо
              сейчас, и как нейросети помогают их прокачать — без лишней нагрузки
              и репетиторов.
            </p>
          </div>

          {/* Form card */}
          <div className="card md:col-span-5 md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center gap-4">
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-ink-900"
                  style={{ background: 'var(--cta-500)' }}
                >
                  <CheckCircle weight="fill" size={28} />
                </span>
                <h3 className="text-2xl font-extrabold text-ink-900">
                  Вы зарегистрированы
                </h3>
                <p className="text-base text-ink-700">
                  Через минуту пришлём подтверждение и ссылку на эфир в смс и на
                  почту. Подарки уйдут на e-mail сразу после лекции.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-ink-900 md:text-2xl">
                  Запишитесь на эфир
                </h3>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold text-ink-900">
                    Ваше имя
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к вам обращаться"
                    className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold text-ink-900">
                    Телефон
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold text-ink-900">
                    E-mail
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.ru"
                    className="w-full rounded-lg border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none"
                  />
                </label>

                <button type="submit" className="btn-primary mt-2 !w-full">
                  Зарегистрироваться бесплатно
                  <ArrowRight weight="bold" size={18} />
                </button>

                <p className="text-xs text-ink-500">
                  Отправляя форму, вы соглашаетесь с политикой обработки
                  персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
