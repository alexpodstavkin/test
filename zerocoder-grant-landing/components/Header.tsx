import { Button } from "./ui/Button";

const nav = [
  { href: "#program", label: "Программа" },
  { href: "#results", label: "Выгода" },
  { href: "#format", label: "Формат обучения" },
  { href: "#demo-offer", label: "Условия гранта" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[var(--n-seashell)]">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between gap-6 px-4 md:px-6 lg:px-8 h-16 md:h-[72px]">
        <a href="#hero" className="flex items-center gap-2.5 hover-opacity shrink-0">
          <span
            className="inline-block w-9 h-9 rounded-md"
            style={{ background: "var(--accent-heliotrope)" }}
            aria-hidden
          />
          <span className="font-bold text-lg md:text-xl tracking-[-0.01em]">
            Зерокодер
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[var(--n-mine-shaft)] hover-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#cta-1" className="hidden md:block shrink-0">
          <Button>Получить грант</Button>
        </a>
      </div>
    </header>
  );
}
