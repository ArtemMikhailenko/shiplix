import { BrowserFrame } from "@/app/[locale]/projects/projectUi";
import type { Block } from "@/app/lib/blog/types";

/**
 * Renders an article's blocks. The renderer owns the typography so posts stay
 * consistent with the rest of the site and cannot inject markup of their own.
 */
export function BlogBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 text-2xl font-bold tracking-heading leading-heading text-text md:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "p":
            return (
              <p key={i} className="text-[17px] leading-body text-text-secondary">
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-[17px] leading-body text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "steps":
            return (
              <ol key={i} className="space-y-4">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 font-mono text-[13px] text-accent">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] leading-body text-text-secondary">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <p
                key={i}
                className="my-4 border-l-2 border-accent bg-bg-elevated py-5 pl-6 pr-6 text-[17px] leading-body text-text"
              >
                {block.text}
              </p>
            );

          case "image":
            return (
              <figure key={i} className="my-8">
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
              <div key={i} className="my-6 overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-left">
                  <thead>
                    <tr>
                      {head.map((cell) => (
                        <th
                          key={cell}
                          className="border-b border-border pb-3 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-text-tertiary"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.join("|")} className="border-b border-border/60">
                        {row.map((cell, c) => (
                          <td
                            key={cell + c}
                            className={`py-3 text-[15px] ${
                              c === 0 ? "text-text-secondary" : "text-text"
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
