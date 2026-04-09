import { MetadataRoute } from "next";
import { locales } from "@/app/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shiplix.it.com";
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
    entries.push({
      url: `${baseUrl}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${baseUrl}/${locale}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: `${baseUrl}/${locale}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
