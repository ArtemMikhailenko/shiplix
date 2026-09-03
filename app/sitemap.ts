import { MetadataRoute } from "next";
import { locales } from "@/app/lib/i18n/config";
import { PROJECT_KEYS, PROJECT_META } from "@/app/lib/constants";
import { localeUrl, languageAlternates } from "@/app/lib/seo";

/** Every indexable path, without the locale prefix. */
const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/team", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectPaths = PROJECT_KEYS.map((key) => ({
    path: `/projects/${PROJECT_META[key].slug}`,
    priority: 0.8,
  }));

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of [...STATIC_PATHS, ...projectPaths]) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified,
        changeFrequency: "monthly",
        priority,
        alternates: { languages: languageAlternates(path) },
      });
    }
  }

  return entries;
}
