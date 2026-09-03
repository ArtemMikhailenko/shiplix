import type { Metadata } from "next";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { PROJECT_KEYS, PROJECT_META } from "@/app/lib/constants";
import ProjectsContent from "./ProjectsContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/projects",
    title: dict.projectsPage.metaTitle,
    description: dict.projectsPage.metaDescription,
    ogTitle: dict.projectsPage.title,
    ogSubtitle: dict.projectsPage.metaDescription,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: dict.projectsPage.metaTitle,
    description: dict.projectsPage.metaDescription,
    url: `https://shiplix.it.com/${params.locale}/projects`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: PROJECT_KEYS.length,
      itemListElement: PROJECT_KEYS.map((key, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: dict.projectItems[key].title,
        description: dict.projectItems[key].desc,
        item: {
          "@type": "SoftwareApplication",
          name: dict.projectItems[key].title,
          applicationCategory: PROJECT_META[key].tag,
          operatingSystem: "Web",
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.projectsPage.breadcrumbHome,
        item: `https://shiplix.it.com/${params.locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.projectsPage.breadcrumbProjects,
        item: `https://shiplix.it.com/${params.locale}/projects`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ProjectsContent />
    </>
  );
}
