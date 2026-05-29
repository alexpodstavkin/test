import Image from "next/image";
import { Certificate, GraduationCap } from "@phosphor-icons/react/dist/ssr";

interface Tile {
  src: string;
  alt: string;
  /** натуральные размеры PNG — Next.js сам посчитает aspect-ratio */
  w: number;
  h: number;
  className: string;
}

const rowOne: Tile[] = [
  {
    src: "/screenshots/advantages/01-graduates.png",
    alt: "Более 10 тыс. выпускников платных программ",
    w: 1144,
    h: 200,
    className: "md:col-span-6",
  },
  {
    src: "/screenshots/advantages/02-career.png",
    alt: "Заказов на 300 млн ₽ через карьерный центр",
    w: 1144,
    h: 200,
    className: "md:col-span-6",
  },
];

const rowTwo: Tile[] = [
  {
    src: "/screenshots/advantages/03-vuzy.png",
    alt: "Преподаём в лучших вузах",
    w: 568,
    h: 504,
    className: "md:col-span-6",
  },
  {
    src: "/screenshots/advantages/04-license.png",
    alt: "Образовательная лицензия и статус Сколково",
    w: 1144,
    h: 880,
    className: "md:col-span-6",
  },
];

export function Advantages() {
  return (
    <section
      id="advantages"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
        <h2 className="text-h2-fluid text-[var(--n-shark-1)] mb-8 md:mb-10 max-w-4xl tracking-[-0.01em]">
          Преимущества обучения в университете{" "}
          <span style={{ color: "var(--accent-heliotrope)" }}>Зерокодер</span>
        </h2>

        {/* Ряд 1 — две плоские плитки, PNG растянут на всю ширину */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4 items-stretch">
          {rowOne.map((t) => (
            <div
              key={t.src}
              className={`rounded-lg overflow-hidden hairline ${t.className}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={t.w}
                height={t.h}
                sizes="(min-width: 768px) 40vw, 90vw"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        {/* Ряд 2 — два высоких блока, PNG растянут */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4 items-stretch">
          {rowTwo.map((t) => (
            <div
              key={t.src}
              className={`rounded-lg overflow-hidden hairline ${t.className}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={t.w}
                height={t.h}
                sizes="(min-width: 768px) 40vw, 90vw"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>

        {/* Сертификат + текст про вузы — две колонки */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          <div
            className="md:col-span-5 rounded-lg p-7 md:p-8 flex flex-col gap-4 text-white"
            style={{ background: "var(--accent-heliotrope)" }}
          >
            <span
              className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center"
              aria-hidden
            >
              <Certificate size={28} weight="regular" color="#FFFFFF" />
            </span>
            <h3 className="text-base md:text-lg font-bold leading-tight">
              Сертификат об обучении
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              По итогам обучения ребёнок защищает финальный проект и получает
              сертификат, подтверждающий освоенные навыки.
            </p>
          </div>

          <div className="md:col-span-7 rounded-lg bg-[var(--n-alabaster)] p-7 md:p-8 hairline flex flex-col gap-3">
            <span
              className="w-14 h-14 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(34, 178, 76, 0.12)" }}
              aria-hidden
            >
              <GraduationCap
                size={28}
                weight="regular"
                color="var(--accent-heliotrope)"
              />
            </span>
            <h3 className="text-base md:text-lg font-bold text-[var(--n-shark-1)] leading-tight">
              Программа разработана с преподавателями ведущих вузов
            </h3>
            <p className="text-sm md:text-base text-[var(--n-mine-shaft)] leading-relaxed">
              Методология построена на исследованиях Зерокодера совместно с
              Университетом Иннополис, ВШЭ и СПбГУ. Содержание модулей и
              порядок проверяются практикующими специалистами из ИТ-компаний —
              чтобы то, что ребёнок изучает сейчас, реально работало на рынке
              в 2030 году.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
