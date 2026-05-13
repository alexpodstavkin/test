'use client';

const items = [
  {
    duration: '≈20 мин',
    title:
      'Как нейросети меняют учёбу прямо сейчас — и почему дети, которые умеют ими пользоваться, опережают сверстников',
  },
  {
    duration: '≈30 мин',
    title:
      'Соберём ИИ-помощника на учебнике вашего ребёнка — как закрыть пробелы в знаниях и повысить оценки без репетитора',
  },
  {
    duration: '≈20 мин',
    title:
      'Списывание готовых ответов и осмысленное использование ИИ: три приёма для родителя, которые сразу видно по поведению ребёнка',
  },
  {
    duration: '≈30 мин',
    title:
      'Развиваем навыки будущего: критическое мышление, структурирование, креативность — через работу с нейросетями',
  },
  {
    duration: '≈20 мин',
    title: 'Безопасность ребёнка в сети — что должно быть настроено уже сегодня',
  },
];

export function Program() {
  return (
    <section id="program" className="bg-canvas py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[40ch]">Во время эфира разберём</h2>
        </div>

        <ol className="grid gap-4 md:gap-5">
          {items.map((item, i) => (
            <li
              key={i}
              className="card reveal grid grid-cols-[auto_1fr] items-start gap-5 md:grid-cols-[auto_auto_1fr] md:gap-8"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-md text-body font-extrabold text-white md:h-12 md:w-12 md:text-heading-sm"
                style={{
                  background:
                    'linear-gradient(135deg, #B15EFF 0%, #9B51E0 100%)',
                }}
                aria-label={`Шаг ${i + 1}`}
              >
                {i + 1}
              </span>
              <span className="self-center rounded-full bg-cta-500/15 px-3 py-1 text-body-sm font-bold text-cta-700 md:self-start">
                {item.duration}
              </span>
              <p className="col-span-2 text-body-lg font-medium text-ink-900 md:col-span-1">
                {item.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
