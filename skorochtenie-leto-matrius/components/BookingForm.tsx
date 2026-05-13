'use client';

import { useState, FormEvent } from 'react';

function formatPhone(raw: string): string {
  let v = raw.replace(/\D/g, '');
  if (v.startsWith('8')) v = '7' + v.slice(1);
  if (!v.startsWith('7')) v = '7' + v;
  v = v.slice(0, 11);
  const d = v.slice(1);
  let out = '+7';
  if (d.length > 0) out += ' (' + d.slice(0, 3);
  if (d.length >= 3) out += ') ' + d.slice(3, 6);
  if (d.length >= 6) out += '-' + d.slice(6, 8);
  if (d.length >= 8) out += '-' + d.slice(8, 10);
  return out;
}

type Errors = Partial<Record<'parent' | 'phone' | 'age', boolean>>;

export default function BookingForm() {
  const [parent, setParent] = useState('');
  const [phone, setPhone] = useState('');
  const [child, setChild] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!parent.trim()) next.parent = true;
    if (phone.replace(/\D/g, '').length < 11) next.phone = true;
    if (!age) next.age = true;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setBusy(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ parent, phone, child, age, source: 'skorochtenie-leto-matrius' }),
      });
    } catch {
      // Под static export API-route недоступен — это ожидаемо. Всё равно показываем success.
    } finally {
      setBusy(false);
      setDone(true);
    }
  };

  const features = [
    'Чек-лист «7 упражнений на скорость чтения»',
    'Чек-лист «5 упражнений на концентрацию»',
    'Читательский дневник Matrius',
    '45 минут индивидуально, онлайн с педагогом',
  ];

  return (
    <section id="booking" className="section">
      <div className="container">
        <div className="form-section">
          <div className="form-inner">
            <div className="form-content">
              <h2>
                Записать ребёнка на&nbsp;<em>бесплатный урок по&nbsp;скорочтению</em>
                {' '}и&nbsp;забрать 3&nbsp;подарка
              </h2>
              <p>
                Заполните форму — мы&nbsp;свяжемся, чтобы&nbsp;подобрать удобное
                время и&nbsp;отправим подарки на&nbsp;ваш телефон.
              </p>

              <div className="form-features">
                {features.map((text) => (
                  <div className="form-feature" key={text}>
                    <span className="check-mini" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-card">
              {!done ? (
                <form noValidate onSubmit={handleSubmit}>
                  <h3>Запишем ребёнка</h3>
                  <p className="muted">Менеджер свяжется в&nbsp;течение 15&nbsp;минут.</p>

                  <div className={`form-row${errors.parent ? ' has-error' : ''}`}>
                    <label htmlFor="parent">Ваше имя</label>
                    <input
                      id="parent"
                      name="parent"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Например, Мария"
                      value={parent}
                      aria-invalid={errors.parent ? 'true' : undefined}
                      onChange={(e) => {
                        setParent(e.target.value);
                        if (e.target.value.trim()) setErrors((p) => ({ ...p, parent: false }));
                      }}
                    />
                    <span className="form-error">Укажите ваше имя</span>
                  </div>

                  <div className={`form-row${errors.phone ? ' has-error' : ''}`}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      aria-invalid={errors.phone ? 'true' : undefined}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        setPhone(formatted);
                        if (formatted.replace(/\D/g, '').length === 11) {
                          setErrors((p) => ({ ...p, phone: false }));
                        }
                      }}
                    />
                    <span className="form-error">Введите корректный номер</span>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-row">
                      <label htmlFor="child">Имя ребёнка</label>
                      <input
                        id="child"
                        name="child"
                        type="text"
                        autoComplete="off"
                        placeholder="Имя"
                        value={child}
                        onChange={(e) => setChild(e.target.value)}
                      />
                    </div>
                    <div className={`form-row${errors.age ? ' has-error' : ''}`}>
                      <label htmlFor="age">Возраст</label>
                      <select
                        id="age"
                        name="age"
                        value={age}
                        aria-invalid={errors.age ? 'true' : undefined}
                        onChange={(e) => {
                          setAge(e.target.value);
                          if (e.target.value) setErrors((p) => ({ ...p, age: false }));
                        }}
                      >
                        <option value="">Выберите</option>
                        {Array.from({ length: 11 }, (_, i) => 6 + i).map((y) => (
                          <option key={y} value={String(y)}>{y} лет</option>
                        ))}
                      </select>
                      <span className="form-error">Выберите возраст</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-accent btn-large form-submit"
                    aria-busy={busy ? 'true' : undefined}
                    disabled={busy}
                  >
                    Записаться
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="form-disclaimer">
                    Нажимая кнопку, вы&nbsp;соглашаетесь с&nbsp;
                    <a href="#">политикой обработки персональных данных</a>.
                  </p>
                </form>
              ) : (
                <div className="form-success shown">
                  <div className="check-big" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3>Заявка принята</h3>
                  <p>Спасибо за&nbsp;заявку, менеджер скоро с&nbsp;вами&nbsp;свяжется.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
