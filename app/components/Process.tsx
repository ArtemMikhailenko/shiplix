"use client";

import { PROCESS_KEYS, PROCESS_META } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Process() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section id="process" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.process.label}
            title={dict.process.title}
            subtitle={dict.process.sub}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROCESS_KEYS.map((key) => (
            <div
              key={key}
              className="fade-up p-6 md:p-8 rounded-card border border-border bg-bg-elevated hover:border-border-hover transition-all duration-300"
            >
              <span className="text-sm font-mono font-medium text-accent block mb-4">
                {PROCESS_META[key].number}
              </span>
              <h3 className="text-base font-semibold text-text mb-3">
                {dict.process.steps[key].title}
              </h3>
              <p className="text-sm text-text-secondary leading-body">
                {dict.process.steps[key].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
