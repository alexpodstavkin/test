'use client';

const stats = [
  { value: '10 000+', label: 'выпускников платных программ' },
  { value: '300 млн ₽', label: 'заказов через карьерный центр' },
  {
    value: '2 350+',
    label: 'госслужащих и чиновников обучены в проекте «Цифровая прокачка»',
  },
  { value: 'с 2021', label: 'обучаем работе с нейросетями и no-code' },
];

export function AboutZerocoder() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 max-w-[64ch] md:mb-14">
          <h2 className="h-section">
            Мы создаём фундаментальное образование в области искусственного
            интеллекта и&nbsp;разработки
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <article
              key={s.label}
              className="reveal card flex flex-col justify-between gap-3 hover:shadow-cardHover"
            >
              <span
                className="bg-clip-text text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-none text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(120deg, #B15EFF 0%, #9B51E0 60%, #00E48D 110%)',
                }}
              >
                {s.value}
              </span>
              <p className="text-body text-ink-700">{s.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
