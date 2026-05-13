export function Footer() {
  return (
    <footer className="section-pad bg-surface-canvas">
      <div className="container-edge">
        <div className="card flex flex-col gap-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="logo-mark text-base font-extrabold">З</span>
              <span className="text-lg font-extrabold tracking-tight text-ink-900">
                Зерокодер
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink-700">
              <a
                href="mailto:care@zerocoder.ru"
                className="transition-opacity hover:opacity-70"
              >
                care@zerocoder.ru
              </a>
              <span aria-hidden className="text-ink-300">
                ·
              </span>
              <a
                href="tel:+79393283812"
                className="transition-opacity hover:opacity-70"
              >
                +7 (939) 328-38-12
              </a>
            </div>
          </div>

          <hr className="border-ink-100" />

          <div className="grid gap-4 text-sm leading-relaxed text-ink-500 md:grid-cols-12">
            <p className="md:col-span-7">
              ООО «Зерокодер» · ИНН 9715401631 · ОГРН 1217700246026 ·{' '}
              <br className="hidden md:inline" />
              г. Москва, ул. Большая Новодмитровская, 23, этаж 2, каб. 46
            </p>
            <p className="md:col-span-5">
              Лицензия на образовательную деятельность №Л035-01298-77/00625369 ·{' '}
              <br className="hidden md:inline" />
              Резидент инновационного центра «Сколково»
            </p>
          </div>

          <p className="text-xs text-ink-300">
            © {new Date().getFullYear()} ООО «Зерокодер». Все права защищены.
            Материалы лекции принадлежат компании.
          </p>
        </div>
      </div>
    </footer>
  );
}
