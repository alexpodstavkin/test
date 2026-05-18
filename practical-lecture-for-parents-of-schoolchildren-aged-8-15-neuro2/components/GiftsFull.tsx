'use client';

import { ChatCircleDots, BookOpenText, ListChecks } from '@phosphor-icons/react';
import { nbsp } from '@/lib/nbsp';

const gifts = [
  {
    icon: ChatCircleDots,
    title: nbsp('Безлимитный доступ к чату ГПТ для вас и вашего ребенка'),
  },
  {
    icon: BookOpenText,
    title: nbsp('Гайд «10 нейросетей для учёбы»'),
  },
  {
    icon: ListChecks,
    title: nbsp('Подробные пошаговые инструкции к практикам вебинара'),
  },
];

export function GiftsFull() {
  return (
    <section className="relative overflow-hidden bg-night py-16 text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(177,94,255,0.45), transparent 70%)',
        }}
      />
      <div className="container-edge relative">
        <div className="mb-10 max-w-[44ch] md:mb-14">
          <h2 className="text-display-md font-bold leading-tight text-white">
            {nbsp('Каждый участник заберёт три подарка')}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {gifts.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="reveal rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-8"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              }}
            >
              <span
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md text-ink-900"
                style={{
                  background:
                    'linear-gradient(135deg, #00E48D 0%, #1AE89A 100%)',
                }}
              >
                <Icon weight="duotone" size={24} />
              </span>
              <h3 className="text-heading font-bold leading-snug text-white">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
