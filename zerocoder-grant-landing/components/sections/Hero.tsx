import { Button } from "../ui/Button";
import { HeroCountdown } from "./HeroCountdown";

export function Hero() {
  return (
    <section
      id="hero"
      className="px-4 md:px-6 lg:px-8 py-10 md:py-14 lg:py-16 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch">
        {/* Left: текст + цены + CTA */}
        <div className="md:col-span-7 flex flex-col gap-7 md:gap-9">
          <h1 className="reveal text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-bold tracking-[-0.015em] text-[var(--n-shark-1)]">
            Получите{" "}
            <span style={{ color: "var(--accent-heliotrope)" }}>
              грант на обучение
            </span>{" "}
            вашего ребёнка работе с нейросетями
          </h1>

          <p className="reveal text-sm md:text-base leading-relaxed text-[var(--n-mine-shaft)] max-w-[680px]">
            Университет Зерокодер объявляет грант на обучение детей 10–14 лет в
            школе профессий будущего. Программа создана для тех, кто хочет, чтобы
            ребёнок освоил работу с нейросетями, получил актуальные знания,
            которые помогут в учёбе и жизни и погрузился в современные
            digital-профессии.
          </p>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 max-w-[420px]">
            <div className="rounded-lg bg-[var(--n-alabaster)] p-3 md:p-3.5">
              <p className="text-xs md:text-sm text-[var(--n-mine-shaft)] mb-1">
                Без учёта гранта
              </p>
              <p className="text-lg md:text-xl font-bold tracking-[-0.01em] text-[var(--n-mine-shaft)] line-through decoration-2 leading-none">
                172 370 ₽
              </p>
            </div>
            <div
              className="rounded-lg p-3 md:p-3.5"
              style={{
                background: "rgba(34, 178, 76, 0.10)",
                boxShadow: "0 0 0 1px rgba(34, 178, 76, 0.45)",
              }}
            >
              <p className="text-xs md:text-sm text-[var(--n-shark-1)] mb-1 font-semibold">
                Цена с грантом
              </p>
              <p
                className="text-xl md:text-2xl font-bold leading-none tracking-[-0.01em]"
                style={{ color: "var(--accent-heliotrope)" }}
              >
                от 72 370 ₽
              </p>
            </div>

            {/* Третья ячейка во всю ширину под двумя ценами */}
            <div className="sm:col-span-2 rounded-lg bg-[var(--n-alabaster)] p-2.5 md:p-3 flex items-center justify-between gap-3">
              <span className="text-xs md:text-sm text-[var(--n-mine-shaft)]">
                Цена в рассрочку
              </span>
              <span className="text-base md:text-lg font-bold tracking-[-0.01em] text-[var(--n-shark-1)]">
                от 2 987 ₽/мес
              </span>
            </div>
          </div>

          <a href="#cta-1" className="reveal inline-block w-full sm:w-auto mt-auto">
            <Button fullWidth>Получить грант на обучение</Button>
          </a>
        </div>

        {/* Right: таймер обратного отсчёта до закрытия гранта */}
        <div className="md:col-span-5 flex reveal">
          <HeroCountdown />
        </div>
      </div>
      </div>
    </section>
  );
}
