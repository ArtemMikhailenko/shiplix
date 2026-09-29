import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, locales } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata, SITE_URL, localeUrl } from "@/app/lib/seo";
import { CITY_KEYS, CITY_META, CITY_FAQ_KEYS, type CityKey } from "@/app/lib/constants";
import CityContent from "./CityContent";

function getCityKeyBySlug(slug: string): CityKey | null {
  return CITY_KEYS.find((key) => CITY_META[key].slug === slug) ?? null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    CITY_KEYS.map((key) => ({ locale, city: CITY_META[key].slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; city: string };
}): Promise<Metadata> {
  const key = getCityKeyBySlug(params.city);
  if (!key) return {};

  const dict = await getDictionary(params.locale);
  const t = dict.cities.items[key];

  return buildMetadata({
    locale: params.locale,
    path: `/website-development/${params.city}`,
    title: t.metaTitle,
    description: t.metaDescription,
    ogTitle: t.h1,
    ogSubtitle: t.label,
  });
}

export default async function CityPage({
  params,
}: {
  params: { locale: Locale; city: string };
}) {
  const key = getCityKeyBySlug(params.city);
  if (!key) notFound();

  const dict = await getDictionary(params.locale);
  const t = dict.cities.items[key];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CITY_FAQ_KEYS.map((k) => ({
      "@type": "Question",
      name: t.faq[k].q,
      acceptedAnswer: { "@type": "Answer", text: t.faq[k].a },
    })),
  };

  // areaServed is the point of the page, so it is stated in the markup too.
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.h1,
    description: t.metaDescription,
    serviceType: t.label,
    url: localeUrl(params.locale, `/website-development/${params.city}`),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: t.city },
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
      <CityContent cityKey={key} />
    </>
  );
}
