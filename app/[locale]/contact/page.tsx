import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { CONTACT } from "@/app/lib/constants";
import ContactContent from "./ContactContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/contact",
    title: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
    ogTitle: dict.contactPage.title,
    ogSubtitle: dict.contactPage.metaDescription,
  });
}

export default async function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
    url: `https://shiplix.it.com/${params.locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Shiplix",
      url: "https://shiplix.it.com",
      email: CONTACT.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        url: `https://shiplix.it.com/${params.locale}/contact`,
        availableLanguage: ["English", "Ukrainian", "Russian"],
      },
      sameAs: [
        CONTACT.linkedin,
        `https://t.me/${CONTACT.telegram.replace("@", "")}`,
      ],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.contactPage.breadcrumbHome,
        item: `https://shiplix.it.com/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.contactPage.breadcrumbContact,
        item: `https://shiplix.it.com/${params.locale}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ContactContent />
    </>
  );
}
