import Image from "next/image";

export function WhyNow() {
  return (
    <section
      id="why-now"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch">
          {/* Left: фото — обрезано на мальчика через object-position */}
          <div className="md:col-span-5 flex">
            <div className="relative w-full rounded-lg overflow-hidden bg-white min-h-[360px] md:min-h-0">
              <Image
                src="/screenshots/why-now-kids.png"
                alt="Подросток за учёбой с нейросетями"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "100% 20%" }}
              />
            </div>
          </div>

          {/* Right: текст */}
          <div className="md:col-span-7 flex flex-col gap-6 md:gap-7">
            <h2 className="reveal text-xl md:text-2xl font-bold tracking-[-0.01em] text-[var(--n-shark-1)]">
              Зачем обучаться работе с нейросетями уже сейчас?
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-[var(--n-mine-shaft)]">
              Сегодня ИИ-инструменты используют в медицине, образовании,
              маркетинге, финансах и десятках других сфер. Понимание того, как
              они работают, становится универсальным профессиональным навыком.{" "}
              <span className="body-strong">Во время обучения ребёнок:</span>
            </p>

            <ul className="flex flex-col gap-3 text-sm md:text-base leading-relaxed text-[var(--n-shark-1)]">
              <li>
                <span className="font-bold text-[var(--accent-heliotrope)]">Освоит</span>{" "}
                инструменты ChatGPT, Midjourney, Suno, Pixso и Tilda на уровне
                уверенного пользователя.
              </li>
              <li>
                <span className="font-bold text-[var(--accent-heliotrope)]">Сможет</span>{" "}
                делать с их помощью школьные проекты, презентации, сайты и
                собственные игры без помощи взрослых.
              </li>
              <li>
                <span className="font-bold text-[var(--accent-heliotrope)]">Получит</span>{" "}
                портфолио из 27 готовых работ и понимание, как зарабатывать на
                digital-навыках уже сейчас.
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-2">
              {/* TODO(validate): уточнить цифру 52 000 у маркетинга — оформлено в фирменный красный HH.ru */}
              <div
                className="rounded-lg p-5 md:p-6 text-white"
                style={{ background: "var(--hh-red)" }}
              >
                <p className="text-xs md:text-sm text-white/80 mb-2 uppercase tracking-[0.06em] font-semibold">
                  Вакансий на hh.ru
                </p>
                <p className="text-2xl md:text-3xl font-bold leading-none mb-2">
                  ~52 000
                </p>
                <p className="text-sm text-white/90 leading-relaxed">
                  активных вакансий со знанием ИИ
                </p>
              </div>

              {/* TODO(validate): уточнить рост ×15 за 5 лет */}
              <div className="rounded-lg bg-[var(--n-alabaster)] p-5 md:p-6 hairline">
                <p className="text-xs md:text-sm text-[var(--n-mine-shaft)] mb-2 uppercase tracking-[0.06em] font-semibold">
                  Рост за 5 лет
                </p>
                <p
                  className="text-2xl md:text-3xl font-bold leading-none mb-2"
                  style={{ color: "var(--accent-heliotrope)" }}
                >
                  × 15
                </p>
                <p className="text-sm text-[var(--n-mine-shaft)] leading-relaxed">
                  во столько раз выросло их число с 2020 года.{" "}
                  <span className="body-strong">
                    Через 5–7 лет все профессии будут со знанием работы с ИИ.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
