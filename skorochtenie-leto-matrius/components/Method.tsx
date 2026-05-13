import Image from 'next/image';
import { asset } from '@/lib/asset';

const points = [
  {
    title: 'Зона ближайшего развития',
    text: 'Задания всегда на полшага сложнее текущего уровня — ребёнок растёт, но не ломается.',
  },
  {
    title: 'Игра как ведущая деятельность',
    text: 'Каникулы превращаются в сюжетный квест. То, что интересно, лучше всего запоминается.',
  },
  {
    title: 'Развитие мышления через речь',
    text: 'Каждое задание включает обсуждение прочитанного, а не заучивание текста.',
  },
  {
    title: 'Социальная природа обучения',
    text: 'Педагог — партнёр в игре, а не контролёр. Это снимает страх ошибки.',
  },
];

export default function Method() {
  return (
    <section className="section" style={{ background: 'var(--color-bg-soft)' }}>
      <div className="container">
        <div className="method-wrap">
          <div className="method-content">
            <h2>
              Преподаём по&nbsp;<em>уникальной методике&nbsp;Matrius</em>, по&nbsp;которой
              из&nbsp;любого ребёнка можно вырастить гения
            </h2>
            <p style={{ color: 'var(--color-ink-2)', fontSize: '1rem', lineHeight: 1.6, marginBottom: 24, maxWidth: '50ch' }}>
              Программа построена на&nbsp;четырёх принципах культурно-исторической
              психологии. Летом мы&nbsp;усиливаем игровую часть&nbsp;— ребёнок занимается
              на&nbsp;каникулах с&nbsp;удовольствием.
            </p>

            <div className="method-points">
              {points.map((p) => (
                <div className="method-point" key={p.title}>
                  <span className="check" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="method-photo">
            <Image
              src={asset('/method.png')}
              alt="Педагог Matrius занимается с ребёнком летом"
              width={1254}
              height={1254}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
