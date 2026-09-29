import type { Locale } from "@/app/lib/i18n/config";
import type { ProjectKey } from "@/app/lib/constants";

/**
 * A post is a list of blocks rather than a string of HTML: the renderer owns
 * the typography, so an article cannot quietly drift away from the rest of the
 * site's styling, and no post can inject markup.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  /** Numbered where the order is the point — steps, not bullets. */
  | { type: "steps"; items: string[] }
  /** A figure that carries the argument, shown in the browser frame. */
  | { type: "image"; src: string; alt: string; caption?: string }
  /** One sentence the reader should leave with. */
  | { type: "callout"; text: string }
  /** A small table: rows of equal length, first row is the header. */
  | { type: "table"; rows: string[][] };

export type Post = {
  slug: string;
  /** Posts live in one language; the index only lists its own locale's. */
  locale: Locale;
  /** ISO date, used for ordering and for the Article markup. */
  date: string;
  title: string;
  /** Shown on the index card and used as the meta description. */
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  /** Reading time in minutes, written rather than guessed by a word count. */
  readMinutes: number;
  tag: string;
  /** Case study whose screenshot heads the article, when one fits. */
  heroProject?: ProjectKey;
  blocks: Block[];
  /** Internal links offered at the end — keeps the money pages one click away. */
  related?: { href: string; label: string }[];
};
