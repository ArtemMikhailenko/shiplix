import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/app/lib/i18n/config";

export const SITE_URL = "https://shiplix.it.com";
export const SITE_NAME = "Shiplix";

/** Absolute URL for a locale-prefixed path, e.g. localeUrl("en", "/projects"). */
export function localeUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}/${locale}${path}`;
}

/** hreflang map for one path across every locale, plus x-default. */
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = localeUrl(locale, path);
  languages["x-default"] = localeUrl(defaultLocale, path);
  return languages;
}

/** Social preview image, rendered on the fly by /api/og. */
export function ogImage(title: string, subtitle?: string) {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return {
    url: `/api/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: title,
  };
}

/**
 * Canonical + hreflang + OG/Twitter cards for one page.
 * Next merges metadata shallowly, so every page builds the full object here
 * instead of relying on the layout's openGraph surviving the override.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  ogTitle,
  ogSubtitle,
  type = "website",
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogSubtitle?: string;
  type?: "website" | "article";
}): Metadata {
  const url = localeUrl(locale, path);
  const image = ogImage(ogTitle ?? title, ogSubtitle ?? description);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
