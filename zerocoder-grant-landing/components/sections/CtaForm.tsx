import { FormFields } from "../ui/FormFields";

interface CtaFormProps {
  id: string;
  title: string;
  highlight: string;
  subtitle?: string;
  buttonLabel?: string;
  variant?: "purple" | "light";
}

export function CtaForm({
  id,
  title,
  highlight,
  subtitle,
  buttonLabel,
  variant = "purple",
}: CtaFormProps) {
  const isDark = variant === "purple";

  const parts = title.split(highlight);
  const renderedTitle = (
    <>
      {parts[0]}
      <span
        style={{
          color: isDark ? "var(--accent-heliotrope)" : "var(--surface-cta-hover)",
        }}
      >
        {highlight}
      </span>
      {parts[1]}
    </>
  );

  return (
    <section
      id={id}
      className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-7 bg-[var(--n-alabaster)]"
    >
      <div
        className={`max-w-[1320px] mx-auto reveal rounded-2xl p-6 md:p-10 lg:p-12 ${
          isDark
            ? "text-white"
            : "bg-white text-[var(--n-shark-1)] soft-shadow"
        }`}
        style={isDark ? { background: "var(--surface-dark)" } : undefined}
      >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="md:col-span-7 flex flex-col gap-5">
          <h2 className="reveal text-5xl md:text-6xl font-bold tracking-[-0.02em] leading-[1.05]">
            {renderedTitle}
          </h2>
          {subtitle && (
            <p
              className={`reveal text-base md:text-lg leading-relaxed max-w-[560px] ${
                isDark ? "text-white/90" : "text-[var(--n-mine-shaft)]"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="md:col-span-5 reveal">
          <div
            className={`rounded-lg p-5 md:p-7 ${
              isDark ? "bg-white" : "bg-[var(--n-alabaster)] hairline"
            }`}
          >
            <FormFields formId={id} buttonLabel={buttonLabel} variant="onLight" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
