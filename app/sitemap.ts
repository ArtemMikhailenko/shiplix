import { MetadataRoute } from "next";
import { locales } from "@/app/lib/i18n/config";
import {
  PROJECT_KEYS,
  PROJECT_META,
  SERVICE_PAGE_KEYS,
  SERVICE_PAGE_META,
} from "@/app/lib/constants";
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

  const servicePaths = SERVICE_PAGE_KEYS.map((key) => ({
    path: `/services/${SERVICE_PAGE_META[key].slug}`,
    priority: 0.9,
  }));

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of [
    ...STATIC_PATHS,
    ...servicePaths,
    ...projectPaths,
  ]) {
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
