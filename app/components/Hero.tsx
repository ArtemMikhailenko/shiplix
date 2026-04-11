"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { CONTACT } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STATS = [
  { value: "50+", key: "projects" },
  { value: "4.9", key: "rating" },
  { value: "25+", key: "clients" },
  { value: "<4s", key: "deploy" },
] as const;

function useHeroParallax() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        // Only animate while hero is in view
        if (y < vh * 1.2) {
          const t = y / vh; // 0 → 1 as user scrolls through hero
          if (headingRef.current) {
            headingRef.current.style.transform = `translateY(${y * 0.25}px) scale(${1 - t * 0.08})`;
            headingRef.current.style.opacity = `${1 - t * 0.9}`;
            headingRef.current.style.filter = `blur(${t * 4}px)`;
          }
          if (subRef.current) {
            subRef.current.style.transform = `translateY(${y * 0.15}px)`;
            subRef.current.style.opacity = `${1 - t * 1.2}`;
          }
          if (ctaRef.current) {
            ctaRef.current.style.transform = `translateY(${y * 0.1}px)`;
            ctaRef.current.style.opacity = `${1 - t * 1.4}`;
          }
          if (statsRef.current) {
            statsRef.current.style.transform = `translateY(${y * 0.05}px)`;
            statsRef.current.style.opacity = `${Math.max(0, 1 - t * 1.6)}`;
          }
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { headingRef, subRef, ctaRef, statsRef };
}

export default function Hero() {
  const ref = useFadeUp();
  const dict = useDictionary();
  const { headingRef, subRef, ctaRef, statsRef } = useHeroParallax();

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden" ref={ref}>
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video h-full w-full object-cover opacity-90"
        >
          <source src="/hero-bg-opt.mp4" type="video/mp4" />
        </video>
        {/* Bottom fade into page */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-transparent to-bg" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/40" />
        {/* Center readability zone */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,12,0.6)_0%,transparent_70%)]" />
      </div>

      <div className="hero-glow" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-container mx-auto px-6 text-center py-32 md:py-40 md:pb-20">
        {/* <div className="fade-up flex justify-center">
          <Badge className="mb-8 backdrop-blur-md bg-white/[0.04] border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-green pulse-dot" />
            {dict.hero.badge}
          </Badge>
        </div> */}

        <h1 ref={headingRef} className="fade-up text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-8 max-w-5xl mx-auto hero-heading will-change-transform">
          {dict.hero.headlinePre}
          <span className="gradient-text">{dict.hero.headlineHighlight}</span>
          {dict.hero.headlinePost.split("\n").map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>

        <p ref={subRef} className="fade-up text-text-secondary/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow-sm will-change-transform">
          {dict.hero.sub}
        </p>

        <div ref={ctaRef} className="fade-up flex flex-wrap gap-4 justify-center mb-20 will-change-transform">
          <Button variant="primary" href={`mailto:${CONTACT.email}`}>
            {dict.hero.cta1}
          </Button>
          <Button variant="ghost" href="#work">
            {dict.hero.cta2}
          </Button>
        </div>

        {/* ── Trust strip ── */}
        <div ref={statsRef} className="fade-up flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-20 will-change-transform">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold text-text tracking-tight">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-text-tertiary font-medium uppercase tracking-wider">
                {dict.hero.stats?.[s.key] ?? s.key}
              </span>
              {i < STATS.length - 1 && (
                <span className="hidden md:block w-px h-6 bg-border ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
