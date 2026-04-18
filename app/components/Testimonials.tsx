"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECT_META, PROJECT_KEYS } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();

  return (
    <section className="py-20 md:py-[120px]" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-4">
            Proof of work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text max-w-xl">
            {dict.projects.title}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {PROJECT_KEYS.map((key, i) => {
            const meta = PROJECT_META[key];
            const text = dict.projectItems[key];
            return (
              <motion.div
                key={key}
                className="border-t border-white/[0.06] py-6 md:py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                  <div className="md:col-span-5">
                    <span className="text-base md:text-lg font-semibold text-text">
                      {text.title.split("—")[0].split("–")[0].trim()}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-text-tertiary">
                      {meta.tag}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono text-text-tertiary">
                      {meta.duration}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-text-tertiary/70 tracking-wide">
                      {meta.stack.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
