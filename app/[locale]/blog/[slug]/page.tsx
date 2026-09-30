import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata, SITE_URL, localeUrl } from "@/app/lib/seo";
import { getPost, allPostParams } from "@/app/lib/blog";
import BlogArticle from "./BlogArticle";

export function generateStaticParams() {
  return allPostParams();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPost(params.locale, params.slug);
  if (!post) return {};

  return buildMetadata({
    locale: params.locale,
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription,
    ogTitle: post.title,
    ogSubtitle: post.tag,
  });
}

export default async function BlogPost({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const post = getPost(params.locale, params.slug);
  if (!post) notFound();

  const dict = await getDictionary(params.locale);
  const b = dict.blog;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: params.locale,
    url: localeUrl(params.locale, `/blog/${post.slug}`),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogArticle
        post={post}
        locale={params.locale}
        contactHref={`/${params.locale}/contact`}
        labels={{
          label: b.label,
          readSuffix: b.readSuffix,
          backToBlog: b.backToBlog,
          relatedTitle: b.relatedTitle,
          breadcrumbHome: b.breadcrumbHome,
          contentsTitle: b.contentsTitle,
          ctaTitle: b.ctaTitle,
          ctaSub: b.ctaSub,
          ctaButton: b.ctaButton,
        }}
      />
    </>
  );
}
