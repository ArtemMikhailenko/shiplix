import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import {
  buildMetadata,
  ORG_ID,
  SITE_NAME,
  SITE_URL,
  organizationRef,
} from "@/app/lib/seo";
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

  // Same @id as the homepage entity, so this page adds members to the known
  // organization instead of declaring a second, competing one.
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    member: TEAM_MEMBERS.map((m) => {
      const profiles = [m.socials.linkedin, m.socials.github].filter(
        (url): url is string => Boolean(url)
      );
      return {
        "@type": "Person",
        name: dict.teamPage.members[m.nameKey],
        jobTitle: dict.teamPage[m.roleKey],
        url: profiles[0],
        sameAs: profiles.length ? profiles : undefined,
        image: m.photo || undefined,
        worksFor: organizationRef,
        knowsAbout: m.stack,
      };
    }),
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
