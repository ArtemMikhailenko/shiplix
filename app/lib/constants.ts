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
  "crypto",
  "mobile",
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
  }
> = {
  inciCore: {
    tag: "SaaS",
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "CRM"],
    image: "/projects/og-zapys.png",
    images: ["/projects/og-zapys.png"],
    duration: "14 weeks",
    slug: "zapys24",
  },
  marketplace: {
    tag: "Marketplace",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Socket.io"],
    image: "/projects/marketplace.png",
    images: ["/projects/marketplace.png"],
    duration: "10 weeks",
    slug: "marketplace",
  },
  crypto: {
    tag: "Fintech",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "ethers.js"],
    image: "/projects/crypto.png",
    images: ["/projects/crypto.png"],
    duration: "8 weeks",
    slug: "crypto-processor",
  },
  mobile: {
    tag: "Mobile",
    stack: ["React Native", "Expo", "TypeScript", "ethers.js"],
    image: "/projects/mobile.png",
    images: ["/projects/mobile.png"],
    duration: "6 weeks",
    slug: "mobile-wallet",
  },
};

export const TAG_COLORS: Record<string, string> = {
  SaaS: "text-accent",
  Marketplace: "text-cyan",
  Fintech: "text-orange",
  Mobile: "text-green",
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
  { tech: ["NestJS", "ethers.js", "Redis"] },
];

export const CONTACT = {
  email: "artemlend@gmail.com",
  telegram: "@artem_mykhailenko99",
  linkedin: "https://linkedin.com/company/shiplix",
  // github: "https://github.com/shiplix",
  calendly: "https://calendly.com/shiplix/30min",
};

export const CLIENTS = [
  "Enez",
  "TradeNest",
  "PayChain",
  "WalletX",
  "NovaTech",
  "BrightPath",
  "CloudSync",
  "DataPulse",
  "SwiftPay",
  "GreenVolt",
];

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
