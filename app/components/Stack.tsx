"use client";

import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const STACK_GROUPS = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", color: "#ffffff" },
      { name: "React", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#38bdf8" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", color: "#e11d48" },
      { name: "Node.js", color: "#4ade80" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#dc382d" },
      { name: "Prisma", color: "#5a67d8" },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", color: "#67e8f9" },
      { name: "Expo", color: "#ffffff" },
    ],
  },
  {
    label: "Infra & Tools",
    items: [
      { name: "Docker", color: "#2496ed" },
      { name: "Socket.io", color: "#fb923c" },
      { name: "Meilisearch", color: "#b4a0ff" },
      { name: "Stripe", color: "#635bff" },
    ],
  },
];

export default function Stack() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section
      id="stack"
      className="py-20 md:py-[120px] bg-bg-elevated border-t border-b border-border"
      ref={ref}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="fade-up">
          <SectionHeading
            label={dict.stack.label}
            title={dict.stack.title}
            subtitle={dict.stack.sub}
          />
        </div>

        <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-mono font-medium uppercase tracking-widest text-text-tertiary mb-3">
                {group.label}
              </p>
              <div className="flex flex-col gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text rounded-card border border-border bg-bg hover:border-border-hover hover:bg-bg-surface transition-all duration-200"
                  >
                    <span
                      className="w-[7px] h-[7px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
