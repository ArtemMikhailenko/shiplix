"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();

  /* ── Scroll-driven upward shift for heading ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-white/[0.06]"
      ref={ref}
    >
      <div className="max-w-container mx-auto px-6">
        <motion.div style={{ y: headingY, opacity: headingOpacity }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 bg-gradient-to-br from-white via-white/90 to-accent bg-clip-text text-transparent">
            {dict.cta.title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10">
            {dict.cta.sub}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 text-base"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-text underline underline-offset-4 decoration-text-tertiary/40 hover:decoration-accent transition-colors font-mono text-sm"
          >
            {CONTACT.email}
          </a>
          <a
            href={`https://t.me/${CONTACT.telegram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text underline underline-offset-4 decoration-text-tertiary/40 hover:decoration-accent transition-colors font-mono text-sm"
          >
            Telegram {CONTACT.telegram}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
