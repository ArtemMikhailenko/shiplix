"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "framer-motion";

/**
 * useInView, but it cannot leave a section stuck at opacity 0.
 *
 * The entrance animations on the homepage start hidden and only appear
 * once IntersectionObserver reports the element. When that never happens
 * — printing, no IntersectionObserver, a tab backgrounded through load —
 * the section stays invisible. This reports "in view" in those cases so
 * the content simply appears without animating.
 */
export function useSafeInView(
  ref: RefObject<Element>,
  options?: Parameters<typeof useInView>[1]
): boolean {
  const inView = useInView(ref, options);
  const [force, setForce] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setForce(true);
      return;
    }

    const reveal = () => setForce(true);
    window.addEventListener("beforeprint", reveal);

    // Nothing should stay hidden long after load, animated or not.
    const safety = window.setTimeout(reveal, 4000);

    return () => {
      window.removeEventListener("beforeprint", reveal);
      window.clearTimeout(safety);
    };
  }, []);

  return inView || force;
}
