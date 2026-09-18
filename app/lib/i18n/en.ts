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
      title: "Zapys24 — CRM and Online Booking for Service Businesses",
      tagline: "One platform for salons, garages, gyms and stables",
      facts: "5 industries · Web + iOS + Android · 24/7 booking",
      desc: "SaaS for service businesses: 24/7 online booking, client base, staff and reminders. The platform adapts to the industry — from beauty salons to riding clubs.",
      challenge: "Service businesses need booking without calls and DMs, but a salon, a garage and a stable book completely different things: a stylist, a bay or a horse.",
      result: "A multi-tenant platform where a booking reserves a set of resources, not just a person. Double bookings are rejected at the database level, clients get reminders, and the business runs everything from the web or the app.",
      features: "24/7 online booking · Industry resources: staff, bays, horses · Double-booking protection · Automated reminders · Client base · Staff & schedules · Memberships · Mobile apps",
    },
    marketplace: {
      title: "ENEZ Market — Marketplace for Ukrainian Sellers",
      tagline: "Separate apps for buyers, sellers and administrators",
      facts: "200+ tasks in 5 sprints · OpenSearch search · Real-time chat",
      desc: "Multi-vendor marketplace: a storefront for buyers, a seller workspace and an admin panel — separate apps on a shared API. Search on OpenSearch, real-time chat, 200+ tasks in 5 sprints.",
      challenge: "Buyers, sellers and administrators need entirely different interfaces, and a catalogue of thousands of products has to be searchable by any attribute instantly.",
      result: "Separate React frontends for each role on top of one NestJS API, faceted search on OpenSearch and chat over Socket.io with Redis. The project is going into production.",
      features: "Storefront, seller workspace & admin · Faceted search & filters · Real-time chat · Orders & payments · Media storage · CRM integrations · Admin panel",
    },
    servicesHelper: {
      title: "Services Helper — Services Marketplace",
      tagline: "Clients post jobs, specialists pick them up",
      facts: "2 roles · Stripe payments · 3 languages",
      desc: "Two-sided services marketplace: clients post orders, specialists respond, both sides leave reviews, and promotion is paid through Stripe.",
      challenge: "Clients need a trustworthy way to find a specialist, specialists need a steady flow of orders. The platform had to build trust on both sides and earn without charging for access.",
      result: "Separate client and specialist accounts, orders with categories and files, a searchable catalogue, two-way ratings and paid promotion. The interface runs in three languages.",
      features: "Client & specialist accounts · Orders with attachments · Specialist catalogue & search · Two-way reviews & ratings · Paid promotion (Stripe) · Media uploads · Three languages · Role-based access",
    },
    zapys24Mobile: {
      title: "Zapys24 Mobile — Booking Apps for iOS and Android",
      tagline: "Clients book from their phone, businesses run the day between appointments",
      facts: "2 apps · App Store + Google Play · Mapbox maps",
      desc: "Two React Native apps on the App Store and Google Play: one for clients booking appointments, one for the businesses taking them.",
      challenge: "Both sides of booking act from a phone, but with opposite goals — a single app for everyone would have been awkward for all of them.",
      result: "Two Expo apps on one backend: the client app with map discovery, booking and push notifications; Zapys24 Pro for schedules and staff. Both are published on the App Store and Google Play.",
      features: "Two apps, one API · Map discovery (Mapbox) · Push notifications (Firebase) · Booking & schedules · App Store & Google Play · Image upload · Deep linking · Shared design system",
    },
    similiaStudio: {
      title: "SIMILIA Studio — Photo Studio Booking",
      tagline: "Clients book the studio themselves — no calendar clashes",
      facts: "3 languages · Calendar sync · Israel",
      desc: "Site for a photo studio in Israel with hourly booking reconciled against the studio's real calendar, a portfolio and an equipment catalogue.",
      challenge: "Booking by phone and messenger produced clashes, and nobody fully trusted the calendar.",
      result: "Clients book on their own, slots are checked against the calendar via iCal and Google, confirmations arrive by email, and the team manages portfolio and equipment from the admin panel.",
      features: "Hourly booking · iCal & Google sync · Portfolio galleries · Equipment catalogue · Admin panel · Confirmation emails · Three languages",
    },
    orthoDent: {
      title: "ORTHOSTORE — Orthodontic Supplies Store",
      tagline: "A store for orthodontists: brackets, instruments, micro-implants",
      facts: "3 apps on one API · Admin with sales analytics · Customer accounts",
      desc: "Online store for orthodontic supplies: a storefront, an admin panel with sales analytics and a NestJS API as separate apps.",
      challenge: "The supplier needed a full store and an internal panel for stock and orders — without a storefront release ever taking the admin down.",
      result: "A Next.js storefront with catalogue, cart and order statuses, an admin panel with sales charts, and a NestJS backend with authentication, API documentation and rate limiting.",
      features: "Categorised catalogue · Cart & checkout · Order statuses · Customer accounts · Admin with sales charts · JWT auth · API documentation",
    },
    rentaLviv: {
      title: "RentaLviv — Car Rental Platform",
      tagline: "The team runs the fleet, prices and car order on its own",
      facts: "Per-car pricing · Drag-and-drop ordering · Multi-currency",
      desc: "Car rental site in Lviv: a fleet catalogue with prices and terms, and an admin panel where the team changes prices and car order itself.",
      challenge: "The company needed its fleet and prices kept current without a developer for every change.",
      result: "A catalogue with rental terms for every car and an admin area with a dashboard, activity log and drag-and-drop ordering.",
      features: "Fleet catalogue · Per-car pricing · Drag-and-drop ordering · Dashboard · Activity log · Multi-currency · Role-based admin access",
    },
    iCleaning: {
      title: "iCleaning — Cleaning Service Platform",
      tagline: "Book and pay for cleaning online — in several languages",
      facts: "UAE · Stripe payments · Before/after gallery",
      desc: "Platform for a cleaning company in the UAE: booking with date selection, Stripe payment, a before/after gallery and a blog.",
      challenge: "Customers had to book and pay online in different languages, and the team had to update prices, gallery and blog on its own.",
      result: "A multi-language site with date-based booking, Stripe checkout, a work gallery and a blog, all managed from the admin panel.",
      features: "Multiple languages · Date-based booking · Stripe payment · Before/after gallery · Blog · Admin panel · Price pages",
    },
    vbkPartner: {
      title: "VBK Partner — Construction & Lumber Company",
      tagline: "Two different businesses on one site — each clear to its own audience",
      facts: "2 business lines · Item catalogues · Static rendering",
      desc: "Corporate site for a company with two lines of business: commercial construction and its own lumber production.",
      challenge: "One company sells two different things to two different audiences — a generic corporate site would have served neither.",
      result: "Separate sections and catalogues for each line, a page for every item, a shared blog and a single enquiry form.",
      features: "Two business lines · Construction projects · Lumber catalogue · Item pages · Blog · Enquiry form · Static rendering",
    },
    fasqon: {
      title: "Fasqon — Crypto-Native Neobank Site",
      tagline: "Explains a crypto neobank to people outside crypto",
      facts: "3D app mockups · Token pre-sale · Multiple languages",
      desc: "Product site for a crypto-native neobank with animated 3D app mockups, several languages and a token pre-sale funnel.",
      challenge: "An unfamiliar product had to be explained to a broad audience while running a pre-sale in several languages.",
      result: "An animated presentation where 3D mockups walk visitors through the product step by step, plus a pre-sale funnel.",
      features: "Animated product presentation · 3D app mockups · Multiple languages · Pre-sale funnel · Responsive motion · SEO metadata",
    },
    hashTech: {
      title: "HashTech — Web3 & DeFi Agency Site",
      tagline: "Technical credibility without stock imagery",
      facts: "GSAP motion · Cases & careers · Typography-led design",
      desc: "Site for a Web3 and DeFi development agency, built on bold typography and GSAP motion.",
      challenge: "The agency needed a site that signals technical depth at first glance — without the stock look of blockchain sites.",
      result: "A typography-led site with a pixel-grid identity, GSAP motion, case studies and open roles.",
      features: "GSAP motion · Typography-led layout · Case studies · Careers · Custom cursor & transitions · Responsive",
    },
    transfersLviv: {
      title: "TransfersLviv — Transfer Booking Service",
      tagline: "The route price — before anyone calls",
      facts: "Route calculator · Ukraine & Europe · Article editor",
      desc: "Business and premium transfers from Lviv across Ukraine and Europe: a fare calculator, fleet and an admin panel with an editor.",
      challenge: "Every call opened with the same question — what does this route cost — and the site could not be updated without a developer.",
      result: "The calculator prices a trip before the call, requests go straight to a messenger, and the team writes routes and articles in the admin panel.",
      features: "Fare calculator · Fleet catalogue · Route pages · Admin article editor · Messenger booking · Multi-currency",
    },
    vladYoga: {
      title: "VladYoga — Yoga Instructor Site",
      tagline: "A site that carries the calm of the practice",
      facts: "2 languages · Classes & retreats · Direct booking",
      desc: "Personal brand site for a yoga instructor: classes, retreats, testimonials and booking.",
      challenge: "The instructor needed a site that carries the feel of the practice, not another fitness template.",
      result: "A cinematic site with full-bleed imagery, a catalogue of classes and retreats, testimonials and booking in two languages.",
      features: "Cinematic hero · Class catalogue · Retreats & events · Testimonials · Two languages · Direct booking · Smooth scroll",
    },
    profixter: {
      title: "Profixter — Handyman Membership Platform",
      tagline: "Book a handyman in a few taps — and subscribe instead of searching every time",
      facts: "US market · Slot booking · Membership",
      desc: "Membership platform for a Long Island handyman service: booking by real calendar slots, member accounts and membership signup.",
      challenge: "Finding a trustworthy handyman for every small job is the real friction. The business needed to turn one-off calls into a membership.",
      result: "A client picks a date and slot without calling, signs up for the membership and comes back to the same team through a member account.",
      features: "Calendar slot booking · Membership signup · Member accounts · Free first visit · Project gallery · Enquiry form",
    },
    dcProduction: {
      title: "DC.Production — Agency Site on Payload CMS",
      tagline: "The agency team publishes cases, services and pricing itself",
      facts: "Payload CMS · 3 languages · GSAP motion",
      desc: "Site for a marketing agency in Israel on headless Payload CMS: the team updates cases, services and pricing without a developer.",
      challenge: "The agency kept adding work and rewriting services, and every change waited on a developer.",
      result: "Everything is edited in Payload, media lives on Vercel Blob, with three language versions and GSAP motion.",
      features: "Payload CMS · Editing without a developer · Three languages · Media library · GSAP motion · Works & pricing",
    },
    artexClean: {
      title: "ARTEX — Cleaning Service Landing",
      tagline: "Opens instantly and shows the price right away",
      facts: "Astro · Near-zero JavaScript · Price calculator",
      desc: "Landing page for a cleaning service with an instant price calculator, built on Astro with almost no client-side JavaScript.",
      challenge: "The landing had to open instantly on a phone and answer the key question straight away — what the clean will cost.",
      result: "A static Astro site with almost no client JavaScript, a calculator by rooms and bathrooms, and booking by phone, Telegram or WhatsApp.",
      features: "Price calculator · Static Astro build · Near-zero client JS · Messenger booking · Reviews & guarantees · FAQ · SEO",
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
    title: "Projects",
    sub: "Products we've shipped: from landing pages to marketplaces and mobile apps. Real problems, live code.",
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
    viewCase: "View case",
    liveProject: "Live project",
    allCount: "{count} projects",
    metricsLabel: "Shipped to production",
    weeks: "{n} weeks",
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
    atAGlance: "At a glance",
    nextProject: "Next project",
    taskLabel: "Challenge",
    resultLabel: "Result",
    typeLabel: "Type",
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
    formSuccess: "Message sent. Artem reads every inquiry personally — expect a reply within 24 hours, and a technical assessment with an estimate within 48.",
    formSending: "Sending…",
    formError: "Something went wrong. Please try email instead.",
    nextTitle: "What happens next",
    next1: {
      t: "Artem reads it",
      d: "Not a shared inbox. The founder reads every inquiry himself.",
    },
    next2: {
      t: "A reply within 24 hours",
      d: "With the questions we need answered to scope the work properly.",
    },
    next3: {
      t: "An assessment within 48 hours",
      d: "Architecture, scope and a timeline with pricing. Free, no commitment.",
    },
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
            desc: "OpenSearch-backed full-text search with filters and facets that stay instant as listings grow.",
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
            a: "Yes. Search runs through OpenSearch rather than direct database queries, which is what keeps filtering instant as listings scale. Storage, caching and background jobs are planned for growth in the first sprint.",
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
    inciCore: {
      sectionLabel: "How it's built",
      intro: "A booking CRM that a beauty salon, a car service and a riding club can all run from the same codebase — a public booking page, a business app and a client app on one API. These are the decisions that shaped it.",
      metrics: [
        {
          value: "50+",
          label: "Backend modules",
        },
        {
          value: "129",
          label: "Schema migrations",
        },
        {
          value: "2",
          label: "Mobile apps, one API",
        },
        {
          value: "24/7",
          label: "Self-service booking",
        },
      ],
      sections: [
        {
          heading: "Industry is a field, not a fork",
          image: "/projects/zapys24-equestrian.webp",
          caption: "The same platform, dressed for a riding club",
          body: "Every business carries an industry code, kept deliberately separate from the beauty-specific business type. Terminology, form sections and the booking rules are read from an industry config; the booking service picks its strategy from a registry keyed by the same code.\n\nThat one decision is what lets a riding club and a nail studio share a deployment. Resources are generic — a chair, a stall or a lift are the same entity with different words around them — and beauty stays the default, so adding an industry changes nothing for the businesses already running.",
        },
        {
          heading: "Two clients cannot take the same slot",
          body: "Creating a booking opens a transaction and immediately takes a PostgreSQL advisory lock on the staff member and on every resource involved, each key prefixed by class so a staff id and a resource id can never collide. Only then does it check for overlaps.\n\nResources carry capacity: a resource counts as busy only once overlapping bookings reach that number, so a room for eight is not blocked by the first person who books it. All the interval, buffer and overlap maths runs in business-local minutes, which is what keeps it correct across time zones.",
        },
        {
          heading: "The business keeps its own money",
          body: "Prepayments do not pass through the platform. A business connects its own monobank merchant credentials, stored per business, and invoices are raised against that account; LiqPay is the alternative.\n\nThe platform therefore never becomes a payment intermediary — nothing to hold, nothing to pay out, no regulatory role that a booking product has no business taking on. The money lands in the salon's own bank.",
        },
        {
          heading: "Reminders are the product",
          image: "/projects/zapys24-platform.webp",
          caption: "Notifications and reminders — the part businesses actually pay for",
          body: "Notifications are split by channel — booking, business, platform, social — so a client can mute marketing without losing the reminder about tomorrow's appointment.\n\nEmail renders from Handlebars templates, push goes through Firebase, and SMS runs against a per-plan quota, because SMS is the one channel that costs real money per message. Telegram carries operational alerts to the team, never to clients.",
        },
        {
          heading: "A booking site without a web developer",
          body: "Each business can publish its own booking site from a template. The template itself lives in code — palette, fonts, block layout — because design changes together with the renderer, not separately from it. The database stores exactly one thing about it: the lowest plan that may publish it.\n\nDisabling a template removes it from the picker without taking down the sites already published on it. That asymmetry is deliberate: an admin tidying up the template list should not be able to switch off someone's working site.",
        },
        {
          heading: "Subscriptions on three fronts",
          body: "The same subscription has to work when it is bought on the web and when Apple sells it inside the app. Web billing runs through the platform's own plans and add-ons; in-app purchases are verified server-side against Apple's App Store Server library, so the entitlement comes from the receipt rather than from the client.\n\nPlans compare by rank, not by name — otherwise every feature check would list \"basic\" and \"pro\" by hand and drift apart the first time a tier is added.",
        },
        {
          heading: "What production demanded",
          body: "Background work runs on Bull queues over Redis, which also carries the cache. Media goes to S3-compatible storage and is resized with sharp on the way in. Sessions are signed and cookie-based, passwords hashed with argon2, endpoints rate-limited, health exposed through Terminus and the API documented in Swagger.\n\nThe unglamorous parts — Excel exports for accountants, staff payouts, expense tracking, a support desk — are in because a CRM that a business runs its day on cannot stop at the calendar.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A booking platform in production at zapys24.com: a web cabinet, a client app and a business app on iOS and Android, with two industries live and the model ready for the rest.",
    },
    marketplace: {
      sectionLabel: "How it's built",
      intro: "A multi-vendor marketplace where several sellers compete on one product card: a storefront, a seller cabinet and an admin panel on a single API, with search, delivery, payments and fiscal receipts wired in. These are the decisions that shaped it.",
      metrics: [
        {
          value: "3",
          label: "Frontends, one API",
        },
        {
          value: "11",
          label: "Order states",
        },
        {
          value: "4",
          label: "Delivery carriers",
        },
        {
          value: "103",
          label: "Schema migrations",
        },
      ],
      sections: [
        {
          heading: "A product is not an offer",
          body: "The catalogue product and the seller's offer are separate entities. One card describes the thing; each seller attaches an offer to it with its own price, stock, media and wholesale price tiers.\n\nEverything difficult about a marketplace follows from that split: matching an incoming item to an existing product, merging duplicates that slipped through, and deciding which offer a buyer sees first. Getting it wrong the other way — one product row per seller — produces a catalogue where the same item appears forty times and no filter can fix it.",
        },
        {
          heading: "Search that does not hand the page to one seller",
          body: "Search runs on OpenSearch, with product attributes indexed as nested documents so filters can be built per category instead of per field, and with the full category path indexed so a filter on a parent category still finds everything underneath.\n\nResults are not a flat relevance list. Offers are bucketed by seller, buckets are ordered by their best offer, and then interleaved — so a marketplace with one large seller and fifty small ones still shows the small ones. A marketplace that lets its biggest seller own every result page stops attracting new sellers.",
        },
        {
          heading: "Sellers upload feeds, not spreadsheets by hand",
          body: "Catalogue growth comes from an import pipeline: raw items land first, field mappings are saved per seller as presets, media problems are recorded per item instead of failing the batch, and matching proposes the catalogue product each item belongs to.\n\nNew brands and categories wait for approval before they reach search facets. Without that gate, one careless feed renames a whole branch of the catalogue.",
        },
        {
          heading: "Eleven states, and who moved them",
          body: "An order goes from created through paid, processing, awaiting shipment, shipped, delivered and completed, with cancellation, refund and return as first-class states rather than flags.\n\nEvery transition records what caused it and who did it: order creation, a payment webhook, a refund job, a Nova Poshta tracking push, an admin, a seller's manager or a scheduler. When a buyer asks why an order says what it says, the answer is in the row, not in the logs.",
        },
        {
          heading: "Money, delivery and the tax office",
          body: "Payments run through LiqPay, monobank and Hutko behind one provider interface, so adding an acquirer is a new file rather than a new branch through checkout. Cash on delivery stays a payment method like any other.\n\nDelivery covers Nova Poshta, Ukrposhta, Meest and Delivery Auto — branch and locker directories, label printing, and tracking that pushes status back into the order. Fiscal receipts go through Checkbox, Cashalot or Vchasno, because in Ukraine a receipt is not a feature request, it is the law.",
        },
        {
          heading: "Built to be operated",
          body: "Buyer-to-seller chat runs over websockets with Redis behind it. Notifications, reviews, complaints, audit trails, CMS blocks for the footer and static pages, seller analytics and an advertising module all live as their own modules on the same API.\n\nOne hundred and three migrations is the honest measure of a marketplace: the schema keeps moving because the business keeps discovering what it actually sells.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A working multi-vendor marketplace at enez.com.ua — buyer storefront, seller cabinet and admin panel on one API, with faceted search, four carriers, three acquirers and fiscal receipts in production.",
    },
    zapys24Mobile: {
      sectionLabel: "How it's built",
      intro: "Two React Native apps on the Zapys24 API: one for the client who books, one for the business that runs the day. Both are published on the App Store and Google Play. These are the decisions that shaped them.",
      metrics: [
        {
          value: "2",
          label: "Apps, one backend",
        },
        {
          value: "iOS",
          label: "App Store",
        },
        {
          value: "Android",
          label: "Google Play",
        },
        {
          value: "0",
          label: "Shared screens",
        },
      ],
      sections: [
        {
          heading: "Two apps, not one app with a switch",
          body: "A client and a salon owner share almost nothing: one browses, books and gets reminders; the other works a calendar, staff, clients and money all day. Putting both behind a role flag produces an app where half the navigation is always dead weight.\n\nSo they ship separately, against the same API. The client app leans on maps and search; the business app is a working tool with a calendar at its centre. Each store listing then describes one thing, which is also what review teams expect.",
        },
        {
          heading: "Finding a salon, not a list of salons",
          body: "The client app puts the map first: device location, Mapbox rendering, and results tied to what is actually nearby rather than to a national list. Booking is a bottom sheet over the map, so choosing a time never costs the context of where the place is.",
        },
        {
          heading: "Push that earns its permission",
          body: "Notifications go through Firebase Messaging on both platforms and are categorised on the server, so a reminder about tomorrow's appointment and a promotion are not the same subscription.\n\nThe permission prompt is asked for at the moment it makes sense — after a booking exists — not on first launch. An app that burns the prompt on launch loses the channel it actually needs.",
        },
        {
          heading: "Fast on a bad connection",
          body: "Server state is cached by React Query, and what must survive a cold start is written to MMKV, which is fast enough to read synchronously while the first screen renders. Tokens live in the platform secure store, never in plain storage.\n\nThe result is that opening the app on mobile data shows yesterday's schedule instantly and corrects it a moment later, instead of showing a spinner.",
        },
        {
          heading: "What the stores demanded",
          body: "In-app subscriptions are verified server-side against Apple's App Store Server library — the entitlement comes from the receipt, not from the device. Account deletion is reachable from inside the app and from the web, because both stores now require it.\n\nBuilds and submissions run through Expo, which keeps the native project out of the repository and the release process in one command.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "Two apps in production on the App Store and Google Play, sharing one NestJS backend with the web cabinet — clients book from the map, businesses run the day from the phone.",
    },
    orthoDent: {
      sectionLabel: "How it's built",
      intro: "An online store for orthodontic supplies: a Next.js storefront, an admin panel with sales analytics and a NestJS API, built for a professional buyer who knows exactly what they need. These are the decisions that shaped it.",
      metrics: [
        {
          value: "3",
          label: "Apps, one API",
        },
        {
          value: "4",
          label: "Order states",
        },
        {
          value: "OTP",
          label: "Login without passwords",
        },
        {
          value: "UAH",
          label: "Cashback balance",
        },
      ],
      sections: [
        {
          heading: "A catalogue for people who know the part number",
          body: "The buyer here is an orthodontist, not a browser. Categories and subcategories carry manufacturer and country of origin, because a practice buys a specific bracket from a specific maker and a near-match is not a substitute.\n\nSo the catalogue is organised around those axes rather than around lifestyle merchandising, and search exists to confirm a choice that is already made.",
        },
        {
          heading: "Login by code, not by password",
          body: "Customers sign in with a one-time code delivered by SMS or email, with a password option for those who want one. A clinic's purchasing is done by whoever is at the desk that day; a shared password would be written on a sticky note within a week.\n\nThe SMS sender sits behind an interface with console, HTTP and Twilio implementations, so the same code path runs in development without spending money on messages.",
        },
        {
          heading: "Four states, on purpose",
          body: "An order is new, processing, done or cancelled. A store this size is worked by people who already know the customer; adding eight states would produce a dashboard full of rows nobody moves.\n\nCashback is credited when an order reaches done and is adjusted atomically on the customer record, so a balance cannot drift when two orders close at once.",
        },
        {
          heading: "Discounts that survive contact with reality",
          body: "Discounts are percent or fixed, and promo codes are their own entity with their own rules, because a seasonal campaign and a negotiated price for a regular clinic are different things that expire at different times.\n\nKeeping them apart means ending a campaign never touches the terms a long-standing customer was promised.",
        },
        {
          heading: "An admin panel that answers questions",
          body: "The back office is a separate React application with charts over sales, so the owner sees what is moving without exporting anything. The API is documented in Swagger, rate-limited, and separated into customer and admin authentication, so a compromised customer session cannot reach the store's own data.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A working store for a professional market — catalogue, cart, orders, cashback and promo codes, with an admin panel the owner runs alone and a documented API behind all of it.",
    },
    similiaStudio: {
      sectionLabel: "How it's built",
      intro: "A photo studio in Israel that rents itself out by the hour. The site had to take bookings without ever double-selling a slot, and settle the paperwork the way Israeli businesses actually do it. These are the decisions that shaped it.",
      metrics: [
        {
          value: "2",
          label: "Calendar sources",
        },
        {
          value: "3",
          label: "Languages",
        },
        {
          value: "4",
          label: "External services",
        },
        {
          value: "0",
          label: "Manual confirmations",
        },
      ],
      sections: [
        {
          heading: "The studio's real calendar is the source of truth",
          body: "Availability is not a second calendar kept in our database. The site reads the studio's own Google Calendar — through a service account where one is configured, or through the calendar's private iCal feed where it is not — and treats every busy block there as unavailable.\n\nThat choice matters more than it sounds. A team that already lives in Google Calendar will keep booking things there, and any parallel calendar would be wrong within a week. Confirmed bookings are written back to the same calendar, so the studio never has two versions of its day.",
        },
        {
          heading: "Paid and invoiced the local way",
          body: "Payment runs through PayPlus and the receipt is issued through Green Invoice — the gateway and the invoicing service Israeli businesses are actually required to work with. A Stripe-shaped assumption would have left the owner issuing receipts by hand after every booking.\n\nEach integration is guarded by its own configuration check, so a missing credential degrades one step instead of breaking the booking flow.",
        },
        {
          heading: "An enquiry becomes a lead, not an email",
          body: "Form submissions create a lead in Kommo CRM alongside the confirmation email. An enquiry that only exists in an inbox is lost the first busy week; in the CRM it has an owner and a next step.",
        },
        {
          heading: "Three languages and a portfolio the team owns",
          body: "The site runs in three languages through next-intl, with an admin area where the studio manages its portfolio galleries and equipment catalogue itself. Images go to Cloudinary, so a photographer uploading full-size frames does not need to think about file size — which is exactly the kind of detail that decides whether a site stays updated after launch.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A studio site that sells its own time: live availability from the team's real calendar, local payment and invoicing, leads landing in the CRM, and a portfolio the studio updates without calling us.",
    },
    iCleaning: {
      sectionLabel: "How it's built",
      intro: "A cleaning company in the UAE that needed to be bookable and payable online, in three languages, one of which reads right to left. These are the decisions that shaped it.",
      metrics: [
        {
          value: "3",
          label: "Languages, incl. Arabic",
        },
        {
          value: "RTL",
          label: "Layout direction",
        },
        {
          value: "Stripe",
          label: "Online payment",
        },
        {
          value: "CRM",
          label: "Every lead captured",
        },
      ],
      sections: [
        {
          heading: "Arabic is a direction, not a translation",
          body: "The document direction is set from the language on the server, before the first paint, so an Arabic visitor never sees a left-to-right layout flip into place. Spacing, icons and carousels are built to mirror rather than to be patched per-language.\n\nTreating right-to-left as a late CSS fix is the usual way this goes wrong: the text translates, the layout does not, and the site reads as foreign to exactly the audience it was translated for.",
        },
        {
          heading: "Pay now or pay later — same booking",
          body: "Checkout runs through Stripe Checkout, and the order is only trusted once the Stripe webhook confirms it — not when the browser comes back from the payment page. A user who closes the tab after paying still gets a completed order.\n\nBooking without paying online stays available too, because a first-time customer in this market often wants to speak to someone before handing over a card.",
        },
        {
          heading: "Every enquiry lands in the CRM",
          body: "Request forms create a lead in Bitrix24 with the service, contact details and source attached. The site is not the system of record for sales — the CRM is — so the handover happens at the moment of the enquiry rather than through someone re-typing an email.",
        },
        {
          heading: "Proof, and the team's own content",
          body: "Before-and-after galleries and a blog run from an admin area the company edits itself, with media on Cloudinary. In cleaning, the before-and-after pair is the whole sales argument, so getting new ones online must not require a developer.",
        },
      ],
      outcomeTitle: "The result",
      outcome: "A multilingual booking site for the UAE market — right-to-left Arabic done properly, online payment confirmed by webhook, every enquiry in the CRM, and galleries the team keeps current on its own.",
    },
  },
} as const;

export default en;

// Widen all leaf strings so translated dictionaries can assign different values.
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof en>;
