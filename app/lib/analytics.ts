"use client";

/**
 * Analytics events for the contact funnel.
 *
 * GA4 (gtag) is loaded directly in the root layout, so gtag is the primary
 * sink — it reaches the property without any GTM configuration. A separate,
 * namespaced dataLayer event is pushed alongside it so GTM triggers can be
 * built later; the custom name keeps GA4 from ingesting the same hit twice.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ENTRY_PAGE_KEY = "shiplix:entry_page";
const PREV_PAGE_KEY = "shiplix:prev_page";
const CURRENT_PAGE_KEY = "shiplix:current_page";

function read(key: string): string | undefined {
  try {
    return sessionStorage.getItem(key) ?? undefined;
  } catch {
    // Private mode or blocked storage — attribution degrades, nothing breaks.
    return undefined;
  }
}

/**
 * Called on every route change. Next navigates on the client, so
 * document.referrer never updates in-app — the previous page has to be
 * tracked here or landing-page attribution is lost.
 */
export function recordNavigation(path: string): void {
  if (typeof window === "undefined") return;
  try {
    const current = sessionStorage.getItem(CURRENT_PAGE_KEY);
    if (current && current !== path) {
      sessionStorage.setItem(PREV_PAGE_KEY, current);
    }
    sessionStorage.setItem(CURRENT_PAGE_KEY, path);
    if (!sessionStorage.getItem(ENTRY_PAGE_KEY)) {
      sessionStorage.setItem(ENTRY_PAGE_KEY, path);
    }
  } catch {
    // ignored
  }
}

/** Previous page in this session, or the external referrer on a cold entry. */
function getInternalReferrer(): string | undefined {
  const previous = read(PREV_PAGE_KEY);
  if (previous) return previous;

  if (typeof window === "undefined" || !document.referrer) return undefined;
  try {
    const ref = new URL(document.referrer);
    return ref.origin === window.location.origin ? ref.pathname : undefined;
  } catch {
    return undefined;
  }
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const payload: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries({
    ...params,
    page_path: window.location.pathname,
    entry_page: read(ENTRY_PAGE_KEY),
    internal_referrer: getInternalReferrer(),
  })) {
    if (value !== undefined && value !== "") payload[key] = value;
  }

  try {
    window.gtag?.("event", name, payload);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: `shiplix_${name}`, ...payload });
  } catch {
    // Analytics must never break the form.
  }
}
