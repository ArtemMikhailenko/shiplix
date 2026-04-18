"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const PRINCIPLES = [
  { number: "01", whyKey: "contact" as const, processKey: null },
  { number: "02", whyKey: "parallel" as const, processKey: "build" as const },
  { number: "03", whyKey: "production" as const, processKey: null },
  { number: "04", whyKey: "pricing" as const, processKey: null },
] as const;

function Principle({
  number,
  title,
  desc,
  index,
}: {
  number: string;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative border-t border-white/[0.06] py-12 md:py-16 overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Giant background number */}
      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[100px] md:text-[140px] font-bold leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 select-none pointer-events-none tracking-tight">
        {number}
      </span>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-accent">{number}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-xl md:text-2xl font-semibold text-text tracking-tight leading-tight">
            {title}
          </h3>
        </div>
        <div className="md:col-span-7">
          <p className="text-text-secondary text-base leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();

  return (
    <section id="principles" className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-4">
            {dict.whyUs.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text max-w-2xl">
            {dict.whyUs.title}
          </h2>
        </motion.div>

        <div className="mt-8">
          {PRINCIPLES.map((p, i) => (
            <Principle
              key={p.number}
              number={p.number}
              title={dict.whyUs.items[p.whyKey].title}
              desc={dict.whyUs.items[p.whyKey].desc}
              index={i}
            />
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* ── Process — compact 3-step below ── */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-8">
            {dict.process.label}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {(["discovery", "build", "launch"] as const).map((key) => (
              <div key={key}>
                <h4 className="text-base font-semibold text-text mb-2">
                  {dict.process.steps[key].title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {dict.process.steps[key].desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
