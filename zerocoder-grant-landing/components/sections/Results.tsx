import { BentoCard } from "../ui/BentoCard";

interface Cell {
  big?: string;
  smallTitle?: string;
  title: string;
  body: string;
  variant?: "light" | "white" | "accent" | "dark";
}

const cells: Cell[] = [
  {
    big: "+0,7",
    title: "Вырастут оценки",
    body: "В среднем ученики Зерокодера получают оценки на 0,7 балла выше, чем сверстники. Ребёнок научится учиться эффективно — с помощью ИИ.",
    variant: "accent",
  },
  {
    big: "5–7 ч",
    title: "Свободного времени",
    body: "В неделю для ребёнка. Больше не нужно сидеть над домашкой до поздней ночи. Свободное время можно посвятить хобби, семье или отдыху.",
    variant: "light",
  },
  {
    big: "5–10K",
    title: "Первый заработок",
    body: "Научится зарабатывать карманные деньги самостоятельно. Первые 5–10 тыс. ₽ уже в 14 лет — на простых заказах от знакомых и микро-фрилансе.",
    variant: "dark",
  },
  {
    smallTitle: "Мягкие навыки",
    title: "Навыки на всю жизнь",
    body: "Освоит эмоциональный интеллект, публичные выступления, коммуникацию, тайм-менеджмент и работу в команде.",
    variant: "light",
  },
  {
    smallTitle: "Цифровая безопасность",
    title: "Защита в интернете",
    body: "Научится распознавать фейки, защищать персональные данные и грамотно вести себя в онлайн-сервисах.",
    variant: "light",
  },
  {
    smallTitle: "Профориентация",
    title: "Осознанный выбор профессии",
    body: "Подросток пробует 12 digital-профессий за год и понимает, чем хочет заниматься дальше — с поддержкой профориентолога.",
    variant: "light",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
      <h2 className="text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)] mb-10 md:mb-14 max-w-3xl">
        Что изменится после обучения для вашего ребёнка
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {cells.map((c, i) => {
          const v = c.variant ?? "light";
          const labelColor =
            v === "accent" || v === "dark"
              ? "text-white/85"
              : "text-[var(--accent-heliotrope)]";
          const bigColor =
            v === "accent" || v === "dark"
              ? "text-white"
              : "text-[var(--n-shark-1)]";
          const bodyColor =
            v === "accent" || v === "dark"
              ? "text-white/90"
              : "text-[var(--n-mine-shaft)]";
          const titleColor =
            v === "accent" || v === "dark"
              ? "text-white"
              : "text-[var(--n-shark-1)]";
          return (
            <BentoCard
              key={i}
              variant={v}
              className={`reveal flex flex-col gap-3 min-h-[260px] ${v === "light" || v === "white" ? "hairline" : ""}`}
            >
              {c.big ? (
                <p className={`text-3xl md:text-4xl font-bold leading-none ${bigColor}`}>
                  {c.big}
                </p>
              ) : (
                <span
                  className={`inline-block text-xs md:text-sm font-semibold uppercase tracking-wide ${labelColor}`}
                >
                  {c.smallTitle}
                </span>
              )}
              <h3 className={`text-base md:text-lg font-bold ${titleColor}`}>
                {c.title}
              </h3>
              <p className={`text-base leading-relaxed ${bodyColor}`}>
                {c.body}
              </p>
            </BentoCard>
          );
        })}
      </div>
      </div>
    </section>
  );
}
