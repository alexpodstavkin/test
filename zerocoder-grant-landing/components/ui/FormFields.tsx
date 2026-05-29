"use client";

import { useState, FormEvent } from "react";
import { Button } from "./Button";
import { leadSubmit } from "@/lib/leadSubmit";

interface FormFieldsProps {
  formId: string;
  buttonLabel?: string;
  variant?: "onLight" | "onDark";
}

export function FormFields({
  formId,
  buttonLabel = "Получить грант на обучение",
  variant = "onLight",
}: FormFieldsProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const inputBase =
    "w-full h-14 px-4 rounded-lg text-[15px] bg-white text-[var(--n-shark-1)] placeholder:text-[var(--n-mine-shaft)]/70 transition-all duration-200 outline-none";
  const inputBorder =
    variant === "onDark"
      ? "ring-1 ring-transparent focus:ring-[var(--accent-heliotrope)]"
      : "ring-1 ring-[rgba(26,26,26,0.12)] focus:ring-[var(--accent-heliotrope)]";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    const ok = await leadSubmit({ name, phone, email, formId });
    setState(ok ? "ok" : "err");
    if (ok) {
      setName("");
      setPhone("");
      setEmail("");
    }
  }

  const helperColor =
    variant === "onDark" ? "text-white/70" : "text-[var(--n-mine-shaft)]";

  if (state === "ok") {
    return (
      <div className="rounded-2xl bg-[var(--surface-cta)]/15 p-6 text-[var(--n-shark-1)]">
        <p className="body-strong">Заявка принята.</p>
        <p className="mt-2 text-sm">
          Свяжемся в течение 15 минут, чтобы согласовать удобное время бесплатного занятия.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <label className="block">
        <span className="sr-only">Имя ребёнка</span>
        <input
          required
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="Имя ребёнка"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputBase} ${inputBorder}`}
        />
      </label>

      <label className="block">
        <span className="sr-only">Номер телефона</span>
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`${inputBase} ${inputBorder}`}
        />
      </label>

      <label className="block">
        <span className="sr-only">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputBase} ${inputBorder}`}
        />
      </label>

      <Button
        type="submit"
        fullWidth
        withArrow={false}
        disabled={state === "sending"}
      >
        {state === "sending" ? "Отправляем…" : buttonLabel}
      </Button>

      <p className={`text-xs leading-snug ${helperColor}`}>
        Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
        и политикой конфиденциальности ООО «Зерокодер».
      </p>

      {state === "err" && (
        <p className="text-sm text-red-500">
          Не получилось отправить заявку. Попробуйте ещё раз или напишите нам в чат.
        </p>
      )}
    </form>
  );
}
