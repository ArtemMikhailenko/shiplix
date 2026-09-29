import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, locales } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { getPosts, localesWithPosts } from "@/app/lib/blog";
import { PROJECT_META } from "@/app/lib/constants";
import { Button } from "@/app/components/ui/Button";
import { DotField, SectionLabel } from "@/app/components/ui/Decor";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    path: "/blog",
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    ogTitle: dict.blog.title,
    ogSubtitle: dict.blog.label,
  });
}

export default async function BlogIndex({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const b = dict.blog;
  const posts = getPosts(params.locale);
  const fallback = localesWithPosts()[0] ?? "uk";

  return (
    <main className="pb-20 pt-32 md:pb-28 md:pt-40">
      <section className="relative">
        <DotField className="top-[-180px] h-[520px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-accent-glow blur-[100px]"
        />
        <div className="relative mx-auto max-w-container px-6">
          <div className="fade-up max-w-3xl">
            <SectionLabel>{b.label}</SectionLabel>
            <h1 className="mt-5 text-4xl font-bold tracking-heading leading-heading text-text md:text-5xl lg:text-6xl">
              {b.title}
            </h1>
            <p className="mt-6 text-lg leading-body text-text-secondary md:text-xl">
              {b.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20">
        <div className="mx-auto max-w-container px-6">
          {posts.length === 0 ? (
            <div className="fade-up rounded-card border border-border bg-bg-elevated px-8 py-14 text-center">
              <h2 className="text-2xl font-bold tracking-heading text-text">
                {b.emptyTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-body text-text-secondary">
                {b.emptyBody}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={`/${fallback}/blog`}>{b.emptyCta}</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {posts.map((post, i) => {
                const hero = post.heroProject
                  ? PROJECT_META[post.heroProject].image
                  : null;
                // The newest post gets the full width: a grid of identical
                // cards gives the reader no idea where to start.
                const wide = i === 0;
                return (
                  <Link
                    key={post.slug}
                    href={`/${params.locale}/blog/${post.slug}`}
                    className={`group card-reveal overflow-hidden rounded-card border border-border bg-bg-elevated transition-colors hover:border-border-hover ${
                      wide ? "md:col-span-2 md:flex" : ""
                    }`}
                  >
                    {hero && (
                      <div
                        className={`relative overflow-hidden bg-bg ${
                          wide ? "md:w-1/2" : ""
                        } aspect-[16/9]`}
                      >
                        <img
                          src={hero}
                          alt=""
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <div className={`p-7 ${wide ? "md:flex md:w-1/2 md:flex-col md:justify-center" : ""}`}>
                      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                        <span className="text-accent">{post.tag}</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {post.readMinutes} {b.readSuffix}
                        </span>
                      </div>
                      <h2
                        className={`mt-4 font-bold tracking-heading leading-heading text-text transition-colors group-hover:text-accent ${
                          wide ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {post.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-body text-text-secondary">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
