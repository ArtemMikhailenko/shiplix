"use client";

import { TECH_STACK } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Stack() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section
      id="stack"
      className="py-20 md:py-[120px] bg-bg-elevated border-t border-b border-border"
      ref={ref}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.stack.label}
            title={dict.stack.title}
            subtitle={dict.stack.sub}
          />
        </div>

        <div className="fade-up flex flex-wrap gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text rounded-card border border-border bg-bg hover:border-border-hover hover:bg-bg-surface transition-all duration-200 cursor-default"
            >
              <span
                className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
