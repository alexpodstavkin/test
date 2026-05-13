'use client';

import { ArrowRight } from '@phosphor-icons/react';

const rows: Array<{ before: string; after: string }> = [
  {
    before: 'Платили репетиторам до 150 000 ₽ в год',
    after:
      'ИИ-помощник за 0 ₽. Не даёт готовые ответы, а объясняет тему столько раз, сколько нужно',
  },
  {
    before: 'Ребёнок проводил время в телефоне без пользы',
    after: 'Использует ИИ как инструмент — учится, создаёт, решает задачи',
  },
  {
    before: 'Опасались, что ИИ научит списывать',
    after:
      'Видите разницу между копированием и осмысленным использованием',
  },
  {
    before: 'Не знали, как объяснить ребёнку непонятную тему',
    after: 'Включаете ИИ-репетитора прямо по нужной теме в учебнике',
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 max-w-[52ch] md:mb-14">
          <h2 className="h-section">
            Что поменяется, когда ребёнок научится правильно работать с&nbsp;нейросетями
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6">
          {rows.map((r, i) => (
            <article
              key={i}
              className="reveal grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6"
            >
              <div className="rounded-xl border border-ink-200 bg-white/60 p-6 md:p-8">
                <span className="h-eyebrow !text-ink-500">Было</span>
                <p className="mt-3 text-body-lg text-ink-700">
                  {r.before}
                </p>
              </div>

              <div
                className="flex items-center justify-center self-center rounded-full text-white shadow-card md:h-12 md:w-12"
                style={{
                  background:
                    'linear-gradient(135deg, #B15EFF 0%, #00E48D 100%)',
                }}
                aria-hidden
              >
                <ArrowRight
                  weight="bold"
                  size={20}
                  className="hidden md:block"
                />
                <span className="block px-3 py-1 text-body-sm font-bold md:hidden">
                  СТАЛО
                </span>
              </div>

              <div className="card !shadow-cardHover">
                <span className="h-eyebrow !text-cta-700">Стало</span>
                <p className="mt-3 text-body-lg font-medium text-ink-900">
                  {r.after}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
