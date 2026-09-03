import { getDictionary } from "@/app/lib/i18n/getDictionary";
import {
  SITE_URL,
  SITE_NAME,
  ORG_EXPERTISE,
  localeUrl,
} from "@/app/lib/seo";
import {
  SERVICE_PAGE_KEYS,
  SERVICE_PAGE_META,
  PROJECT_KEYS,
  PROJECT_META,
} from "@/app/lib/constants";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-language map of the site for language models.
 * Generated from the same constants the pages render from, so it cannot
 * drift out of sync the way a hand-written static file would.
 */
export async function GET() {
  const dict = await getDictionary("en");
  const en = (path = "") => localeUrl("en", path);

  const services = SERVICE_PAGE_KEYS.map((key) => {
    const item = dict.servicePages.items[key];
    return `- [${item.label}](${en(`/services/${SERVICE_PAGE_META[key].slug}`)}): ${item.intro}`;
  });

  const projects = PROJECT_KEYS.map((key) => {
    const item = dict.projectItems[key];
    const meta = PROJECT_META[key];
    return `- [${item.title}](${en(`/projects/${meta.slug}`)}): ${item.desc} Stack: ${meta.stack.join(", ")}. Delivered in ${meta.duration}.`;
  });

  const body = `# ${SITE_NAME}

> A product-focused web and mobile development studio from Kyiv, Ukraine. We build the full range — from landing pages and corporate sites through CRM systems, SaaS platforms and online stores, up to large marketplaces and mobile apps.

${SITE_NAME} is a senior team of engineers working in fixed-price sprints. Every project starts with a technical specification and architecture before any code is written, and ships with CI/CD, monitoring and error tracking in place. Clients keep full ownership of the code and work in their own repository throughout. The team has shipped 20+ projects since 2023 for clients across Europe, the Middle East and the USA, and works in English, Ukrainian and Russian.

## What we build

${ORG_EXPERTISE.map((item) => `- ${item}`).join("\n")}

## Services

${services.join("\n")}

## Case studies

${projects.join("\n")}

## Key pages

- [Home](${en()}): overview of services, stack and selected work.
- [Projects](${en("/projects")}): full portfolio with challenge, solution and stack per project.
- [About](${en("/about")}): how the studio works, process and principles.
- [Team](${en("/team")}): the engineers, their focus areas and public profiles.
- [FAQ](${en("/faq")}): pricing model, timelines, tech stack, code ownership and support.
- [Contact](${en("/contact")}): project inquiries — a technical assessment and estimate follow within 48 hours.

## Technology

Next.js, React, TypeScript, Tailwind CSS, NestJS, Node.js, PostgreSQL, Redis, Prisma, React Native, Expo, Docker, Socket.io, Meilisearch, Stripe.

## Notes

- Available in English (${en()}), Ukrainian (${localeUrl("uk")}) and Russian (${localeUrl("ru")}).
- Canonical domain: ${SITE_URL}
- Contact: ${dict.contactPage.metaDescription}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
