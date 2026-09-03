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
      c3: { tag: "Web", title: "Photo Studio Booking" },
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
      title: "ENEZ Market — Multi-Vendor Marketplace",
      desc: "3 separate frontends, real-time notifications with Socket.io, Meilisearch, MinIO storage. 5 sprints, 200+ tasks.",
      challenge:
        "Complex multi-vendor platform requiring separate experiences for buyers, sellers, and administrators with real-time communication.",
      result:
        "3 separate frontends with real-time notifications, full-text search via Meilisearch, and file storage with MinIO. 200+ tasks in 5 sprints.",
      features:
        "3 separate panels · Real-time notifications · Full-text search · File storage · Payments · Order management · Admin dashboard · Analytics",
    },
    servicesHelper: {
      title: "Services Helper — Services Marketplace",
      desc: "A two-sided services marketplace connecting clients with verified specialists — order posting, specialist catalog, two-way reviews and paid promotion.",
      challenge: "Clients needed a trustworthy way to find local specialists, and specialists needed a steady channel for new orders. The platform had to serve two distinct roles, build reputation on both sides, and monetize without charging for basic access.",
      result: "A live services marketplace with separate client and specialist accounts, an order flow with categories, deadlines and file attachments, a searchable specialist catalog, two-way reviews and ratings, paid promotion via Stripe, and a fully multi-language interface.",
      features: "Client & specialist accounts · Order posting with attachments · Specialist catalog & search · Two-way reviews & ratings · Paid promotion (Stripe) · Media uploads · Multi-language (UA/RU/EN) · Role-based access",
    },
    similiaStudio: {
      title: "SIMILIA Studio — Photo Studio Booking",
      desc: "Booking platform for a photo studio in Israel: hourly slot booking kept in sync with the studio's own calendar, portfolio galleries, equipment catalogue and an admin panel.",
      challenge: "The studio took bookings by phone and messenger, which produced double bookings and a calendar nobody fully trusted. It needed self-service booking that stayed in sync with the calendar the team already worked from.",
      result: "A three-language site where clients book studio time themselves, with slots reconciled against the studio's real calendar over iCal and Google, media served from Cloudinary, transactional email through Resend, and an admin panel for portfolio and equipment.",
      features: "Hourly slot booking · Calendar sync (iCal / Google) · Portfolio galleries · Equipment catalogue · Admin panel · Transactional email · Multi-language · Cloudinary media",
    },
    orthoDent: {
      title: "ORTHOSTORE — Dental Supplies Store",
      desc: "Online store for dental products, split into three deployables: a Next.js storefront, an admin panel with sales analytics, and a NestJS API.",
      challenge: "A dental supplier needed a real store — catalogue, cart, checkout, order tracking and customer accounts — plus an internal panel staff could run stock and orders from, without either side blocking the other's release.",
      result: "Three separate applications against one API: a storefront with catalogue, checkout, payment and order status; an Ant Design admin panel with sales charts; and a NestJS backend with JWT auth, Swagger docs and rate limiting.",
      features: "Product catalogue · Cart & checkout · Payment flow · Order status tracking · Customer accounts · Admin panel with charts · JWT auth · Swagger API docs",
    },
    rentaLviv: {
      title: "RentaLviv — Car Rental Platform",
      desc: "Car rental service in Lviv: a fleet catalogue with per-car pricing and terms, and an admin panel where the team reorders cars by drag and drop.",
      challenge: "The company needed its fleet online with current pricing, and wanted to control how cars are ordered and presented without asking a developer for every change.",
      result: "A fleet catalogue with per-car pricing and rental terms, plus an admin area with dashboard, activity logs, settings and drag-and-drop ordering, backed by MongoDB with images on Cloudinary.",
      features: "Fleet catalogue · Per-car pricing · Drag-and-drop ordering · Admin dashboard · Activity logs · Multi-currency · Cloudinary media · Role-based admin access",
    },
    iCleaning: {
      title: "iCleaning — Cleaning Service Platform",
      desc: "Multilingual platform for a cleaning company in the UAE: online booking with date selection, Stripe payment, a before/after gallery and an admin panel for content.",
      challenge: "A cleaning company in the UAE needed customers to book and pay online across several languages, while its own team updated prices, gallery and blog without a developer in the loop.",
      result: "A multi-language Next.js site with date-based booking, Stripe checkout, a before/after gallery and a blog, plus an admin panel where staff manage gallery and posts. Media is served from Cloudinary.",
      features: "Multi-language routing · Date-based booking · Stripe payment · Before/after gallery · Blog · Admin panel · Cloudinary media · Price pages",
    },
    vbkPartner: {
      title: "VBK Partner — Construction & Lumber Company",
      desc: "Corporate site for a company running two unrelated business lines — commercial construction and its own lumber production — each with its own catalogue and detail pages.",
      challenge: "One company sells two different things to two different audiences. A single generic corporate site would have served neither well.",
      result: "A split site where construction and lumber each get their own section, catalogue and per-item detail pages, joined by a shared article section and one lead flow.",
      features: "Two business lines · Construction projects · Lumber catalogue · Per-item detail pages · Articles section · Lead capture · Static rendering · Mobile-first",
    },
    fasqon: {
      title: "Fasqon — Crypto-Native Neobank Site",
      desc: "Product site for a crypto-native neobank: animated 3D app mockups, a multi-language interface and the token pre-sale funnel.",
      challenge: "A fintech launching a crypto neobank needed a site that explains an unfamiliar product to a non-crypto audience and carries a pre-sale campaign, in several languages at once.",
      result: "An animated product presentation built with Framer Motion and anime.js, where 3D app mockups walk visitors through the product, with full multi-language routing and a pre-sale funnel.",
      features: "Animated product presentation · 3D app mockups · Multi-language · Pre-sale funnel · Responsive motion · Swiper galleries · SEO metadata · Fast static delivery",
    },
    hashTech: {
      title: "HashTech — Web3 & DeFi Agency Site",
      desc: "Site for a Web3 and DeFi development agency, built around bold typography and GSAP-driven motion, with case and careers sections.",
      challenge: "A Web3 agency needed a site that signals technical seriousness immediately, without the stock-photo look most blockchain sites default to.",
      result: "A typography-led site with GSAP-driven motion and a pixel-grid identity, carrying cases, an about section and open roles.",
      features: "GSAP motion design · Typography-led layout · Case studies · Careers section · Custom cursor & transitions · Responsive · SEO metadata",
    },
    transfersLviv: {
      title: "TransfersLviv — Transfer Booking Service",
      desc: "Business and premium class transfers from Lviv across Ukraine and Europe: a fare calculator, fleet catalogue and an admin panel with a built-in content editor.",
      challenge: "The company answered the same question on every call — what a given route costs — and had no way to publish routes or articles without a developer.",
      result: "A site that prices a route before anyone picks up the phone, with a fleet catalogue and an admin panel where staff write content in a rich-text editor, backed by MongoDB with images on Cloudinary.",
      features: "Fare calculator · Fleet catalogue · Route pages · Rich-text admin editor · Messenger booking · Multi-currency · Cloudinary media · Mobile-first",
    },
    vladYoga: {
      title: "VladYoga — Yoga Instructor Site",
      desc: "Personal brand site for a yoga instructor: classes, retreats, testimonials and booking, in Russian and English.",
      challenge: "An instructor selling classes and retreats needed a site that carries the calm of the practice itself, not a generic fitness template.",
      result: "A cinematic, typography-driven site with full-bleed imagery, a class and retreat catalogue, testimonials and direct booking, in two languages.",
      features: "Cinematic hero · Class catalogue · Retreats & events · Testimonials · Two languages · Direct booking · Smooth scroll · Mobile-first",
    },
    dcProduction: {
      title: "DC.Production — Agency Site on Payload CMS",
      desc: "Site for a full-service marketing agency, driven by a headless Payload CMS so the team publishes cases, services and pricing without a developer.",
      challenge: "The agency published new work constantly and rewrote service copy just as often, but every change needed a developer — which made the site the slowest part of their marketing.",
      result: "A CMS-driven site where the team edits everything in Payload with a rich-text editor, media stored on Vercel Blob, three language versions, and a presentation layer animated with GSAP.",
      features: "Payload CMS · Editorial workflow · Rich-text content · Three languages · Media library · GSAP animation · PostgreSQL · Works & pricing",
    },
    artexClean: {
      title: "ARTEX — Cleaning Service Landing",
      desc: "High-conversion landing for a cleaning service with an instant price calculator, built on Astro and shipping almost no client-side JavaScript.",
      challenge: "The company needed a landing that loads instantly on a phone and answers the one question that decides the call: what will this cost.",
      result: "A static Astro build that ships HTML with almost no client JavaScript, an interactive calculator that prices a clean by room and bathroom count, and booking straight through phone, Telegram or WhatsApp.",
      features: "Instant price calculator · Static Astro build · Near-zero client JS · Messenger booking · Reviews & guarantees · FAQ · Sitemap & SEO · Mobile-first",
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
    visitSite: "Visit live site ↗",
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
          "We built a payment processor that monitors Ethereum, TRON and BSC, detects transactions automatically and notifies merchants by webhook — production code handling real volume, not a proof of concept.",
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
      ecommerce: {
        metaTitle: "E-Commerce Development Company — Custom Online Stores | Shiplix",
        metaDescription: "We build custom online stores: catalogs, cart and checkout, payment integrations, inventory and ERP sync. Production-ready in 6-10 weeks.",
        label: "E-Commerce Development",
        h1: "E-commerce development — custom online stores that scale",
        intro: "Off-the-shelf platforms stop where your business gets specific: custom pricing rules, unusual logistics, an ERP that has to stay in sync. We build storefronts around how you actually sell.",
        p1: "6-10 weeks",
        p2: "Fixed-price sprints",
        p3: "Built on your rules",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Storefront & catalog",
            desc: "Product pages, filtering and search that stay fast as the catalog grows past a few thousand SKUs.",
          },
          w2: {
            title: "Cart & checkout",
            desc: "The part that decides revenue: guest checkout, saved carts, discounts, and a flow measured in clicks rather than steps.",
          },
          w3: {
            title: "Payments",
            desc: "Stripe with EU VAT, local providers, cards and alternative methods in a single checkout.",
          },
          w4: {
            title: "Inventory & orders",
            desc: "Stock tracking, order states, returns and the admin panel your team runs the day from.",
          },
          w5: {
            title: "Integrations",
            desc: "ERP, accounting, delivery services and marketing tools — a store is rarely the only system involved.",
          },
          w6: {
            title: "Performance & SEO",
            desc: "Server-rendered pages, optimized images and product structured data, so pages load fast and rank.",
          },
        },
        deliverables: {
          d1: "Technical spec and architecture before any code",
          d2: "Sprint demos every 1-2 weeks",
          d3: "Your repository, full code access throughout",
          d4: "Analytics and conversion tracking wired in",
          d5: "Support and iterations after launch",
        },
        faq: {
          f1: {
            q: "How long does it take to build an online store?",
            a: "A focused store with catalog, checkout and payments takes 6-8 weeks. Add ERP sync, complex pricing rules or multi-warehouse logistics and it runs to 10-12. The technical spec fixes the timeline before development starts.",
          },
          f2: {
            q: "Should we build custom or use Shopify or WooCommerce?",
            a: "If you sell a straightforward catalog with standard checkout, use Shopify — we will tell you so rather than sell you a build. Custom pays off when the platform fights you: unusual pricing, deep ERP integration, marketplace mechanics, or per-order costs that make a percentage fee expensive at your volume.",
          },
          f3: {
            q: "How much does e-commerce development cost?",
            a: "We price in fixed-price sprints with the scope agreed before each one. After a discovery call you get a detailed proposal with a timeline and total — free and with no commitment.",
          },
          f4: {
            q: "Can you integrate our ERP or accounting system?",
            a: "Yes. Stock, prices and orders usually need to stay in sync with a system you already run. We build the integration against its API, or a scheduled sync where no API exists.",
          },
          f5: {
            q: "Will the store be fast and SEO-ready?",
            a: "Pages are server-rendered with optimized images and product structured data, so they load quickly and are eligible for rich results in Google. Core Web Vitals are part of the delivery, not an afterthought.",
          },
        },
        ctaTitle: "Planning an online store?",
        ctaSub: "Tell us what you sell and how. You will get a technical assessment and an estimate within 48 hours.",
      },
      marketplace: {
        metaTitle: "Marketplace Development Company — Multi-Vendor Platforms | Shiplix",
        metaDescription: "We build multi-vendor marketplaces: separate buyer, seller and admin panels, real-time search, split payments and payouts. Shipped in 10-16 weeks.",
        label: "Marketplace Development",
        h1: "Multi-vendor marketplace development",
        intro: "A marketplace is three products in one — what buyers see, what sellers manage, and what you administer. We have built all three, with real-time search and payouts, across 200+ tasks in 5 sprints.",
        p1: "10-16 weeks",
        p2: "3 separate panels",
        p3: "Real-time search & payouts",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Buyer, seller and admin panels",
            desc: "Three separate experiences with their own logic and permissions — not one interface with buttons hidden from some users.",
          },
          w2: {
            title: "Search that scales",
            desc: "Meilisearch-backed full-text search with filters and facets that stay instant as listings grow.",
          },
          w3: {
            title: "Payments & payouts",
            desc: "Split payments, commission rules, seller balances and payout schedules.",
          },
          w4: {
            title: "Real-time communication",
            desc: "Socket.io notifications, buyer-seller messaging and live order status.",
          },
          w5: {
            title: "Moderation & trust",
            desc: "Listing review, seller verification, ratings and dispute handling — the mechanics that keep a marketplace usable.",
          },
          w6: {
            title: "Built to grow",
            desc: "PostgreSQL, Redis, file storage and background jobs sized for catalog and traffic growth from the start.",
          },
        },
        deliverables: {
          d1: "Technical spec and architecture before any code",
          d2: "Sprint demos every 1-2 weeks",
          d3: "Your repository, full code access throughout",
          d4: "CI/CD, monitoring and error tracking",
          d5: "Support and iterations after launch",
        },
        faq: {
          f1: {
            q: "How long does it take to build a marketplace?",
            a: "A marketplace MVP with core buyer, seller and admin flows takes 10-12 weeks. Our multi-vendor platform with three frontends, real-time notifications and full-text search came to 200+ tasks across 5 sprints.",
          },
          f2: {
            q: "Why is a marketplace harder than an online store?",
            a: "A store has one seller — you. A marketplace has to keep many sellers honest and paid: separate panels, commission and payout logic, moderation, disputes and search across inventory you do not control. That is why it is roughly twice the work of a comparable store.",
          },
          f3: {
            q: "How do payments between buyers and sellers work?",
            a: "Money is collected centrally, commission is deducted, and seller balances are paid out on a schedule. We implement the split, the ledger and the payout flow, and will flag early which parts of your model need a licensed payment provider.",
          },
          f4: {
            q: "Can it handle a large catalog?",
            a: "Yes. Search runs through Meilisearch rather than direct database queries, which is what keeps filtering instant as listings scale. Storage, caching and background jobs are planned for growth in the first sprint.",
          },
          f5: {
            q: "Can we start with a marketplace MVP?",
            a: "That is usually the right call. We launch with the core loop — list, find, buy, get paid — and add moderation, analytics and advanced seller tools once real sellers are using it.",
          },
        },
        ctaTitle: "Building a marketplace?",
        ctaSub: "Tell us who your buyers and sellers are. You will get a technical assessment and an estimate within 48 hours.",
      },
      crm: {
        metaTitle: "CRM Development Company — Custom CRM Systems | Shiplix",
        metaDescription: "We build custom CRM systems: pipelines, roles, automation, document generation and integrations with the tools you already use. Production-ready in 8-12 weeks.",
        label: "CRM Development",
        h1: "Custom CRM development that fits how your team works",
        intro: "Generic CRMs force your process into their boxes. We build a CRM around your actual pipeline — the stages, roles and automations your team runs — instead of the other way round.",
        p1: "8-12 weeks",
        p2: "Fixed-price sprints",
        p3: "Built around your process",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Pipelines & deal flow",
            desc: "Custom stages, statuses and transitions that mirror how work actually moves through your team.",
          },
          w2: {
            title: "Roles & permissions",
            desc: "Sales, managers and admins each see and do exactly what they should — enforced on the API, not hidden in the UI.",
          },
          w3: {
            title: "Automation",
            desc: "Reminders, status changes, assignment rules and follow-ups that run without anyone remembering to trigger them.",
          },
          w4: {
            title: "Document generation",
            desc: "Contracts, invoices and offers generated from records — the feature we built into Zapys24's booking flow.",
          },
          w5: {
            title: "Integrations",
            desc: "Email, telephony, messengers, accounting and your website — the CRM sits at the center, not on an island.",
          },
          w6: {
            title: "Reporting & dashboards",
            desc: "The numbers your team runs on: conversion, pipeline value, workload and revenue, in views built for your questions.",
          },
        },
        deliverables: {
          d1: "Technical spec and architecture before any code",
          d2: "Sprint demos every 1-2 weeks",
          d3: "Your repository, full code access throughout",
          d4: "Data migration from your current system",
          d5: "Support, training and iterations after launch",
        },
        faq: {
          f1: {
            q: "How long does it take to build a CRM?",
            a: "A focused CRM with pipelines, roles and core automation takes 8-10 weeks. Add document generation, telephony and deep integrations and it runs to 12-14. The technical spec fixes the timeline before development starts.",
          },
          f2: {
            q: "Should we build a custom CRM or use HubSpot or Salesforce?",
            a: "If your process fits a standard sales pipeline, an off-the-shelf CRM is cheaper and faster — we will say so. Custom pays off when your workflow is unusual, when per-seat pricing gets expensive at your team size, or when the CRM has to sit deep inside your own product and data.",
          },
          f3: {
            q: "Can you migrate our data from the current system?",
            a: "Yes. Migrating contacts, deals and history is part of the project. We map your existing data to the new model and run the import so you launch with everything already in place.",
          },
          f4: {
            q: "How much does CRM development cost?",
            a: "We price in fixed-price sprints with the scope agreed before each one. After a discovery call you get a detailed proposal with a timeline and total — free and with no commitment.",
          },
          f5: {
            q: "Will it integrate with the tools we already use?",
            a: "That is usually the point of building custom. We integrate email, telephony, messengers, accounting and your website against their APIs, so the CRM reflects reality instead of becoming another place to enter data twice.",
          },
        },
        ctaTitle: "Need a CRM built around your process?",
        ctaSub: "Tell us how your team works today. You will get a technical assessment and an estimate within 48 hours.",
      },
      mobile: {
        metaTitle: "Mobile App Development Company — iOS & Android | Shiplix",
        metaDescription: "We build cross-platform mobile apps with React Native: one codebase for iOS and Android, native performance, from idea to the App Store in 6-12 weeks.",
        label: "Mobile Development",
        h1: "Mobile app development for iOS and Android",
        intro: "One codebase, both stores. We build cross-platform apps in React Native — from a service booking app to a crypto wallet — with the backend, deployment and store submission handled end to end.",
        p1: "6-12 weeks",
        p2: "iOS & Android, one codebase",
        p3: "Idea to App Store",
        whatTitle: "What we build",
        what: {
          w1: {
            title: "Cross-platform apps",
            desc: "React Native and Expo — iOS and Android from one codebase, without paying to build and maintain each twice.",
          },
          w2: {
            title: "Backend & API",
            desc: "The app is half the product; we build the NestJS backend, database and API that stand behind it.",
          },
          w3: {
            title: "Auth & payments",
            desc: "Sign-in, subscriptions, in-app purchases and payment providers wired in and tested on real devices.",
          },
          w4: {
            title: "Native capabilities",
            desc: "Push notifications, camera, geolocation, biometrics and secure storage — the platform features users expect.",
          },
          w5: {
            title: "Offline & sync",
            desc: "Apps that keep working without a connection and reconcile cleanly once it returns.",
          },
          w6: {
            title: "Store submission",
            desc: "We handle App Store and Google Play submission, review requirements and release, not just the build.",
          },
        },
        deliverables: {
          d1: "Technical spec, architecture and timeline up front",
          d2: "Testable build on device every sprint",
          d3: "Your repository, full code access throughout",
          d4: "App Store and Google Play submission",
          d5: "Support and iterations after launch",
        },
        faq: {
          f1: {
            q: "How fast can you build a mobile app?",
            a: "A focused app takes 6-8 weeks; one with a full backend, payments and complex flows runs 10-12. Our React Native crypto wallet went from design to shipped app in 6 weeks. The timeline is fixed in the technical spec before development starts.",
          },
          f2: {
            q: "Native or cross-platform — React Native or Swift and Kotlin?",
            a: "For most products React Native is the right call: one codebase ships to both stores at close to native performance, for roughly half the cost of building twice. We will recommend fully native only when an app is genuinely performance- or hardware-bound, and say so honestly.",
          },
          f3: {
            q: "Do you build the backend too?",
            a: "Yes. Most apps need one — accounts, data, payments, notifications. We build the NestJS backend and API alongside the app, so it is one team and one coherent system rather than two vendors pointing at each other.",
          },
          f4: {
            q: "Do you handle App Store and Google Play submission?",
            a: "Yes. Submission, review requirements, store listings and the first release are part of the project. Getting through review is often where solo builds stall, so we take it to the finish.",
          },
          f5: {
            q: "How much does mobile app development cost?",
            a: "We price in fixed-price sprints with the scope agreed before each one. After a discovery call you get a detailed proposal with a timeline and total — free and with no commitment.",
          },
        },
        ctaTitle: "Have a mobile app in mind?",
        ctaSub: "Tell us what you want to build. You will get a technical assessment and an estimate within 48 hours.",
      },
    },
  },

  caseStudies: {
    servicesHelper: {
      sectionLabel: "How it's built",
      intro: "A two-sided services marketplace: customers post a job, verified specialists respond with offers, and both sides rate each other afterwards. These are the decisions that shaped it.",
      metrics: [
        {
          value: "3",
          label: "User roles",
        },
        {
          value: "4",
          label: "Order states",
        },
        {
          value: "3",
          label: "Subscription tiers",
        },
        {
          value: "UA·RU·EN",
          label: "Languages",
        },
      ],
      sections: [
        {
          heading: "Two sides, modeled apart",
          body: "A customer and a specialist are not one user with a role flag. They share almost no data: a specialist owns a profile, portfolio, subscription and rating; a customer owns orders. We modeled them as separate entities behind one session-based auth layer.\n\nPermissions stay unambiguous — an endpoint belongs to one side, never to \"a user who might be either\". The public profile is split from the account record too, keeping constantly-written data like rating and subscription off the row authentication depends on.",
        },
        {
          heading: "The marketplace loop",
          image: "/projects/services-helper-flow.webp",
          caption: "Both sides of the loop, as the product explains it to its own users",
          body: "Four states carry the transaction. A customer publishes an OPEN order — category, city, deadline, attachments. Specialists submit responses, which are offers against it. The customer accepts one, moving the order to IN_PROGRESS, then COMPLETED or CANCELLED.\n\nResponses are their own records rather than a direct assignment, so a customer compares several specialists instead of being matched to one.",
        },
        {
          heading: "Finding the right specialist",
          image: "/projects/services-helper-search.webp",
          caption: "Search is built on the two axes that matter: service and city",
          body: "Discovery runs on what and where. Orders and profiles both bind to a category and a city, so a plumber in Lviv never surfaces for a job in Odesa.\n\nThere is no separate search engine. At this catalogue size, indexed PostgreSQL queries over category, city and rating are faster to ship and cheaper to run than adding Meilisearch, and they keep results consistent with the data. Subscription tier feeds into ranking — which is what makes paid placement worth buying without letting it override relevance.",
        },
        {
          heading: "Keeping the deal on the platform",
          body: "The hardest commercial problem for a services marketplace is two parties meeting once and then dealing off-platform. Contact details a customer marks confidential go only to the specialist they actually choose — not to everyone who responds. That single rule keeps the incentive to stay inside the system alive past the first message.",
        },
        {
          heading: "Reputation that cuts both ways",
          body: "Reviews run in both directions. A one-sided rating protects only the buyer, but here the specialist carries just as much risk — no-shows, scope disputes, non-payment. Visible history on both sides makes the platform safe to work on, not only to buy from.",
        },
        {
          heading: "Monetization without a paywall on access",
          image: "/projects/services-helper-pricing.webp",
          caption: "Three subscription tiers, billed through Stripe",
          body: "Posting an order and responding to one are free. Specialists pay for reach instead, through subscription tiers and sponsored placement billed with Stripe. Charging per lead would tax exactly the behaviour the marketplace wants more of.\n\nSubscription state is driven by Stripe webhooks — ACTIVE, PAST_DUE, UNPAID, CANCELED — and access checks read that live status, so a failed payment narrows reach instead of leaving a paid feature open.",
        },
        {
          heading: "What production demanded",
          body: "Notifications are events, not calls: each action emits one and handlers turn it into an in-app record and an email, so business logic never learns how to send mail. Complaints run a real state machine worked from an admin panel — without a moderation path a services marketplace fills with disputes it cannot resolve. Rate limiting, HTTP hardening, email verification and Cloudinary-hosted media were in from the first deploy.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A live services marketplace running the full loop — post, respond, hire, deliver, review, pay — with subscription monetization, moderation and three languages, in production at services-helper.com.",
    },
  },
} as const;

export default en;

// Widen all leaf strings so translated dictionaries can assign different values.
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof en>;
