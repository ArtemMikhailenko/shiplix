"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/app/lib/constants";
import { Button } from "@/app/components/ui/Button";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { locales } from "@/app/lib/i18n/config";

export default function Nav() {
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.services, href: isHome ? "#services" : `/${locale}/#services` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.team, href: `/${locale}/team` },
    { label: dict.nav.contact, href: isHome ? "#contact" : `/${locale}/#contact` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[rgba(10,10,12,0.85)] backdrop-blur-[24px] backdrop-saturate-[1.2] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-text font-semibold text-base">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-deep to-cyan block" />
          shiplix
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                !link.href.startsWith("#") && pathname.startsWith(link.href)
                  ? "text-text font-medium"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="ghost" href={`mailto:${CONTACT.email}`} className="hidden sm:inline-flex text-xs px-4 py-2">
            {dict.nav.getInTouch}
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-[rgba(10,10,12,0.95)] backdrop-blur-[24px]">
          <div className="max-w-container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-secondary hover:text-text transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" href={`mailto:${CONTACT.email}`} className="mt-2 text-sm w-full">
              {dict.nav.getInTouch}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
