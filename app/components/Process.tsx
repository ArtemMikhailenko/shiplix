"use client";

import { PROCESS_KEYS, PROCESS_META } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STEP_ICONS = {
  discovery: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  build: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
    </svg>
  ),
  launch: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
} as const;

const STEP_COLORS = ["text-accent", "text-cyan", "text-green"];

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

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33.33%/2)] right-[calc(33.33%/2)] h-px bg-gradient-to-r from-accent/30 via-cyan/30 to-green/30" />

          {PROCESS_KEYS.map((key, i) => (
            <div
              key={key}
              className="fade-up relative p-6 md:p-8 rounded-card border border-border bg-bg-elevated hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg border border-border bg-bg-surface flex items-center justify-center ${STEP_COLORS[i]}`}>
                  {STEP_ICONS[key]}
                </div>
                <span className="text-sm font-mono font-medium text-accent">
                  {PROCESS_META[key].number}
                </span>
              </div>
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
