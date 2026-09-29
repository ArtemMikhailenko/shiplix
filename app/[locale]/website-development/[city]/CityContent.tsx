"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { Check, MonoLabel } from "../../projects/projectUi";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { locales } from "@/app/lib/i18n/config";
import {
  CITY_META,
  CITY_NICHE_KEYS,
  CITY_FAQ_KEYS,
  PROJECT_META,
  SERVICE_PAGE_META,
  CONTACT,
  type CityKey,
} from "@/app/lib/constants";

export default function CityContent({ cityKey }: { cityKey: CityKey }) {
  const dict = useDictionary();
  const c = dict.cities;
  const t = c.items[cityKey];
  const meta = CITY_META[cityKey];
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const tgHref = `https://t.me/${CONTACT.telegram.replace("@", "")}`;

  // The three services a local business actually asks for, in page order.
  const localServices = ["websites", "ecommerce", "crm"] as const;

  return (
    <main className="pb-20 pt-32 md:pb-28 md:pt-40">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent-glow blur-[100px]"
        />
        <div className="relative mx-auto max-w-container px-6">
          <nav aria-label="Breadcrumb" className="fade-up mb-10 text-sm text-text-tertiary">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${locale}`} className="transition-colors hover:text-text">
                  {c.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/${locale}/services/${SERVICE_PAGE_META.websites.slug}`}
                  className="transition-colors hover:text-text"
                >
                  {dict.servicePages.items.websites.label}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text-secondary">{t.city}</li>
            </ol>
          </nav>

          <div className="fade-up max-w-3xl">
            <MonoLabel className="text-accent">{t.label}</MonoLabel>
            <h1 className="mt-5 text-4xl font-bold tracking-heading leading-heading text-text md:text-5xl lg:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-6 text-lg leading-body text-text-secondary md:text-xl">
              {t.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={tgHref}>{c.ctaPrimary}</Button>
              <Button href={`/${locale}/projects`} variant="ghost">
                {c.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* What we measured in this city, not a generic claim. */}
          <div className="fade-up mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3">
            <div className="bg-bg-elevated px-6 py-7">
              <p className="text-3xl font-bold tracking-heading text-text md:text-4xl">
                {meta.measured}
              </p>
              <p className="mt-2 text-sm leading-body text-text-secondary">
                {c.statMeasured}
              </p>
            </div>
            <div className="bg-bg-elevated px-6 py-7">
              <p className="text-3xl font-bold tracking-heading text-text md:text-4xl">
                {meta.slow}
              </p>
              <p className="mt-2 text-sm leading-body text-text-secondary">
                {c.statSlow}
              </p>
            </div>
            <div className="bg-bg-elevated px-6 py-7">
              <p className="text-3xl font-bold tracking-heading text-text md:text-4xl">
                {meta.avgLoad} {c.seconds}
              </p>
              <p className="mt-2 text-sm leading-body text-text-secondary">
                {c.statAvg}
              </p>
            </div>
          </div>
          <p className="mt-3 font-mono text-[12px] text-text-tertiary">{t.statsNote}</p>
        </div>
      </section>

      {/* ── What the audit found ───────────────────────────────── */}
      <section className="py-20 md:py-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <MonoLabel className="text-accent">{c.observedLabel}</MonoLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {t.observedTitle}
            </h2>
            <p className="mt-5 text-base leading-body text-text-secondary md:text-lg">
              {t.observedBody}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="card-reveal rounded-card border border-border bg-bg-elevated p-7">
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-text-tertiary">
                {c.platformsTitle}
              </p>
              <ul className="mt-6 space-y-3">
                {meta.platforms.map((p) => (
                  <li key={p.name} className="flex items-center gap-4">
                    <span className="w-24 shrink-0 text-[15px] text-text">
                      {p.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 rounded-pill bg-accent/60"
                      style={{ width: `${(p.count / meta.measured) * 100 * 2}%` }}
                    />
                    <span className="font-mono text-[13px] text-text-tertiary">
                      {p.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-reveal rounded-card border border-border bg-bg-elevated p-7">
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-text-tertiary">
                {c.nichesTitle}
              </p>
              <ul className="mt-6 space-y-4">
                {CITY_NICHE_KEYS.map((key) => (
                  <li key={key} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-accent">
                      <Check />
                    </span>
                    <span className="text-[15px] leading-body text-text-secondary">
                      {t.niches[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we build ──────────────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <MonoLabel className="text-accent">{c.servicesLabel}</MonoLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {c.servicesTitle}
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
            {localServices.map((key) => (
              <Link
                key={key}
                href={`/${locale}/services/${SERVICE_PAGE_META[key].slug}`}
                className="group bg-bg-elevated p-7 transition-colors hover:bg-bg-hover"
              >
                <h3 className="text-base font-semibold text-text transition-colors group-hover:text-accent">
                  {dict.servicePages.items[key].label}
                </h3>
                <p className="mt-2.5 text-[15px] leading-body text-text-secondary">
                  {dict.servicePages.items[key].intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof ──────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-[120px]">
        <div className="mx-auto max-w-container px-6">
          <div className="fade-up mb-12 max-w-2xl md:mb-16">
            <MonoLabel className="text-accent">{c.proofLabel}</MonoLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {t.proofTitle}
            </h2>
            <p className="mt-5 text-base leading-body text-text-secondary md:text-lg">
              {t.proofNote}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {meta.projects.map((key) => (
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
            <MonoLabel className="text-accent">{c.faqLabel}</MonoLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-heading leading-heading text-text md:text-4xl lg:text-[2.75rem]">
              {c.faqTitle}
            </h2>
          </div>

          <div className="divide-y divide-border overflow-hidden rounded-card border border-border bg-bg-elevated">
            {CITY_FAQ_KEYS.map((key) => (
              <details key={key} className="group px-7 py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-text marker:hidden">
                  {t.faq[key].q}
                  <span className="mt-1 shrink-0 font-mono text-accent transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[15px] leading-body text-text-secondary">
                  {t.faq[key].a}
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
              {t.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-body text-text-secondary md:text-lg">
              {c.ctaSub}
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <Button href={tgHref}>{c.ctaButton}</Button>
              <Button href={`/${locale}/contact`} variant="ghost">
                {c.ctaSecondaryBottom}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
