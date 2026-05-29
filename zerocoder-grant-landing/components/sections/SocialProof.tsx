import { Star } from "@phosphor-icons/react/dist/ssr";

const items = [
  { name: "Яндекс", rating: "4.9" },
  { name: "Google", rating: "5.0" },
  { name: "Отзовик", rating: "4.7" },
  { name: "2GIS", rating: "5.0" },
];

export function SocialProof() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-10 md:py-12 bg-white border-t border-[var(--n-seashell)]">
      <div className="max-w-[1320px] mx-auto reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        {/* Левая ячейка — общий рейтинг */}
        <div className="md:col-span-4 flex items-center gap-4 md:gap-5">
          <div className="text-[36px] md:text-[48px] font-bold leading-none tracking-[-0.02em] text-[var(--n-shark-1)] tabular-nums">
            5.0
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={20}
                  weight="fill"
                  color="var(--accent-heliotrope)"
                />
              ))}
            </div>
            <p className="text-sm md:text-base text-[var(--n-mine-shaft)] leading-snug">
              Рейтинг Зерокодера
              <br />
              на сервисах-агрегаторах
            </p>
          </div>
        </div>

        {/* Правая полоса — оценки на агрегаторах */}
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it) => (
            <div
              key={it.name}
              className="rounded-lg bg-[var(--n-alabaster)] p-4 md:p-5 flex flex-col items-center gap-2 hairline"
            >
              <span className="text-base md:text-lg font-bold text-[var(--n-shark-1)]">
                {it.name}
              </span>
              <div className="flex items-center gap-1.5">
                <Star
                  size={16}
                  weight="fill"
                  color="var(--accent-heliotrope)"
                />
                <span className="text-sm font-semibold text-[var(--n-mine-shaft)] tabular-nums">
                  {it.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
