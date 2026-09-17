"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  PROJECT_KEYS,
  PROJECT_META,
  type ProjectKey,
} from "@/app/lib/constants";
import { Icon } from "@/app/components/ui/Icon";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";
import {
  Arrow,
  BrowserFrame,
  Check,
  MonoLabel,
  brandOf,
  splitList,
  subtitleOf,
} from "../projectUi";
import { formatDuration } from "@/app/lib/format";

export default function ProjectDetailContent({
  projectKey,
}: {
  projectKey: ProjectKey;
}) {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  const meta = PROJECT_META[projectKey];
  const text = dict.projectItems[projectKey];
  const d = dict.projectDetail;

  // Only some projects carry a long-form technical write-up.
  const caseStudy = (
    dict.caseStudies as Partial<
      Record<ProjectKey, (typeof dict.caseStudies)["servicesHelper"]>
    >
  )[projectKey];

  const nextKey =
    PROJECT_KEYS[(PROJECT_KEYS.indexOf(projectKey) + 1) % PROJECT_KEYS.length];
  const nextMeta = PROJECT_META[nextKey];
  const nextText = dict.projectItems[nextKey];

  const duration = formatDuration(meta.duration, dict.projectsPage.weeks);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

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
            <li>
              <Link href={`/${locale}/projects`} className="transition-colors hover:text-text">
                {dict.projectsPage.breadcrumbProjects}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="max-w-[200px] truncate text-text">{brandOf(text.title)}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="fade-up mb-12 max-w-4xl md:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <MonoLabel className="text-accent">{meta.tag}</MonoLabel>
            {duration && (
              <>
                <span className="h-px w-6 bg-border-hover" aria-hidden="true" />
                <MonoLabel>{duration}</MonoLabel>
              </>
            )}
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-heading text-text md:text-6xl">
            {brandOf(text.title)}
            {subtitleOf(text.title) && (
              <span className="mt-3 block text-2xl font-semibold leading-snug tracking-tight text-text-tertiary md:text-3xl">
                {subtitleOf(text.title)}
              </span>
            )}
          </h1>
          <p className="mb-4 text-xl leading-snug text-text md:text-2xl">{text.tagline}</p>
          <p className="max-w-3xl text-base leading-body text-text-secondary md:text-lg">
            {text.desc}
          </p>
        </header>

        <div className="fade-up relative mb-16 md:mb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-12 h-[60%] w-[80%] -translate-x-1/2 rounded-full bg-accent-deep/25 blur-[140px]"
          />
          <BrowserFrame src={meta.image} alt={text.title} eager natural className="relative" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          {/* At a glance */}
          <aside className="fade-up self-start lg:sticky lg:top-28">
            <div className="mb-5">
              <MonoLabel className="text-accent">{d.atAGlance}</MonoLabel>
            </div>
            <dl className="border-t border-border text-sm">
              <div className="flex justify-between gap-4 border-b border-border py-3">
                <dt className="text-text-tertiary">{d.typeLabel}</dt>
                <dd className="text-right text-text">{meta.tag}</dd>
              </div>
              {duration && (
                <div className="flex justify-between gap-4 border-b border-border py-3">
                  <dt className="text-text-tertiary">{dict.projectsPage.duration}</dt>
                  <dd className="text-right text-text">{duration}</dd>
                </div>
              )}
            </dl>
            <ul className="mt-6 space-y-3">
              {splitList(text.facts).map((fact) => (
                <li key={fact} className="flex gap-3 text-sm leading-snug text-text">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <div className="mb-3">
                <MonoLabel>{dict.projectsPage.techStack}</MonoLabel>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {meta.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border bg-bg-elevated px-2 py-1 font-mono text-[12px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {meta.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-pill border border-accent/30 px-5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
              >
                {d.visitSite}
              </a>
            )}
          </aside>

          <div className="min-w-0">
            {/* Challenge & result */}
            <section className="fade-up grid gap-10 border-b border-border pb-14 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <MonoLabel className="text-orange">{d.taskLabel}</MonoLabel>
                </div>
                <p className="text-lg leading-snug text-text md:text-xl">{text.challenge}</p>
              </div>
              <div>
                <div className="mb-4">
                  <MonoLabel className="text-green">{d.resultLabel}</MonoLabel>
                </div>
                <p className="text-lg leading-snug text-text md:text-xl">{text.result}</p>
              </div>
            </section>

            {/* Key features */}
            <section className="fade-up border-b border-border py-14">
              <h2 className="mb-8">
                <MonoLabel className="text-accent">{d.featuresLabel}</MonoLabel>
              </h2>
              <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {splitList(text.features).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] leading-snug text-text-secondary">
                    <Check className="mt-0.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Deep-dive case study */}
            {caseStudy && (
              <section className="fade-up border-b border-border py-14">
                <h2 className="mb-8">
                  <MonoLabel className="text-accent">{caseStudy.sectionLabel}</MonoLabel>
                </h2>
                <p className="mb-10 text-lg leading-body text-text-secondary">{caseStudy.intro}</p>

                <div className="mb-14 grid grid-cols-2 gap-4 xl:grid-cols-4">
                  {caseStudy.metrics.map((m) => (
                    <div key={m.label} className="rounded-card border border-border bg-bg-elevated p-5">
                      <div className="mb-1 text-2xl font-bold text-accent">{m.value}</div>
                      <div className="text-xs text-text-tertiary">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-14">
                  {caseStudy.sections.map((s) => {
                    // Only some sections carry an illustrating screenshot.
                    const shot = s as { image?: string; caption?: string };
                    return (
                      <article key={s.heading}>
                        <h3 className="mb-4 text-xl font-semibold text-text md:text-2xl">{s.heading}</h3>
                        {s.body.split("\n\n").map((para, i) => (
                          <p key={i} className="mb-4 leading-body text-text-secondary last:mb-0">
                            {para}
                          </p>
                        ))}
                        {shot.image && (
                          <figure className="mt-6">
                            <button
                              type="button"
                              onClick={() => setLightboxIdx(meta.images.indexOf(shot.image!))}
                              className="block w-full cursor-zoom-in overflow-hidden rounded-card border border-border bg-bg-surface transition-colors hover:border-accent/30"
                            >
                              <img src={shot.image} alt={shot.caption || s.heading} loading="lazy" className="h-auto w-full" />
                            </button>
                            {shot.caption && (
                              <figcaption className="mt-3 text-xs text-text-tertiary">{shot.caption}</figcaption>
                            )}
                          </figure>
                        )}
                      </article>
                    );
                  })}
                </div>

                <div className="mt-12 rounded-card border border-accent/20 bg-gradient-to-b from-bg-elevated to-bg-surface p-6 md:p-8">
                  <div className="mb-4">
                    <MonoLabel className="text-green">{caseStudy.outcomeTitle}</MonoLabel>
                  </div>
                  <p className="leading-body text-text-secondary">{caseStudy.outcome}</p>
                </div>
              </section>
            )}

            {/* Gallery — skipped when a case study already shows these inline */}
            {!caseStudy && meta.images.length > 1 && (
              <section className="fade-up py-14">
                <h2 className="mb-8">
                  <MonoLabel className="text-accent">{d.galleryLabel}</MonoLabel>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {meta.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setLightboxIdx(i)}
                      className="group cursor-zoom-in overflow-hidden rounded-card border border-border bg-bg-surface transition-colors hover:border-accent/30"
                    >
                      <img
                        src={src}
                        alt={`${text.title} — ${i + 1}`}
                        loading="lazy"
                        className="h-[220px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Next project */}
        <section className="fade-up mt-24 md:mt-32">
          <div className="mb-6">
            <MonoLabel>{d.nextProject}</MonoLabel>
          </div>
          <Link
            href={`/${locale}/projects/${nextMeta.slug}`}
            className="group relative grid items-center gap-8 overflow-hidden rounded-card border border-border bg-bg-elevated p-4 transition-colors duration-500 hover:border-accent/30 md:grid-cols-[1fr_1.2fr] md:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-[360px] w-[520px] rounded-full bg-accent-deep/15 opacity-50 blur-[120px] transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="relative">
              <div className="mb-3">
                <MonoLabel className="text-accent">{nextMeta.tag}</MonoLabel>
              </div>
              <h2 className="mb-3 text-3xl font-bold tracking-heading text-text transition-colors duration-300 group-hover:text-accent md:text-4xl">
                {brandOf(nextText.title)}
              </h2>
              <p className="leading-snug text-text-secondary md:text-lg">{nextText.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                {dict.projectsPage.viewCase}
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
            <BrowserFrame src={nextMeta.image} alt={nextText.title} className="relative" />
          </Link>
        </section>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 cursor-pointer text-white/70 hover:text-white"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close"
            >
              <Icon name="close" size={22} />
            </button>
            {meta.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer text-white/70 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((lightboxIdx - 1 + meta.images.length) % meta.images.length);
                  }}
                  aria-label="Previous"
                >
                  <Icon name="chevronLeft" size={30} />
                </button>
                <button
                  type="button"
                  className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-white/70 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((lightboxIdx + 1) % meta.images.length);
                  }}
                  aria-label="Next"
                >
                  <Icon name="chevronRight" size={30} />
                </button>
              </>
            )}
            <img
              src={meta.images[lightboxIdx]}
              alt={`${text.title} — ${lightboxIdx + 1}`}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA */}
        <section className="fade-up mt-20 text-center md:mt-28">
          <div className="relative overflow-hidden rounded-card border border-border bg-bg-elevated p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-2xl font-bold text-text md:text-3xl">{d.ctaTitle}</h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-body text-text-secondary md:text-lg">{d.ctaSub}</p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-pill bg-accent-deep px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
              >
                {d.ctaButton}
              </Link>
              <div className="mt-8">
                <Link href={`/${locale}/projects`} className="text-sm text-text-tertiary transition-colors hover:text-text">
                  {d.backToProjects}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
