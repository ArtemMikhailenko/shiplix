"use client";

import { useRef } from "react";

/**
 * Returns the section ref that page components attach.
 *
 * The reveal itself is pure CSS now (see .fade-up in globals.css). This
 * used to run an IntersectionObserver and toggle a .visible class, but
 * React reset className on re-render and stranded whole sections at
 * opacity 0. Nothing here touches the DOM any more, so that class of bug
 * cannot come back.
 */
export function useFadeUp() {
  return useRef<HTMLDivElement>(null);
}
