type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    title: 'Концентрация и внимание',
    description: 'Удерживать фокус 45+ минут — даже когда хочется отвлечься.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Скорость чтения',
    description: 'В 2–4 раза быстрее — без потери понимания прочитанного.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: 'Зрительное восприятие',
    description: 'Расширенное поле зрения — ребёнок видит больше за один взгляд.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Память',
    description: 'Удерживать детали в голове и легко ими оперировать.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A4.5 4.5 0 0 1 14 6.5a4.5 4.5 0 0 1-1.6 3.5A4 4 0 0 1 14 13.5 4.5 4.5 0 0 1 9.5 18" />
        <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5a4.5 4.5 0 0 0 1.6 3.5A4 4 0 0 0 5 13.5 4.5 4.5 0 0 0 9.5 18" />
        <path d="M9.5 2v16M9.5 18a4 4 0 0 0 4 4M14 13.5a4.5 4.5 0 0 0 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: 'Понимание текста',
    description: 'Улавливать смысл, контекст и выводы автора, а не «читать буквы».',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
        <path d="M22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z" />
      </svg>
    ),
  },
  {
    title: 'Скорость обработки информации',
    description: 'Меньше времени на «понять задачу» — больше на её решение.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>
            Скорочтение тренирует <em>6&nbsp;ключевых навыков</em>, которые&nbsp;работают
            за&nbsp;партой и&nbsp;в&nbsp;жизни
          </h2>
          <p>
            Это не&nbsp;про&nbsp;скорость. Это&nbsp;про&nbsp;мышление, память
            и&nbsp;то, как&nbsp;ребёнок справляется с&nbsp;задачами.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((s) => (
            <article className="skill-card" key={s.title}>
              <div className="icon-tile" aria-hidden>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>

        <div className="summer-banner">
          <p>
            <span aria-hidden>☀ </span>
            За&nbsp;лето эти навыки могут стать хуже&nbsp;— занятия по&nbsp;скорочтению
            как&nbsp;раз помогают их&nbsp;развить.
          </p>
        </div>
      </div>
    </section>
  );
}
