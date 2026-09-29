import type { Metadata } from "next";
import { type Locale, locales } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata, SITE_URL, localeUrl } from "@/app/lib/seo";
import { MIGRATE_FAQ_KEYS } from "@/app/lib/constants";
import MigrateContent from "./MigrateContent";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const d = dict.migrate;

  return buildMetadata({
    locale: params.locale,
    path: "/migrate",
    title: d.metaTitle,
    description: d.metaDescription,
    ogTitle: d.h1,
    ogSubtitle: d.label,
  });
}

export default async function MigratePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const d = dict.migrate;

  // The questions are the page's substance, so they are marked up as such.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MIGRATE_FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: d.faq[key].q,
      acceptedAnswer: { "@type": "Answer", text: d.faq[key].a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: d.h1,
    description: d.metaDescription,
    serviceType: d.label,
    url: localeUrl(params.locale, "/migrate"),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Europe", "United States", "Middle East"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <MigrateContent />
    </>
  );
}
