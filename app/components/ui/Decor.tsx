/**
 * Decorative primitives shared by the marketing pages.
 *
 * They exist because long pages built only from bordered card grids read as
 * one uninterrupted block of text. Each piece here breaks that rhythm without
 * introducing a new colour or spacing scale: everything below uses the tokens
 * already in tailwind.config.ts.
 *
 * None of them animate opacity — a frozen frame must never leave content
 * invisible (see .fade-up in globals.css for the same rule).
 */

/** Section accents, so consecutive sections do not all read violet. */
export const ACCENTS = ["accent", "cyan", "green", "orange"] as const;
export type Accent = (typeof ACCENTS)[number];

const ACCENT_TEXT: Record<Accent, string> = {
  accent: "text-accent",
  cyan: "text-cyan",
  green: "text-green",
  orange: "text-orange",
};

export const accentText = (a: Accent) => ACCENT_TEXT[a];

/**
 * A faint dot field that fades out towards the edges. The mask is what keeps
 * it from reading as a visible rectangle pasted onto the page.
 */
export function DotField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
      }}
    />
  );
}

/** A hairline that brightens in the middle — a divider that is not a flat 1px. */
export function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent ${className}`}
    />
  );
}

/**
 * A full-bleed band in the elevated tone. Changing the ground under a section
 * is the cheapest way to stop a long page reading as one surface.
 */
export function SectionBand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-y border-border bg-bg-elevated ${className}`}>
      {children}
    </section>
  );
}

/** An oversized figure for a statistic, with the accent bleeding into it. */
export function StatFigure({
  value,
  label,
  accent = "accent",
}: {
  value: string;
  label: string;
  accent?: Accent;
}) {
  return (
    <div>
      <p
        className={`text-4xl font-bold tracking-heading md:text-5xl ${ACCENT_TEXT[accent]}`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm leading-body text-text-secondary">{label}</p>
    </div>
  );
}

/**
 * The small mono label that opens a section, with a leading rule so the eye
 * catches the start of a new block while scrolling.
 */
export function SectionLabel({
  children,
  accent = "accent",
}: {
  children: React.ReactNode;
  accent?: Accent;
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`h-px w-8 ${
          accent === "accent"
            ? "bg-accent"
            : accent === "cyan"
              ? "bg-cyan"
              : accent === "green"
                ? "bg-green"
                : "bg-orange"
        }`}
      />
      <span
        className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${ACCENT_TEXT[accent]}`}
      >
        {children}
      </span>
    </span>
  );
}
