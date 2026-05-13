import { ArrowRight, CalendarDots } from '@phosphor-icons/react/dist/ssr';

export function Hero() {
  return (
    <section className="container-edge pt-6 pb-12 md:pt-8 md:pb-16 lg:pb-20">
      {/* Top strip — НЕ sticky, обычный flex */}
      <div className="flex items-center justify-between gap-3 pb-8 md:pb-12">
        <a
          href="#"
          aria-label="Зерокодер"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="logo-mark text-base font-extrabold">З</span>
          <span className="text-lg font-extrabold tracking-tight text-ink-900">
            Зерокодер
          </span>
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-bold text-ink-700 sm:inline">
            {'{DATETIME}'} · 13:00 МСК
          </span>
          <a
            href="#register"
            className="btn-primary !py-2.5 !px-4 !text-sm"
          >
            Зарегистрироваться
          </a>
        </div>
      </div>

      {/* Hero bento */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {/* Main copy card */}
        <div className="card md:col-span-8 md:p-10 lg:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-2.5">
            <span className="chip">Бесплатная онлайн-лекция-практикум</span>
            <span className="chip-cta">
              <CalendarDots weight="fill" size={14} />
              {'{DATETIME}'} · 13:00 МСК
            </span>
          </div>

          <h1 className="h-display mb-6">
            14 навыков,{' '}
            <span className="text-brand-600">которые нужны вашему ребёнку 8–15 лет</span>{' '}
            уже сегодня — для успешной учёбы и жизни
          </h1>

          <p className="mb-8 max-w-[58ch] text-xl font-medium leading-snug text-ink-700 md:text-2xl">
            За 120 минут разберём, какие 14 навыков должны быть у ребёнка прямо сейчас,
            и как нейросети помогают их прокачать — без лишней нагрузки и репетиторов.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#register" className="btn-primary">
              Зарегистрироваться бесплатно
              <ArrowRight weight="bold" size={18} />
            </a>
          </div>
        </div>

        {/* Side photo placeholder */}
        <aside
          aria-hidden
          className="hidden md:col-span-4 md:block"
        >
          <div
            className="h-full min-h-[420px] w-full overflow-hidden rounded-3xl"
            style={{
              background:
                'linear-gradient(160deg, #EAD2FF 0%, #B15EFF 55%, #6B2DCD 100%)',
            }}
          />
        </aside>
      </div>
    </section>
  );
}
