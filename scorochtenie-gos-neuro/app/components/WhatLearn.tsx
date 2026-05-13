export default function WhatLearn() {
  return (
    <section className="section">
      <h2 className="section-title">Что даст урок вашему ребёнку</h2>
      <div className="cards">
        <div className="card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3>Скорость и&nbsp;понимание</h3>
          <p>Ребёнок освоит технику, которая ускоряет чтение и&nbsp;одновременно улучшает понимание прочитанного</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.002 5.002 0 017.072 0" />
            </svg>
          </div>
          <h3>Память и&nbsp;внимание</h3>
          <p>Получит упражнения уникальной методологии: задействуют оба полушария мозга, тренируют концентрацию и&nbsp;память</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3>Уверенность в&nbsp;учёбе</h3>
          <p>Почувствует, что справляется с&nbsp;большими текстами легко&nbsp;— это придаёт уверенности на&nbsp;уроках, ВПР и&nbsp;экзаменах</p>
        </div>
      </div>
    </section>
  )
}
