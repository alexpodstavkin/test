import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink-100 bg-white/95 px-4 py-3 backdrop-blur md:hidden"
      role="region"
      aria-label="Регистрация на лекцию"
    >
      <a href="#register" className="btn-primary !w-full">
        Зарегистрироваться бесплатно
        <ArrowRight weight="bold" size={18} />
      </a>
    </div>
  );
}
