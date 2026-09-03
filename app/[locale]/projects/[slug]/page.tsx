import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, locales } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { languageAlternates, SITE_URL } from "@/app/lib/seo";
import { PROJECT_KEYS, PROJECT_META } from "@/app/lib/constants";
import ProjectDetailContent from "./ProjectDetailContent";

function getProjectKeyBySlug(slug: string) {
  return PROJECT_KEYS.find((k) => PROJECT_META[k].slug === slug) ?? null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PROJECT_KEYS.map((key) => ({
      locale,
      slug: PROJECT_META[key].slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const projectKey = getProjectKeyBySlug(params.slug);
  if (!projectKey) return {};

  const dict = await getDictionary(params.locale);
  const text = dict.projectItems[projectKey];
  const meta = PROJECT_META[projectKey];

  return {
    title: `${text.title} — Shiplix`,
    description: text.desc,
    openGraph: {
      title: `${text.title} — Shiplix`,
      description: text.desc,
      url: `https://shiplix.it.com/${params.locale}/projects/${params.slug}`,
      siteName: "Shiplix",
      type: "article",
      images: meta.image
        ? [{ url: `https://shiplix.it.com${meta.image}` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${text.title} — Shiplix`,
      description: text.desc,
    },
    alternates: {
      canonical: `https://shiplix.it.com/${params.locale}/projects/${params.slug}`,
      languages: languageAlternates(`/projects/${params.slug}`),
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const projectKey = getProjectKeyBySlug(params.slug);
  if (!projectKey) notFound();

  const dict = await getDictionary(params.locale);
  const text = dict.projectItems[projectKey];
  const meta = PROJECT_META[projectKey];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: text.title,
    description: text.desc,
    applicationCategory: meta.tag,
    operatingSystem: "Web",
    ...(meta.liveUrl ? { url: meta.liveUrl } : {}),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
    creator: {
      "@type": "Organization",
      name: "Shiplix",
      url: "https://shiplix.it.com",
    },
  };

  // Long-form technical write-ups are marked up as TechArticle so the depth
  // is machine-readable, not just prose in a div.
  const caseStudy = (
    dict.caseStudies as Partial<
      Record<typeof projectKey, (typeof dict.caseStudies)["servicesHelper"]>
    >
  )[projectKey];

  const articleJsonLd = caseStudy
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: text.title,
        description: caseStudy.intro,
        url: `https://shiplix.it.com/${params.locale}/projects/${params.slug}`,
        inLanguage: params.locale,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: caseStudy.sections.map((s) => s.heading),
        articleSection: caseStudy.sectionLabel,
        keywords: meta.stack.join(", "),
      }
    : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: text.title,
        item: `https://shiplix.it.com/${params.locale}/projects/${params.slug}`,
      },
    ],
  };

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <ProjectDetailContent projectKey={projectKey} />
    </>
  );
}
