"use client";

import { WHY_US_KEYS } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function WhyUs() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section className="py-20 md:py-[120px] bg-bg-elevated border-t border-b border-border" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.whyUs.label}
            title={dict.whyUs.title}
            subtitle={dict.whyUs.sub}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WHY_US_KEYS.map((key, i) => (
            <div
              key={key}
              className="fade-up flex gap-4 p-6 rounded-card border border-border bg-bg hover:border-border-hover transition-all duration-300"
            >
              <span className="text-sm font-mono font-medium text-accent shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-text mb-2">
                  {dict.whyUs.items[key].title}
                </h3>
                <p className="text-sm text-text-secondary leading-body">
                  {dict.whyUs.items[key].desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
