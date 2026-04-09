"use client";

import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { HERO_CARDS, CONTACT } from "@/app/lib/constants";
import { useFadeUp } from "@/app/lib/useFadeUp";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const CARD_KEYS = ["c1", "c2", "c3"] as const;

export default function Hero() {
  const ref = useFadeUp();
  const dict = useDictionary();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" ref={ref}>
      <div className="hero-glow" />

      <div className="relative z-10 max-w-container mx-auto px-6">
        <div className="fade-up">
          <Badge className="mb-8">
            <span className="w-2 h-2 rounded-full bg-green pulse-dot" />
            {dict.hero.badge}
          </Badge>
        </div>

        <h1 className="fade-up text-[clamp(3rem,6.5vw,5rem)] font-bold tracking-heading leading-heading mb-6 max-w-4xl">
          {dict.hero.headlinePre}<span className="gradient-text">{dict.hero.headlineHighlight}</span>{dict.hero.headlinePost.split("\n").map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>

        <p className="fade-up text-text-secondary text-lg md:text-xl leading-body max-w-2xl mb-10">
          {dict.hero.sub}
        </p>

        <div className="fade-up flex flex-wrap gap-4 mb-16 md:mb-20">
          <Button variant="primary" href={`mailto:${CONTACT.email}`}>
            {dict.hero.cta1}
          </Button>
          <Button variant="ghost" href="#work">
            {dict.hero.cta2}
          </Button>
        </div>

        <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-4">
          {CARD_KEYS.map((key, i) => {
            const card = dict.hero.cards[key];
            const tech = HERO_CARDS[i]?.tech || [];
            return (
              <div
                key={key}
                className="group p-5 rounded-card border border-border bg-bg-elevated hover:border-border-hover hover:bg-bg-surface transition-all duration-300 hover:-translate-y-[3px]"
              >
                <span className="inline-block text-xs font-mono font-medium px-2 py-0.5 rounded-pill border border-border text-text-secondary mb-3">
                  {card.tag}
                </span>
                <h3 className="text-sm font-semibold text-text mb-3">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-text-tertiary px-1.5 py-0.5 rounded bg-bg-hover"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
