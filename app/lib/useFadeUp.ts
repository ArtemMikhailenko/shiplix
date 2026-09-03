"use client";

import { useEffect, useRef } from "react";

export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (node: Element) => {
      if (!node.classList.contains("visible")) observer.observe(node);
    };

    const observeTree = (node: Element) => {
      if (node.classList?.contains("fade-up")) observe(node);
      node.querySelectorAll?.(".fade-up").forEach(observe);
    };

    observeTree(el);

    /**
     * Content rendered after mount — filter changes, the grid/list toggle —
     * produces new .fade-up nodes this observer has never seen. Without
     * picking them up they keep opacity 0 and the section silently
     * disappears instead of animating in.
     */
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTree(node);
        });
      });
    });
    mutations.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return ref;
}
