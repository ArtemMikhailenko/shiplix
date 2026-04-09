"use client";

import { TESTIMONIALS } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Testimonials() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.testimonials.label}
            title={dict.testimonials.title}
            subtitle={dict.testimonials.sub}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="fade-up p-6 md:p-8 rounded-card border border-border bg-bg-elevated hover:border-border-hover transition-all duration-300"
            >
              <blockquote className="text-sm md:text-base text-text leading-body mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-text">{t.name}</p>
                <p className="text-xs text-text-secondary">{t.role}</p>
                <p className="text-xs text-text-tertiary mt-0.5">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
