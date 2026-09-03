import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { TEAM_MEMBERS } from "@/app/lib/constants";
import TeamContent from "./TeamContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/team",
    title: dict.teamPage.metaTitle,
    description: dict.teamPage.metaDescription,
    ogTitle: dict.teamPage.title,
    ogSubtitle: dict.teamPage.metaDescription,
  });
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
    url: "https://shiplix.it.com",
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
        item: `https://shiplix.it.com/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.teamPage.breadcrumbTeam,
        item: `https://shiplix.it.com/${params.locale}/team`,
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
