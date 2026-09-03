"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform} from "framer-motion";
import { useSafeInView } from "@/app/lib/useSafeInView";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/app/lib/constants";
import { locales } from "@/app/lib/i18n/config";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useSafeInView(ref, { once: true, margin: "-60px" });
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
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
          initial={{ y: 12 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-pill bg-accent-deep text-white hover:bg-accent transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(124,58,237,0.4)]"
          >
            {dict.hero.cta1}
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 text-base"
          initial={{ y: 12 }}
          animate={inView ? { y: 0 } : {}}
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
