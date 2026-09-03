const en = {
  homePage: {
    metaTitle: "Shiplix — SaaS, Marketplace & MVP Development Company",
    metaDescription:
      "Ukrainian product dev studio. We build production-ready SaaS platforms, marketplaces, fintech and mobile apps — MVP in 6-8 weeks, fixed-price sprints.",
  },
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    team: "Team",
    contact: "Contact",
    faq: "FAQ",
    getInTouch: "Get in touch",
  },
  hero: {
    badge: "Open for new projects",
    headlinePre: "We ",
    headlineHighlight: "ship",
    headlinePost: " products\nthat matter",
    sub: "A product-focused dev team from Ukraine. SaaS, marketplaces, mobile apps — from spec to production.",
    cta1: "Start a project →",
    cta2: "View our work",
    cards: {
      c1: { tag: "SaaS", title: "Online Booking SaaS" },
      c2: { tag: "Marketplace", title: "Multi-Vendor Marketplace" },
      c3: { tag: "Fintech", title: "Crypto Payment Processor" },
    },
    stats: {
      projects: "projects",
      rating: "on Clutch",
      clients: "clients",
      deploy: "to deploy",
    },
  },
  clients: {
    label: "Trusted by teams across Europe, Middle East & USA",
  },
  stats: {
    projects: "Projects shipped",
    projectsDesc: "Web apps, mobile, SaaS — from MVP to scale",
    years: "Years in production",
    yearsDesc: "Shipping real products since 2023",
    delivery: "On-time delivery",
    deliveryDesc: "Predictable timelines, no surprises",
    industries: "Industries covered",
    industriesDesc: "FinTech, EdTech, E-com, Health & more",
  },
  services: {
    label: "Services",
    title: "Everything you need to ship a product",
    sub: "SaaS, marketplaces, e-commerce, landing pages, mobile apps, and automation. One team, full-cycle delivery.",
    items: {
      saas: {
        title: "SaaS Platforms",
        desc: "Complex business logic, subscriptions, role-based access, document generation, and regulatory compliance.",
      },
      marketplace: {
        title: "Marketplaces",
        desc: "Multi-vendor platforms with separate panels for buyers, sellers, and admins. Real-time search and payments.",
      },
      mobile: {
        title: "Mobile Apps",
        desc: "Cross-platform React Native apps — from crypto wallets to service booking. Idea to App Store.",
      },
      fintech: {
        title: "Fintech & Crypto",
        desc: "Payment processors, blockchain integrations, Stripe with EU VAT, and crypto wallet modules.",
      },
      landing: {
        title: "Landing Pages & Corporate Sites",
        desc: "High-converting landing pages and corporate websites. SEO-optimized, blazing-fast, with polished UI and animations.",
      },
      ecommerce: {
        title: "E-Commerce & Online Stores",
        desc: "Custom storefronts, product catalogs, cart & checkout flows, payment integrations, and inventory management.",
      },
      automation: {
        title: "Automation & No-Code",
        desc: "Airtable, Make, n8n workflows. Custom webhooks, document generation, API integrations, and process automation.",
      },
      mvp: {
        title: "MVP Development",
        desc: "Validate fast. Production-ready MVPs in 4–8 weeks with clean architecture that scales.",
      },
    },
  },
  projects: {
    label: "Selected work",
    title: "Shipped to production. Code we're proud of.",
    sub: "Different industries, different challenges. Every project delivered on time with clean, maintainable code.",
    viewAll: "View all projects →",
  },
  projectItems: {
    inciCore: {
      title: "Zapys24 — Multi-Tenant Online Booking SaaS",
      desc: "Production-ready SaaS platform for automated appointment scheduling. Multi-tenant architecture with isolated business contexts, time-slot validation, conflict detection, and automated notifications.",
      challenge:
        "Small and medium businesses needed a scalable booking solution supporting multiple independent tenants with isolated data, real-time scheduling conflict detection, and automated notification workflows.",
      result:
        "Full-featured multi-tenant SaaS serving beauty salons, auto repair shops, and medical centers. 24/7 online booking with conflict detection, staff management, and automated reminders.",
      features:
        "Multi-tenant isolation · Time-slot validation · Conflict detection · Automated reminders · Staff management · Service configuration · Client databases · Horizontal scaling",
    },
    marketplace: {
      title: "Multi-Vendor Marketplace",
      desc: "3 separate frontends, real-time notifications with Socket.io, Meilisearch, MinIO storage. 5 sprints, 200+ tasks.",
      challenge:
        "Complex multi-vendor platform requiring separate experiences for buyers, sellers, and administrators with real-time communication.",
      result:
        "3 separate frontends with real-time notifications, full-text search via Meilisearch, and file storage with MinIO. 200+ tasks in 5 sprints.",
      features:
        "3 separate panels · Real-time notifications · Full-text search · File storage · Payments · Order management · Admin dashboard · Analytics",
    },
    crypto: {
      title: "Crypto Payment Processor",
      desc: "Blockchain monitoring for ETH, TRON, BSC. Automatic transaction detection, merchant dashboard, webhook notifications.",
      challenge:
        "Building reliable blockchain monitoring across multiple networks with automatic transaction detection and merchant notifications.",
      result:
        "Payment processor supporting ETH, TRON, and BSC. Handles thousands of daily transactions with webhook notifications and merchant dashboard.",
      features:
        "Multi-chain monitoring · Auto transaction detection · Merchant dashboard · Webhook notifications · Wallet management · Transaction history · Security layer",
    },
    mobile: {
      title: "Mobile App with Crypto Wallet",
      desc: "Cross-platform app with built-in cryptocurrency wallet, token management, and secure key storage.",
      challenge:
        "Creating a secure cross-platform mobile app with built-in cryptocurrency wallet functionality and seamless key management.",
      result:
        "Polished app with token management, secure key storage, and smooth UX. From Figma mockup to App Store in 6 weeks.",
      features:
        "Crypto wallet · Token management · Secure key storage · Cross-platform · Push notifications · Biometric auth · Transaction history",
    },
    edtech: {
      title: "EdTech Platform with Live Classes",
      desc: "Online learning platform with video conferencing, course builder, progress tracking, and integrated payments.",
      challenge:
        "Building a scalable learning platform with real-time video, interactive course content, and seamless payment integration for subscriptions.",
      result:
        "Full-featured LMS serving 2000+ students. Live classes via WebRTC, automated certificate generation, and Stripe-powered subscriptions.",
      features:
        "Live video classes · Course builder · Progress tracking · Certificates · Stripe payments · Student dashboard · Admin analytics · Mobile-ready",
    },
    analytics: {
      title: "Real-Time Analytics Dashboard",
      desc: "Business intelligence platform with real-time data visualization, custom reports, and alerting system.",
      challenge:
        "Processing millions of events per day with sub-second query times and real-time dashboard updates across multiple data sources.",
      result:
        "Dashboard processing 5M+ daily events with <200ms query response. Real-time charts, custom alerts, and exportable reports.",
      features:
        "Real-time charts · Custom reports · Alert system · ClickHouse engine · WebSocket updates · Role-based access · Data export · API integrations",
    },
  },
  testimonials: {
    label: "Testimonials",
    title: "Don't just take our word for it",
    sub: "Hear from the teams we've shipped products for.",
    items: {
      t1: {
        quote:
          "Shiplix delivered our SaaS platform 2 weeks ahead of schedule. Clean code, clear communication, and zero drama. Exactly what we needed.",
        name: "Marcus Weber",
        role: "CTO, ComplianceHub",
        company: "SaaS · Germany",
      },
      t2: {
        quote:
          "We tested 3 agencies before Shiplix. They were the only team that truly understood marketplace complexity — separate panels, real-time sync, the works.",
        name: "Sarah Chen",
        role: "Founder, TradeNest",
        company: "Marketplace · UAE",
      },
      t3: {
        quote:
          "Our crypto payment processor handles thousands of transactions daily. Shiplix built it to be bulletproof from day one. Rock-solid architecture.",
        name: "Daniel Kovács",
        role: "CEO, PayChain",
        company: "Fintech · Hungary",
      },
      t4: {
        quote:
          "From a rough Figma mockup to a polished mobile app in 6 weeks. The team moved fast without cutting corners. Would hire again in a heartbeat.",
        name: "Amira Al-Rashid",
        role: "Product Lead, WalletX",
        company: "Mobile · Saudi Arabia",
      },
    },
  },
  stack: {
    label: "Tech stack",
    title: "Modern. Battle-tested. Built to scale.",
    sub: "No hype — proven tools that work in production, chosen for reliability and developer experience.",
  },
  whyUs: {
    label: "Why Shiplix",
    title: "What makes us different",
    sub: "We're not an outsource factory. We're a product team that happens to work as a studio.",
    items: {
      contact: {
        title: "One point of contact",
        desc: "No account managers, no middlemen. You talk directly to the lead developer who owns your project.",
      },
      parallel: {
        title: "Parallel dev streams",
        desc: "Frontend and backend run simultaneously. We ship in weeks, not months.",
      },
      production: {
        title: "Production-grade from day one",
        desc: "CI/CD, monitoring, error tracking, and clean architecture — not bolted on later, built in from the start.",
      },
      pricing: {
        title: "Transparent pricing",
        desc: "Fixed-price sprints with clear scope. You know exactly what you're paying for before we write a line of code.",
      },
    },
  },
  process: {
    label: "Process",
    title: "Idea to production. Weeks, not months.",
    sub: "One point of contact. Parallel streams. Transparent milestones.",
    steps: {
      discovery: {
        title: "Discovery & Spec",
        desc: "We analyze requirements, define architecture, and deliver a detailed technical spec with timeline. You know exactly what you're getting before a line of code is written.",
      },
      build: {
        title: "Build & Ship",
        desc: "Frontend and backend run in parallel. Sprint-based delivery with demos every 1–2 weeks. Real progress, not status reports.",
      },
      launch: {
        title: "Launch & Support",
        desc: "Production deployment, monitoring setup, clean documentation. We stay for ongoing support and iterate based on real user feedback.",
      },
    },
  },
  cta: {
    label: "Ready to ship?",
    title: "Let's build something great together",
    sub: "Tell us about your project. We'll respond with a technical assessment and estimate within 48 hours.",
    button: "Start a project →",
  },
  footer: {
    copy: "© 2026 Shiplix. Based in Ukraine, shipping worldwide.",
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      team: "Team",
      contact: "Contact",
    },
    tagline: "Product-focused dev team from Ukraine.",
    backToTop: "Back to top",
  },
  projectsPage: {
    title: "Our Projects",
    sub: "A closer look at the products we've shipped. Each project went through full-cycle development — from architecture to production deployment.",
    filterAll: "All",
    challenge: "Challenge",
    result: "Result",
    techStack: "Stack",
    duration: "Duration",
    backToHome: "← Back to home",
    gridView: "Grid",
    listView: "List",
    featured: "Featured",
    metaTitle: "Our Projects — Shiplix",
    metaDescription:
      "Explore the products Shiplix has shipped — SaaS platforms, marketplaces, fintech solutions, and mobile apps. Full-cycle development from architecture to production.",
    breadcrumbHome: "Home",
    breadcrumbProjects: "Projects",
    label: "Portfolio",
    showing: "Showing {count} projects",
    noProjects: "No projects in this category yet.",
    ctaTitle: "Like what you see?",
    ctaSub:
      "Let's build your next product together. Tell us about your idea and get a technical assessment within 48 hours.",
    ctaButton: "Start a project →",
    ctaSchedule: "Schedule a call",
  },
  projectDetail: {
    featuresLabel: "Key features",
    galleryLabel: "Screenshots",
    ctaTitle: "Want something similar?",
    ctaSub:
      "Tell us about your project and we'll build it with the same care and attention to detail.",
    ctaButton: "Start a project →",
    ctaSchedule: "Schedule a call",
    backToProjects: "← Back to all projects",
  },
  aboutPage: {
    title: "We build products that matter",
    sub: "A small, senior team from Ukraine that ships fast and cares deeply about craft.",
    missionLabel: "Our mission",
    missionTitle: "Ship software that makes a real difference",
    missionText:
      "We started Shiplix because we believe small, focused teams build better products than large outsourcing factories. Every line of code we write is meant to solve a real problem for a real business.",
    storyLabel: "Our story",
    storyTitle: "From Kyiv to the world",
    storyP1:
      "Founded in Ukraine, Shiplix was born from a simple frustration: too many dev agencies ship mediocre code, miss deadlines, and disappear after launch. We decided to do things differently.",
    storyP2:
      "We work as a tight product team — not a body shop. Every member is senior, every project gets our full attention, and we stay with you long after launch to iterate based on real user data.",
    storyP3:
      "From EU SaaS platforms to crypto payment processors, we've shipped 20+ products across 5 industries. Our clients come back because we treat their product as our own.",
    valuesLabel: "Our values",
    valuesTitle: "What we stand for",
    values: {
      craft: {
        title: "Craft over speed",
        desc: "We move fast, but never at the expense of quality. Clean architecture, tested code, and thoughtful UX are non-negotiable.",
      },
      ownership: {
        title: "Full ownership",
        desc: "No finger-pointing, no excuses. We own the outcome — from architecture decisions to production monitoring.",
      },
      transparency: {
        title: "Radical transparency",
        desc: "You see everything: sprint boards, code repos, deployment pipelines. No black boxes, no surprises.",
      },
      growth: {
        title: "Continuous growth",
        desc: "We invest 20% of our time in learning new tools, exploring new patterns, and pushing our boundaries.",
      },
    },
    numbersLabel: "By the numbers",
    industriesLabel: "Industries",
    industriesTitle: "Industries we work with",
    industries: {
      saas: "SaaS",
      fintech: "Fintech & Crypto",
      ecommerce: "E-Commerce",
      marketplace: "Marketplaces",
      mobile: "Mobile Apps",
    },
    stackLabel: "Our stack",
    stackTitle: "Technologies we use every day",
    ctaTitle: "Ready to build something great?",
    ctaSub:
      "Tell us about your project. We'll respond with a technical assessment and estimate within 48 hours.",
    ctaButton: "Start a project →",
    viewTeam: "Meet the team →",
    metaTitle: "About Us — Shiplix",
    metaDescription:
      "Learn about Shiplix — a senior dev team from Ukraine shipping full-cycle web and mobile products. Our mission, values, and story.",
    breadcrumbHome: "Home",
    breadcrumbAbout: "About",
  },
  teamPage: {
    title: "The people behind the code",
    sub: "A small, senior team that ships full-cycle — from architecture to production. No middlemen, no juniors on your project.",
    label: "The team",
    roleFounder: "Founder & Lead Engineer",
    roleFull: "Full-Stack Developer",
    roleFront: "Frontend Developer",
    roleBack: "Backend Developer",
    roleMobile: "Mobile Developer",
    roleDesign: "UI/UX Designer",
    roleTest: "QA Engineer",
    locationLabel: "Location",
    focusLabel: "Focus",
    stackLabel: "Stack",
    joinLabel: "Join us",
    joinTitle: "We're always looking for talented people",
    joinText:
      "If you're a senior developer who cares about craft and wants to work on meaningful products, we'd love to hear from you.",
    joinCta: "Get in touch →",
    backToHome: "← Back to home",
    members: {
      artem: "Artem Mykhailenko",
      pavlo: "Pavlo Smirniy",
      volodymyr: "Volodymyr Lysenko",
      anton: "Anton Kilmichenko",
      oleksandr: "Oleksandr Horovikh",
    },
    bios: {
      artem:
        "Architect and product thinker. Turns complex requirements into clean, scalable systems. Leads the team and owns every project from spec to production.",
      pavlo:
        "Builds reliable backends and deploys them to production. DevOps-minded engineer who cares about uptime and infrastructure as much as code quality.",
      volodymyr:
        "Full-stack generalist with a systems mindset. Designs database schemas, writes APIs, and builds UIs — whatever the project needs.",
      anton:
        "Frontend and Web3 developer. Creates interfaces and integrates blockchain solutions into projects.",
      oleksandr:
        "Tester and QA engineer. Ensures product quality and stability through manual and automated testing.",
    },
    experienceLabel: "Experience",
    yearsShort: "years",
    metaTitle: "Our Team — Shiplix",
    metaDescription:
      "Meet the senior engineers behind Shiplix. A small, focused team from Ukraine shipping full-cycle web and mobile products.",
    breadcrumbHome: "Home",
    breadcrumbTeam: "Team",
  },
  contactPage: {
    title: "Let's build something together",
    sub: "Tell us about your project and we'll get back with a technical assessment within 48 hours.",
    label: "Contact",
    formName: "Your name",
    formEmail: "Email address",
    formBudget: "Budget range",
    formBudgetOptions: {
      small: "Just exploring",
      medium: "Up to $10K",
      large: "$10K – $30K",
      enterprise: "$30K+",
    },
    formMessage: "Tell us about your project",
    formSubmit: "Send message →",
    formSuccess: "Message sent! We'll get back to you within 48 hours.",
    formSending: "Sending…",
    formError: "Something went wrong. Please try email instead.",
    orReach: "Or reach us directly",
    responseTime: "Avg. response time: < 24h",
    scheduleCall: "Schedule a call →",
    metaTitle: "Contact Us — Shiplix",
    metaDescription:
      "Get in touch with Shiplix. Tell us about your project and receive a technical assessment within 48 hours. Based in Ukraine, delivering worldwide.",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
    privacyNote:
      "We never share your data with third parties. Your message goes directly to our team.",
    trust: {
      t1: "Response < 24h",
      t2: "NDA on request",
      t3: "Free consultation",
      t4: "No commitment",
    },
    miniFaqLabel: "Quick answers",
    miniFaq: {
      mf1: {
        q: "How fast will you reply?",
        a: "We respond to every inquiry within 24 hours on business days.",
      },
      mf2: {
        q: "Can I get a free estimate?",
        a: "Yes — after a short call we'll send you a detailed proposal with timeline and pricing.",
      },
      mf3: {
        q: "Do you sign NDAs?",
        a: "Absolutely. We're happy to sign an NDA before discussing any project details.",
      },
    },
  },
  faqPage: {
    title: "Got questions? We've got answers",
    sub: "Everything you need to know before we start building together.",
    label: "FAQ",
    backToHome: "← Back to home",
    metaTitle: "FAQ — Shiplix",
    metaDescription:
      "Frequently asked questions about Shiplix — pricing, tech stack, timelines, process, and post-launch support. Get answers before starting your project.",
    breadcrumbHome: "Home",
    breadcrumbFaq: "FAQ",
    popularBadge: "Popular",
    quickAnswers: {
      qa1: {
        title: "MVP in 4–8 weeks",
        desc: "Parallel frontend & backend streams. Working demos every sprint.",
      },
      qa2: {
        title: "Seniors only",
        desc: "Same team from kickoff to launch. No juniors, no handoffs.",
      },
      qa3: {
        title: "Full code access",
        desc: "Your repo, your code. Radical transparency from day one.",
      },
      qa4: {
        title: "Post-launch support",
        desc: "We stay for monitoring, iterations, and real user feedback.",
      },
    },
    ctaTitle: "Still have questions?",
    ctaSub:
      "Book a free 30-min discovery call. No commitment, no pressure — just an honest conversation about your project.",
    ctaButton: "Let's talk →",
    sidebar: {
      statsTitle: "Shiplix in numbers",
      stat1: { value: "20+", label: "Projects shipped" },
      stat2: { value: "4–8", label: "Weeks for MVP" },
      stat3: { value: "6", label: "Senior engineers" },
      stat4: { value: "5", label: "Industries covered" },
      contactTitle: "Prefer to talk?",
      contactSub: "Drop us a line or book a call — we respond within 24 hours.",
      contactCta: "Contact us →",
      trustTitle: "Trusted by teams in",
      trustRegions: "Europe · Middle East · USA",
    },
    items: {
      q1: {
        q: "How much does a project cost?",
        a: "Every project is different. A landing page costs less than a SaaS platform — that's why we start with a free discovery call to understand your goals, then provide a clear, no-surprise estimate. We work with budgets of all sizes and always find a way to deliver maximum value.",
      },
      q2: {
        q: "How fast can you ship?",
        a: "Fast. MVPs in 4–8 weeks, full products in 2–4 months. We run frontend and backend in parallel and show you working demos every 1–2 weeks — so you see real progress, not just status updates.",
      },
      q3: {
        q: "What's your tech stack?",
        a: "Next.js + NestJS at the core, PostgreSQL and Redis for data, Docker for deployment. Mobile apps with React Native & Expo. We pick tools based on what your product actually needs — not hype.",
      },
      q4: {
        q: "Do you work with early-stage startups?",
        a: "That's our sweet spot. About 60% of our clients are startups. We know how to build MVPs that validate fast and don't need to be rewritten when you scale. Think of us as your first technical co-founders.",
      },
      q5: {
        q: "Will I have access to the code?",
        a: "From day one. Full access to the Git repo, sprint boards, and deployment pipelines. We believe in radical transparency — you own the code, and you can see every commit.",
      },
      q6: {
        q: "What happens after launch?",
        a: "We don't vanish. We offer ongoing support, monitor production, and help you iterate based on real user data. Most of our clients stay with us for months after launch because the work doesn't stop when you deploy.",
      },
      q7: {
        q: "Who will actually work on my project?",
        a: "Senior developers only — the same people from kickoff to launch. No handoffs to juniors, no rotating teams. You'll know every person working on your product by name.",
      },
      q8: {
        q: "Where is Shiplix based?",
        a: "Ukraine — Kyiv, Lviv, Dnipro, Kharkiv. We work with clients across Europe, the Middle East, and the US. Our hours overlap with CET and EST, and we're always just a Slack message away.",
      },
    },
  },
  servicePages: {
    learnMore: "Learn more →",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    stackTitle: "Stack we use",
    caseLabel: "Proof of work",
    caseCta: "Read the full case study →",
    deliverablesTitle: "What you get",
    faqTitle: "Frequently asked questions",
    otherTitle: "Other services",
    items: {
      saas: {
        metaTitle: "SaaS Development Company — Multi-Tenant Platforms | Shiplix",
        metaDescription:
          "We build production-ready SaaS platforms: multi-tenant architecture, subscriptions, role-based access and Stripe billing. From spec to production in 8-14 weeks.",
        label: "SaaS Development",
        h1: "SaaS platform development, from architecture to production",
        intro:
          "Subscriptions, multi-tenancy, roles and billing are where SaaS projects stall. We have shipped all of it — and we build it into the architecture in the first sprint, not after launch.",
        p1: "8-14 weeks",
        p2: "Fixed-price sprints",
        p3: "Multi-tenant from day one",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Multi-tenant architecture",
            desc: "Isolated data per tenant on shared infrastructure — the model that lets one deployment serve salons, auto shops and clinics at the same time.",
          },
          w2: {
            title: "Subscriptions & billing",
            desc: "Stripe with EU VAT handling, plan upgrades, trials, invoices and failed-payment recovery.",
          },
          w3: {
            title: "Roles & permissions",
            desc: "Owners, staff and admins, with access enforced on the API — not just hidden in the interface.",
          },
          w4: {
            title: "Admin & analytics panels",
            desc: "The internal tooling your team actually runs the business on: usage, revenue and support.",
          },
          w5: {
            title: "Integrations & automation",
            desc: "Webhooks, document generation, automated notifications and third-party APIs.",
          },
          w6: {
            title: "Scale & reliability",
            desc: "PostgreSQL, Redis, CI/CD, monitoring and error tracking wired in from the first deploy.",
          },
        },
        deliverables: {
          d1: "Technical spec and architecture before any code",
          d2: "Sprint demos every 1-2 weeks",
          d3: "Your repository, full code access throughout",
          d4: "CI/CD, monitoring and error tracking",
          d5: "Post-launch support and iterations",
        },
        faq: {
          f1: {
            q: "How long does it take to build a SaaS platform?",
            a: "A focused MVP takes 6-8 weeks. A full multi-tenant platform with billing, roles and admin panels typically runs 10-14 weeks. Zapys24, a multi-tenant booking SaaS, took 14 weeks from spec to production.",
          },
          f2: {
            q: "How much does SaaS development cost?",
            a: "We work in fixed-price sprints, so the cost of each stage is agreed before it starts. The total depends on scope — a discovery call and technical spec give you an exact estimate, free and with no commitment.",
          },
          f3: {
            q: "Do you build multi-tenant architecture?",
            a: "Yes, and we recommend deciding it up front. Retrofitting tenant isolation into a single-tenant codebase is one of the most expensive rewrites in SaaS, so we design that boundary in the first sprint.",
          },
          f4: {
            q: "Which tech stack do you use for SaaS?",
            a: "NestJS and PostgreSQL on the backend, Next.js on the frontend, Redis for caching and queues, Stripe for billing. Proven tools chosen so you can hire for them later.",
          },
          f5: {
            q: "Do we own the code?",
            a: "Yes. Work happens in your repository from day one and you have full access throughout. No vendor lock-in, no handover fee.",
          },
        },
        ctaTitle: "Have a SaaS project in mind?",
        ctaSub:
          "Tell us what you are building. You will get a technical assessment and an estimate within 48 hours.",
      },
      mvp: {
        metaTitle: "MVP Development Agency — Launch in 4-8 Weeks | Shiplix",
        metaDescription:
          "We build production-ready MVPs in 4-8 weeks: clean architecture that scales past validation, fixed-price sprints and full code ownership.",
        label: "MVP Development",
        h1: "MVP development in 4-8 weeks",
        intro:
          "An MVP is not a prototype you throw away. We build the smallest version real users can pay for — on architecture that survives the next two years of the product.",
        p1: "4-8 weeks to launch",
        p2: "Fixed-price sprints",
        p3: "Production-ready, not a demo",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Scope that fits the deadline",
            desc: "We cut the feature list to what actually validates the idea, and say plainly when something belongs in v2.",
          },
          w2: {
            title: "Architecture that scales",
            desc: "Clean boundaries from the start, so growth means adding features instead of paying for a rewrite.",
          },
          w3: {
            title: "A full product, not a mockup",
            desc: "Auth, payments, admin panel and deployment — everything a real user touches.",
          },
          w4: {
            title: "Web and mobile",
            desc: "Next.js on the web, React Native for iOS and Android from a single codebase.",
          },
          w5: {
            title: "Launch-ready infrastructure",
            desc: "CI/CD, monitoring and error tracking, so you see problems before your users report them.",
          },
          w6: {
            title: "Iterations after launch",
            desc: "We stay on through the first weeks of real feedback, when the changes that matter surface.",
          },
        },
        deliverables: {
          d1: "Technical spec, architecture and timeline up front",
          d2: "Working demo every sprint, not status reports",
          d3: "Your repository, full code access throughout",
          d4: "Deployment, monitoring and error tracking",
          d5: "Support and iterations after launch",
        },
        faq: {
          f1: {
            q: "How fast can you build an MVP?",
            a: "Four to eight weeks, depending on scope. Our mobile crypto wallet went from design to shipped app in 6 weeks. We commit to the timeline in the technical spec, before development starts.",
          },
          f2: {
            q: "What does an MVP cost?",
            a: "We price per sprint with the scope fixed before each one. After a short discovery call we send a detailed proposal with the timeline and the total — free and with no commitment.",
          },
          f3: {
            q: "Is the MVP production-ready or just a prototype?",
            a: "Production-ready. It ships with authentication, payments, deployment, monitoring and error tracking. The scope is small; the engineering is not.",
          },
          f4: {
            q: "Can the MVP scale after launch?",
            a: "That is the reason to build it properly. Most clients continue with us after launch, adding features onto the same architecture instead of rebuilding.",
          },
          f5: {
            q: "Do I need a technical spec before we start?",
            a: "No — producing it is the first thing we do. Discovery gives you architecture, scope and a timeline before any code is written, and it is yours whether or not you continue with us.",
          },
        },
        ctaTitle: "Ready to validate your idea?",
        ctaSub:
          "Tell us what you want to launch. You will get a technical assessment and an estimate within 48 hours.",
      },
      crypto: {
        metaTitle: "Crypto Payment Integration & Blockchain Development | Shiplix",
        metaDescription:
          "Crypto payment processors, multi-chain monitoring for ETH, TRON and BSC, wallets and merchant dashboards — built, shipped and running in production.",
        label: "Fintech & Crypto",
        h1: "Crypto payment integration and blockchain development",
        intro:
          "We built a payment processor that monitors Ethereum, TRON and BSC, detects transactions automatically and notifies merchants by webhook. Crypto payments are our core work, not a side offering.",
        p1: "ETH · TRON · BSC",
        p2: "6-10 weeks",
        p3: "Running in production",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Payment processors",
            desc: "Automatic transaction detection across chains, confirmation handling and webhook notifications to your backend.",
          },
          w2: {
            title: "Multi-chain monitoring",
            desc: "Ethereum, TRON and BSC, with the node and reorg handling that makes detection trustworthy.",
          },
          w3: {
            title: "Merchant dashboards",
            desc: "Balances, transaction history, payout management and API keys for your own customers.",
          },
          w4: {
            title: "Crypto wallets",
            desc: "Custodial and non-custodial wallets, token management and secure key storage, on web and React Native.",
          },
          w5: {
            title: "Fiat rails alongside crypto",
            desc: "Stripe with EU VAT when you need card and crypto payments in the same checkout.",
          },
          w6: {
            title: "Security & operations",
            desc: "Key management, rate limiting, audit logs and monitoring designed in rather than bolted on.",
          },
        },
        deliverables: {
          d1: "Architecture and threat model before implementation",
          d2: "Sprint demos on testnet every 1-2 weeks",
          d3: "Your repository, full code access throughout",
          d4: "Monitoring, alerting and audit logging",
          d5: "Support through mainnet launch and after",
        },
        faq: {
          f1: {
            q: "Which blockchains do you work with?",
            a: "Ethereum, TRON and BSC in production today, plus any EVM-compatible chain. We use ethers.js and run our own monitoring rather than depending on a single third-party API.",
          },
          f2: {
            q: "How long does a crypto payment integration take?",
            a: "A processor with multi-chain monitoring, a merchant dashboard and webhooks took us 8 weeks. A narrower integration into an existing product is usually 3-5 weeks.",
          },
          f3: {
            q: "How do you make transaction detection reliable?",
            a: "We monitor chains directly and confirm against block depth, so reorgs and dropped transactions do not turn into wrong balances. Webhooks retry until your backend acknowledges them.",
          },
          f4: {
            q: "Can you build a crypto wallet app?",
            a: "Yes. We shipped a React Native wallet with token management and secure key storage, running on iOS and Android from one codebase.",
          },
          f5: {
            q: "Do you handle custody or licensing?",
            a: "We build the software; custody and licensing stay with you or your provider. We will tell you plainly which parts of your model need a regulated partner before we start.",
          },
        },
        ctaTitle: "Building something with crypto payments?",
        ctaSub:
          "Tell us about your product. You will get a technical assessment and an estimate within 48 hours.",
      },
    },
  },

} as const;

export default en;

// Widen all leaf strings so translated dictionaries can assign different values.
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof en>;
