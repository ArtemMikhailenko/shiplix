"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useTransform, animate } from "framer-motion";
import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STATS = [
  { value: 50, suffix: "+", key: "projects" as const },
  { value: 3, suffix: "+", key: "years" as const },
  { value: 98, suffix: "%", key: "delivery" as const },
  { value: 5, suffix: "+", key: "industries" as const },
];

function AnimatedNum({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const t = setTimeout(() => {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }, 1200);
    return () => clearTimeout(t);
  }, [count, value]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
}

/* ── Word-by-word stagger reveal ── */
function StaggerText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: delay + i * 0.06,
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Parallax scroll on hero elements ── */
function useHeroParallax() {
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y < vh * 1.2) {
          const t = y / vh;
          if (headingRef.current) {
            headingRef.current.style.transform = `translateY(${y * 0.2}px)`;
            headingRef.current.style.opacity = `${1 - t * 0.8}`;
          }
          if (contentRef.current) {
            contentRef.current.style.transform = `translateY(${y * 0.1}px)`;
            contentRef.current.style.opacity = `${Math.max(0, 1 - t * 1.2)}`;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { headingRef, contentRef };
}

export default function Hero() {
  const dict = useDictionary();
  const prefersReduced = useReducedMotion();
  const { headingRef, contentRef } = useHeroParallax();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pb-12 md:pb-16">
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video h-full w-full object-cover"
          style={{ opacity: 0.6 }}
        >
          <source src="/hero-bg-opt.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/30 via-transparent to-bg/30" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-container mx-auto px-6 w-full">
        {/* Headline */}
        <div ref={headingRef} className="will-change-transform mb-8 md:mb-12">
          <div className="overflow-hidden">
            <h1 className="text-[clamp(2.8rem,7.5vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05] max-w-5xl">
              <StaggerText text={dict.hero.headlinePre} />
              <StaggerText
                text={dict.hero.headlineHighlight}
                className="text-accent"
                delay={0.15}
              />
              {dict.hero.headlinePost.split("\n").map((line, i) => (
                <StaggerText
                  key={i}
                  text={line}
                  delay={0.25 + i * 0.1}
                />
              ))}
            </h1>
          </div>
        </div>

        {/* Sub + CTA */}
        <div ref={contentRef} className="will-change-transform">
          <motion.p
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-8"
            initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {dict.hero.sub}
          </motion.p>

          <motion.div
            className="flex items-center gap-5 mb-16 md:mb-20"
            initial={prefersReduced ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-accent-deep text-white hover:bg-[#7c3aed] transition-colors duration-200"
            >
              {dict.hero.cta1}
            </a>
            <a
              href="#work"
              className="text-sm text-text-secondary hover:text-text transition-colors duration-200 border-b border-text-tertiary/30 hover:border-text-secondary pb-0.5"
            >
              {dict.hero.cta2}
            </a>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          className="flex flex-wrap gap-y-4 gap-x-0 md:gap-0 md:justify-between border-t border-white/[0.08] pt-8"
          initial={prefersReduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.key}
              className="flex items-baseline gap-3 w-1/2 md:w-auto md:flex-1 md:justify-center"
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-text">
                <AnimatedNum value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-text-tertiary">
                {dict.stats[s.key]}
              </span>
              {i < STATS.length - 1 && (
                <span className="hidden md:block w-px h-8 bg-white/[0.08] ml-auto" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
