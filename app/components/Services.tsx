"use client";

import { SERVICE_KEYS, SERVICE_META } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Services() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section id="services" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.services.label}
            title={dict.services.title}
            subtitle={dict.services.sub}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-card overflow-hidden">
          {SERVICE_KEYS.map((key) => (
            <div
              key={key}
              className="fade-up bg-bg p-6 md:p-8 hover:bg-bg-elevated transition-colors duration-300"
            >
              <span className={`text-xl mb-4 block ${SERVICE_META[key].color}`}>
                {SERVICE_META[key].icon}
              </span>
              <h3 className="text-base font-semibold text-text mb-2">
                {dict.services.items[key].title}
              </h3>
              <p className="text-sm text-text-secondary leading-body">
                {dict.services.items[key].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
