"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/app/lib/constants";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";
import { useFadeUp } from "@/app/lib/useFadeUp";

export default function TeamContent() {
  const dict = useDictionary();
  const ref = useFadeUp();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  return (
    <main className="pt-32 pb-20 md:pt-40 md:pb-28" ref={ref}>
      <div className="max-w-container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="fade-up mb-8 text-sm text-text-tertiary"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-text transition-colors"
              >
                {dict.teamPage.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text-secondary font-medium">
              {dict.teamPage.breadcrumbTeam}
            </li>
          </ol>
        </nav>

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
              key={member.nameKey}
              className="fade-up group rounded-card border border-border bg-bg-elevated overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.12)]"
            >
              {/* Avatar header */}
              <div className="relative h-[200px] bg-bg-surface flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />
                <div
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden`}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={dict.teamPage.members[member.nameKey]}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    member.initials
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-1 group-hover:text-accent transition-colors duration-300">
                  {dict.teamPage.members[member.nameKey]}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {dict.teamPage[member.roleKey]}
                </p>

                {/* Bio */}
                <p className="text-sm text-text-secondary leading-body mb-4">
                  {dict.teamPage.bios[member.nameKey]}
                </p>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-tertiary">{member.flag}</span>
                    <span className="text-text-secondary">
                      {member.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                      {dict.teamPage.focusLabel}
                    </span>
                    <span className="text-text-secondary">{member.focus}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                      {dict.teamPage.experienceLabel}
                    </span>
                    <span className="text-text-secondary">
                      {member.experience} {dict.teamPage.yearsShort}
                    </span>
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
                      aria-label={`${dict.teamPage.members[member.nameKey]} GitHub`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${dict.teamPage.members[member.nameKey]} LinkedIn`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M13.63 0H2.37C1.06 0 0 1.06 0 2.37v11.26C0 14.94 1.06 16 2.37 16h11.26c1.31 0 2.37-1.06 2.37-2.37V2.37C16 1.06 14.94 0 13.63 0zM4.75 13.63H2.37V6h2.38v7.63zM3.56 5.02c-.77 0-1.39-.62-1.39-1.39s.62-1.39 1.39-1.39 1.39.62 1.39 1.39-.62 1.39-1.39 1.39zm10.07 8.61h-2.38V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.77H6.2V6h2.28v1.04h.03c.32-.6 1.1-1.24 2.26-1.24 2.42 0 2.86 1.59 2.86 3.66v4.17z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.telegram && (
                    <a
                      href={member.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${dict.teamPage.members[member.nameKey]} Telegram`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.93 5.48l-1.31 6.18c-.1.44-.36.55-.73.34l-2.02-1.49-1.09 1.07c-.1.1-.22.22-.44.22l.16-2.28 4.15-3.75c.18-.16-.04-.25-.28-.09L5.27 8.77l-2-.62c-.43-.14-.44-.43.09-.64l7.82-3.02c.36-.13.68.09.56.64l-.81.35z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-tertiary hover:text-text transition-colors duration-200"
                      aria-label={`${dict.teamPage.members[member.nameKey]} Instagram`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C5.83 0 5.56.01 4.7.05 3.85.09 3.27.22 2.76.42c-.52.2-.97.48-1.41.92C.91 1.78.63 2.23.43 2.76.23 3.27.1 3.85.05 4.7.01 5.56 0 5.83 0 8s.01 2.44.05 3.3c.04.85.18 1.43.38 1.94.2.52.48.97.92 1.41.44.44.89.72 1.41.92.51.2 1.09.33 1.94.38.86.04 1.13.05 3.3.05s2.44-.01 3.3-.05c.85-.04 1.43-.18 1.94-.38.52-.2.97-.48 1.41-.92.44-.44.72-.89.92-1.41.2-.51.33-1.09.38-1.94.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.85-.18-1.43-.38-1.94-.2-.52-.48-.97-.92-1.41C13.77.9 13.32.62 12.8.42 12.29.22 11.71.09 10.86.05 10 .01 9.73 0 7.56 0H8zm-.74 1.44h.74c2.13 0 2.39.01 3.23.05.78.04 1.2.17 1.48.28.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.28 1.48.04.84.05 1.1.05 3.23s-.01 2.39-.05 3.23c-.04.78-.17 1.2-.28 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.48.28-.84.04-1.1.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.17-1.48-.28a2.47 2.47 0 01-.92-.6 2.47 2.47 0 01-.6-.92c-.11-.28-.24-.7-.28-1.48C1.45 10.39 1.44 10.13 1.44 8s.01-2.39.05-3.23c.04-.78.17-1.2.28-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.48-.28.73-.03 1.02-.04 2.49-.05v.01zm4.94 1.33a.96.96 0 100 1.92.96.96 0 000-1.92zM8 3.89a4.11 4.11 0 100 8.22A4.11 4.11 0 008 3.89zm0 1.44a2.67 2.67 0 110 5.34 2.67 2.67 0 010-5.34z" />
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
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-accent-deep hover:bg-accent text-white text-sm font-medium px-6 py-3 rounded-pill transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.4)]"
              >
                {dict.teamPage.joinCta}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
