"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Horizontal line that scales from center as user scrolls into view.
 */
export function ScrollLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.6"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className={`max-w-container mx-auto px-6 ${className}`}>
      <motion.div
        className="h-px bg-white/[0.06] origin-center"
        style={{ scaleX, opacity }}
      />
    </div>
  );
}
