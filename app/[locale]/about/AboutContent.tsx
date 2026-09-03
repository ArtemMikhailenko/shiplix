"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  STAT_KEYS,
  STAT_META,
  TECH_STACK,
  PROJECT_META,
  type ProjectKey,
} from "@/app/lib/constants";
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

/** The project that actually backs each industry claim. */
const INDUSTRY_PROOF = {
  saas: "inciCore",
  fintech: "fasqon",
  ecommerce: "orthoDent",
  marketplace: "marketplace",
  mobile: "zapys24Mobile",
} as const satisfies Record<string, ProjectKey>;

/** Product screens shown under the projects-shipped figure. */
const PROOF_SHOTS = [
  "servicesHelper",
  "similiaStudio",
  "transfersLviv",
] as const satisfies readonly ProjectKey[];

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
        <div className="fade-up glow mb-20 md:mb-28">
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
            <div className="relative rounded-card border border-border bg-bg-elevated overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-cyan/5 pointer-events-none" />
              <div className="relative p-8 md:p-10 text-center">
                <div className="text-6xl md:text-7xl font-bold text-accent mb-2 font-mono">
                  {STAT_META.projects.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {dict.stats.projects}
                </div>
              </div>
              {/* The number is a claim; the screens behind it are the evidence. */}
              <div className="relative grid grid-cols-3 gap-px bg-border/60">
                {PROOF_SHOTS.map((key) => (
                  <Link
                    key={key}
                    href={`/${locale}/projects/${PROJECT_META[key].slug}`}
                    className="group relative block h-24 md:h-28 overflow-hidden bg-bg-surface"
                  >
                    <img
                      src={PROJECT_META[key].image}
                      alt={dict.projectItems[key].title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </Link>
                ))}
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
          {/*
            Every other section on this page is a uniform grid of cards.
            The story is the most human copy here, so it gets an editorial
            split instead: a lead paragraph at reading size, the rest
            beside it.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-text text-xl md:text-2xl leading-relaxed font-light">
                {dict.aboutPage.storyP1}
              </p>
            </div>
            <div className="lg:col-span-5 space-y-8 lg:pt-2">
              <div className="relative pl-6 border-l-2 border-cyan/20">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-cyan" />
                <p className="text-text-secondary leading-body">
                  {dict.aboutPage.storyP2}
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-green/20">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-green" />
                <p className="text-text-secondary leading-body">
                  {dict.aboutPage.storyP3}
                </p>
              </div>
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
            ).map((key) => {
              const proof = INDUSTRY_PROOF[key];
              return (
                <Link
                  key={key}
                  href={`/${locale}/projects/${PROJECT_META[proof].slug}`}
                  className="group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(124,58,237,0.15)] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 transition-all duration-300"
                >
                  {/* the client who proves this industry, not a generic glyph */}
                  <div className="h-20 overflow-hidden">
                    <img
                      src={PROJECT_META[proof].logo}
                      alt={dict.projectItems[proof].title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-sm font-medium text-text group-hover:text-accent transition-colors duration-300">
                      {dict.aboutPage.industries[key]}
                    </div>
                  </div>
                </Link>
              );
            })}
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

        {/* CTA */}
        <section className="fade-up glow text-center">
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
