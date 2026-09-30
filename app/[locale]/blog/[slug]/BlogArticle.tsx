"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Post } from "@/app/lib/blog/types";
import { PROJECT_META } from "@/app/lib/constants";
import { BlogBlocks, slugifyHeading } from "@/app/components/BlogBlocks";
import { Arrow } from "@/app/[locale]/projects/projectUi";
import { DotField } from "@/app/components/ui/Decor";
import { Button } from "@/app/components/ui/Button";

type Labels = {
  label: string;
  readSuffix: string;
  backToBlog: string;
  relatedTitle: string;
  breadcrumbHome: string;
  contentsTitle: string;
  ctaTitle: string;
  ctaSub: string;
  ctaButton: string;
};

export default function BlogArticle({
  post,
  locale,
  labels,
  contactHref,
}: {
  post: Post;
  locale: string;
  labels: Labels;
  contactHref: string;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const headings = useMemo(
    () =>
      post.blocks
        .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
        .map((b) => ({ id: slugifyHeading(b.text), text: b.text })),
    [post.blocks]
  );

  /* Reading progress across the article body only, not the whole document —
     the footer should not count as part of the article. */
  useEffect(() => {
    const onScroll = () => {
      const el = bodyRef.current;
      if (!el) return;
      const start = el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      const seen = window.scrollY - start;
      setProgress(total <= 0 ? 0 : Math.min(1, Math.max(0, seen / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Which section the reader is in. rootMargin pins the trigger line near the
     top of the viewport so the rail changes at the same moment the heading
     reaches it. */
  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const date = new Date(post.date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="pb-20 md:pb-28">
      {/* Progress sits under the fixed nav, full bleed. */}
      <div
        aria-hidden="true"
        className="fixed left-0 right-0 top-14 z-40 h-[2px] bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-accent-deep via-accent to-cyan transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Editorial hero ─────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-32 md:pt-40">
        <DotField className="top-0 h-[620px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-80px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent-glow blur-[110px]"
        />
        <div className="relative mx-auto max-w-container px-6">
          <nav aria-label="Breadcrumb" className="fade-up mb-10 text-sm text-text-tertiary">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${locale}`} className="transition-colors hover:text-text">
                  {labels.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/${locale}/blog`} className="transition-colors hover:text-text">
                  {labels.label}
                </Link>
              </li>
            </ol>
          </nav>

          <div className="fade-up max-w-4xl">
            <span className="inline-flex items-center rounded-pill border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
              {post.tag}
            </span>
            <h1 className="mt-6 text-[2.25rem] font-bold tracking-heading leading-[1.05] text-text sm:text-5xl lg:text-[4rem]">
              {post.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-[1.55] text-text-secondary md:text-2xl">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-text-tertiary">
              <time dateTime={post.date}>{date}</time>
              <span aria-hidden="true" className="h-3 w-px bg-border-hover" />
              <span>
                {post.readMinutes} {labels.readSuffix}
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-border-hover" />
              <span>Shiplix</span>
            </div>
          </div>

          {post.heroProject && (
            <figure className="fade-up relative mt-14 overflow-hidden rounded-card border border-white/[0.08] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]">
              <img
                src={PROJECT_META[post.heroProject].image}
                alt=""
                loading="eager"
                decoding="async"
                className="block aspect-[16/7] w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"
              />
            </figure>
          )}
        </div>
      </header>

      {/* ── Body with a sticky contents rail ───────────────────── */}
      <div ref={bodyRef} className="mx-auto mt-16 max-w-container px-6 md:mt-20">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <div className="min-w-0 max-w-[68ch]">
            <BlogBlocks blocks={post.blocks} />
          </div>

          {headings.length > 1 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                  {labels.contentsTitle}
                </p>
                <ul className="mt-5 space-y-3 border-l border-border pl-4">
                  {headings.map((h) => {
                    const active = h.id === activeId;
                    return (
                      <li key={h.id} className="relative">
                        {active && (
                          <span
                            aria-hidden="true"
                            className="absolute -left-[17px] top-1 h-4 w-px bg-accent"
                          />
                        )}
                        <a
                          href={`#${h.id}`}
                          className={`block text-[13px] leading-snug transition-colors ${
                            active
                              ? "text-text"
                              : "text-text-tertiary hover:text-text-secondary"
                          }`}
                        >
                          {h.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* ── Closing ────────────────────────────────────────────── */}
      <div className="mx-auto mt-20 max-w-container px-6 md:mt-28">
        <div className="relative overflow-hidden rounded-card border border-accent/25 bg-bg-elevated px-8 py-12 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-accent-glow blur-[90px]"
          />
          <div className="relative md:flex md:items-center md:justify-between md:gap-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-heading leading-heading text-text md:text-3xl">
                {labels.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-body text-text-secondary">
                {labels.ctaSub}
              </p>
            </div>
            <div className="mt-8 shrink-0 md:mt-0">
              <Button href={contactHref}>{labels.ctaButton}</Button>
            </div>
          </div>
        </div>

        {post.related && post.related.length > 0 && (
          <div className="mt-14">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
              {labels.relatedTitle}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {post.related.map((link) => (
                <Link
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="group flex items-center justify-between gap-4 rounded-card border border-border bg-bg-elevated px-6 py-5 transition-colors hover:border-border-hover"
                >
                  <span className="text-[17px] text-text transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="shrink-0 text-text-tertiary transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <Link
            href={`/${locale}/blog`}
            className="font-mono text-sm text-text-tertiary transition-colors hover:text-text"
          >
            ← {labels.backToBlog}
          </Link>
        </div>
      </div>
    </main>
  );
}
