import Image from "next/image";
import { Button } from "../ui/Button";

export function DemoOffer() {
  return (
    <section
      id="demo-offer"
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div className="max-w-[1320px] mx-auto reveal rounded-2xl bg-white p-6 md:p-10 lg:p-12 soft-shadow">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch">
        <div className="md:col-span-7 flex flex-col gap-6">
          <h2 className="reveal text-h2-fluid tracking-[-0.01em] text-[var(--n-shark-1)]">
            Грант на обучение выдаём на индивидуальном бесплатном занятии с
            ребёнком
          </h2>
          <p className="reveal text-sm md:text-base leading-relaxed text-[var(--n-mine-shaft)] max-w-[640px]">
            На нём ребёнок окунётся в мир нейросетей и сделает свой первый
            настоящий ИИ-проект — и всё это с опытным преподавателем рядом!
          </p>

          <div
            className="reveal rounded-lg px-6 md:px-7 py-5 md:py-6 text-white text-sm md:text-base leading-relaxed"
            style={{ background: "var(--accent-heliotrope)" }}
          >
            <span className="body-strong">
              По результатам урока размер гранта на обучение может быть увеличен.
            </span>
          </div>

          <a href="#cta-3" className="reveal inline-block w-full sm:w-auto mt-auto">
            <Button>Записаться на бесплатное занятие</Button>
          </a>
        </div>

        {/* Фото справа — растягивается по высоте текстовой колонки слева */}
        <div className="md:col-span-5 flex reveal">
          <div className="relative w-full rounded-lg overflow-hidden bg-white min-h-[420px] md:min-h-0">
            <Image
              src="/screenshots/demo-photo.svg"
              alt="Ребёнок с преподавателем на индивидуальном занятии Зерокодер"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
