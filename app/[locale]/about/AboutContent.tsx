"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { STAT_KEYS, STAT_META, TECH_STACK } from "@/app/lib/constants";
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

const INDUSTRY_ICONS: Record<string, string> = {
  saas: "☁",
  fintech: "₿",
  ecommerce: "🛒",
  marketplace: "🏪",
  mobile: "📱",
};

const INDUSTRY_COLORS: Record<string, string> = {
  saas: "text-accent",
  fintech: "text-orange",
  ecommerce: "text-green",
  marketplace: "text-cyan",
  mobile: "text-pink",
};

export default function AboutContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <main className="pt-32 pb-20 md:pt-40 md:pb-28" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="fade-up mb-8 text-sm text-text-tertiary"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-text transition-colors"
              >
                {dict.aboutPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-secondary font-medium">
              {dict.aboutPage.breadcrumbAbout}
            </li>
          </ol>
        </nav>

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
                <div className="text-6xl md:text-7xl font-bold text-accent mb-2 font-mono">
                  {STAT_META.projects.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {dict.stats.projects}
                </div>
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
            {(["craft", "ownership", "transparency", "growth"] as const).map(
              (key) => (
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
              ),
            )}
          </div>
        </section>

        {/* Industries */}
        <section className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.aboutPage.industriesLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-12 max-w-xl">
            {dict.aboutPage.industriesTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(
              ["saas", "fintech", "ecommerce", "marketplace", "mobile"] as const
            ).map((key) => (
              <div
                key={key}
                className="rounded-card border border-border bg-bg-elevated p-5 text-center hover:border-accent/20 transition-all duration-300"
              >
                <div className={`text-2xl mb-3 ${INDUSTRY_COLORS[key]}`}>
                  {INDUSTRY_ICONS[key]}
                </div>
                <div className="text-sm font-medium text-text">
                  {dict.aboutPage.industries[key]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack (brief) */}
        <section className="fade-up mb-20 md:mb-28">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.aboutPage.stackLabel}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-10 max-w-xl">
            {dict.aboutPage.stackTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2 rounded-full border border-border bg-bg-elevated text-text-secondary hover:text-text hover:border-accent/30 transition-all duration-300"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
                {t.name}
              </span>
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
                <div
                  className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${STAT_META[key].color}`}
                >
                  {STAT_META[key].value}
                </div>
                <div className="text-sm text-text-secondary">
                  {dict.stats[key]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="fade-up mb-20 md:mb-28">
          <div className="rounded-card border border-border bg-bg-elevated p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-cyan/5 pointer-events-none" />
            <div className="relative">
              <div className="text-4xl text-accent/20 font-serif mb-4">
                &ldquo;
              </div>
              <blockquote className="text-lg md:text-xl text-text leading-body mb-6 max-w-3xl">
                {dict.testimonials.items.t1.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  {dict.testimonials.items.t1.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">
                    {dict.testimonials.items.t1.name}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {dict.testimonials.items.t1.role} ·{" "}
                    {dict.testimonials.items.t1.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="fade-up text-center">
          <div className="rounded-card border border-border bg-bg-elevated p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                {dict.aboutPage.ctaTitle}
              </h2>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                {dict.aboutPage.ctaSub}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-deep transition-colors duration-300"
                >
                  {dict.aboutPage.ctaButton}
                </Link>
                <Link
                  href={`/${locale}/team`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:text-accent-deep transition-colors duration-300"
                >
                  {dict.aboutPage.viewTeam}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
