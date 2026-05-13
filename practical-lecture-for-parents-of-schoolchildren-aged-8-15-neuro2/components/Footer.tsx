'use client';

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-canvas py-10 text-ink-700">
      <div className="container-edge">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-body font-bold text-ink-900">ООО «ЗЕРОКОДЕР»</p>
            <p className="mt-2 text-body-sm">
              ИНН 9715401631 · ОГРН 1217700246026
              <br />
              Москва, ул. Большая Новодмитровская 23, этаж 2, каб. 46
            </p>
            <p className="mt-3 text-body-sm">
              <a href="mailto:care@zerocoder.ru" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                care@zerocoder.ru
              </a>{' '}
              ·{' '}
              <a href="tel:+79393283812" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                +7 (939) 328-38-12
              </a>
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-body-sm font-bold uppercase tracking-wider text-ink-500">
              Документы
            </p>
            <ul className="mt-3 grid gap-2 text-body-sm">
              <li>
                <a href="#" className="hover:opacity-70">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Договор-оферта
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-body-sm font-bold uppercase tracking-wider text-ink-500">
              Лицензия
            </p>
            <p className="mt-3 text-body-sm">
              Образовательная лицензия
              <br />
              №Л035-01298-77/00625369
            </p>
            <p className="mt-2 text-body-sm">Резидент Сколково</p>
          </div>
        </div>

        <p className="mt-10 text-caption text-ink-500">
          © {new Date().getFullYear()} ООО «ЗЕРОКОДЕР». Все права защищены.
        </p>
      </div>
    </footer>
  );
}
