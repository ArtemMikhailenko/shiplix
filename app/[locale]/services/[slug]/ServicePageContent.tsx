"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SERVICE_PAGE_KEYS,
  SERVICE_PAGE_META,
  SERVICE_WHAT_KEYS,
  SERVICE_FAQ_KEYS,
  SERVICE_DELIVERABLE_KEYS,
  PROJECT_META,
  type ServicePageKey,
} from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";
import { Button } from "@/app/components/ui/Button";

export default function ServicePageContent({
  serviceKey,
}: {
  serviceKey: ServicePageKey;
}) {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  const meta = SERVICE_PAGE_META[serviceKey];
  const text = dict.servicePages.items[serviceKey];
  const shared = dict.servicePages;

  const project = PROJECT_META[meta.project];
  const projectText = dict.projectItems[meta.project];
  const others = SERVICE_PAGE_KEYS.filter((k) => k !== serviceKey);

  return (
    <main className="pt-32 pb-20 md:pt-40 md:pb-28" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="fade-up mb-8 text-sm text-text-tertiary"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-text transition-colors"
              >
                {shared.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/${locale}#services`}
                className="hover:text-text transition-colors"
              >
                {shared.breadcrumbServices}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-secondary font-medium">{text.label}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="fade-up mb-16 md:mb-24">
          <span
            className={`inline-block text-xs font-mono font-medium uppercase tracking-widest mb-6 ${meta.color}`}
          >
            {text.label}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-heading leading-heading text-text mb-6 max-w-4xl">
            {text.h1}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-2xl mb-8">
            {text.intro}
          </p>

          <ul className="flex flex-wrap gap-2 mb-10">
            {([text.p1, text.p2, text.p3] as const).map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-pill border border-border bg-bg-surface text-text-secondary"
              >
                <span className={meta.color} aria-hidden="true">
                  ◆
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/contact`}>{dict.hero.cta1}</Button>
            <Button href={`/${locale}/projects`} variant="ghost">
              {dict.hero.cta2}
            </Button>
          </div>
        </header>

        {/* What we build */}
        <section className="fade-up mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-heading text-text mb-10 md:mb-12">
            {text.whatTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_WHAT_KEYS.map((k, i) => (
              <div
                key={k}
                className="rounded-card border border-border bg-bg-elevated p-6 hover:border-border-hover transition-colors duration-200"
              >
                <span className="block text-xs font-mono text-text-tertiary mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-text mb-2">
                  {text.what[k].title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {text.what[k].desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Deliverables */}
          <section className="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold tracking-heading text-text mb-8">
              {shared.deliverablesTitle}
            </h2>
            <ul className="space-y-3">
              {SERVICE_DELIVERABLE_KEYS.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 shrink-0 ${meta.color}`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <span className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {text.deliverables[k]}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold tracking-heading text-text mb-8">
              {shared.stackTitle}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {meta.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-pill border border-border bg-bg-surface text-text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Case study */}
        <section className="fade-up mb-16 md:mb-24">
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {shared.caseLabel}
          </p>
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="group block rounded-card border border-border bg-bg-elevated p-6 md:p-8 hover:border-border-hover transition-colors duration-200"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary">
                {project.tag}
              </span>
              <span className="text-xs font-mono text-text-tertiary">
                {project.duration}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-text mb-3">
              {projectText.title}
            </h3>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-5 max-w-3xl">
              {projectText.result}
            </p>
            <span className="text-sm font-medium text-accent group-hover:underline">
              {shared.caseCta}
            </span>
          </Link>
        </section>

        {/* FAQ */}
        <section className="fade-up mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-heading text-text mb-10">
            {shared.faqTitle}
          </h2>
          <div className="space-y-3">
            {SERVICE_FAQ_KEYS.map((k) => (
              <details
                key={k}
                className="group rounded-card border border-border bg-bg-elevated px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-text">
                  {text.faq[k].q}
                  <span
                    className="mt-0.5 shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                  {text.faq[k].a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="fade-up rounded-card border border-border bg-bg-elevated p-8 md:p-12 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold tracking-heading text-text mb-4 max-w-2xl">
            {text.ctaTitle}
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-body max-w-2xl mb-8">
            {text.ctaSub}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/contact`}>{dict.hero.cta1}</Button>
            <Button href={`/${locale}/faq`} variant="ghost">
              {dict.nav.faq}
            </Button>
          </div>
        </section>

        {/* Other services — internal linking */}
        <section className="fade-up">
          <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-6">
            {shared.otherTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((k) => (
              <Link
                key={k}
                href={`/${locale}/services/${SERVICE_PAGE_META[k].slug}`}
                className="group rounded-card border border-border bg-bg-elevated p-6 hover:border-border-hover transition-colors duration-200"
              >
                <span
                  className={`block text-xs font-mono uppercase tracking-widest mb-3 ${SERVICE_PAGE_META[k].color}`}
                >
                  {dict.servicePages.items[k].label}
                </span>
                <span className="block text-base font-semibold text-text group-hover:text-accent transition-colors">
                  {dict.servicePages.items[k].h1}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
