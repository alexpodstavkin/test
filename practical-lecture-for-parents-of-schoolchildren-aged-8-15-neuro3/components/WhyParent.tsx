import { GraduationCap, Lightbulb, ShieldCheck } from '@phosphor-icons/react/dist/ssr';

const items = [
  {
    Icon: GraduationCap,
    title: 'Учёба становится понятнее',
    body: 'Ребёнок закрывает пробелы по предметам через объяснения нейросети «на пальцах» — без репетитора и зубрёжки.',
  },
  {
    Icon: Lightbulb,
    title: 'Растут навыки будущего',
    body: 'Критическое мышление, креативность и самостоятельность — то, что школа развивает редко, а работодатели ждут уже сейчас.',
  },
  {
    Icon: ShieldCheck,
    title: 'Появляется цифровая безопасность',
    body: 'Ребёнок учится отличать правду от фейка, видеть мошеннические схемы и осознанно вести себя в сетях.',
  },
];

export function WhyParent() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[28ch]">
            Три причины потратить 2 часа{' '}
            <span className="text-brand-600">сейчас</span>, а не через год
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map(({ Icon, title, body }) => (
            <article key={title} className="card flex flex-col gap-5">
              <span className="icon-tile">
                <Icon weight="duotone" size={24} />
              </span>
              <h3 className="h-card">{title}</h3>
              <p className="text-base leading-relaxed text-ink-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
