import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import FaqContent from "./FaqContent";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/faq",
    title: dict.faqPage.metaTitle,
    description: dict.faqPage.metaDescription,
    ogTitle: dict.faqPage.title,
    ogSubtitle: dict.faqPage.metaDescription,
  });
}

export default async function FaqPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: dict.faqPage.items[key].q,
      acceptedAnswer: {
        "@type": "Answer",
        text: dict.faqPage.items[key].a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.faqPage.breadcrumbHome,
        item: `https://shiplix.it.com/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.faqPage.breadcrumbFaq,
        item: `https://shiplix.it.com/${params.locale}/faq`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <FaqContent />
    </>
  );
}
