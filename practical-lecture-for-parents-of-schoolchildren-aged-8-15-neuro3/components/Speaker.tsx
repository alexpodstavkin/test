import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const credentials = [
  'Более 6 лет преподавания детям — робототехника, программирование, Scratch, подготовка к соревнованиям с призовыми местами',
  'Создатель детского направления в Зерокодере — разработала первый курс НейроТин для детей, провела более 200 онлайн-уроков с детьми и родителями и вебинары для 1000+ слушателей',
  'Методист и сценарист детских образовательных программ — 2 года в Алгоритмике, создавала персонажей, комиксы, сюжеты и игровые задачи для детских курсов',
  'Создала уникальный курс по Промпт-инжинирингу, не имеющий аналогов на российском рынке',
  'Более 10 лет в сфере образования, из них свыше 7 лет — в создании образовательных продуктов для аудитории от 10 до 55+ лет',
];

export function Speaker() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="mb-10 max-w-[52ch] md:mb-14">
          <h2 className="h-section">
            Лекцию-практикум проведёт спикер, которая знает,{' '}
            <span className="text-brand-600">как помочь вашему ребёнку учиться лучше</span>
          </h2>
        </div>

        <article className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12 md:gap-5">
          {/* Left bento — photo only, stretches full height */}
          <div className="card overflow-hidden p-2 md:col-span-5 md:p-3">
            <div
              className="relative flex h-full min-h-[420px] w-full items-end justify-center overflow-hidden rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, #EAD2FF 0%, #B15EFF 60%, #9B51E0 100%)',
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center text-[160px] font-extrabold leading-none text-white/25 md:text-[200px]"
              >
                КЗ
              </span>
              <div className="relative z-10 m-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-ink-900">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full"
                  style={{ background: 'var(--cta-500)' }}
                />
                Преподаёт онлайн
              </div>
            </div>
          </div>

          {/* Right bento — card title + big name + credentials */}
          <div className="card flex flex-col md:col-span-7 md:p-10 lg:p-12">
            <h3 className="text-xl font-bold uppercase tracking-[0.12em] text-brand-600 md:text-2xl">
              Эксперт по нейросетям для детей и родителей
            </h3>
            <p className="mt-3 text-4xl font-extrabold leading-tight text-ink-900 md:mt-4 md:text-5xl lg:text-6xl">
              Ксения Зайцева
            </p>

            <ul className="mt-8 grid gap-5 md:mt-10">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-base leading-relaxed text-ink-700 md:gap-4 md:text-lg"
                >
                  <CheckCircle
                    weight="fill"
                    size={22}
                    className="mt-1 shrink-0 text-cta-500"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
