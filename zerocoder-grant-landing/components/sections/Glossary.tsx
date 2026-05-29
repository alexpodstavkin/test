"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const terms: { term: string; definition: string }[] = [
  {
    term: "Нейросеть (ИИ)",
    definition:
      "Программа искусственного интеллекта, которая обучается на данных и помогает создавать тексты, картинки, музыку и код.",
  },
  {
    term: "Промпт",
    definition:
      "Текстовый запрос-задание, по которому нейросеть понимает, что именно нужно сделать.",
  },
  {
    term: "ChatGPT",
    definition:
      "Нейросеть для работы с текстом: отвечает на вопросы, помогает писать и объяснять.",
  },
  {
    term: "Midjourney",
    definition: "Нейросеть, которая создаёт изображения и иллюстрации по описанию.",
  },
  {
    term: "Suno / Udio",
    definition: "Нейросети для генерации музыки и песен по текстовому описанию.",
  },
  {
    term: "ElevenLabs",
    definition: "Сервис ИИ-озвучки текста реалистичными голосами.",
  },
  {
    term: "Pixso",
    definition: "Онлайн-редактор для графического дизайна и макетов сайтов.",
  },
  {
    term: "Tilda",
    definition: "Конструктор сайтов без программирования (zero-code).",
  },
  {
    term: "Yonote",
    definition:
      "Сервис для заметок и организации рабочего пространства (российский аналог Notion).",
  },
  {
    term: "CapCut",
    definition: "Программа для монтажа видео с готовыми эффектами и субтитрами.",
  },
  {
    term: "GitHub",
    definition:
      "Платформа, где программисты хранят код проектов и работают над ними вместе.",
  },
  {
    term: "Zero-code / No-code",
    definition:
      "Подход к созданию сайтов и приложений без написания кода — с помощью визуальных конструкторов.",
  },
  {
    term: "Digital-профессия",
    definition:
      "Современная цифровая специальность: дизайнер, веб-разработчик, контент-мейкер и другие.",
  },
  {
    term: "Лендинг",
    definition: "Одностраничный сайт, посвящённый одному продукту или услуге.",
  },
  {
    term: "Аватар",
    definition: "Цифровой персонаж или изображение, представляющее автора.",
  },
  {
    term: "Воркшоп",
    definition:
      "Практическое онлайн-занятие, на котором разбирают реальные задачи под руководством специалиста.",
  },
  {
    term: "Ментор",
    definition: "Наставник, который сопровождает ребёнка и делится опытом.",
  },
  {
    term: "IT",
    definition:
      "Информационные технологии — сфера, связанная с компьютерами, программами и интернетом.",
  },
];

function GlossaryRow({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--n-seashell)] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-4 md:py-5 flex items-center gap-4 text-left hover-opacity"
      >
        <span className="flex-1 text-base md:text-lg font-bold text-[var(--n-shark-1)]">
          {term}
        </span>
        <span
          className="w-8 h-8 md:w-9 md:h-9 shrink-0 rounded-full flex items-center justify-center text-white transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            background: "var(--accent-heliotrope)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          {open ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </span>
      </button>
      {open && (
        <p className="pb-4 md:pb-5 pr-10 md:pr-12 text-sm md:text-base text-[var(--n-mine-shaft)] leading-relaxed">
          {definition}
        </p>
      )}
    </div>
  );
}

export function Glossary() {
  return (
    <section
      id="glossary"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
        <h2 className="text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)] mb-2">
          Глоссарий
        </h2>
        <p className="text-sm md:text-base text-[var(--n-mine-shaft)] leading-relaxed mb-6 md:mb-8 max-w-2xl">
          Все иностранные слова и термины, которые встречаются в программе, —
          простыми словами для родителей. Нажмите на термин, чтобы раскрыть
          определение.
        </p>

        <div className="rounded-lg bg-[var(--n-alabaster)] px-4 md:px-6 hairline">
          {terms.map((t) => (
            <GlossaryRow key={t.term} term={t.term} definition={t.definition} />
          ))}
        </div>
      </div>
    </section>
  );
}
