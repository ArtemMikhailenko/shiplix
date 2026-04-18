"use client";

const CAPABILITIES = [
  "SaaS PLATFORMS",
  "MARKETPLACES",
  "MOBILE APPS",
  "FINTECH",
  "E-COMMERCE",
  "AUTOMATION",
  "MVP DEVELOPMENT",
  "LANDING PAGES",
];

export default function Clients() {
  const doubled = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="py-10 md:py-14 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track">
          {doubled.map((cap, i) => (
            <span
              key={`${cap}-${i}`}
              className="inline-flex items-center gap-4 px-4 md:px-6 text-lg md:text-2xl font-mono font-medium text-text-tertiary/40 whitespace-nowrap uppercase tracking-[0.08em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-deep/50 shrink-0" />
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
