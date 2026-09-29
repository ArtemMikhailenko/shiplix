"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { BrowserFrame, Check } from "../projects/projectUi";
import {
  DotField,
  GradientRule,
  SectionBand,
  SectionLabel,
} from "@/app/components/ui/Decor";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { locales } from "@/app/lib/i18n/config";
import {
  MIGRATE_STAT_KEYS,
  MIGRATE_ITEM_KEYS,
  MIGRATE_STEP_KEYS,
  MIGRATE_POINT_KEYS,
  MIGRATE_FAQ_KEYS,
  MIGRATE_PLAN_KEYS,
  MIGRATE_PLAN_META,
  PROJECT_META,
  CONTACT,
} from "@/app/lib/constants";

/** Muted cross for the "what a builder costs you" column. */
function Cross() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function MigrateContent() {
  const dict = useDictionary();
  const d = dict.migrate;
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  // The offer converts in a chat, not a form: send people straight there.
  const tgHref = `https://t.me/${CONTACT.telegram.replace("@", "")}`;

  return (
    <main className="pb-20 pt-32 md:pb-28 md:pt-40">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative">
        {/* The glow sits behind the headline, not on it: a masked radial
            keeps the edge from showing as a visible circle. */}
        <DotField className="top-[-180px] h-[560px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-glow blur-[100px]"
        />
        <div className="relative mx-auto max-w-container px-6">
          <div className="fade-up max-w-3xl">
            <SectionLabel>{d.label}</SectionLabel>
            <h1 className="mt-5 text-4xl font-bold tracking-heading leading-heading text-text md:text-5xl lg:text-6xl">
              {d.h1}
            </h1>
            <p className="mt-6 text-lg leading-body text-text-secondary md:text-xl">
              {d.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={tgHref}>{d.ctaPrimary}</Button>
              <Button href={`/${locale}/projects`} variant="ghost">
                {d.ctaSecondary}
              </Button>
            </div>
            <p className="mt-5 font-mono text-[13px] text-text-tertiary">
              {d.trustLine}
            </p>
          </div>

          {/* Proof before features: our own measurements of 79 sites. */}
          <div className="fade-up mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
            {MIGRATE_STAT_KEYS.map((key) => (
              <div key={key} className="bg-bg-elevated px-6 py-7">
                <p className="text-3xl font-bold tracking-heading text-text md:text-4xl">
                  {d.stats[key].value}
                </p>
                <p className="mt-2 text-sm leading-body text-text-secondary">
                  {d.stats[key].label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[12px] text-text-tertiary">
            {d.statsNote}
          </p>
        </div>
      </section>

      {/* ── Builder vs custom ──────────────────────────────────── */}
      <section className="py-20 md:py-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="orange">{d.compareLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.compareTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="card-reveal rounded-card border border-border bg-bg-elevated p-7">
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-text-tertiary">
                {d.beforeTitle}
              </p>
              <ul className="mt-6 space-y-4">
                {MIGRATE_POINT_KEYS.map((key) => (
                  <li key={key} className="flex gap-3 text-text-tertiary">
                    <span className="mt-0.5 shrink-0">
                      <Cross />
                    </span>
                    <span className="text-[15px] leading-body">
                      {d.before[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-reveal relative overflow-hidden rounded-card border border-accent/25 bg-bg-elevated p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-glow blur-[70px]"
              />
              <p className="relative font-mono text-[13px] uppercase tracking-[0.14em] text-accent">
                {d.afterTitle}
              </p>
              <ul className="relative mt-6 space-y-4">
                {MIGRATE_POINT_KEYS.map((key) => (
                  <li key={key} className="flex gap-3 text-text">
                    <span className="mt-0.5 shrink-0 text-accent">
                      <Check />
                    </span>
                    <span className="text-[15px] leading-body">
                      {d.after[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What the move includes ─────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="cyan">{d.includesLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.includesTitle}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {MIGRATE_ITEM_KEYS.map((key) => (
              <div key={key} className="bg-bg-elevated p-7">
                <h3 className="text-base font-semibold text-text">
                  {d.includes[key].title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-body text-text-secondary">
                  {d.includes[key].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A large visual between two text blocks: the page otherwise runs as
          card grid after card grid. */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-10 h-64 w-[720px] -translate-x-1/2 rounded-full bg-accent-glow blur-[90px]"
            />
            <BrowserFrame
              src={PROJECT_META.artexClean.image}
              alt={dict.projectItems.artexClean.title}
              className="relative mx-auto max-w-4xl"
            />
            <p className="relative mt-4 text-center text-sm text-text-tertiary">
              {d.includes.i5.title} — {dict.projectItems.artexClean.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-container px-6">
        <GradientRule className="mb-20 md:mb-[120px]" />
      </div>

      {/* ── Price ──────────────────────────────────────────────── */}
      <SectionBand className="mb-20 py-20 md:mb-[120px] md:py-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="green">{d.priceLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.priceTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {MIGRATE_PLAN_KEYS.map((key) => (
              <div
                key={key}
                className="card-reveal flex flex-col rounded-card border border-border bg-bg-elevated p-7"
              >
                <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-text-tertiary">
                  {d.plans[key].name}
                </p>
                <p className="mt-4 text-4xl font-bold tracking-heading text-text">
                  {MIGRATE_PLAN_META[key].price}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {d.plans[key].term}
                </p>
                <p className="mt-5 text-[15px] leading-body text-text-secondary">
                  {d.plans[key].desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-body text-text-tertiary">
            {d.priceNote}
          </p>
        </div>
      </SectionBand>

      {/* ── How the move runs ──────────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="accent">{d.processLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.processTitle}
            </h2>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {MIGRATE_STEP_KEYS.map((key, i) => (
              <li key={key} className="bg-bg-elevated p-7">
                <span className="font-mono text-[13px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-text">
                  {d.steps[key].title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-body text-text-secondary">
                  {d.steps[key].desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Proof ──────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="cyan">{d.proofLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.proofTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {(["iCleaning", "rentaLviv"] as const).map((key) => (
              <Link
                key={key}
                href={`/${locale}/projects/${PROJECT_META[key].slug}`}
                className="group card-reveal overflow-hidden rounded-card border border-border bg-bg-elevated transition-colors hover:border-border-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-bg">
                  <img
                    src={PROJECT_META[key].image}
                    alt={dict.projectItems[key].title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-accent">
                    {dict.projectItems[key].title.split(" — ")[0]}
                  </h3>
                  <p className="mt-2 text-[15px] leading-body text-text-secondary">
                    {dict.projectItems[key].tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <SectionLabel accent="orange">{d.faqLabel}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {d.faqTitle}
            </h2>
          </div>

          <div className="divide-y divide-border overflow-hidden rounded-card border border-border bg-bg-elevated">
            {MIGRATE_FAQ_KEYS.map((key) => (
              <details key={key} className="group px-7 py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-text marker:hidden">
                  {d.faq[key].q}
                  <span className="mt-1 shrink-0 font-mono text-accent transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[15px] leading-body text-text-secondary">
                  {d.faq[key].a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up relative overflow-hidden rounded-card border border-accent/25 bg-bg-elevated px-8 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-[680px] -translate-x-1/2 rounded-full bg-accent-glow blur-[90px]"
            />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl">
              {d.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-body text-text-secondary md:text-lg">
              {d.ctaSub}
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <Button href={tgHref}>{d.ctaButton}</Button>
              <Button href={`/${locale}/contact`} variant="ghost">
                {d.ctaSecondaryBottom}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
