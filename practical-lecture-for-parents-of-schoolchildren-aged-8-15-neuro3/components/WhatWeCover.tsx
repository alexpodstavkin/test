import { BookBookmark, Cpu, Brain } from '@phosphor-icons/react/dist/ssr';

const groups = [
  {
    Icon: BookBookmark,
    pill: 'Учёба и оценки',
    title: 'Школьная программа без репетиторов',
    body: 'Покажем, как ребёнок закрывает пробелы по предметам, готовится к контрольным и оформляет домашку с помощью нейросетей — без слепого списывания.',
  },
  {
    Icon: Cpu,
    pill: 'Цифровая грамотность',
    title: 'Осмысленная работа с нейросетями',
    body: 'Что важно уметь: формулировать запросы, проверять факты, узнавать «галлюцинации» ИИ и безопасно вести себя в интернете и сетях.',
  },
  {
    Icon: Brain,
    pill: 'Навыки будущего',
    title: 'То, чему школа учит редко',
    body: 'Критическое мышление, креативность, самостоятельность и структурное мышление — через реальную работу с инструментами, а не теорию.',
  },
];

export function WhatWeCover() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[32ch]">
            На лекции-практикуме разберём{' '}
            <span className="text-brand-600">14 навыков</span>, которые сделают
            ребёнка увереннее в учёбе и жизни
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {groups.map(({ Icon, pill, title, body }) => (
            <article key={title} className="card flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="icon-tile">
                  <Icon weight="duotone" size={24} />
                </span>
                <span className="chip-cta">{pill}</span>
              </div>
              <h3 className="h-card">{title}</h3>
              <p className="text-base leading-relaxed text-ink-700">{body}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
