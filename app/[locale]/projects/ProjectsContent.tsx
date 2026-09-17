"use client";

import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  PROJECT_KEYS,
  PROJECT_META,
  STAT_META,
  type ProjectKey,
} from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";
import {
  Arrow,
  BrowserFrame,
  MonoLabel,
  brandOf,
  splitList,
} from "./projectUi";

const CATEGORIES = [
  "All",
  "SaaS",
  "Marketplace",
  "Platform",
  "Mobile",
  "E-Commerce",
  "Web",
  "Landing",
] as const;

type ViewMode = "grid" | "list";
type Dict = ReturnType<typeof useDictionary>;

/** The metrics strip sits after this many grid cards, once the eye has warmed up. */
const METRICS_AFTER = 6;

function FeaturedCase({
  projectKey,
  dict,
  locale,
}: {
  projectKey: ProjectKey;
  dict: Dict;
  locale: string;
}) {
  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];

  return (
    <Link
      href={`/${locale}/projects/${meta.slug}`}
      className="group card-reveal relative mb-16 grid items-center gap-8 overflow-hidden rounded-card border border-border bg-bg-elevated p-4 transition-colors duration-500 hover:border-accent/30 sm:p-6 lg:grid-cols-[1.35fr_1fr] lg:gap-12 lg:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-40 h-[420px] w-[620px] rounded-full bg-accent-deep/20 opacity-60 blur-[120px] transition-opacity duration-700 group-hover:opacity-100"
      />
      <BrowserFrame
        src={meta.image}
        alt={text.title}
        eager
        className="relative"
      />
      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <MonoLabel className="text-accent">
            {dict.projectsPage.featured}
          </MonoLabel>
          <span className="h-px w-6 bg-border-hover" aria-hidden="true" />
          <MonoLabel>{meta.tag}</MonoLabel>
        </div>
        <h2 className="mb-4 text-3xl font-bold leading-heading tracking-heading text-text md:text-4xl">
          {brandOf(text.title)}
        </h2>
        <p className="mb-8 text-lg leading-snug text-text-secondary md:text-xl">
          {text.tagline}
        </p>
        <ul className="mb-8 divide-y divide-border border-y border-border">
          {splitList(text.facts).map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-3 py-3 text-sm text-text"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {fact}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[12px] text-text-tertiary">
            {meta.stack.slice(0, 4).join(" · ")}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            {dict.projectsPage.viewCase}
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function CaseCard({
  projectKey,
  dict,
  locale,
}: {
  projectKey: ProjectKey;
  dict: Dict;
  locale: string;
}) {
  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];

  return (
    <Link
      href={`/${locale}/projects/${meta.slug}`}
      className="group card-reveal flex flex-col"
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 -bottom-4 h-24 rounded-full bg-accent-deep/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <BrowserFrame
          src={meta.image}
          alt={text.title}
          className="relative transition-colors duration-500 group-hover:border-accent/30"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <div className="mb-2 flex items-center justify-between">
          <MonoLabel>{meta.tag}</MonoLabel>
          <Arrow className="text-text-tertiary transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
        </div>
        <h2 className="mb-1.5 text-lg font-semibold text-text transition-colors duration-300 group-hover:text-accent">
          {brandOf(text.title)}
        </h2>
        <p className="mb-4 text-[15px] leading-snug text-text-secondary">
          {text.tagline}
        </p>
        <p className="mt-auto line-clamp-1 font-mono text-[12px] text-text-tertiary">
          {splitList(text.facts).join(" · ")}
        </p>
      </div>
    </Link>
  );
}

function CaseRow({
  projectKey,
  dict,
  locale,
}: {
  projectKey: ProjectKey;
  dict: Dict;
  locale: string;
}) {
  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];

  return (
    <Link
      href={`/${locale}/projects/${meta.slug}`}
      className="group grid grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-5 md:grid-cols-[128px_minmax(0,1fr)_minmax(0,1.5fr)_120px_auto] md:gap-8"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-bg-surface">
        <img
          src={meta.image}
          alt=""
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 ${
            meta.image.includes("/logo-") ? "object-contain" : "object-cover object-top"
          }`}
        />
      </div>
      <div className="min-w-0">
        <h2 className="text-base font-semibold text-text transition-colors duration-300 group-hover:text-accent md:text-lg">
          {brandOf(text.title)}
        </h2>
        <p className="mt-1 line-clamp-1 text-sm text-text-secondary md:hidden">
          {text.tagline}
        </p>
      </div>
      <p className="hidden text-sm leading-snug text-text-secondary md:block">
        {text.tagline}
      </p>
      <span className="hidden md:block">
        <MonoLabel>{meta.tag}</MonoLabel>
      </span>
      <Arrow className="text-text-tertiary transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
    </Link>
  );
}

function MetricsStrip({ dict }: { dict: Dict }) {
  return (
    <div className="col-span-full my-4 grid grid-cols-2 border-y border-border lg:grid-cols-4">
      <div className="col-span-2 flex items-center py-8 lg:col-span-1 lg:pr-8">
        <p className="text-lg leading-snug text-text">
          {dict.projectsPage.metricsLabel}
        </p>
      </div>
      {(["projects", "years", "industries"] as const).map((key) => (
        <div
          key={key}
          className="border-border py-8 lg:border-l lg:pl-8"
        >
          <div className="text-4xl font-bold tabular-nums tracking-heading text-text md:text-5xl">
            {STAT_META[key].value}
          </div>
          <div className="mt-2 text-sm text-text-tertiary">
            {dict.stats[key]}
          </div>
        </div>
      ))}
    </div>
  );
}

function ViewToggle({
  viewMode,
  setViewMode,
  dict,
}: {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  dict: Dict;
}) {
  const btn = (mode: ViewMode, label: string, icon: React.ReactNode) => (
    <button
      type="button"
      onClick={() => setViewMode(mode)}
      aria-pressed={viewMode === mode}
      aria-label={label}
      title={label}
      className={`flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md transition-colors duration-200 ${
        viewMode === mode
          ? "bg-bg-hover text-text"
          : "text-text-tertiary hover:text-text"
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-bg-elevated p-1">
      {btn(
        "grid",
        dict.projectsPage.gridView,
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>,
      )}
      {btn(
        "list",
        dict.projectsPage.listView,
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 3h12M1 7h12M1 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>,
      )}
    </div>
  );
}

export default function ProjectsContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const countFor = (cat: (typeof CATEGORIES)[number]) =>
    cat === "All"
      ? PROJECT_KEYS.length
      : PROJECT_KEYS.filter((k) => PROJECT_META[k].tag === cat).length;

  const filtered: ProjectKey[] =
    filter === "All"
      ? [...PROJECT_KEYS]
      : PROJECT_KEYS.filter((k) => PROJECT_META[k].tag === filter);

  const [featuredKey, ...restKeys] = filtered;
  const showMetrics = filter === "All" && restKeys.length > METRICS_AFTER;

  return (
    <main className="pb-20 pt-32 md:pb-28 md:pt-40" ref={ref}>
      <div className="mx-auto max-w-container px-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="fade-up mb-10 text-sm text-text-tertiary">
          <ol className="flex items-center gap-2">
            <li>
              <Link href={`/${locale}`} className="transition-colors hover:text-text">
                {dict.projectsPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text">{dict.projectsPage.breadcrumbProjects}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="fade-up mb-12 flex items-end justify-between gap-8 md:mb-16">
          <div>
            <div className="mb-5">
              <MonoLabel className="text-accent">{dict.projectsPage.label}</MonoLabel>
            </div>
            <h1 className="mb-5 text-5xl font-bold leading-[1.02] tracking-heading text-text md:text-6xl lg:text-7xl">
              {dict.projectsPage.title}
            </h1>
            <p className="max-w-xl text-base leading-body text-text-secondary md:text-lg">
              {dict.projectsPage.sub}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="hidden select-none text-[120px] font-bold leading-[0.8] tracking-heading text-white/[0.07] tabular-nums md:block lg:text-[168px]"
          >
            {String(PROJECT_KEYS.length).padStart(2, "0")}
          </div>
        </header>

        {/* Filters + view */}
        <div className="fade-up mb-10 flex flex-col justify-between gap-4 border-b border-border pb-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-1 gap-y-1" role="group" aria-label={dict.projectsPage.label}>
            {CATEGORIES.filter((cat) => countFor(cat) > 0).map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={active}
                  className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-pill px-3 text-sm transition-colors duration-200 ${
                    active
                      ? "bg-bg-hover text-text"
                      : "text-text-tertiary hover:text-text-secondary"
                  }`}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {cat === "All" ? dict.projectsPage.filterAll : cat}
                  <span className="font-mono text-[11px] text-text-tertiary">
                    {countFor(cat)}
                  </span>
                </button>
              );
            })}
          </div>
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} dict={dict} />
        </div>

        {/* Featured case */}
        {featuredKey && viewMode === "grid" && (
          <FeaturedCase projectKey={featuredKey} dict={dict} locale={locale} />
        )}

        {/* Cases */}
        {viewMode === "grid" ? (
          restKeys.length > 0 && (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {restKeys.map((key, i) => (
                <Fragment key={key}>
                  {showMetrics && i === METRICS_AFTER && <MetricsStrip dict={dict} />}
                  <CaseCard projectKey={key} dict={dict} locale={locale} />
                </Fragment>
              ))}
            </div>
          )
        ) : (
          <div className="border-t border-border">
            {filtered.map((key) => (
              <CaseRow key={key} projectKey={key} dict={dict} locale={locale} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="py-20 text-center text-lg text-text-tertiary">
            {dict.projectsPage.noProjects}
          </p>
        )}

        {/* CTA */}
        <section className="fade-up mt-24 text-center md:mt-32">
          <div className="relative overflow-hidden rounded-card border border-border bg-bg-elevated p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-2xl font-bold text-text md:text-3xl">
                {dict.projectsPage.ctaTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-body text-text-secondary md:text-lg">
                {dict.projectsPage.ctaSub}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-pill bg-accent-deep px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
              >
                {dict.projectsPage.ctaButton}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
