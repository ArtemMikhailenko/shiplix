"use client";

import { useEffect, useRef, useState } from "react";
import { CLIENTS } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STATS = [
  { value: "50+", key: "projects", icon: "📦" },
  { value: "3+", key: "years", icon: "⏱" },
  { value: "98%", key: "delivery", icon: "✅" },
  { value: "5+", key: "industries", icon: "🏭" },
] as const;

function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true;
          const num = parseInt(value.replace(/\D/g, ""), 10);
          const suffix = value.replace(/[0-9]/g, "");
          const dur = 1400;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(`${Math.round(eased * num)}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function Clients() {
  const ref = useFadeUp();
  const dict = useDictionary();
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section ref={ref} className="py-20 md:py-28 overflow-hidden">
      {/* ── Marquee clients ── */}
      <div className="mb-16">
        <p className="fade-up text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary text-center mb-6">
          {dict.clients.label}
        </p>
        <div className="marquee">
          <div className="marquee-track">
            {doubled.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="inline-flex items-center px-8 text-sm font-medium text-text-tertiary/50 whitespace-nowrap"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Impact stats ── */}
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.key}
              className="fade-up group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 text-center transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <p className="text-4xl md:text-5xl font-bold tracking-tight gradient-text mb-3">
                <Counter value={s.value} />
              </p>
              <p className="text-sm font-semibold text-text uppercase tracking-wide">
                {dict.stats[s.key]}
              </p>
              {dict.stats[`${s.key}Desc` as keyof typeof dict.stats] && (
                <p className="text-xs text-text-tertiary mt-2 leading-relaxed">
                  {dict.stats[`${s.key}Desc` as keyof typeof dict.stats]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
