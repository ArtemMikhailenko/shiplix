import { BrowserFrame } from "@/app/[locale]/projects/projectUi";
import type { Block } from "@/app/lib/blog/types";

/** Stable anchor for a heading, so the contents rail can link to it. */
export function slugifyHeading(text: string): string {
  return (
    "s-" +
    text
      .toLowerCase()
      // Latin plus Ukrainian Cyrillic; unicode property escapes need a newer
      // compile target than this project uses.
      .replace(/[^a-zа-яёіїєґ0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48)
  );
}

/**
 * Renders an article's blocks. The renderer owns the typography so posts stay
 * consistent with the rest of the site and cannot inject markup of their own.
 *
 * Reading measure is set by the parent (max-w-[68ch]); blocks that carry the
 * argument visually — figures, pull quotes, tables — deliberately break out
 * of it, which is what stops a long article reading as one grey column.
 */
export function BlogBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(block.text)}
                className="scroll-mt-28 pt-10 text-[1.6rem] font-bold tracking-heading leading-[1.2] text-text md:text-[2rem]"
              >
                {block.text}
              </h2>
            );

          case "p": {
            // The opening paragraph carries the reader in; it gets more air.
            const lead = i === 0;
            return (
              <p
                key={i}
                className={
                  lead
                    ? "text-[1.3rem] leading-[1.6] text-text"
                    : "text-[1.0625rem] leading-[1.75] text-text-secondary"
                }
              >
                {block.text}
              </p>
            );
          }

          case "list":
            return (
              <ul key={i} className="space-y-3.5">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                    />
                    <span className="text-[1.0625rem] leading-[1.75] text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol key={i} className="space-y-5">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-[12px] text-accent">
                      {n + 1}
                    </span>
                    <span className="pt-1 text-[1.0625rem] leading-[1.75] text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            // Breaks the measure on both sides and drops the body voice for
            // a statement — the one line the reader should keep.
            return (
              <blockquote
                key={i}
                className="relative my-10 lg:-mx-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] rounded-pill bg-gradient-to-b from-accent to-cyan"
                />
                <p className="pl-7 text-[1.35rem] font-medium leading-[1.5] tracking-heading text-text md:text-[1.5rem]">
                  {block.text}
                </p>
              </blockquote>
            );

          case "image":
            return (
              <figure key={i} className="my-12 lg:-mx-12">
                <BrowserFrame src={block.src} alt={block.alt} natural />
                {block.caption && (
                  <figcaption className="mt-3 text-sm text-text-tertiary">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "table": {
            const [head, ...rows] = block.rows;
            return (
              <div
                key={i}
                className="my-10 overflow-x-auto rounded-card border border-border bg-bg-elevated lg:-mx-8"
              >
                <table className="w-full min-w-[440px] border-collapse text-left">
                  <thead>
                    <tr className="bg-bg-hover/50">
                      {head.map((cell) => (
                        <th
                          key={cell}
                          className="px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-text-tertiary"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr
                        key={row.join("|")}
                        className="border-t border-border transition-colors hover:bg-bg-hover/40"
                      >
                        {row.map((cell, c) => (
                          <td
                            key={cell + c}
                            className={`px-6 py-4 text-[15px] ${
                              c === 0
                                ? "text-text-secondary"
                                : "font-medium text-text"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }
      })}
    </div>
  );
}
