'use client';

import { Star } from '@phosphor-icons/react';
import { nbsp } from '@/lib/nbsp';

type Item = {
  duration: string;
  title: string;
  highlight?: boolean;
};

const items: Item[] = [
  {
    duration: '≈20 мин',
    title: nbsp(
      'Как нейросети меняют учёбу прямо сейчас — и почему дети, которые умеют ими пользоваться, опережают сверстников',
    ),
  },
  {
    duration: '≈30 мин',
    title: nbsp(
      'Соберём ИИ-помощника на учебнике вашего ребёнка — как закрыть пробелы в знаниях и повысить оценки без репетитора',
    ),
    highlight: true,
  },
  {
    duration: '≈20 мин',
    title: nbsp(
      'Списывание готовых ответов и осмысленное использование ИИ: три приёма для родителя, которые сразу видно по поведению ребёнка',
    ),
  },
  {
    duration: '≈30 мин',
    title: nbsp(
      'Развиваем навыки будущего: критическое мышление, структурирование, креативность — через работу с нейросетями',
    ),
  },
  {
    duration: '≈20 мин',
    title: nbsp(
      'Безопасность ребёнка в сети — что должно быть настроено уже сегодня',
    ),
  },
];

export function Program() {
  return (
    <section id="program" className="bg-canvas py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[40ch]">{nbsp('Во время эфира разберём')}</h2>
        </div>

        <ol className="grid gap-4 md:gap-5">
          {items.map((item, i) => {
            const isHighlight = item.highlight;
            return (
              <li
                key={i}
                className={`reveal relative grid items-start gap-5 overflow-hidden rounded-xl border p-6 transition-opacity md:grid-cols-[auto_auto_1fr] md:gap-8 md:p-8 ${
                  isHighlight
                    ? 'border-transparent text-white shadow-cardHover'
                    : 'border-ink-100 bg-white shadow-card'
                }`}
                style={
                  isHighlight
                    ? {
                        background:
                          'linear-gradient(135deg, #B15EFF 0%, #9B51E0 55%, #6F38B6 100%)',
                      }
                    : undefined
                }
              >
                {/* Highlight ribbon */}
                {isHighlight && (
                  <span className="absolute right-4 top-4 hidden items-center gap-1.5 rounded-full bg-cta-500 px-3 py-1.5 text-caption font-extrabold uppercase tracking-[0.08em] text-ink-900 shadow-ctaGlow md:inline-flex">
                    <Star weight="fill" size={14} />
                    Самое ценное для родителя
                  </span>
                )}

                {/* Decorative glow on highlighted card */}
                {isHighlight && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-3xl"
                    style={{
                      background:
                        'radial-gradient(closest-side, rgba(0,228,141,0.55), transparent 70%)',
                    }}
                  />
                )}

                <span
                  className={`relative flex h-10 w-10 items-center justify-center rounded-md text-body font-extrabold md:h-12 md:w-12 md:text-heading-sm ${
                    isHighlight ? 'bg-white text-brand-700' : 'text-white'
                  }`}
                  style={
                    isHighlight
                      ? undefined
                      : {
                          background:
                            'linear-gradient(135deg, #B15EFF 0%, #9B51E0 100%)',
                        }
                  }
                  aria-label={`Шаг ${i + 1}`}
                >
                  {i + 1}
                </span>

                <span
                  className={`relative self-center rounded-full px-3 py-1 text-body-sm font-bold md:self-start ${
                    isHighlight
                      ? 'bg-cta-500/20 text-cta-400'
                      : 'bg-cta-500/15 text-cta-700'
                  }`}
                >
                  {item.duration}
                </span>

                <div className="col-span-2 md:col-span-1">
                  {/* Mobile ribbon */}
                  {isHighlight && (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-cta-500 px-3 py-1 text-caption font-extrabold uppercase tracking-[0.08em] text-ink-900 md:hidden">
                      <Star weight="fill" size={12} />
                      Самое ценное
                    </span>
                  )}
                  <p
                    className={`relative text-body-lg font-medium leading-snug md:pr-48 ${
                      isHighlight ? 'text-white' : 'text-ink-900'
                    }`}
                  >
                    {item.title}
                  </p>
                  {isHighlight && (
                    <p className="relative mt-3 text-body text-white/85 md:pr-48">
                      {nbsp(
                        'Это та самая часть, ради которой родители приходят — забираете готовый рабочий инструмент по учебнику вашего ребёнка.',
                      )}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
