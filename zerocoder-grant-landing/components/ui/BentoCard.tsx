import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  variant?: "white" | "light" | "dark" | "accent";
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<NonNullable<BentoCardProps["variant"]>, string> = {
  white: "bg-white text-[var(--n-shark-1)]",
  light: "bg-[var(--n-alabaster)] text-[var(--n-shark-1)]",
  dark: "bg-[var(--n-shark-1)] text-white",
  accent: "bg-[var(--accent-heliotrope)] text-white",
};

export function BentoCard({
  children,
  className = "",
  variant = "light",
  as: Tag = "div",
}: BentoCardProps) {
  return (
    <Tag
      className={`rounded-lg p-6 md:p-8 ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
