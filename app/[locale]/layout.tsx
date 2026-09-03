import type { Metadata } from "next";
import { locales, type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
import { buildMetadata } from "@/app/lib/seo";
import { DictionaryProvider } from "@/app/lib/i18n/DictionaryProvider";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SetLang from "@/app/components/SetLang";

export async function generateStaticParams() {
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
  const dict = await getDictionary(params.locale);

  return (
    <DictionaryProvider dict={dict} locale={params.locale}>
      <SetLang locale={params.locale} />
      <Nav />
      {children}
      <Footer />
    </DictionaryProvider>
  );
}
