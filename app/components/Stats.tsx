"use client";

import { useEffect, useRef, useState } from "react";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STATS = [
  { value: "50+", key: "projects", color: "text-accent" },
  { value: "3+", key: "years", color: "text-cyan" },
  { value: "98%", key: "delivery", color: "text-green" },
  { value: "5+", key: "industries", color: "text-pink" },
] as const;

function AnimatedNumber({ value, color }: { value: string; color: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const numericPart = parseInt(value.replace(/\D/g, ""), 10);
          const suffix = value.replace(/[0-9]/g, "");
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericPart);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${color}`}>
      {display}
    </span>
  );
}

export default function Stats() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-border">
          {STATS.map((s) => (
            <div key={s.key} className="fade-up text-center px-4 lg:px-8">
              <AnimatedNumber value={s.value} color={s.color} />
              <p className="text-sm font-semibold text-text mt-4 uppercase tracking-wide">
                {dict.stats[s.key]}
              </p>
              <p className="text-xs text-text-tertiary mt-2 leading-relaxed max-w-[220px] mx-auto">
                {dict.stats[`${s.key}Desc` as keyof typeof dict.stats]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
