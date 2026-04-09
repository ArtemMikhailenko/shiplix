"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { locales } from "@/app/lib/i18n/config";

export default function Footer() {
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  const footerNav = [
    { label: dict.footer.nav.services, href: `/${locale}/#services` },
    { label: dict.footer.nav.projects, href: `/${locale}/projects` },
    { label: dict.footer.nav.about, href: `/${locale}/about` },
    { label: dict.footer.nav.team, href: `/${locale}/team` },
    { label: dict.footer.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t border-border">
      <div className="max-w-container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-text font-semibold text-base mb-3">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-deep to-cyan block" />
              shiplix
            </Link>
            <p className="text-sm text-text-secondary max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={`https://t.me/${CONTACT.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-[0.78rem] text-text-tertiary">
            {dict.footer.copy}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[0.78rem] text-text-tertiary hover:text-text transition-colors cursor-pointer"
          >
            ↑ {dict.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
