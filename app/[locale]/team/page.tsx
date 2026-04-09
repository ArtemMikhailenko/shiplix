import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { TEAM_MEMBERS } from "@/app/lib/constants";
import TeamContent from "./TeamContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.teamPage.metaTitle,
    description: dict.teamPage.metaDescription,
    openGraph: {
      title: dict.teamPage.metaTitle,
      description: dict.teamPage.metaDescription,
      url: `https://shiplix.dev/${params.locale}/team`,
      siteName: "Shiplix",
      type: "website",
    },
    alternates: {
      canonical: `https://shiplix.dev/${params.locale}/team`,
    },
  };
}

export default async function TeamPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiplix",
    url: "https://shiplix.dev",
    member: TEAM_MEMBERS.map((m) => ({
      "@type": "Person",
      name: dict.teamPage.members[m.nameKey],
      jobTitle: dict.teamPage[m.roleKey],
      url: m.socials.linkedin || m.socials.github || undefined,
      image: m.photo || undefined,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.teamPage.breadcrumbHome,
        item: `https://shiplix.dev/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.teamPage.breadcrumbTeam,
        item: `https://shiplix.dev/${params.locale}/team`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <TeamContent />
    </>
  );
}
