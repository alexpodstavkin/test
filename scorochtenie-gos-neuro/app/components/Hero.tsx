export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden />
      <div className="hero-content">
        <h1>
          Национальный проект РФ<br />
          по&nbsp;<span>увеличению скорости чтения</span>{' '}
          <br className="hero-br-desktop" />
          <span>у&nbsp;детей</span>{' '}
          <br className="hero-br-mobile" />
          <span className="nowrap">5&ndash;15&nbsp;лет</span>
        </h1>
        <a href="#signup" className="btn">Записать ребёнка</a>
      </div>
    </section>
  )
}
