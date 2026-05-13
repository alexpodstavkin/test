export default function Gifts() {
  return (
    <section className="section gifts">
      <h2 className="section-title" style={{ marginBottom: 56, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' }}>
        Для&nbsp;закрепления полученных навыков после урока онлайн-школа Matrius отправит три подарка каждому участнику
      </h2>
      <div className="cards">
        <div className="gift-card">
          <div className="gift-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" />
            </svg>
          </div>
          <h3>Авторский гайд: 7&nbsp;упражнений, которые удвоят скорость чтения</h3>
          <p>10&nbsp;минут в&nbsp;день&nbsp;— заметный результат через 1&nbsp;месяц. Для&nbsp;детей 6&ndash;15&nbsp;лет</p>
          <div className="gift-price">
            <span className="gift-price-old">1&nbsp;490&nbsp;₽</span>
            <span className="gift-price-new">сейчас бесплатно</span>
          </div>
        </div>

        <div className="gift-card">
          <div className="gift-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3>Авторский гайд: 5&nbsp;упражнений на&nbsp;концентрацию</h3>
          <p>После регулярной практики ребёнок удерживает внимание на&nbsp;задаче 30+&nbsp;минут. Для&nbsp;детей 6&ndash;15&nbsp;лет</p>
          <div className="gift-price">
            <span className="gift-price-old">1&nbsp;290&nbsp;₽</span>
            <span className="gift-price-new">сейчас бесплатно</span>
          </div>
        </div>

        <div className="gift-card">
          <div className="gift-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z M9 9h6M9 13h6M9 17h4" />
            </svg>
          </div>
          <h3>Читательский дневник</h3>
          <p>Трекер для&nbsp;записей о&nbsp;прочитанном&nbsp;— фиксирует прогресс и&nbsp;эмоции от&nbsp;книг</p>
          <div className="gift-price">
            <span className="gift-price-old">990&nbsp;₽</span>
            <span className="gift-price-new">сейчас бесплатно</span>
          </div>
        </div>
      </div>
    </section>
  )
}
