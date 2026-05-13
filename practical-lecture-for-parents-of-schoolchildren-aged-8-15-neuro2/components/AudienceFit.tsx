'use client';

import {
  GraduationCap,
  DeviceMobile,
  ShieldWarning,
  Lightbulb,
} from '@phosphor-icons/react';

const items = [
  {
    icon: GraduationCap,
    text: 'У ребёнка снижается успеваемость в школе и копятся пробелы в знаниях, а репетиторы стоят слишком дорого',
  },
  {
    icon: DeviceMobile,
    text: 'Ребёнок проводит время в телефоне без цели — хочется направить это время на развитие',
  },
  {
    icon: ShieldWarning,
    text: 'Опасаетесь, что ИИ научит ребёнка списывать — а не учиться',
  },
  {
    icon: Lightbulb,
    text: 'Хотите развить в ребёнке самостоятельность, креативность, критическое мышление',
  },
];

export function AudienceFit() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-edge">
        <div className="mb-10 max-w-[52ch] md:mb-14">
          <h2 className="h-section">
            Вам точно необходимо посетить лекцию-практикум, если...
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {items.map(({ icon: Icon, text }, i) => (
            <article
              key={i}
              className="card reveal flex items-start gap-4 hover:shadow-cardHover"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <Icon weight="duotone" size={24} />
              </span>
              <p className="text-body-lg leading-snug text-ink-900">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
