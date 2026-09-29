import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { DictionaryProvider } from "@/app/lib/i18n/DictionaryProvider";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SetLang from "@/app/components/SetLang";
import AnalyticsInit from "@/app/components/AnalyticsInit";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * A path containing a dot — /favicon.ico, /apple-touch-icon.png — is excluded
 * from the middleware matcher, so it reaches this segment with the filename as
 * the "locale". Reading a dictionary for it threw, which is why those paths
 * answered 500 instead of 404. Anything that is not a real locale stops here.
 */
function assertLocale(locale: string): asserts locale is Locale {
  if (!locales.includes(locale as Locale)) notFound();
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  assertLocale(params.locale);
  const dict = await getDictionary(params.locale);
  return buildMetadata({
    locale: params.locale,
    title: dict.homePage.metaTitle,
    description: dict.homePage.metaDescription,
    ogTitle: "We ship products that matter",
    ogSubtitle: "SaaS · Marketplaces · Fintech · Mobile — spec to production",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  assertLocale(params.locale);
  const dict = await getDictionary(params.locale);

  return (
    <DictionaryProvider dict={dict} locale={params.locale}>
      <SetLang locale={params.locale} />
      <AnalyticsInit />
      <Nav />
      {children}
      <Footer />
    </DictionaryProvider>
  );
}
