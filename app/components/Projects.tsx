"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { PROJECT_KEYS, PROJECT_META } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

function ProjectCard({
  slug,
  locale,
  meta,
  text,
  index,
}: {
  slug: string;
  locale: string;
  meta: { tag: string; stack: string[]; image: string; duration: string };
  text: { title: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  /* ── Image parallax ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/${locale}/projects/${slug}`} className="group block">
        <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-bg-elevated">
          <motion.img
            src={meta.image}
            alt={text.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            style={{ y: imgY, scale: 1.12 }}
          />
          {/* ── Hover overlay with meta ── */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="flex items-center gap-3 flex-wrap">
              {meta.stack.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur-sm px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 ml-auto">
                {meta.duration}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 mt-4">
          <h3 className="text-lg md:text-xl font-semibold text-text tracking-tight group-hover:text-accent transition-colors duration-200 leading-snug">
            {text.title}
          </h3>
          <span className="shrink-0 text-[11px] font-mono text-text-tertiary mt-1 uppercase tracking-wide">
            {meta.tag}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const left = PROJECT_KEYS.filter((_, i) => i % 2 === 0);
  const right = PROJECT_KEYS.filter((_, i) => i % 2 === 1);

  return (
    <section id="work" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-3">
              {dict.projects.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text max-w-xl">
              {dict.projects.title}
            </h2>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="text-sm text-text-secondary hover:text-text transition-colors font-mono"
          >
            {dict.projects.viewAll}
          </Link>
        </motion.div>

        {/* ── Staggered 2-col ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
          <div className="flex flex-col gap-14 lg:gap-16">
            {left.map((key, i) => (
              <ProjectCard
                key={key}
                slug={PROJECT_META[key].slug}
                locale={locale}
                meta={PROJECT_META[key]}
                text={dict.projectItems[key]}
                index={i * 2}
              />
            ))}
          </div>
          <div className="flex flex-col gap-14 lg:gap-16 mt-14 md:mt-24">
            {right.map((key, i) => (
              <ProjectCard
                key={key}
                slug={PROJECT_META[key].slug}
                locale={locale}
                meta={PROJECT_META[key]}
                text={dict.projectItems[key]}
                index={i * 2 + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
