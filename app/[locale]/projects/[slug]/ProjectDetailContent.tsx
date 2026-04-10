"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  PROJECT_META,
  TAG_COLORS,
  CONTACT,
  type ProjectKey,
} from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";

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

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

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
            <li>
              <Link
                href={`/${locale}/projects`}
                className="hover:text-text transition-colors"
              >
                {dict.projectsPage.breadcrumbProjects}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text truncate max-w-[200px]">{text.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="fade-up mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-pill border border-border ${
                TAG_COLORS[meta.tag] || "text-text-secondary"
              }`}
            >
              {meta.tag}
            </span>
            <span className="text-[10px] font-mono text-text-tertiary px-2.5 py-1 rounded-pill border border-border">
              {meta.duration}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-heading leading-heading text-text mb-6">
            {text.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-3xl">
            {text.desc}
          </p>
        </div>

        {/* Main image */}
        {meta.image && (
          <div className="fade-up mb-16 rounded-card border border-border overflow-hidden bg-bg-surface">
            <img
              src={meta.image}
              alt={text.title}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>
        )}

        {/* Challenge & Result */}
        <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-card border border-border bg-bg-elevated p-6 md:p-8">
            <h2 className="text-[10px] font-mono font-medium uppercase tracking-widest text-orange mb-4">
              {dict.projectsPage.challenge}
            </h2>
            <p className="text-text-secondary leading-body">{text.challenge}</p>
          </div>
          <div className="rounded-card border border-border bg-bg-elevated p-6 md:p-8">
            <h2 className="text-[10px] font-mono font-medium uppercase tracking-widest text-green mb-4">
              {dict.projectsPage.result}
            </h2>
            <p className="text-text-secondary leading-body">{text.result}</p>
          </div>
        </div>

        {/* Key features */}
        {text.features && (
          <section className="fade-up mb-16">
            <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-8">
              {d.featuresLabel}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(text.features as string).split(" · ").map((feature, i) => (
                <div
                  key={i}
                  className="rounded-card border border-border bg-bg-elevated p-5"
                >
                  <div className="text-sm text-text font-medium">{feature}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech stack */}
        <section className="fade-up mb-16">
          <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-8">
            {dict.projectsPage.techStack}
          </h2>
          <div className="flex flex-wrap gap-3">
            {meta.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono text-text-secondary px-4 py-2 rounded-card border border-border bg-bg-elevated hover:border-border-hover transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {meta.images.length > 1 && (
          <section className="fade-up mb-16">
            <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-8">
              {d.galleryLabel}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {meta.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIdx(i)}
                  className="rounded-card border border-border overflow-hidden bg-bg-surface hover:border-accent/30 transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={src}
                    alt={`${text.title} — ${i + 1}`}
                    className="w-full h-[200px] object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl cursor-pointer"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close"
            >
              ✕
            </button>

            {meta.images.length > 1 && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx(
                      (lightboxIdx - 1 + meta.images.length) %
                        meta.images.length,
                    );
                  }}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIdx((lightboxIdx + 1) % meta.images.length);
                  }}
                  aria-label="Next"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={meta.images[lightboxIdx]}
              alt={`${text.title} — ${lightboxIdx + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA */}
        <section className="fade-up mt-20 md:mt-28 text-center">
          <div className="rounded-card border border-border bg-bg-elevated p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                {d.ctaTitle}
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-body max-w-xl mx-auto mb-8">
                {d.ctaSub}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
                >
                  {d.ctaButton}
                </Link>
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-pill border border-border text-text-secondary hover:text-text hover:border-border-hover transition-all duration-200"
                >
                  {d.ctaSchedule}
                </a>
              </div>

              <div className="mt-8">
                <Link
                  href={`/${locale}/projects`}
                  className="text-sm text-text-tertiary hover:text-text transition-colors"
                >
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
