import Hero from "@/app/components/Hero";
import Clients from "@/app/components/Clients";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Stack from "@/app/components/Stack";
import Principles from "@/app/components/Principles";
import CTA from "@/app/components/CTA";
import { ScrollLine } from "@/app/components/ui/ScrollLine";
import { CONTACT } from "@/app/lib/constants";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { SITE_URL, SITE_NAME, localeUrl } from "@/app/lib/seo";

export default async function Home({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/api/og`,
    description: dict.homePage.metaDescription,
    email: CONTACT.email,
    priceRange: "$$",
    areaServed: ["Europe", "United States", "Middle East"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    sameAs: [CONTACT.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT.email,
      url: `${localeUrl(params.locale, "/contact")}`,
      availableLanguage: ["English", "Ukrainian", "Russian"],
    },
    makesOffer: [
      "SaaS platform development",
      "Marketplace development",
      "Fintech and crypto integrations",
      "React Native mobile apps",
      "MVP development",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: params.locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Clients />
      <ScrollLine />
      <Services />
      <ScrollLine />
      <Projects />
      <ScrollLine />
      <Stack />
      <ScrollLine />
      <Principles />
      <CTA />
    </main>
  );
}
