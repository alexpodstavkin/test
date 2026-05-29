import Image from "next/image";
import {
  UserSound,
  Headset,
  UsersThree,
  Lightbulb,
  ClipboardText,
} from "@phosphor-icons/react/dist/ssr";

const tiles = [
  {
    Icon: UserSound,
    title: "Занятия 1:1 онлайн",
    text: "Индивидуальный формат с преподавателем под темп ребёнка",
  },
  {
    Icon: Headset,
    title: "Поддержка эксперта",
    text: "Куратор отвечает на вопросы между уроками и помогает с домашкой",
  },
  {
    Icon: UsersThree,
    title: "Работа в коллективе",
    text: "Совместные созвоны, разбор проектов одногруппников, обмен идеями",
  },
  {
    Icon: Lightbulb,
    title: "Групповые проекты",
    text: "Командные хакатоны и квесты — учим работать в команде с ровесниками",
  },
];

export function Format() {
  return (
    <section
      id="format"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
      <h2 className="text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)] mb-8 md:mb-12 max-w-3xl">
        Формат обучения
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5">
        {tiles.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="reveal rounded-lg bg-[var(--n-alabaster)] p-6 md:p-7 flex flex-col gap-4 hairline"
          >
            <span
              className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(34, 178, 76, 0.12)" }}
              aria-hidden
            >
              <Icon
                size={22}
                weight="regular"
                color="var(--accent-heliotrope)"
              />
            </span>
            <h3 className="text-sm md:text-base font-bold text-[var(--n-shark-1)]">
              {title}
            </h3>
            <p className="text-sm md:text-base text-[var(--n-mine-shaft)] leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div
        className="reveal rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0 text-white"
        style={{ background: "var(--accent-heliotrope)" }}
      >
        <div className="md:col-span-8 flex items-start md:items-center gap-5 md:gap-8 p-7 md:p-10">
          <span
            className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center shrink-0"
            aria-hidden
          >
            <ClipboardText size={26} weight="regular" color="#FFFFFF" />
          </span>
          <p className="text-base md:text-xl leading-relaxed">
            <span className="body-strong">
              Проверка домашних заданий и обратная связь от преподавателя
            </span>{" "}
            — каждый проект разбирается лично, ребёнок понимает, что улучшить и
            куда расти.
          </p>
        </div>
        <div className="md:col-span-4 relative min-h-[200px] md:min-h-[260px] bg-white/10">
          <Image
            src="/screenshots/format-photo.svg"
            alt="Преподаватель проверяет домашнее задание ученика"
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
