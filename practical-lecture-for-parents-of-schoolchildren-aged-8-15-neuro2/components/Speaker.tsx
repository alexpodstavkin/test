'use client';

import { CheckCircle, Quotes } from '@phosphor-icons/react';
import { nbsp } from '@/lib/nbsp';

const credentials = [
  nbsp(
    'Более 6 лет преподавания детям — робототехника, программирование, Scratch, подготовка к соревнованиям с призовыми местами',
  ),
  nbsp(
    'Создатель детского направления в Зерокодере — разработала первый курс НейроТин для детей, провела более 200 онлайн-уроков с детьми и родителями и вебинары для 1000+ слушателей',
  ),
  nbsp(
    'Методист и сценарист детских образовательных программ — 2 года в Алгоритмике, создавала персонажей, комиксы, сюжеты и игровые задачи для детских курсов',
  ),
  nbsp(
    'Создала уникальный курс по Промпт-инжинирингу, не имеющий аналогов на российском рынке',
  ),
  nbsp(
    'Более 10 лет в сфере образования, из них свыше 7 лет — в создании образовательных продуктов для аудитории от 10 до 55+ лет',
  ),
];

export function Speaker() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 max-w-[60ch] md:mb-14">
          <h2 className="h-section">
            {nbsp(
              'Ведёт лекцию-практикум эксперт по нейросетям для детей и родителей',
            )}
          </h2>
        </div>

        <article className="reveal grid gap-5 md:grid-cols-12 md:gap-6">
          <div className="rounded-xl border border-ink-100 bg-white p-6 shadow-card md:col-span-5 md:p-8">
            <div
              className="relative flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-xl"
              style={{
                background:
                  'linear-gradient(180deg, #EAD2FF 0%, #B15EFF 60%, #9B51E0 100%)',
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-[160px] font-extrabold leading-none text-white/30"
                aria-hidden
              >
                КЗ
              </span>
            </div>
          </div>

          <div className="card md:col-span-7 md:p-10">
            <h3 className="text-display-sm font-extrabold text-ink-900">
              Ксения Зайцева
            </h3>

            <ul className="mt-6 grid gap-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-body leading-snug text-ink-700">
                  <CheckCircle
                    weight="fill"
                    size={22}
                    className="mt-0.5 shrink-0 text-cta-500"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-5 md:p-6">
              <Quotes weight="fill" size={22} className="text-brand-500" />
              <p className="mt-2 text-body-lg italic text-ink-900">
                {nbsp(
                  '«Я показываю родителям, что нейросеть — это не угроза учёбе, а самый терпеливый репетитор, которого ребёнок может включить в любую минуту».',
                )}
              </p>
            </blockquote>
          </div>
        </article>
      </div>
    </section>
  );
}
