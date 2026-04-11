"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { PROJECT_KEYS, PROJECT_META, TAG_COLORS } from "@/app/lib/constants";
import { Button } from "@/app/components/ui/Button";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

function ProjectCard({
  slug,
  locale,
  meta,
  text,
  tagColor,
}: {
  slug: string;
  locale: string;
  meta: { tag: string; image: string };
  text: { title: string };
  tagColor: string;
}) {
  return (
    <Link
      href={`/${locale}/projects/${slug}`}
      className="fade-up group block"
    >
      <div className="relative aspect-[16/12] rounded-2xl overflow-hidden bg-bg-elevated">
        <img
          src={meta.image}
          alt={text.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 mt-5">
        <h3 className="text-base md:text-lg font-bold text-text tracking-tight group-hover:text-accent transition-colors duration-200 leading-snug">
          {text.title}
        </h3>
        <span className={`shrink-0 flex items-center gap-2 text-[11px] font-mono mt-0.5 ${tagColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {meta.tag}
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const ref = useFadeUp();
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const left = PROJECT_KEYS.filter((_, i) => i % 2 === 0);
  const right = PROJECT_KEYS.filter((_, i) => i % 2 === 1);

  return (
    <section id="work" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* ── Header ── */}
        <div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-3">
              {dict.projects.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text max-w-xl">
              {dict.projects.title}
            </h2>
          </div>
          <Button variant="ghost" href={`/${locale}/projects`}>
            {dict.projects.viewAll}
          </Button>
        </div>

        {/* ── Staggered 2-col layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left column — flush */}
          <div className="flex flex-col gap-16">
            {left.map((key) => {
              const meta = PROJECT_META[key];
              const text = dict.projectItems[key];
              const tagColor = TAG_COLORS[meta.tag] || "text-text-secondary";
              return (
                <ProjectCard
                  key={key}
                  slug={meta.slug}
                  locale={locale}
                  meta={meta}
                  text={text}
                  tagColor={tagColor}
                />
              );
            })}
          </div>

          {/* Right column — pushed down */}
          <div className="flex flex-col gap-14 mt-14 md:mt-24">
            {right.map((key) => {
              const meta = PROJECT_META[key];
              const text = dict.projectItems[key];
              const tagColor = TAG_COLORS[meta.tag] || "text-text-secondary";
              return (
                <ProjectCard
                  key={key}
                  slug={meta.slug}
                  locale={locale}
                  meta={meta}
                  text={text}
                  tagColor={tagColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
