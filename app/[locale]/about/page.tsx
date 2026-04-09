"use client";

import { usePathname } from "next/navigation";
import { STAT_KEYS, STAT_META } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";

const VALUE_ICONS: Record<string, string> = {
  craft: "◆",
  ownership: "⬡",
  transparency: "◎",
  growth: "▲",
};

const VALUE_COLORS: Record<string, string> = {
  craft: "text-accent",
  ownership: "text-cyan",
  transparency: "text-green",
  growth: "text-orange",
};

export default function AboutPage() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <main className="pt-32 pb-20 md:pt-40 md:pb-28" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* Hero */}
        <div className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.aboutPage.missionLabel}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-heading leading-heading text-text mb-6 max-w-3xl">
            {dict.aboutPage.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-2xl">
            {dict.aboutPage.sub}
          </p>
        </div>

        {/* Mission */}
        <section className="fade-up mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">
                {dict.aboutPage.missionTitle}
              </h2>
              <p className="text-text-secondary leading-body text-base md:text-lg">
                {dict.aboutPage.missionText}
              </p>
            </div>
            <div className="relative rounded-card border border-border bg-bg-elevated p-8 md:p-10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-cyan/5 pointer-events-none" />
              <div className="relative text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent mb-2 font-mono">20+</div>
                <div className="text-text-secondary text-sm">{dict.stats.projects}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.aboutPage.storyLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-10 max-w-xl">
            {dict.aboutPage.storyTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative pl-6 border-l-2 border-accent/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-accent" />
              <p className="text-text-secondary leading-body">
                {dict.aboutPage.storyP1}
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-cyan/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-cyan" />
              <p className="text-text-secondary leading-body">
                {dict.aboutPage.storyP2}
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-green/20">
              <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-green" />
              <p className="text-text-secondary leading-body">
                {dict.aboutPage.storyP3}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.aboutPage.valuesLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-12 max-w-xl">
            {dict.aboutPage.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["craft", "ownership", "transparency", "growth"] as const).map((key) => (
              <div
                key={key}
                className="group rounded-card border border-border bg-bg-elevated p-6 md:p-8 hover:border-accent/20 transition-all duration-500 hover:shadow-[0_4px_24px_-8px_rgba(139,92,246,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <span className={`text-xl ${VALUE_COLORS[key]} mt-0.5`}>
                    {VALUE_ICONS[key]}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                      {dict.aboutPage.values[key].title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-body">
                      {dict.aboutPage.values[key].desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-10">
            {dict.aboutPage.numbersLabel}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STAT_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-card border border-border bg-bg-elevated p-6 md:p-8 text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${STAT_META[key].color}`}>
                  {STAT_META[key].value}
                </div>
                <div className="text-sm text-text-secondary">{dict.stats[key]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Team */}
        <section className="fade-up text-center">
          <div className="rounded-card border border-border bg-bg-elevated p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
            <div className="relative">
              <a
                href={`/${locale}/team`}
                className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-accent hover:text-accent-deep transition-colors duration-300"
              >
                {dict.aboutPage.viewTeam}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
