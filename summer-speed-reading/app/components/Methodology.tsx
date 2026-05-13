import { nb } from '../lib/typography'

const points = [
  {
    icon: '🧬',
    title: 'Нейро-подход',
    text: 'Упражнения построены на работе обоих полушарий — скорость чтения растёт вместе с пониманием, а не вместо него.',
    tint: 'card--tint-navy',
  },
  {
    icon: '🎚',
    title: 'Индивидуальный темп',
    text: 'Программа адаптируется к ребёнку: возраст, скорость, интересы.',
    tint: 'card--tint-cta',
  },
  {
    icon: '💬',
    title: 'Мышление через речь',
    text: 'Ребёнок не просто читает — он обсуждает прочитанное с педагогом. Так формируется понимание.',
    tint: 'card--tint-cta',
  },
  {
    icon: '🤝',
    title: 'Педагог — партнёр, а не контролёр',
    text: 'Никаких «двоек за ошибки». Ребёнок не боится пробовать — и потому быстрее учится.',
    tint: 'card--tint-navy',
  },
]

export default function Methodology() {
  return (
    <section className="section" style={{ background: 'var(--surface-soft)' }}>
      <div className="container grid gap-10 lg:gap-14 lg:grid-cols-[1.2fr_1fr] items-stretch">
        <div className="flex flex-col gap-8">
          <div className="max-w-[680px] flex flex-col gap-4">
            <h2>
              {nb('В чём заключается')}{' '}
              <span style={{ color: 'var(--venice-blue)' }}>
                {nb('уникальная методология Matrius')}
              </span>
              {nb(', которая даёт')}{' '}
              <span style={{ color: 'var(--cta)' }}>+0,7&nbsp;балла</span>{' '}
              {nb('к оценкам')}
            </h2>
            <p className="text-[16px] sm:text-[17px]">
              {nb('Мы тренируем не просто скорость. Мы также развиваем мышление, память и речь — через игру, в которую ребёнок включается сам. Программа на лето построена так, чтобы ребёнок учился в комфортном темпе и у него оставалось время на прогулки с друзьями.')}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <article key={p.title} className={`card ${p.tint} flex flex-col gap-3`}>
                <span aria-hidden style={{ fontSize: 28, lineHeight: 1 }}>{p.icon}</span>
                <h3 style={{ fontSize: 18 }}>{nb(p.title)}</h3>
                <p style={{ fontSize: 15 }}>{nb(p.text)}</p>
              </article>
            ))}
          </div>
          <a href="#form" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
            Записаться на бесплатный урок →
          </a>
        </div>

        <aside className="h-full flex">
          <div className="photo-frame w-full" aria-label="Место для фотографии">
            <div className="flex flex-col items-center gap-3 text-center px-6 py-10">
              <span aria-hidden style={{ fontSize: 96 }}>👩‍🏫</span>
              <span className="photo-frame__caption">Место для фотографии</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
