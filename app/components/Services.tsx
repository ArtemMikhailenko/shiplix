"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const SERVICES = [
  { key: "saas" as const, stack: ["NestJS", "Next.js", "PostgreSQL", "Stripe"], color: "168, 85, 247" },
  { key: "marketplace" as const, stack: ["Next.js", "Socket.io", "Redis", "Meilisearch"], color: "59, 130, 246" },
  { key: "mobile" as const, stack: ["React Native", "Expo", "TypeScript"], color: "16, 185, 129" },
  { key: "fintech" as const, stack: ["NestJS", "ethers.js", "PostgreSQL"], color: "245, 158, 11" },
  { key: "ecommerce" as const, stack: ["Next.js", "Stripe", "Prisma"], color: "236, 72, 153" },
  { key: "landing" as const, stack: ["Next.js", "Tailwind", "Motion"], color: "6, 182, 212" },
  { key: "automation" as const, stack: ["n8n", "Make", "Webhooks"], color: "249, 115, 22" },
  { key: "mvp" as const, stack: ["NestJS", "Next.js", "Docker"], color: "139, 92, 246" },
] as const;

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section id="services" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-4">
            {dict.services.label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-text max-w-2xl leading-tight">
            {dict.services.title}
          </h2>
        </motion.div>

        {/* ── Split: list + detail panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — interactive service list */}
          <div className="lg:col-span-5">
            {SERVICES.map((service, i) => (
              <motion.button
                key={service.key}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="w-full text-left border-t border-white/[0.06] py-5 md:py-6 flex items-center gap-4 cursor-pointer group"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className={`text-xs font-mono tabular-nums transition-colors duration-300 ${
                    active === i ? "text-accent" : "text-text-tertiary/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-lg md:text-xl font-semibold tracking-tight transition-all duration-300 ${
                    active === i
                      ? "text-white translate-x-1"
                      : "text-text/40 group-hover:text-text/60"
                  }`}
                >
                  {dict.services.items[service.key].title}
                </span>
                {active === i && (
                  <motion.span
                    layoutId="service-indicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>

          {/* Right — animated detail panel */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl border border-white/[0.06] bg-[#111115] p-8 md:p-10 lg:p-12 overflow-hidden min-h-[340px] flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, rgba(${current.color}, 0.06) 0%, #111115 50%)`,
                  }}
                >
                  {/* Big background number */}
                  <span className="absolute -top-6 -right-4 text-[140px] md:text-[180px] font-bold leading-none text-white/[0.025] select-none pointer-events-none tracking-tighter">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5">
                      {dict.services.items[current.key].title}
                    </h3>
                    <p className="text-text-secondary text-base md:text-[17px] leading-relaxed max-w-lg">
                      {dict.services.items[current.key].desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                    {current.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono uppercase tracking-wider text-text-tertiary border border-white/[0.08] rounded-full px-3 py-1.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent gradient line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(${current.color}, 0.3), transparent)`,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
