"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { locales } from "@/app/lib/i18n/config";

const BUDGET_KEYS = ["small", "medium", "large", "enterprise"] as const;

export default function ContactContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

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
                {dict.contactPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-secondary font-medium">
              {dict.contactPage.breadcrumbContact}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="fade-up mb-16 md:mb-20">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.contactPage.label}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-heading leading-heading text-text mb-6 max-w-3xl">
            {dict.contactPage.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-2xl">
            {dict.contactPage.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="fade-up space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-2"
                  >
                    {dict.contactPage.formName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-card bg-bg-elevated border border-border text-text text-sm placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-2"
                  >
                    {dict.contactPage.formEmail}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-card bg-bg-elevated border border-border text-text text-sm placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-2">
                  {dict.contactPage.formBudget}
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_KEYS.map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          budget: dict.contactPage.formBudgetOptions[key],
                        })
                      }
                      className={`text-sm font-medium px-4 py-2 rounded-pill transition-all duration-200 cursor-pointer ${
                        formData.budget ===
                        dict.contactPage.formBudgetOptions[key]
                          ? "bg-accent-deep text-white"
                          : "bg-bg-elevated text-text-secondary border border-border hover:border-border-hover hover:text-text"
                      }`}
                    >
                      {dict.contactPage.formBudgetOptions[key]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-2"
                >
                  {dict.contactPage.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-card bg-bg-elevated border border-border text-text text-sm placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-pill transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  {dict.contactPage.formSubmit}
                </button>
                <p className="text-xs text-text-tertiary">
                  {dict.contactPage.privacyNote}
                </p>
              </div>

              {status === "success" && (
                <p className="text-green text-sm">
                  {dict.contactPage.formSuccess}
                </p>
              )}
            </form>

            {/* Trust signals */}
            <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
              {(["t1", "t2", "t3", "t4"] as const).map((key) => (
                <div
                  key={key}
                  className="rounded-card border border-border bg-bg-elevated p-4 text-center"
                >
                  <div className="text-xs font-medium text-text">
                    {dict.contactPage.trust[key]}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini FAQ */}
            <div className="fade-up mt-12">
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
                {dict.contactPage.miniFaqLabel}
              </h3>
              <div className="space-y-4">
                {(["mf1", "mf2", "mf3"] as const).map((key) => (
                  <div
                    key={key}
                    className="rounded-card border border-border bg-bg-elevated p-5"
                  >
                    <h4 className="text-sm font-semibold text-text mb-2">
                      {dict.contactPage.miniFaq[key].q}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {dict.contactPage.miniFaq[key].a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="fade-up rounded-card border border-border bg-bg-elevated p-6 md:p-8 sticky top-24">
              <h3 className="text-sm font-semibold text-text mb-6">
                {dict.contactPage.orReach}
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                    <path d="m1 3 7 5 7-5" />
                  </svg>
                  {CONTACT.email}
                </a>
                <a
                  href={`https://t.me/${CONTACT.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.93 5.48l-1.31 6.18c-.1.44-.36.55-.73.34l-2.02-1.49-1.09 1.07c-.1.1-.22.22-.44.22l.16-2.28 4.15-3.75c.18-.16-.04-.25-.28-.09L5.27 8.77l-2-.62c-.43-.14-.44-.43.09-.64l7.82-3.02c.36-.13.68.09.56.64l-.81.35z" />
                  </svg>
                  {CONTACT.telegram}
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M13.63 0H2.37C1.06 0 0 1.06 0 2.37v11.26C0 14.94 1.06 16 2.37 16h11.26c1.31 0 2.37-1.06 2.37-2.37V2.37C16 1.06 14.94 0 13.63 0zM4.75 13.63H2.37V6h2.38v7.63zM3.56 5.02c-.77 0-1.39-.62-1.39-1.39s.62-1.39 1.39-1.39 1.39.62 1.39 1.39-.62 1.39-1.39 1.39zm10.07 8.61h-2.38V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.77H6.2V6h2.28v1.04h.03c.32-.6 1.1-1.24 2.26-1.24 2.42 0 2.86 1.59 2.86 3.66v4.17z" />
                  </svg>
                  LinkedIn
                </a>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <a
                  href={CONTACT.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 text-sm font-medium rounded-pill bg-accent-deep text-white hover:bg-[#7c3aed] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-all duration-200"
                >
                  {dict.contactPage.scheduleCall}
                </a>
                <p className="text-xs text-text-tertiary text-center">
                  {dict.contactPage.responseTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
