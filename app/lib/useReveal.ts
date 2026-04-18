"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger children with reveal-up class
          const children = el.querySelectorAll(".reveal-up, .fade-up");
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("visible");
            }, i * 120);
          });
          // Also reveal the container if it has the class
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
