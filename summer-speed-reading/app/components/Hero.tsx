import { nb } from '../lib/typography'

export default function Hero() {
  return (
    <section className="section hero-bg" style={{ paddingTop: 'clamp(96px, 10vw, 180px)' }}>
      <div className="container relative z-10 grid gap-5 lg:gap-7 lg:grid-cols-[1.05fr_1fr] items-stretch">
        <div className="hero-cell flex flex-col gap-7">
          <div className="flex flex-wrap gap-3">
            <span className="bento-pill bento-pill--on-dark">
              <span className="bento-pill__icon" aria-hidden>👧</span>
              {nb('Подходит детям 5–15 лет')}
            </span>
            <span className="bento-pill bento-pill--on-dark">
              <span className="bento-pill__icon" aria-hidden>💻</span>
              {nb('Онлайн с педагогом')}
            </span>
          </div>
          <h1>
            {nb('Поможем ребёнку')}{' '}
            <span style={{ color: '#9fb6d9' }}>{nb('не потерять')}</span>{' '}
            {nb('школьные знания за лето и прийти 1 сентября')}{' '}
            <span style={{ color: '#ff8a5b' }}>
              {nb('более подготовленным к учёбе')}
            </span>
          </h1>
          <p
            className="leading-relaxed"
            style={{ fontSize: 'clamp(18px, 1.4vw + 8px, 24px)', maxWidth: 600 }}
          >
            {nb('С помощью уникальной методологии скорочтения онлайн-школы Matrius.')}
          </p>
          <div className="flex flex-col gap-4 mt-auto">
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#ff8a5b',
              }}
            >
              {nb('Регистрируйтесь сейчас и заберите 3 подарка')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="hero-gift-card">
                <span className="hero-gift-card__icon" aria-hidden>📖</span>
                <span className="hero-gift-card__title">
                  {nb('Авторский гайд: 7 упражнений, которые удвоят скорость чтения ребёнка')}
                </span>
              </div>
              <div className="hero-gift-card">
                <span className="hero-gift-card__icon" aria-hidden>🎯</span>
                <span className="hero-gift-card__title">
                  {nb('Авторский гайд: 5 упражнений на концентрацию')}
                </span>
              </div>
              <div className="hero-gift-card">
                <span className="hero-gift-card__icon" aria-hidden>📔</span>
                <span className="hero-gift-card__title">
                  {nb('Читательский дневник для записей эмоций и выводов о прочитанном')}
                </span>
              </div>
            </div>
            <a
              href="#form"
              className="btn btn--primary btn--lg"
              style={{ width: '100%' }}
            >
              Записаться
            </a>
          </div>
        </div>

        <div className="hero-photo-cell hero-cell" style={{ padding: 0, minHeight: 480 }}>
          <div
            className="photo-frame photo-frame--on-dark"
            style={{ borderRadius: 20, border: 0, boxShadow: 'none' }}
            aria-label="Место для фотографии"
          >
            <div className="flex flex-col items-center gap-3 text-center px-6 py-10">
              <span aria-hidden style={{ fontSize: 96 }}>📚</span>
              <span className="photo-frame__caption">Место для фотографии</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
