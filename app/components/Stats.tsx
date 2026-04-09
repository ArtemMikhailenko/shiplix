"use client";

import { useEffect, useRef, useState } from "react";
import { STAT_KEYS, STAT_META } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

function AnimatedNumber({ value, color }: { value: string; color: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLParagraphElement>(null);
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
          const duration = 1200;
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
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={ref} className={`text-4xl md:text-5xl font-bold tracking-heading ${color}`}>
      {display}
    </p>
  );
}

export default function Stats() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section ref={ref} className="border-t border-b border-border py-12 md:py-16">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {STAT_KEYS.map((key) => (
          <div key={key} className="fade-up">
            <AnimatedNumber value={STAT_META[key].value} color={STAT_META[key].color} />
            <p className="text-text-secondary text-sm mt-2">{dict.stats[key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
