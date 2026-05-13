import { ChatCircleDots, BookOpenText, ListChecks } from '@phosphor-icons/react/dist/ssr';

const items = [
  {
    Icon: ChatCircleDots,
    title: 'Безлимитный доступ к чату ГПТ',
    body: 'Для вас и для ребёнка — без ограничений по запросам, на учёбу и проекты.',
  },
  {
    Icon: BookOpenText,
    title: 'Гайд «10 нейросетей для учёбы»',
    body: 'PDF с разбором, какая нейросеть подходит для каждого школьного предмета.',
  },
  {
    Icon: ListChecks,
    title: 'Пошаговые инструкции',
    body: 'Ко всем практикам лекции — чтобы повторить дома без записи и потерь в качестве.',
  },
];

export function Gifts({ variant = 'full' }: { variant?: 'teaser' | 'full' }) {
  const title = 'Дарим три подарка тем, кто останется до конца';

  return (
    <section className="section-pad" style={{ background: 'var(--ink-800)' }}>
      <div className="container-edge text-white">
        <div className="mb-10 md:mb-14">
          <h2 className="max-w-[20ch] text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 md:p-8"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-ink-900"
                style={{ background: 'var(--cta-500)' }}
              >
                <Icon weight="duotone" size={26} />
              </span>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-base leading-relaxed text-white/75">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
