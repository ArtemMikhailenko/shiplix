"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const ROW_1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "Node.js", "PostgreSQL", "Redis"];
const ROW_2 = ["Prisma", "React Native", "Expo", "Docker", "Socket.io", "Meilisearch", "Stripe", "Webhooks"];

function MarqueeRow({
  items,
  reverse = false,
  speed = "30s",
  size = "text-2xl md:text-3xl lg:text-4xl",
}: {
  items: string[];
  reverse?: boolean;
  speed?: string;
  size?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{
          animationDuration: speed,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-4 px-3 md:px-5 whitespace-nowrap"
          >
            <span className={`${size} font-medium text-text/70 tracking-tight hover:text-white transition-colors duration-300`}>
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dict = useDictionary();

  return (
    <section id="stack" className="py-20 md:py-[120px] overflow-hidden" ref={ref}>
      <div className="max-w-container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-3">
            {dict.stack.label}
          </p>
          <p className="text-sm text-text-tertiary max-w-xl leading-relaxed">
            {dict.stack.sub}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="space-y-5 md:space-y-7"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MarqueeRow items={ROW_1} speed="35s" />
        <MarqueeRow items={ROW_2} reverse speed="42s" size="text-xl md:text-2xl lg:text-3xl" />
      </motion.div>
    </section>
  );
}
