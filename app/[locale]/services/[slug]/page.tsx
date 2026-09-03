import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, locales } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata, SITE_URL, localeUrl } from "@/app/lib/seo";
import {
  SERVICE_PAGE_KEYS,
  SERVICE_PAGE_META,
  SERVICE_FAQ_KEYS,
  type ServicePageKey,
} from "@/app/lib/constants";
import ServicePageContent from "./ServicePageContent";

function getServiceKeyBySlug(slug: string): ServicePageKey | null {
  return (
    SERVICE_PAGE_KEYS.find((key) => SERVICE_PAGE_META[key].slug === slug) ??
    null
  );
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SERVICE_PAGE_KEYS.map((key) => ({
      locale,
      slug: SERVICE_PAGE_META[key].slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const key = getServiceKeyBySlug(params.slug);
  if (!key) return {};

  const dict = await getDictionary(params.locale);
  const text = dict.servicePages.items[key];

  return buildMetadata({
    locale: params.locale,
    path: `/services/${params.slug}`,
    title: text.metaTitle,
    description: text.metaDescription,
    ogTitle: text.h1,
    ogSubtitle: text.label,
  });
}

export default async function ServicePage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const key = getServiceKeyBySlug(params.slug);
  if (!key) notFound();

  const dict = await getDictionary(params.locale);
  const text = dict.servicePages.items[key];
  const url = localeUrl(params.locale, `/services/${params.slug}`);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: text.h1,
    description: text.metaDescription,
    url,
    serviceType: text.label,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["Europe", "United States", "Middle East"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICE_FAQ_KEYS.map((f) => ({
      "@type": "Question",
      name: text.faq[f].q,
      acceptedAnswer: { "@type": "Answer", text: text.faq[f].a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.servicePages.breadcrumbHome,
        item: localeUrl(params.locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.servicePages.breadcrumbServices,
        item: `${localeUrl(params.locale)}#services`,
      },
      { "@type": "ListItem", position: 3, name: text.label, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicePageContent serviceKey={key} />
    </>
  );
}
