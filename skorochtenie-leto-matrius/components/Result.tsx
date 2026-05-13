export default function Result() {
  return (
    <section className="section result-section">
      <div className="container">
        <div className="section-head">
          <h2>
            После обучения по&nbsp;программе <em>Matrius</em> у&nbsp;ребёнка
            к&nbsp;1&nbsp;сентября
          </h2>
          <p>Данные по&nbsp;выпускникам летних программ 2024–2025.</p>
        </div>

        <div className="result-grid">
          <div className="result-card accent">
            <div className="result-num">+0,7</div>
            <h3>балла к&nbsp;оценкам</h3>
            <p>Средняя оценка в&nbsp;четверти вырастает на&nbsp;0,7&nbsp;балла.</p>
          </div>
          <div className="result-card sun">
            <div className="result-num">×2</div>
            <h3>скорость чтения</h3>
            <p>В&nbsp;два раза быстрее — без&nbsp;потери понимания.</p>
          </div>
          <div className="result-card mint">
            <div className="result-num">94%</div>
            <h3>понимание текста</h3>
            <p>Ребёнок улавливает смысл с&nbsp;первого прочтения.</p>
          </div>
        </div>

        <div className="section-cta">
          <a href="#booking" className="btn btn-accent btn-large">
            Записаться на&nbsp;бесплатный урок
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
