import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata, SITE_URL, localeUrl } from "@/app/lib/seo";
import { getPost, allPostParams } from "@/app/lib/blog";
import { PROJECT_META } from "@/app/lib/constants";
import { BlogBlocks } from "@/app/components/BlogBlocks";
import { BrowserFrame } from "@/app/[locale]/projects/projectUi";
import { GradientRule, SectionLabel } from "@/app/components/ui/Decor";
import { Arrow } from "@/app/[locale]/projects/projectUi";

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

      <main className="pb-20 pt-32 md:pb-28 md:pt-40">
        <article className="mx-auto max-w-container px-6">
          <nav aria-label="Breadcrumb" className="fade-up mb-10 text-sm text-text-tertiary">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${params.locale}`} className="transition-colors hover:text-text">
                  {b.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/${params.locale}/blog`} className="transition-colors hover:text-text">
                  {b.label}
                </Link>
              </li>
            </ol>
          </nav>

          <header className="fade-up mx-auto max-w-3xl">
            <SectionLabel>{post.tag}</SectionLabel>
            <h1 className="mt-5 text-3xl font-bold tracking-heading leading-heading text-text md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-body text-text-secondary md:text-xl">
              {post.excerpt}
            </p>
            <p className="mt-6 font-mono text-[13px] text-text-tertiary">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(params.locale, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {" · "}
              {post.readMinutes} {b.readSuffix}
            </p>
          </header>

          {post.heroProject && (
            <div className="fade-up relative mx-auto mt-12 max-w-4xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-8 h-56 w-[640px] -translate-x-1/2 rounded-full bg-accent-glow blur-[90px]"
              />
              <BrowserFrame
                src={PROJECT_META[post.heroProject].image}
                alt=""
                className="relative"
                eager
                natural
              />
            </div>
          )}

          <div className="mx-auto mt-14 max-w-3xl">
            <BlogBlocks blocks={post.blocks} />
          </div>

          {post.related && post.related.length > 0 && (
            <div className="mx-auto mt-16 max-w-3xl">
              <GradientRule className="mb-10" />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary">
                {b.relatedTitle}
              </p>
              <ul className="mt-5 space-y-3">
                {post.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${params.locale}${link.href}`}
                      className="group inline-flex items-center gap-2 text-[17px] text-text transition-colors hover:text-accent"
                    >
                      {link.label}
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mx-auto mt-14 max-w-3xl">
            <Link
              href={`/${params.locale}/blog`}
              className="font-mono text-sm text-text-tertiary transition-colors hover:text-text"
            >
              ← {b.backToBlog}
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
