import type { Locale } from "@/app/lib/i18n/config";
import type { Post } from "./types";

import audit79 from "./posts/audit-79-sites";
import sitePrice from "./posts/site-price";
import migrationSeo from "./posts/migration-without-losing-seo";

/**
 * Adding a post is one import here. Posts are not in the i18n dictionaries on
 * purpose: the Dictionary type would then demand every article in all three
 * languages, and an article is worth publishing in one.
 */
const POSTS: Post[] = [audit79, sitePrice, migrationSeo];

const byNewest = (a: Post, b: Post) => (a.date < b.date ? 1 : -1);

export function getPosts(locale: Locale): Post[] {
  return POSTS.filter((p) => p.locale === locale).sort(byNewest);
}

export function getPost(locale: Locale, slug: string): Post | null {
  return POSTS.find((p) => p.locale === locale && p.slug === slug) ?? null;
}

/** Every (locale, slug) pair that exists — drives static params and the sitemap. */
export function allPostParams(): { locale: Locale; slug: string }[] {
  return POSTS.map((p) => ({ locale: p.locale, slug: p.slug }));
}

/** Locales that actually have something to read. */
export function localesWithPosts(): Locale[] {
  return Array.from(new Set(POSTS.map((p) => p.locale)));
}

export type { Post } from "./types";
