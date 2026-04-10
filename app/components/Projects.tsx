"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PROJECT_KEYS, PROJECT_META, TAG_COLORS } from "@/app/lib/constants";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Projects() {
  const ref = useFadeUp();
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <section id="work" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.projects.label}
            title={dict.projects.title}
            subtitle={dict.projects.sub}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECT_KEYS.map((key) => {
            const meta = PROJECT_META[key];
            const text = dict.projectItems[key];
            return (
              <Link
                key={key}
                href={`/${locale}/projects/${meta.slug}`}
                className="fade-up group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-border-hover hover:-translate-y-[3px] transition-all duration-300 block"
              >
                <div className="relative h-[240px] bg-bg-surface flex items-center justify-center overflow-hidden">
                  {meta.image ? (
                    <img
                      src={meta.image}
                      alt={text.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-text-tertiary text-sm font-mono">
                      {meta.tag}
                    </div>
                  )}
                  <span
                    className={`absolute top-4 left-4 text-[11px] font-mono font-medium px-2 py-0.5 rounded-pill border border-border ${
                      TAG_COLORS[meta.tag] || "text-text-secondary"
                    }`}
                  >
                    {meta.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {text.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-body mb-4">
                    {text.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-text-tertiary px-2 py-1 rounded bg-bg-hover border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="fade-up mt-10 text-center">
          <Link
            href={`/${locale}/projects`}
            className="text-sm font-medium text-accent hover:text-accent-deep transition-colors duration-200"
          >
            {dict.projects.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
