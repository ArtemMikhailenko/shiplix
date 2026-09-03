// Keyed constants — text comes from i18n dictionaries, data stays here.

export const SERVICE_KEYS = [
  "saas",
  "marketplace",
  "mobile",
  "fintech",
  "landing",
  "ecommerce",
  "automation",
  "mvp",
] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_META: Record<ServiceKey, { color: string }> = {
  saas: { color: "text-accent" },
  marketplace: { color: "text-cyan" },
  mobile: { color: "text-green" },
  fintech: { color: "text-orange" },
  landing: { color: "text-cyan" },
  ecommerce: { color: "text-green" },
  automation: { color: "text-pink" },
  mvp: { color: "text-accent-deep" },
};

export const PROJECT_KEYS = [
  "inciCore",
  "marketplace",
  "servicesHelper",
  "similiaStudio",
  "orthoDent",
  "rentaLviv",
  "iCleaning",
  "vbkPartner",
  "dcProduction",
  "artexClean",
  // "edtech",
  // "analytics",
] as const;
export type ProjectKey = (typeof PROJECT_KEYS)[number];

export const PROJECT_META: Record<
  ProjectKey,
  {
    tag: string;
    stack: string[];
    image: string;
    images: string[];
    duration: string;
    slug: string;
    /** Public URL of the shipped product, when it can be linked. */
    liveUrl?: string;
    /** Brand mark shown on the portfolio card; `image` stays the detail hero. */
    logo?: string;
  }
> = {
  inciCore: {
    logo: "/projects/logo-zapys24.webp",
    tag: "SaaS",
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "CRM"],
    image: "/projects/og-zapys.webp",
    images: ["/projects/og-zapys.webp"],
    duration: "14 weeks",
    slug: "zapys24",
  },
  marketplace: {
    logo: "/projects/logo-enez.webp",
    tag: "Marketplace",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Socket.io"],
    image: "/projects/marketplace.webp",
    images: ["/projects/marketplace.webp"],
    duration: "10 weeks",
    slug: "marketplace",
  },
  servicesHelper: {
    logo: "/projects/logo-services-helper.webp",
    tag: "Platform",
    stack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM", "Stripe", "Cloudinary"],
    image: "/projects/services-helper.webp",
    images: [
      "/projects/services-helper.webp",
      "/projects/services-helper-flow.webp",
      "/projects/services-helper-search.webp",
      "/projects/services-helper-pricing.webp",
    ],
    duration: "",
    slug: "services-helper",
    liveUrl: "https://services-helper.com",
  },
  similiaStudio: {
    logo: "/projects/logo-similia.webp",
    tag: "Web",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary", "Resend", "next-intl"],
    image: "/projects/similia-studio.webp",
    images: ["/projects/similia-studio.webp"],
    duration: "",
    slug: "similia-studio",
    liveUrl: "https://similiastudio.com",
  },
  dcProduction: {
    logo: "/projects/logo-dc-production.webp",
    tag: "Web",
    stack: ["Next.js", "Payload CMS", "PostgreSQL", "GSAP", "next-intl", "Vercel Blob"],
    image: "/projects/dc-production.webp",
    images: ["/projects/dc-production.webp"],
    duration: "",
    slug: "dc-production",
    liveUrl: "https://dreamchaseprod.com",
  },
  orthoDent: {
    logo: "/projects/logo-orthostore.webp",
    tag: "E-Commerce",
    stack: ["Next.js", "NestJS", "MongoDB", "Ant Design", "JWT", "Swagger"],
    image: "/projects/logo-orthostore.webp",
    images: ["/projects/logo-orthostore.webp"],
    duration: "",
    slug: "orthostore",
  },
  rentaLviv: {
    logo: "/projects/logo-rentalviv.webp",
    tag: "Web",
    stack: ["Next.js", "MongoDB", "Cloudinary", "dnd-kit"],
    image: "/projects/rentalviv.webp",
    images: ["/projects/rentalviv.webp"],
    duration: "",
    slug: "rentalviv",
    liveUrl: "https://www.rentalviv.com",
  },
  iCleaning: {
    logo: "/projects/logo-icleaning.webp",
    tag: "Web",
    stack: ["Next.js", "MongoDB", "Stripe", "Cloudinary", "Swiper"],
    image: "/projects/logo-icleaning.webp",
    images: ["/projects/logo-icleaning.webp"],
    duration: "",
    slug: "icleaning",
  },
  vbkPartner: {
    logo: "/projects/logo-vbk-partner.webp",
    tag: "Web",
    stack: ["Next.js", "React", "TypeScript"],
    image: "/projects/vbk-partner.webp",
    images: ["/projects/vbk-partner.webp"],
    duration: "",
    slug: "vbk-partner",
    liveUrl: "https://vbk-partner.com",
  },
  artexClean: {
    logo: "/projects/logo-artex.webp",
    tag: "Landing",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    image: "/projects/artex-clean.webp",
    images: ["/projects/artex-clean.webp"],
    duration: "",
    slug: "artex-cleaning",
    liveUrl: "https://artex-clin.com",
  },
  // edtech: {
  //   tag: "EdTech",
  //   stack: ["Next.js 14", "NestJS", "PostgreSQL", "WebRTC", "Stripe"],
  //   image: "/projects/og-zapys.webp",
  //   images: ["/projects/og-zapys.webp"],
  //   duration: "12 weeks",
  //   slug: "edtech-platform",
  // },
  // analytics: {
  //   tag: "Dashboard",
  //   stack: ["React", "D3.js", "NestJS", "ClickHouse", "WebSocket"],
  //   image: "/projects/marketplace.webp",
  //   images: ["/projects/marketplace.webp"],
  //   duration: "9 weeks",
  //   slug: "analytics-dashboard",
  // },
};

export const TAG_COLORS: Record<string, string> = {
  SaaS: "text-accent",
  Marketplace: "text-cyan",
  Platform: "text-accent",
  "E-Commerce": "text-pink",
  Web: "text-green",
  Landing: "text-orange",
  EdTech: "text-pink",
  Dashboard: "text-cyan",
};

export const STAT_KEYS = ["projects", "years", "industries"] as const;
export type StatKey = (typeof STAT_KEYS)[number];

export const STAT_META: Record<StatKey, { value: string; color: string }> = {
  projects: { value: "20+", color: "text-accent" },
  years: { value: "3+", color: "text-cyan" },
  industries: { value: "5", color: "text-green" },
};

export const PROCESS_KEYS = ["discovery", "build", "launch"] as const;
export type ProcessKey = (typeof PROCESS_KEYS)[number];

export const PROCESS_META: Record<ProcessKey, { number: string }> = {
  discovery: { number: "01" },
  build: { number: "02" },
  launch: { number: "03" },
};

export const WHY_US_KEYS = [
  "contact",
  "parallel",
  "production",
  "pricing",
] as const;
export type WhyUsKey = (typeof WHY_US_KEYS)[number];

export const TECH_STACK = [
  { name: "Next.js", color: "#ffffff" },
  { name: "NestJS", color: "#e11d48" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "React Native", color: "#67e8f9" },
  { name: "Docker", color: "#2496ed" },
  { name: "Prisma", color: "#5a67d8" },
  { name: "Redis", color: "#dc382d" },
  { name: "Node.js", color: "#4ade80" },
  { name: "Socket.io", color: "#fb923c" },
  { name: "Meilisearch", color: "#b4a0ff" },
  { name: "Stripe", color: "#635bff" },
];

export const HERO_CARDS = [
  { tech: ["NestJS", "Next.js", "Stripe"] },
  { tech: ["Next.js", "PostgreSQL", "Redis"] },
  { tech: ["Next.js", "MongoDB", "Cloudinary"] },
];

export const CONTACT = {
  email: "artemlend@gmail.com",
  telegram: "@artem_mykhailenko99",
  linkedin: "https://linkedin.com/company/shiplix",
  github: "https://github.com/shiplix",
  calendly: "https://calendly.com/shiplix/30min",
};


export type TeamRole =
  | "roleFounder"
  | "roleFull"
  | "roleFront"
  | "roleBack"
  | "roleMobile"
  | "roleDesign"
  | "roleTest";

export type TeamMemberKey =
  | "artem"
  | "pavlo"
  | "volodymyr"
  | "anton"
  | "oleksandr";

export interface TeamMember {
  nameKey: TeamMemberKey;
  roleKey: TeamRole;
  initials: string;
  photo?: string;
  location: string;
  flag: string;
  focus: string;
  experience: string;
  stack: string[];
  socials: {
    github?: string;
    linkedin?: string;
    telegram?: string;
    instagram?: string;
  };
  accentColor: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    nameKey: "artem",
    roleKey: "roleFounder",
    photo:
      "https://media.licdn.com/dms/image/v2/D4E03AQGN68Pbzb8jfg/profile-displayphoto-crop_800_800/B4EZecCIa_GwAI-/0/1750669499557?e=1777507200&v=beta&t=23ONCXfXtZmK7z_MIbDqK3418o7x5P9X50eJWRA9QW0",
    initials: "AM",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "Architecture & Product",
    experience: "5+",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Management"],
    socials: {
      github: "https://github.com/artemmykhailenko",
      linkedin: "https://linkedin.com/in/artemmykhailenko",
      telegram: "https://t.me/artem_mykhailenko99",
    },
    accentColor: "from-accent-deep to-cyan",
  },
  {
    nameKey: "pavlo",
    roleKey: "roleFull",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQFeOp70FIXKoQ/profile-displayphoto-shrink_800_800/B4DZRvcTZtHYAk-/0/1737036478560?e=1777507200&v=beta&t=0U9T4l_LBcjg7Gply-oN4noUSz7lTAnGEoymEeYRBAo",
    initials: "PS",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "Full-Stack & DevOps",
    experience: "4+",
    stack: ["NestJS", "Next.js", "Kubernetes", "DigitalOcean"],
    socials: {
      github: "https://github.com/smirnypavel",
      linkedin: "https://www.linkedin.com/in/pavel-smirny-b36578347/",
      telegram: "https://t.me/makakosik",
    },
    accentColor: "from-cyan to-green",
  },
  {
    nameKey: "volodymyr",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQEgLeBLukZGrA/profile-displayphoto-crop_800_800/B4DZeOJZLqGkAQ-/0/1750436517066?e=1777507200&v=beta&t=WU8esMvBcm9agtHSV6pNO4W7hPwfSj3HKxCUCt84oWk",
    roleKey: "roleFull",
    initials: "VL",
    location: "Kryvyi Rih, Ukraine",
    flag: "🇺🇦",
    focus: "Full-Stack & System Design",
    experience: "4+",
    stack: ["Microservices", "React", "Databases", "NestJS", "Python"],
    socials: {
      linkedin: "https://www.linkedin.com/in/volodymyr-lysenko/",
      github: "https://github.com/lusiy321",
      telegram: "https://t.me/Lusiy321",
      instagram: "https://www.instagram.com/lusiy",
    },
    accentColor: "from-pink to-accent",
  },
  {
    nameKey: "anton",
    photo: "https://avatars.githubusercontent.com/u/72727911?v=4",
    roleKey: "roleFull",
    initials: "AL",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "Frontend & Web3",
    experience: "3+",
    stack: ["React Native", "WEB3", "Solidity"],
    socials: {
      linkedin: "https://www.linkedin.com/in/anton-kilmichenko-28b0a224b/",
      github: "https://github.com/BroodCaster",
    },
    accentColor: "from-pink to-accent",
  },
  {
    nameKey: "oleksandr",
    photo:
      "https://media.licdn.com/dms/image/v2/C4D03AQFMQa1zTWx2aQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517545128882?e=1777507200&v=beta&t=b9y2B2mXuhY3F3v9ozIb8Xw8uFZehORQ1WnImcUf-pg",
    roleKey: "roleTest",
    initials: "OH",
    location: "Lviv, Ukraine",
    flag: "🇺🇦",
    focus: "Manual Testing & QA",
    experience: "6+",
    stack: ["Manual Testing", "QA", "Automation"],
    socials: {
      linkedin: "https://www.linkedin.com/in/alex-horovikh-0151b9139/",
    },
    accentColor: "from-pink to-accent",
  },
];

/* ── Service landing pages (SEO entry points) ── */

export const SERVICE_PAGE_KEYS = [
  "ecommerce",
  "marketplace",
  "saas",
  "crm",
  "mobile",
  "mvp",
  "crypto",
] as const;
export type ServicePageKey = (typeof SERVICE_PAGE_KEYS)[number];

export const SERVICE_PAGE_META: Record<
  ServicePageKey,
  {
    slug: string;
    /** Case study shown as proof on the page, when one exists. */
    project?: ProjectKey;
    stack: string[];
    color: string;
  }
> = {
  saas: {
    slug: "saas-development",
    project: "inciCore",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Stripe", "Docker"],
    color: "text-accent",
  },
  mvp: {
    slug: "mvp-development",
    project: "similiaStudio",
    stack: ["Next.js", "NestJS", "React Native", "PostgreSQL", "Prisma"],
    color: "text-cyan",
  },
  crypto: {
    slug: "crypto-payment-integration",
    stack: ["NestJS", "ethers.js", "PostgreSQL", "Redis", "Next.js", "Webhooks"],
    color: "text-orange",
  },
  ecommerce: {
    slug: "ecommerce-development",
    project: "orthoDent",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Prisma", "Redis"],
    color: "text-green",
  },
  marketplace: {
    slug: "marketplace-development",
    project: "marketplace",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Socket.io", "Meilisearch"],
    color: "text-cyan",
  },
  crm: {
    slug: "crm-development",
    project: "inciCore",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Prisma", "Webhooks"],
    color: "text-accent",
  },
  mobile: {
    slug: "mobile-app-development",
    stack: ["React Native", "Expo", "TypeScript", "NestJS", "PostgreSQL"],
    color: "text-green",
  },
};

export const SERVICE_WHAT_KEYS = ["w1", "w2", "w3", "w4", "w5", "w6"] as const;
export const SERVICE_FAQ_KEYS = ["f1", "f2", "f3", "f4", "f5"] as const;
export const SERVICE_DELIVERABLE_KEYS = ["d1", "d2", "d3", "d4", "d5"] as const;
