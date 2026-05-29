"use client";

import Image from "next/image";
import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface Card {
  hours: string;
  title: string;
  lead: string;
  bullets: string[];
  details: string[];
  image: string;
}

const cards: Card[] = [
  {
    hours: "21 ч.",
    title: "Превратите теорию в практику вместе с Зерокодером",
    lead: "Каждый теоретический блок закрепляется на практике через:",
    bullets: [
      "Практические задания с проверкой от преподавателя",
      "Защиту финального проекта в конце каждого модуля",
    ],
    details: [
      "27 проектов в портфолио — каждый модуль завершается реальной работой, которую ребёнок может показать в школе или на конкурсе.",
      "Дневник интересов в Yonote, презентация через нейросети, образовательный квиз по математике, лендинг для книги или мультфильма, оригинальная инди-игра, серия иллюстраций в Midjourney, музыкальная композиция в Suno, анимационный мультфильм в CapCut, Telegram-бот и многое другое.",
      "После каждого блока педагог даёт развёрнутую обратную связь и точки роста: что зашло, что доработать, какой следующий шаг.",
    ],
    image: "/screenshots/practice-1.svg",
  },
  {
    hours: "5 ч.",
    title: "Воркшопы и обратные уроки",
    lead: "Разбирайте теорию и тренируйтесь под руководством опытного преподавателя — действующего IT-специалиста:",
    bullets: [
      "Задавайте преподавателю любые вопросы по курсу",
      "Разбирайте реальные кейсы вместе с опытным специалистом",
      "Участвуйте онлайн или смотрите воркшопы в записи",
    ],
    details: [
      "Формат «обратного урока»: после теории ребёнок не пересказывает, а объясняет педагогу, как он сделал проект. Этот метод закрепляет знания в 3–4 раза лучше обычного конспекта.",
      "Тематические разборы дважды в неделю — от промптинга в ChatGPT до публикации игры в сторе и сборки канала с ИИ-аватаром.",
      "Все воркшопы остаются в записи в базе знаний — ребёнок может пересмотреть и подготовиться к собственной защите.",
    ],
    image: "/screenshots/practice-2.svg",
  },
];

function PracticeCard({ card }: { card: Card }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal rounded-lg bg-[var(--n-alabaster)] hairline overflow-hidden flex flex-col">
      <div className="p-6 md:p-7 flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-bold leading-tight tracking-[-0.01em] text-[var(--n-shark-1)] max-w-[80%]">
          {card.title}
        </h3>
        <span
          className="shrink-0 inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-white"
          style={{ background: "var(--accent-heliotrope)" }}
        >
          {card.hours}
        </span>
      </div>

      <div className="px-6 md:px-7">
        <div className="relative w-full overflow-hidden rounded-md bg-white" style={{ aspectRatio: "16 / 9" }}>
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="px-6 md:px-7 pt-6 pb-2 flex flex-col gap-4">
        <p className="text-base md:text-[17px] font-bold text-[var(--n-shark-1)] leading-snug">
          {card.lead}
        </p>
        <ul className="flex flex-col gap-2">
          {card.bullets.map((b) => (
            <li
              key={b}
              className="text-base text-[var(--n-shark-1)] leading-relaxed flex gap-2.5"
            >
              <span
                className="mt-2.5 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--accent-heliotrope)" }}
                aria-hidden
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div
          className="grid transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="pt-4 flex flex-col gap-3 text-[15px] text-[var(--n-mine-shaft)] leading-relaxed">
              {card.details.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mx-6 md:mx-7 my-6 md:my-7 h-14 rounded-lg ring-1 ring-[var(--accent-heliotrope)] text-[var(--accent-heliotrope)] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[var(--accent-heliotrope)] hover:text-white transition-colors duration-200"
      >
        <span>{open ? "Свернуть" : "Подробнее"}</span>
        <CaretDown
          size={16}
          weight="bold"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s var(--ease-zen)",
          }}
        />
      </button>
    </div>
  );
}

export function Practice() {
  return (
    <section
      id="practice"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap">
          <h2 className="text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)]">
            Практика внутри курса
          </h2>
          <span
            className="inline-flex items-center px-4 py-2 rounded-full text-sm md:text-base font-semibold text-white"
            style={{ background: "var(--accent-heliotrope)" }}
          >
            26 ак. часов
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => (
            <PracticeCard key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
