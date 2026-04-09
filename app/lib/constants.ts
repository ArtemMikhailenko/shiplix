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

export const SERVICE_META: Record<ServiceKey, { icon: string; color: string }> =
  {
    saas: { icon: "◆", color: "text-accent" },
    marketplace: { icon: "◈", color: "text-cyan" },
    mobile: { icon: "▲", color: "text-green" },
    fintech: { icon: "⬡", color: "text-orange" },
    landing: { icon: "◎", color: "text-cyan" },
    ecommerce: { icon: "▣", color: "text-green" },
    automation: { icon: "⚡", color: "text-pink" },
    mvp: { icon: "→", color: "text-accent-deep" },
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
    duration: string;
    challenge: string;
    result: string;
  }
> = {
  inciCore: {
    tag: "SaaS",
    stack: ["NestJS", "Next.js 14", "PostgreSQL", "Puppeteer", "Stripe"],
    image: "/projects/inci-core.png",
    duration: "12 weeks",
    challenge:
      "EU cosmetics regulation requires extensive product information documentation. Existing solutions were outdated and non-compliant.",
    result:
      "Full-featured SaaS platform handling 31,000+ ingredients, automated PDF generation, and Stripe billing with EU VAT compliance.",
  },
  marketplace: {
    tag: "Marketplace",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "Redis", "Socket.io"],
    image: "/projects/marketplace.png",
    duration: "10 weeks",
    challenge:
      "Complex multi-vendor platform requiring separate experiences for buyers, sellers, and administrators with real-time communication.",
    result:
      "3 separate frontends with real-time notifications, full-text search via Meilisearch, and file storage with MinIO. 200+ tasks in 5 sprints.",
  },
  crypto: {
    tag: "Fintech",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Redis", "ethers.js"],
    image: "/projects/crypto.png",
    duration: "8 weeks",
    challenge:
      "Building reliable blockchain monitoring across multiple networks with automatic transaction detection and merchant notifications.",
    result:
      "Payment processor supporting ETH, TRON, and BSC. Handles thousands of daily transactions with webhook notifications and merchant dashboard.",
  },
  mobile: {
    tag: "Mobile",
    stack: ["React Native", "Expo", "TypeScript", "ethers.js"],
    image: "/projects/mobile.png",
    duration: "6 weeks",
    challenge:
      "Creating a secure cross-platform mobile app with built-in cryptocurrency wallet functionality and seamless key management.",
    result:
      "Polished app with token management, secure key storage, and smooth UX. From Figma mockup to App Store in 6 weeks.",
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
  {
    tag: "SaaS",
    title: "EU Compliance SaaS",
    tech: ["NestJS", "Next.js", "Stripe"],
  },
  {
    tag: "Marketplace",
    title: "Multi-Vendor Marketplace",
    tech: ["Next.js", "PostgreSQL", "Redis"],
  },
  {
    tag: "Fintech",
    title: "Crypto Payment Processor",
    tech: ["NestJS", "ethers.js", "Redis"],
  },
];

export const CONTACT = {
  email: "artemlend@gmail.com",
  telegram: "@artem_mykhailenko99",
  linkedin: "https://linkedin.com/company/shiplix",
  github: "https://github.com/shiplix",
};

export const TESTIMONIALS = [
  {
    quote:
      "Shiplix delivered our SaaS platform 2 weeks ahead of schedule. Clean code, clear communication, and zero drama. Exactly what we needed.",
    name: "Marcus Weber",
    role: "CTO, ComplianceHub",
    company: "SaaS · Germany",
  },
  {
    quote:
      "We tested 3 agencies before Shiplix. They were the only team that truly understood marketplace complexity — separate panels, real-time sync, the works.",
    name: "Sarah Chen",
    role: "Founder, TradeNest",
    company: "Marketplace · UAE",
  },
  {
    quote:
      "Our crypto payment processor handles thousands of transactions daily. Shiplix built it to be bulletproof from day one. Rock-solid architecture.",
    name: "Daniel Kovács",
    role: "CEO, PayChain",
    company: "Fintech · Hungary",
  },
  {
    quote:
      "From a rough Figma mockup to a polished mobile app in 6 weeks. The team moved fast without cutting corners. Would hire again in a heartbeat.",
    name: "Amira Al-Rashid",
    role: "Product Lead, WalletX",
    company: "Mobile · Saudi Arabia",
  },
];

export const CLIENTS = [
  "ComplianceHub",
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
  | "roleDesign";

export interface TeamMember {
  name: string;
  roleKey: TeamRole;
  initials: string;
  location: string;
  flag: string;
  focus: string;
  stack: string[];
  socials: { github?: string; linkedin?: string; telegram?: string };
  accentColor: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Artem Mykhailenko",
    roleKey: "roleFounder",
    initials: "AM",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "Architecture & Product",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    socials: { github: "https://github.com/artemmykhailenko", linkedin: "https://linkedin.com/in/artemmykhailenko", telegram: "https://t.me/artem_mykhailenko99" },
    accentColor: "from-accent-deep to-cyan",
  },
  {
    name: "Dmytro Koval",
    roleKey: "roleFull",
    initials: "DK",
    location: "Lviv, Ukraine",
    flag: "🇺🇦",
    focus: "Full-Stack & APIs",
    stack: ["NestJS", "Next.js", "Redis", "Prisma"],
    socials: { github: "https://github.com/dmytrokoval" },
    accentColor: "from-cyan to-green",
  },
  {
    name: "Olena Shevchenko",
    roleKey: "roleFront",
    initials: "OS",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "UI/UX & Frontend",
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    socials: { linkedin: "https://linkedin.com/in/olenashevchenko" },
    accentColor: "from-pink to-accent",
  },
  {
    name: "Vladyslav Bondar",
    roleKey: "roleBack",
    initials: "VB",
    location: "Dnipro, Ukraine",
    flag: "🇺🇦",
    focus: "Backend & Infra",
    stack: ["Node.js", "NestJS", "PostgreSQL", "Docker"],
    socials: { github: "https://github.com/vladyslavbondar" },
    accentColor: "from-orange to-pink",
  },
  {
    name: "Maksym Polishchuk",
    roleKey: "roleMobile",
    initials: "MP",
    location: "Kharkiv, Ukraine",
    flag: "🇺🇦",
    focus: "Mobile & Cross-Platform",
    stack: ["React Native", "Expo", "TypeScript", "ethers.js"],
    socials: { telegram: "https://t.me/makspolishchuk" },
    accentColor: "from-green to-cyan",
  },
  {
    name: "Kateryna Lysenko",
    roleKey: "roleDesign",
    initials: "KL",
    location: "Kyiv, Ukraine",
    flag: "🇺🇦",
    focus: "Product Design",
    stack: ["Figma", "Prototyping", "Design Systems"],
    socials: { linkedin: "https://linkedin.com/in/katerynalysenko" },
    accentColor: "from-accent to-pink",
  },
];
