const blocks = [
  {
    title: 'Как нейросети меняют учёбу прямо сейчас',
    body: 'Что уже работает, что — скорее маркетинг. Без хайпа: показываем рабочие сценарии для школы.',
  },
  {
    title: 'Соберём ИИ-помощника на учебнике вашего ребёнка',
    body: 'Практика в прямом эфире — получится репетитор, который объясняет тему именно так, как нужно вашему ребёнку.',
  },
  {
    title: 'Списывание vs осмысленное использование ИИ',
    body: 'Три приёма для родителя, которые сразу видно по поведению ребёнка. Что разрешать, а что — нет.',
  },
  {
    title: 'Развиваем навыки будущего через работу с нейросетями',
    body: 'Критическое мышление, структурирование, креативность — не в теории, а через конкретные задания.',
  },
  {
    title: 'Безопасность ребёнка в сети',
    body: 'Что должно быть настроено уже сегодня — и какие разговоры с ребёнком нельзя откладывать.',
  },
];

export function Program() {
  return (
    <section id="program" className="section-pad bg-surface-mute">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[40ch]">
            Во время эфира разберём{' '}
            <span className="text-brand-600">5 практических блоков</span> — от того,
            что происходит в школьной учёбе, до готового ИИ-помощника для ребёнка.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {blocks.map((b, i) => (
            <li
              key={b.title}
              className="card flex flex-col gap-5 md:p-7 lg:p-6 xl:p-7"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-lg text-base font-extrabold text-white md:h-14 md:w-14 md:text-lg"
                style={{
                  background: 'linear-gradient(135deg, #B15EFF 0%, #9B51E0 100%)',
                }}
                aria-label={`Блок ${i + 1}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-lg font-bold leading-snug text-ink-900 md:text-xl">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-700">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
