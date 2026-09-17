// Shared building blocks for the projects index and the case study page.

/** "Zapys24 — SaaS for…" → "Zapys24" */
export const brandOf = (title: string) => title.split(" — ")[0];

/** "Zapys24 — SaaS for…" → "SaaS for…" */
export const subtitleOf = (title: string) =>
  title.split(" — ").slice(1).join(" — ");

export const splitList = (value: string) => value.split(" · ");

export function MonoLabel({
  children,
  className = "text-text-tertiary",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </span>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/**
 * A screenshot framed as a browser window. Brand marks (logo-*.webp) are
 * contained rather than cropped, since they are wide artwork, not pages.
 */
export function BrowserFrame({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const isLogo = src.includes("/logo-");
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div
        className="flex h-7 items-center gap-1.5 border-b border-white/[0.06] bg-bg-hover/60 px-3"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-bg">
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            isLogo ? "object-contain" : "object-cover object-top"
          }`}
        />
      </div>
    </div>
  );
}
