"use client";

import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/app/lib/i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale =
    locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  function switchedPath(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center gap-0.5">
      {locales.map((locale) => (
        <a
          key={locale}
          href={switchedPath(locale)}
          className={`text-[11px] font-mono px-2 py-1 rounded transition-colors duration-200 ${
            locale === currentLocale
              ? "text-accent bg-accent-glow"
              : "text-text-tertiary hover:text-text-secondary"
          }`}
        >
          {localeNames[locale]}
        </a>
      ))}
    </div>
  );
}
