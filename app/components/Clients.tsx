"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECT_KEYS, PROJECT_META } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { locales } from "@/app/lib/i18n/config";

export default function Clients() {
  const dict = useDictionary();
  const pathname = usePathname();
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) || "en";

  const clients = PROJECT_KEYS.filter((key) => PROJECT_META[key].logo);
  // Duplicated so the marquee can loop without a visible seam.
  const track = [...clients, ...clients];

  return (
    <section className="py-10 md:py-14 overflow-hidden">
      <p className="text-center text-xs font-mono font-medium uppercase tracking-widest text-text-tertiary mb-8">
        {dict.clients.label}
      </p>

      <div className="marquee">
        <div className="marquee-track items-center">
          {track.map((key, i) => {
            const meta = PROJECT_META[key];
            return (
              <Link
                key={`${key}-${i}`}
                href={`/${locale}/projects/${meta.slug}`}
                aria-hidden={i >= clients.length}
                tabIndex={i >= clients.length ? -1 : undefined}
                className="shrink-0 mx-3 md:mx-4 block w-[150px] md:w-[180px] h-[80px] md:h-[92px] rounded-card border border-border overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={meta.logo}
                  alt={dict.projectItems[key].title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
