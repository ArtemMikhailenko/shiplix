"use client";

import { CLIENTS } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Clients() {
  const dict = useDictionary();
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 md:py-16 border-b border-border overflow-hidden">
      <div className="max-w-container mx-auto px-6 mb-8">
        <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary text-center">
          {dict.clients.label}
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="inline-flex items-center px-6 text-sm font-medium text-text-tertiary whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-bg-hover mr-3" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
