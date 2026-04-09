"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { CONTACT } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { locales } from "@/app/lib/i18n/config";

export default function CTA() {
  const ref = useFadeUp();
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  return (
    <section id="contact" className="relative py-20 md:py-[120px] overflow-hidden" ref={ref}>
      <div className="cta-glow" />

      <div className="relative z-10 max-w-container mx-auto px-6 text-center">
        <p className="fade-up text-xs font-mono font-medium uppercase tracking-widest text-accent mb-4">
          {dict.cta.label}
        </p>
        <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-bold tracking-heading leading-heading text-text mb-4">
          {dict.cta.title}
        </h2>
        <p className="fade-up text-text-secondary text-base md:text-lg leading-body max-w-xl mx-auto mb-10">
          {dict.cta.sub}
        </p>

        <div className="fade-up mb-10">
          <Button variant="primary" href={`/${locale}/contact`}>
            {dict.cta.button}
          </Button>
        </div>

        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-secondary">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 hover:text-text transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="14" height="10" rx="2"/><path d="m1 3 7 5 7-5"/>
            </svg>
            {CONTACT.email}
          </a>
          <a
            href={`https://t.me/${CONTACT.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-text transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.93 5.48l-1.31 6.18c-.1.44-.36.55-.73.34l-2.02-1.49-1.09 1.07c-.1.1-.22.22-.44.22l.16-2.28 4.15-3.75c.18-.16-.04-.25-.28-.09L5.27 8.77l-2-.62c-.43-.14-.44-.43.09-.64l7.82-3.02c.36-.13.68.09.56.64l-.81.35z"/>
            </svg>
            {CONTACT.telegram}
          </a>
        </div>
      </div>
    </section>
  );
}
