export function LessonForm() {
  return (
    <section id="zapis">
      <div className="wrap">
        <div className="panel form-panel">
          <div>
            <div className="eyebrow">Запись на бесплатный урок</div>
            <h2>Не упускайте возможность &mdash; раскройте потенциал ребёнка</h2>
            <p className="desc">Выберите направление (его можно будет поменять перед уроком), оставьте контакты, и мы согласуем удобное время бесплатного урока.</p>
          </div>
          <div className="form-fields">
            <div className="field">Имя родителя</div>
            <div className="field">Телефон или Telegram</div>
            <div className="field">
              Выберите направление <span className="car">&#9662;</span>
            </div>
            <label className="form-check">
              <input type="checkbox" defaultChecked /> Подтверждаю своё согласие на обработку персональных данных
            </label>
            <button className="btn btn-green">Записаться на бесплатный урок</button>
          </div>
        </div>
      </div>
    </section>
  )
}
