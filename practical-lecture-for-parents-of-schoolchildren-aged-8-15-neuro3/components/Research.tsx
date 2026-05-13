import { TrendUp, Quotes } from '@phosphor-icons/react/dist/ssr';

const stats = [
  {
    value: '150 000 ₽',
    label: 'в год',
    body: 'тратят семьи в крупных городах на репетиторов по школьной программе, которые не знают, как работают нейросети для учёбы',
  },
  {
    value: '78%',
    label: 'школьников',
    body: 'хотя бы раз пользовались нейросетями для домашних заданий за последний год',
  },
  {
    value: '×3',
    label: 'спрос',
    body: 'на специалистов, умеющих работать с ИИ, в РФ за 2024–2025',
  },
];

export function Research() {
  return (
    <section className="section-pad bg-surface-mute">
      <div className="container-edge">
        <div className="mb-10 md:mb-14">
          <h2 className="h-section max-w-[40ch]">
            Свежие данные по российскому рынку образования,{' '}
            <span className="text-brand-600">
              которые меняют отношение к использованию нейросетей
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Stats grid 7 cols */}
          <div className="grid grid-cols-1 gap-4 md:col-span-7 sm:grid-cols-3 md:gap-5">
            {stats.map((s) => (
              <article key={s.value} className="card flex flex-col gap-3">
                <span className="icon-tile-cta">
                  <TrendUp weight="bold" size={22} />
                </span>
                <p className="text-4xl font-extrabold leading-none text-ink-900 md:text-5xl">
                  {s.value}
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
                  {s.label}
                </p>
                <p className="text-sm leading-relaxed text-ink-700">{s.body}</p>
              </article>
            ))}
          </div>

          {/* Expert quote 5 cols */}
          <aside className="card-brand md:col-span-5 flex flex-col justify-between gap-6">
            <Quotes weight="fill" size={36} className="text-white/30" />
            <p className="text-xl font-medium leading-snug text-white md:text-2xl">
              «Через 3–5 лет умение работать с нейросетями будет таким же базовым,
              как сегодня умение пользоваться поисковиком. Дети, у которых этот
              навык появится раньше, получат серьёзный старт».
            </p>
            <div>
              <p className="text-base font-bold text-white">Кирилл Пшинник</p>
              <p className="text-sm text-white/85">
                CEO Зерокодера · сооснователь онлайн-университета по нейросетям
              </p>
              <p className="text-sm text-white/75">
                Эксперт по ИИ-образованию · спикер РБК, Forbes и ТАСС
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
