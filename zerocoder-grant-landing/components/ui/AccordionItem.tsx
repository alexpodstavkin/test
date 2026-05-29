"use client";

import { useState, ReactNode } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

interface AccordionItemProps {
  index: number;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  index,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--n-seashell)] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-5 md:py-6 flex items-center gap-4 md:gap-6 text-left hover-opacity"
      >
        <span className="text-sm md:text-base font-semibold text-[var(--n-mine-shaft)] w-8 md:w-10 shrink-0 tabular-nums">
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex-1 text-lg md:text-2xl font-bold text-[var(--n-shark-1)]">
          {title}
        </span>
        <span
          className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-[var(--n-seashell)] flex items-center justify-center text-[var(--n-shark-1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          aria-hidden
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          {open ? <Minus size={18} weight="regular" /> : <Plus size={18} weight="regular" />}
        </span>
      </button>
      <div
        className={`grid transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.25s ease, opacity 0.2s ease-in-out",
        }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 md:pb-8 pl-12 md:pl-16 pr-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
