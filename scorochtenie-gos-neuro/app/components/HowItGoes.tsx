export default function HowItGoes() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <h2 className="section-title" style={{ marginBottom: 56 }}>Как проходит бесплатный урок</h2>
      <div className="steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Знакомство и&nbsp;диагностика</h3>
            <p>Педагог познакомится с&nbsp;ребёнком, замерит текущую скорость чтения и&nbsp;определит, какие зоны навыка нужно прокачивать в&nbsp;первую очередь</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Авторские упражнения</h3>
            <p>За&nbsp;30&nbsp;минут ребёнок выполнит авторские упражнения через игровой формат. Никаких&nbsp;«двоек за&nbsp;ошибки».</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Личный план развития навыка</h3>
            <p>По&nbsp;итогам урока педагог даст индивидуальные рекомендации и&nbsp;подберёт траекторию занятий, которая закрепит и&nbsp;усилит навык чтения</p>
          </div>
        </div>
      </div>
    </section>
  )
}
