import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
  /** Зарезервировано для обратной совместимости — стрелка убрана в kids.zerocoder.ru стиле */
  withArrow?: boolean;
}

export function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  withArrow: _withArrow,
  ...rest
}: ButtonProps) {
  const base =
    "cta-magnetic inline-flex items-center justify-center font-semibold rounded-lg h-14 px-7 min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed text-[15px] tracking-[-0.005em]";
  const styles =
    variant === "primary"
      ? "bg-[var(--surface-cta)] text-white"
      : "bg-transparent text-[var(--n-shark-1)] ring-1 ring-[rgba(26,26,26,0.12)] hover:bg-[var(--n-alabaster)]";
  const width = fullWidth ? "w-full" : "";
  return (
    <button
      {...rest}
      className={`${base} ${styles} ${width} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
