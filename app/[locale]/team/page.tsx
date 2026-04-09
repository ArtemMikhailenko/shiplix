"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TEAM_MEMBERS, CONTACT } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";

export default function TeamPage() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <main className="pt-32 pb-20 md:pt-40 md:pb-28" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* Back link */}
        <Link
          href={`/${locale}`}
          className="fade-up inline-flex items-center text-sm text-text-secondary hover:text-text transition-colors mb-12"
        >
          {dict.teamPage.backToHome}
        </Link>

        {/* Header */}
        <div className="fade-up mb-16 md:mb-20">
          <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
            {dict.teamPage.label}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-heading leading-heading text-text mb-6 max-w-3xl">
            {dict.teamPage.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-body max-w-2xl">
            {dict.teamPage.sub}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 md:mb-28">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.name}
              className="fade-up group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.12)]"
            >
              {/* Avatar header */}
              <div className="relative h-[140px] bg-bg-surface flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-1 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">
                  {dict.teamPage[member.roleKey]}
                </p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-tertiary">{member.flag}</span>
                    <span className="text-text-secondary">{member.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">{dict.teamPage.focusLabel}</span>
                    <span className="text-text-secondary">{member.focus}</span>
                  </div>
                </div>

                {/* Stack chips */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-text-tertiary px-2 py-1 rounded bg-bg-hover border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${member.name} GitHub`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.63 0H2.37C1.06 0 0 1.06 0 2.37v11.26C0 14.94 1.06 16 2.37 16h11.26c1.31 0 2.37-1.06 2.37-2.37V2.37C16 1.06 14.94 0 13.63 0zM4.75 13.63H2.37V6h2.38v7.63zM3.56 5.02c-.77 0-1.39-.62-1.39-1.39s.62-1.39 1.39-1.39 1.39.62 1.39 1.39-.62 1.39-1.39 1.39zm10.07 8.61h-2.38V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.77H6.2V6h2.28v1.04h.03c.32-.6 1.1-1.24 2.26-1.24 2.42 0 2.86 1.59 2.86 3.66v4.17z"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.telegram && (
                    <a
                      href={member.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${member.name} Telegram`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.93 5.48l-1.31 6.18c-.1.44-.36.55-.73.34l-2.02-1.49-1.09 1.07c-.1.1-.22.22-.44.22l.16-2.28 4.15-3.75c.18-.16-.04-.25-.28-.09L5.27 8.77l-2-.62c-.43-.14-.44-.43.09-.64l7.82-3.02c.36-.13.68.09.56.64l-.81.35z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Join Us CTA */}
        <section className="fade-up">
          <div className="rounded-card border border-accent/20 bg-gradient-to-b from-bg-elevated to-bg-surface p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/5 to-cyan/5 pointer-events-none" />
            <div className="relative max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-mono font-medium uppercase tracking-widest text-accent mb-6">
                {dict.teamPage.joinLabel}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                {dict.teamPage.joinTitle}
              </h2>
              <p className="text-text-secondary leading-body mb-8">
                {dict.teamPage.joinText}
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent text-white text-sm font-medium px-6 py-3 rounded-pill transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
              >
                {dict.teamPage.joinCta}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
