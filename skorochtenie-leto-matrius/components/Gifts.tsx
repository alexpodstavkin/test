export default function Gifts() {
  return (
    <section id="gifts" className="section" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="container">
        <div className="section-head">
          <h2>
            Дарим <em>3 подарка</em> всем, кто запишется на&nbsp;бесплатный урок,
            чтобы&nbsp;лето работало на&nbsp;ребёнка, а&nbsp;не&nbsp;против него
          </h2>
        </div>

        <div className="gifts-grid">
          <article className="gift-card gift-1">
            <span className="gift-num">Подарок 01</span>
            <div className="gift-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            </div>
            <h3>
              Чек-лист «7 упражнений на&nbsp;10&nbsp;минут, которые&nbsp;удвоят
              скорость чтения за&nbsp;месяц»
            </h3>
          </article>

          <article className="gift-card gift-2">
            <span className="gift-num">Подарок 02</span>
            <div className="gift-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>
              Чек-лист «5 упражнений на&nbsp;10&nbsp;минут, которые&nbsp;учат
              ребёнка концентрироваться»
            </h3>
          </article>

          <article className="gift-card gift-3">
            <span className="gift-num">Подарок 03</span>
            <div className="gift-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                <path d="M22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z" />
              </svg>
            </div>
            <h3>Читательский дневник Matrius</h3>
          </article>
        </div>

        <div className="section-cta">
          <a href="#booking" className="btn btn-accent btn-large">
            Получить все 3&nbsp;подарка
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
