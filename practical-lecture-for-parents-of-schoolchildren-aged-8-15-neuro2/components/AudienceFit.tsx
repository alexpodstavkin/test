'use client';

import {
  SmileySticker,
  SunHorizon,
  PiggyBank,
  ClockCountdown,
} from '@phosphor-icons/react';
import { nbsp } from '@/lib/nbsp';

type Card = {
  icon: typeof SmileySticker;
  badge: string;
  badgeBg: string;
  title: string;
  body: string;
  gradient: string;
  accent: string;
};

const cards: Card[] = [
  {
    icon: SmileySticker,
    badge: 'Без стресса',
    badgeBg: '#FFE9A8',
    title: nbsp('У ребёнка нет давления оценок и дедлайнов'),
    body: nbsp(
      'Летом учёба не воспринимается как обязаловка — нет контрольных, домашек и страха «получить двойку». Ребёнок открыт к новому, и нейросети заходят как игра, а не как ещё одна нагрузка.',
    ),
    gradient:
      'linear-gradient(160deg, #FFF1C9 0%, #FFE9A8 60%, #FFB740 110%)',
    accent: '#B97A00',
  },
  {
    icon: SunHorizon,
    badge: 'Не в ущерб лету',
    badgeBg: '#D6F3FF',
    title: nbsp('Учёба не отбирает прогулки, дачу и друзей'),
    body: nbsp(
      'Тридцать минут с ИИ-помощником в день — и ребёнок свободен. Никаких ежедневных репетиторов и поездок в кружки. Можно совмещать с лагерем, дачей, поездкой к бабушке.',
    ),
    gradient:
      'linear-gradient(160deg, #E3F8FF 0%, #BCE9FF 55%, #7AC9FF 110%)',
    accent: '#0E6EA8',
  },
  {
    icon: PiggyBank,
    badge: 'Экономия 150 000 ₽',
    badgeBg: '#D3F7DF',
    title: nbsp('За лето даём базу, в школе идём вперёд без репетиторов'),
    body: nbsp(
      'Подтянули пробелы за каникулы — в новом учебном году не нужны репетиторы. Средняя семья экономит от 150 000 ₽ в год: эти деньги остаются на отпуск, секции или подарки.',
    ),
    gradient:
      'linear-gradient(160deg, #E6F9EC 0%, #BFEFCF 55%, #5BC56D 115%)',
    accent: '#0E6F30',
  },
  {
    icon: ClockCountdown,
    badge: '2 часа = весь год',
    badgeBg: '#F0E3FF',
    title: nbsp('Один вечер сейчас — спокойный новый учебный год'),
    body: nbsp(
      'Лекция-практикум идёт 2 часа. Этого хватит, чтобы собрать ИИ-помощника по учебнику ребёнка и пользоваться им всё лето — а потом и весь учебный год.',
    ),
    gradient:
      'linear-gradient(160deg, #F4EAFF 0%, #DDC3FF 55%, #B15EFF 115%)',
    accent: '#5B2DCD',
  },
];

export function AudienceFit() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 md:py-28">
      {/* Sunny ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-80px] h-[360px] w-[360px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,183,64,0.55), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-120px] left-[-60px] h-[300px] w-[300px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(122,201,255,0.55), transparent 70%)',
        }}
      />

      <div className="container-edge relative">
        <div className="mb-12 max-w-[60ch] md:mb-16">
          <span className="badge-brand mb-4">
            <SunHorizon weight="fill" size={14} />
            Лето — лучшее время
          </span>
          <h2 className="h-section">
            {nbsp(
              'Почему лекцию-практикум стоит посетить именно во время летних каникул',
            )}
          </h2>
          <p className="mt-5 text-body-lg text-ink-700">
            {nbsp(
              'Каникулы — окно возможностей: у ребёнка нет школьного стресса, а у вас есть время и силы, чтобы выстроить новые правила игры с нейросетями. К сентябрю ребёнок придёт подготовленным — и весь год пройдёт без репетиторов.',
            )}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cards.map(({ icon: Icon, badge, badgeBg, title, body, gradient, accent }) => (
            <article
              key={title}
              className="reveal group relative flex flex-col overflow-hidden rounded-xl shadow-card transition-opacity hover:shadow-cardHover"
              style={{ background: gradient }}
            >
              {/* Decorative orb */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
                style={{ background: 'rgba(255,255,255,0.9)' }}
              />

              <div className="flex flex-1 flex-col gap-6 p-7 md:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/85 backdrop-blur"
                    style={{ color: accent }}
                  >
                    <Icon weight="duotone" size={26} />
                  </span>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-caption font-bold uppercase tracking-[0.08em]"
                    style={{ background: badgeBg, color: accent }}
                  >
                    {badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3
                    className="text-heading-sm font-extrabold leading-snug md:text-heading"
                    style={{ color: accent }}
                  >
                    {title}
                  </h3>
                  <p className="text-body leading-snug text-ink-900/80">
                    {body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
