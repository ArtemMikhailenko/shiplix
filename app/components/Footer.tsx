"use client";

import { CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

export default function Footer() {
  const dict = useDictionary();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.78rem] text-text-tertiary">
          {dict.footer.copy}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] text-text-tertiary hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] text-text-tertiary hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://clutch.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] text-text-tertiary hover:text-text transition-colors"
          >
            Clutch
          </a>
        </div>
      </div>
    </footer>
  );
}
