"use client";

import { Button } from "@/app/components/ui/Button";
import { CONTACT } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function CTA() {
  const ref = useFadeUp();
  const dict = useDictionary();

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
          <Button variant="primary" href={`mailto:${CONTACT.email}`}>
            {dict.cta.button}
          </Button>
        </div>

        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-secondary">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-text transition-colors"
          >
            ✉ {CONTACT.email}
          </a>
          <a
            href={`https://t.me/${CONTACT.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            ✈ {CONTACT.telegram}
          </a>
        </div>
      </div>
    </section>
  );
}
