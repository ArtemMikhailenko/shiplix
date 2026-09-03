import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { TECH_STACK } from "@/app/lib/constants";
import AboutContent from "./AboutContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/about",
    title: dict.aboutPage.metaTitle,
    description: dict.aboutPage.metaDescription,
    ogTitle: dict.aboutPage.title,
    ogSubtitle: dict.aboutPage.metaDescription,
  });
}

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: dict.aboutPage.metaTitle,
    description: dict.aboutPage.metaDescription,
    url: `https://shiplix.it.com/${params.locale}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Shiplix",
      url: "https://shiplix.it.com",
      description: dict.aboutPage.sub,
      foundingLocation: {
        "@type": "Place",
        name: "Kyiv, Ukraine",
      },
      knowsAbout: TECH_STACK.map((t) => t.name),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.aboutPage.breadcrumbHome,
        item: `https://shiplix.it.com/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.aboutPage.breadcrumbAbout,
        item: `https://shiplix.it.com/${params.locale}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <AboutContent />
    </>
  );
}
