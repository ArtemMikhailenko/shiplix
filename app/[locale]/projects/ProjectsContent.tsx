"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  PROJECT_KEYS,
  PROJECT_META,
  TAG_COLORS,
  STAT_META,
  CONTACT,
  type ProjectKey,
} from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";

const CATEGORIES = ["All", "SaaS", "Marketplace", "Fintech", "Mobile"];

type ViewMode = "grid" | "list";

function ProjectCard({
  projectKey,
  dict,
  viewMode,
  locale,
}: {
  projectKey: ProjectKey;
  dict: ReturnType<typeof useDictionary>;
  viewMode: ViewMode;
  locale: string;
}) {
  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];

  if (viewMode === "grid") {
    return (
      <Link href={`/${locale}/projects/${meta.slug}`} className="block">
        <article className="fade-up group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.15)]">
          <div className="relative h-[200px] bg-bg-surface flex items-center justify-center overflow-hidden">
            {meta.image ? (
              <img
                src={meta.image}
                alt={text.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="text-text-tertiary text-5xl font-mono opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none">
                {meta.tag}
              </div>
            )}
            <span
              className={`absolute top-4 left-4 text-[10px] font-mono font-medium px-2.5 py-1 rounded-pill border border-border bg-bg-elevated/80 backdrop-blur-sm ${
                TAG_COLORS[meta.tag] || "text-text-secondary"
              }`}
            >
              {meta.tag}
            </span>
            <span className="absolute top-4 right-4 text-[10px] font-mono text-text-tertiary px-2.5 py-1 rounded-pill border border-border bg-bg-elevated/80 backdrop-blur-sm">
              {meta.duration}
            </span>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">
              {text.title}
            </h2>
            <p className="text-sm text-text-secondary leading-body mb-5 line-clamp-3">
              {text.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {meta.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded bg-bg-hover border border-border"
                >
                  {tech}
                </span>
              ))}
              {meta.stack.length > 4 && (
                <span className="text-[10px] font-mono text-text-tertiary px-2 py-1">
                  +{meta.stack.length - 4}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/${locale}/projects/${meta.slug}`} className="block">
      <article className="fade-up group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.15)]">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-pill border border-border ${
                    TAG_COLORS[meta.tag] || "text-text-secondary"
                  }`}
                >
                  {meta.tag}
                </span>
                <span className="text-[10px] font-mono text-text-tertiary">
                  {meta.duration}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                {text.title}
              </h2>
              <p className="text-text-secondary leading-body mb-6">
                {text.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-card bg-bg-surface border border-border">
              <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-orange mb-2">
                {dict.projectsPage.challenge}
              </h3>
              <p className="text-sm text-text-secondary leading-body">
                {text.challenge}
              </p>
            </div>
            <div className="p-4 rounded-card bg-bg-surface border border-border">
              <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-green mb-2">
                {dict.projectsPage.result}
              </h3>
              <p className="text-sm text-text-secondary leading-body">
                {text.result}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-text-tertiary mb-2">
              {dict.projectsPage.techStack}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {meta.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded bg-bg-hover border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function FeaturedProject({
  projectKey,
  dict,
  locale,
}: {
  projectKey: ProjectKey;
  dict: ReturnType<typeof useDictionary>;
  locale: string;
}) {
  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];

  return (
    <Link href={`/${locale}/projects/${meta.slug}`} className="block">
      <article className="fade-up group relative rounded-card border border-accent/20 bg-gradient-to-b from-bg-elevated to-bg-surface overflow-hidden mb-12 hover:border-accent/40 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-[220px] lg:h-full bg-bg-surface flex items-center justify-center overflow-hidden">
            {meta.image ? (
              <img
                src={meta.image}
                alt={text.title}
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
            ) : (
              <div className="text-text-tertiary text-7xl font-mono opacity-[0.05] select-none">
                {meta.tag}
              </div>
            )}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-pill bg-accent-deep text-white">
                {dict.projectsPage.featured}
              </span>
              <span
                className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-pill border border-border bg-bg-elevated/80 backdrop-blur-sm ${
                  TAG_COLORS[meta.tag] || "text-text-secondary"
                }`}
              >
                {meta.tag}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-text-tertiary">
                {meta.duration}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
              {text.title}
            </h2>
            <p className="text-text-secondary leading-body mb-8 text-base">
              {text.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-card bg-bg-surface/50 border border-border">
                <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-orange mb-2">
                  {dict.projectsPage.challenge}
                </h3>
                <p className="text-sm text-text-secondary leading-body">
                  {text.challenge}
                </p>
              </div>
              <div className="p-4 rounded-card bg-bg-surface/50 border border-border">
                <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-green mb-2">
                  {dict.projectsPage.result}
                </h3>
                <p className="text-sm text-text-secondary leading-body">
                  {text.result}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-mono font-medium uppercase tracking-widest text-text-tertiary mb-3">
                {dict.projectsPage.techStack}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {meta.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-text-tertiary px-2.5 py-1.5 rounded bg-bg-hover border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function ProjectsContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filtered: ProjectKey[] =
    filter === "All"
      ? [...PROJECT_KEYS]
      : PROJECT_KEYS.filter((k) => PROJECT_META[k].tag === filter);

  const featuredKey = filtered[0];
  const restKeys = filtered.slice(1);

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
                {dict.projectsPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text">
              {dict.projectsPage.breadcrumbProjects}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="fade-up mb-12 md:mb-16">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.projectsPage.label}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-heading leading-heading text-text mb-4">
            {dict.projectsPage.title}
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-body max-w-2xl">
            {dict.projectsPage.sub}
          </p>
        </div>

        {/* Stats bar */}
        <div className="fade-up flex flex-wrap items-center gap-6 md:gap-10 mb-12 md:mb-16">
          {(["projects", "years", "industries"] as const).map((key) => (
            <div key={key} className="flex items-baseline gap-2">
              <span
                className={`text-2xl md:text-3xl font-bold ${STAT_META[key].color}`}
              >
                {STAT_META[key].value}
              </span>
              <span className="text-sm text-text-secondary">
                {dict.stats[key]}
              </span>
            </div>
          ))}
        </div>

        {/* Filter + View toggle */}
        <div className="fade-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-medium px-4 py-2 rounded-pill transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-accent-deep text-white"
                    : "bg-bg-elevated text-text-secondary border border-border hover:border-border-hover hover:text-text"
                }`}
              >
                {cat === "All" ? dict.projectsPage.filterAll : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-bg-elevated border border-border">
            <button
              onClick={() => setViewMode("grid")}
              className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-accent-deep text-white"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="8"
                    y="1"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="1"
                    y="8"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                {dict.projectsPage.gridView}
              </span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                viewMode === "list"
                  ? "bg-accent-deep text-white"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect
                    x="1"
                    y="1.5"
                    width="12"
                    height="3"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="1"
                    y="6.5"
                    width="12"
                    height="3"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="1"
                    y="11.5"
                    width="12"
                    height="1.5"
                    rx="0.75"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
                {dict.projectsPage.listView}
              </span>
            </button>
          </div>
        </div>

        {/* Results counter */}
        <div className="fade-up mb-8 text-sm text-text-tertiary">
          {dict.projectsPage.showing.replace(
            "{count}",
            String(filtered.length),
          )}
        </div>

        {/* Featured project */}
        {featuredKey && (
          <FeaturedProject
            projectKey={featuredKey}
            dict={dict}
            locale={locale}
          />
        )}

        {/* Rest of projects */}
        {restKeys.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : "grid grid-cols-1 gap-6"
            }
          >
            {restKeys.map((key) => (
              <ProjectCard
                key={key}
                projectKey={key}
                dict={dict}
                viewMode={viewMode}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          !featuredKey && (
            <div className="fade-up text-center py-20">
              <p className="text-text-tertiary text-lg">
                {dict.projectsPage.noProjects}
              </p>
            </div>
          )
        )}

        {/* CTA */}
        <section className="fade-up mt-20 md:mt-28 text-center">
          <div className="rounded-card border border-border bg-bg-elevated p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                {dict.projectsPage.ctaTitle}
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-body max-w-xl mx-auto mb-8">
                {dict.projectsPage.ctaSub}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
                >
                  {dict.projectsPage.ctaButton}
                </Link>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-pill border border-border text-text-secondary hover:text-text hover:border-border-hover transition-all duration-200"
                >
                  {dict.projectsPage.ctaSchedule}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
