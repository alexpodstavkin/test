export function Footer() {
  return (
    <footer
      className="reveal px-4 md:px-6 lg:px-8 py-10 md:py-12 text-white"
      style={{ background: "var(--surface-dark)" }}
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-6">
          <div className="flex items-center gap-2.5 mb-4">
            <span
              className="inline-block w-9 h-9 rounded-xl"
              style={{
                background: "var(--accent-heliotrope)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
              aria-hidden
            />
            <span className="font-bold text-lg tracking-[-0.02em]">Зерокодер</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-[460px]">
            Университет Зерокодер — образовательная организация с лицензией
            №Л035-01298-77/00625369. Резидент фонда Сколково.
          </p>
        </div>

        <div className="md:col-span-3 text-sm text-white/70">
          <p className="font-semibold text-white mb-3">ООО «Зерокодер»</p>
          <p>ИНН 9715401631</p>
          <p>ОГРН 1217700246026</p>
        </div>

        <div className="md:col-span-3 text-sm">
          <p className="font-semibold text-white mb-3">Документы</p>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#privacy" className="hover-opacity">
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a href="#offer" className="hover-opacity">
                Договор оферты
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover-opacity">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="max-w-[1320px] mx-auto mt-10 text-xs text-white/50">
        © {new Date().getFullYear()} ООО «Зерокодер». Все права защищены.
      </p>
    </footer>
  );
}
