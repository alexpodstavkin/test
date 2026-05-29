import { BentoCard } from "../ui/BentoCard";
import {
  Broadcast,
  ChatsCircle,
  Wrench,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    Icon: Broadcast,
    title: "Авторские вебинары",
    text: "Разборы трендов в ИИ, обзоры новых инструментов, ответы на вопросы родителей и детей в прямом эфире",
  },
  {
    Icon: ChatsCircle,
    title: "Закрытое комьюнити",
    text: "Онлайн-чат с экспертами в области ИИ и сверстниками, которые учатся на тех же модулях — общение, поддержка, идеи",
  },
  {
    Icon: Wrench,
    title: "Воркшопы по реальным кейсам",
    text: "Раз в месяц — практический мастер-класс: ребёнок собирает мини-проект под руководством действующего специалиста",
  },
  {
    Icon: BookOpen,
    title: "База знаний Зерокодера",
    text: "Полный доступ к материалам университета: статьи, видеоразборы, готовые промпт-шаблоны и подборки инструментов",
  },
];

export function Activities() {
  return (
    <section
      id="activities"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
      <div className="max-w-3xl mb-10 md:mb-14 flex flex-col gap-5">
        <h2 className="reveal text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)]">
          Дополнительные активности
        </h2>
        <p className="reveal text-sm md:text-base text-[var(--n-mine-shaft)] leading-relaxed">
          Кроме основных уроков ребёнок получает доступ к экосистеме Зерокодера —
          она помогает не выпадать из темы между занятиями и быстрее погружаться
          в digital-сообщество.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {items.map(({ Icon, title, text }) => (
          <BentoCard
            key={title}
            variant="light"
            className="flex flex-col md:flex-row gap-5 hairline"
          >
            <span
              className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(34, 178, 76, 0.12)" }}
              aria-hidden
            >
              <Icon
                size={26}
                weight="regular"
                color="var(--accent-heliotrope)"
              />
            </span>
            <div>
              <h3 className="text-sm md:text-base font-bold text-[var(--n-shark-1)] mb-2">
                {title}
              </h3>
              <p className="text-base text-[var(--n-mine-shaft)] leading-relaxed">
                {text}
              </p>
            </div>
          </BentoCard>
        ))}
      </div>
      </div>
    </section>
  );
}
