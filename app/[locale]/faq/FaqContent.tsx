"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;
const STAT_KEYS = ["stat1", "stat2", "stat3", "stat4"] as const;
const POPULAR_INDICES = [0, 1, 2];

const ITEM_COLORS = [
  "text-accent",
  "text-cyan",
  "text-green",
  "text-orange",
  "text-pink",
  "text-accent-deep",
  "text-cyan",
  "text-green",
];

const ITEM_BG = [
  "bg-accent/10",
  "bg-cyan/10",
  "bg-green/10",
  "bg-orange/10",
  "bg-pink/10",
  "bg-accent-deep/10",
  "bg-cyan/10",
  "bg-green/10",
];

export default function FaqContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                {dict.faqPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-secondary font-medium">
              {dict.faqPage.breadcrumbFaq}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="fade-up mb-16 md:mb-20">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.faqPage.label}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-heading leading-heading text-text mb-6 max-w-3xl">
            {dict.faqPage.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-2xl">
            {dict.faqPage.sub}
          </p>
        </div>

        {/* Quick Answers */}
        <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20">
          {(["qa1", "qa2", "qa3", "qa4"] as const).map((key) => (
            <div
              key={key}
              className="rounded-card border border-border bg-bg-elevated p-5 hover:border-accent/20 transition-all duration-300"
            >
              <div className="text-sm font-semibold text-text mb-1">
                {dict.faqPage.quickAnswers[key].title}
              </div>
              <div className="text-xs text-text-secondary leading-relaxed">
                {dict.faqPage.quickAnswers[key].desc}
              </div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* FAQ Items — left 2 cols */}
          <div className="lg:col-span-2 fade-up space-y-3">
            {FAQ_KEYS.map((key, i) => {
              const item = dict.faqPage.items[key];
              const isOpen = openIndex === i;
              const isPopular = POPULAR_INDICES.includes(i);
              return (
                <div
                  key={key}
                  className={`rounded-card border transition-colors duration-300 ${
                    isOpen
                      ? "border-border-hover bg-bg-elevated"
                      : "border-border bg-bg hover:border-border-hover"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer group"
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${ITEM_BG[i]} ${ITEM_COLORS[i]}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="flex-1 text-base md:text-lg font-medium text-text group-hover:text-accent transition-colors duration-200">
                      {item.q}
                      {isPopular && (
                        <span className="inline-flex ml-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-accent/10 text-accent align-middle">
                          {dict.faqPage.popularBadge}
                        </span>
                      )}
                    </h3>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-accent border-accent rotate-45" : ""
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke={isOpen ? "white" : "currentColor"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <path d="M6 2v8M2 6h8" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 pl-[4.5rem] text-sm text-text-secondary leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar — right 1 col */}
          <div className="fade-up lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Stats card */}
            <div className="rounded-card border border-border bg-bg-elevated p-6">
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-5">
                {dict.faqPage.sidebar.statsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {STAT_KEYS.map((key) => {
                  const stat = dict.faqPage.sidebar[key];
                  return (
                    <div key={key}>
                      <p className="text-2xl font-bold text-text">
                        {stat.value}
                      </p>
                      <p className="text-xs text-text-tertiary mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact mini card */}
            <div className="rounded-card border border-border bg-bg-elevated p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="text-base font-semibold text-text mb-2">
                  {dict.faqPage.sidebar.contactTitle}
                </h3>
                <p className="text-sm text-text-secondary leading-body mb-4">
                  {dict.faqPage.sidebar.contactSub}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-deep transition-colors duration-200"
                >
                  {dict.faqPage.sidebar.contactCta}
                </Link>
              </div>
            </div>

            {/* Trust badge */}
            <div className="rounded-card border border-border bg-bg-elevated p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green"
                >
                  <path d="M8 1.33l2 4.06 4.48.65-3.24 3.16.76 4.47L8 11.32l-4 2.35.76-4.47L1.52 6.04l4.48-.65L8 1.33z" />
                </svg>
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary">
                  {dict.faqPage.sidebar.trustTitle}
                </p>
              </div>
              <p className="text-sm font-medium text-text">
                {dict.faqPage.sidebar.trustRegions}
              </p>
            </div>

            {/* Email quick link */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-card border border-border bg-bg hover:border-border-hover hover:bg-bg-elevated p-4 transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <rect x="1" y="3" width="14" height="10" rx="2" />
                  <path d="m1 3 7 5 7-5" />
                </svg>
              </span>
              <span className="text-sm text-text-secondary">
                {CONTACT.email}
              </span>
            </a>
          </div>
        </div>

        {/* CTA Block — full width */}
        <div className="fade-up mt-16 md:mt-20">
          <div className="rounded-card border border-border bg-bg-elevated p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-transparent pointer-events-none" />
            <div className="relative text-center">
              <h2 className="text-xl md:text-2xl font-bold text-text mb-3">
                {dict.faqPage.ctaTitle}
              </h2>
              <p className="text-sm text-text-secondary leading-body max-w-lg mx-auto mb-6">
                {dict.faqPage.ctaSub}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-pill bg-accent-deep text-white hover:bg-[#7c3aed] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-all duration-200"
              >
                {dict.faqPage.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
