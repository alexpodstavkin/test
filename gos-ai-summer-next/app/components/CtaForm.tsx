'use client';

import { useState } from 'react';

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  const d = digits.startsWith('8') ? '7' + digits.slice(1) : digits.startsWith('7') ? digits : '7' + digits;
  const a = d.slice(1);
  const p1 = a.slice(0, 3);
  const p2 = a.slice(3, 6);
  const p3 = a.slice(6, 8);
  const p4 = a.slice(8, 10);
  let out = '+7';
  if (p1) out += ` (${p1}`;
  if (p1.length === 3) out += ')';
  if (p2) out += ` ${p2}`;
  if (p3) out += `-${p3}`;
  if (p4) out += `-${p4}`;
  return out;
}

export default function CtaForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !phone || !agree) return;
    // TODO: передать в скилл getcourse-api — payload { name, age, phone }
    setSubmitted(true);
  };

  return (
    <section id="cta" className="sec" style={{ background: '#F4F6FA' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div className="cta-grid">
          {/* Left: dark navy panel */}
          <div className="cta-left">
            <h2 className="h2" style={{ color: '#FFFFFF', lineHeight: 1.2 }}>
              Всероссийская летняя программа подготовки детей к&nbsp;школьному курсу «Искусственный интеллект»
            </h2>
            <div className="cta-meta">
              <span className="cta-meta-item">
                <span className="cta-meta-dot" />
                Старт программы: 1&nbsp;июля&nbsp;2026
              </span>
              <span className="cta-meta-item">
                <span className="cta-meta-dot" />
                Количество мест ограничено
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div className="cta-right">
            {submitted ? (
              <div
                style={{
                  padding: 28,
                  borderRadius: 6,
                  background: '#F4F6FA',
                  border: '1px solid #E2E6EE',
                }}
              >
                <h3 className="h3">Заявка принята</h3>
                <p className="body" style={{ marginTop: 8, fontSize: '0.9375rem' }}>
                  Спасибо! Педагог свяжется с&nbsp;вами в&nbsp;ближайшее время, чтобы подобрать слот.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                noValidate
              >
                <label className="form-label">
                  <span className="form-label-text">Имя ребёнка</span>
                  <input
                    type="text"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Артём"
                    required
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-text">Возраст</span>
                  <select
                    className="form-input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  >
                    <option value="">Выберите возраст</option>
                    <option value="10">10 лет</option>
                    <option value="11">11 лет</option>
                    <option value="12">12 лет</option>
                    <option value="13">13 лет</option>
                    <option value="14">14 лет</option>
                  </select>
                </label>

                <label className="form-label">
                  <span className="form-label-text">Телефон родителя</span>
                  <input
                    type="tel"
                    className="form-input"
                    value={phone}
                    onChange={(e) => setPhone(maskPhone(e.target.value))}
                    placeholder="+7 (___) ___-__-__"
                    inputMode="tel"
                    required
                  />
                </label>

                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>
                    Согласен с&nbsp;<a href="/policy" style={{ color: '#1C3F94', textDecoration: 'underline' }}>обработкой персональных данных</a>
                  </span>
                </label>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px 22px', marginTop: 4 }}>
                  Подать заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid #E2E6EE;
        }
        @media (min-width: 900px) {
          .cta-grid { grid-template-columns: 7fr 5fr; gap: 0; }
        }
        .cta-left {
          background: #1C3F94;
          padding: 36px 28px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 900px) {
          .cta-left { padding: 48px 44px; }
        }
        .cta-right {
          background: #FFFFFF;
          padding: 28px 24px;
        }
        @media (min-width: 900px) {
          .cta-right { padding: 44px 40px; }
        }
        .form-label { display: flex; flex-direction: column; gap: 6px; }
        .form-label-text {
          font-size: 0.8125rem;
          font-weight: 500;
          color: #4A5468;
          letter-spacing: 0.01em;
        }
        .form-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8125rem;
          color: #4A5468;
          line-height: 1.4;
          margin-top: 4px;
        }
        .form-checkbox input { margin-top: 3px; accent-color: #1C3F94; }

        /* Meta info inside navy panel */
        .cta-meta {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cta-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.4;
        }
        .cta-meta-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D62E2E;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
