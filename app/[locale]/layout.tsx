import type { Metadata } from "next";
import { locales, type Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/getDictionary";
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
  return {
    title: "Shiplix — We Ship Web & Mobile Products",
    description: dict.hero.sub,
    keywords: [
      "web development",
      "mobile development",
      "SaaS",
      "marketplace",
      "React Native",
      "Next.js",
      "NestJS",
      "Ukraine",
      "dev team",
    ],
    authors: [{ name: "Shiplix" }],
    openGraph: {
      title: "Shiplix — We Ship Web & Mobile Products",
      description: dict.hero.sub,
      url: `https://shiplix.it.com/${params.locale}`,
      siteName: "Shiplix",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Shiplix — We Ship Web & Mobile Products",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shiplix — We Ship Web & Mobile Products",
      description: dict.hero.sub,
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
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
