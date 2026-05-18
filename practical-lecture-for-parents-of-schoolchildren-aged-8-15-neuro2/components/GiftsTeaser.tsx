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

export function GiftsTeaser() {
  return (
    <section className="bg-canvas py-16 md:py-20">
      <div className="container-edge">
        <div className="mb-8 md:mb-10">
          <h2 className="h-section max-w-[22ch]">
            {nbsp('Каждый участник заберёт три подарка')}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {gifts.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="card reveal flex flex-col gap-5 hover:shadow-cardHover"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white"
                style={{
                  background: 'linear-gradient(135deg, #B15EFF 0%, #9B51E0 100%)',
                }}
              >
                <Icon weight="duotone" size={24} />
              </span>
              <h3 className="text-heading font-bold leading-snug text-ink-900">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
