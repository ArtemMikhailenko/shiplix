"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordNavigation } from "@/app/lib/analytics";

/**
 * Records the session's entry page and the previous page on every route
 * change, so a lead can be attributed to the page that produced it.
 */
export default function AnalyticsInit() {
  const pathname = usePathname();

  useEffect(() => {
    recordNavigation(pathname);
  }, [pathname]);

  return null;
}
