export type NavItem = {
  label: string;
  href: string;
};

export type TrustMetric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  summary: string;
  skills: string[];
  accent: string;
};

export type Project = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  stack: string[];
  image: string;
  github: string;
  demo: string;
};

export type Service = {
  title: string;
  description: string;
  outcome: string;
  icon: "app" | "api" | "database" | "frontend" | "mvp";
};

export type BuildNowItem = {
  label: string;
  title: string;
  description: string;
};

export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer & Builder",
  url: "https://your-portfolio.vercel.app",
  email: "hello@yourname.dev",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname"
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Now", href: "#building-now" },
  { label: "Contact", href: "#contact" }
];

export const trustMetrics: TrustMetric[] = [
  {
    label: "Projects Built",
    value: 12,
    suffix: "+",
    description: "Product interfaces, APIs, dashboards, and experiments shipped end-to-end."
  },
  {
    label: "Technologies Mastered",
    value: 14,
    suffix: "+",
    description: "Focused stack across systems, web, data, delivery, and deployment."
  },
  {
    label: "Years Learning",
    value: 4,
    suffix: "+",
    description: "Compound learning through C++, Java, databases, and modern web engineering."
  },
  {
    label: "Problem-Solving Focus",
    value: 100,
    suffix: "%",
    description: "Every build starts with the business outcome before the implementation details."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    summary: "Foundational programming range for disciplined problem solving and maintainable product code.",
    skills: ["C++", "Java", "TypeScript", "JavaScript"],
    accent: "from-sky-400 to-cyan-300"
  },
  {
    title: "Frontend",
    summary: "Premium product interfaces that are responsive, accessible, fast, and built around reusable systems.",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
    accent: "from-violet-400 to-fuchsia-300"
  },
  {
    title: "Backend",
    summary: "Clear data flows, reliable API contracts, and system decisions that leave room for scale.",
    skills: ["APIs", "Databases", "System Design", "MySQL"],
    accent: "from-emerald-400 to-teal-300"
  },
  {
    title: "Tools",
    summary: "Modern delivery workflow for version control, collaboration, deployments, and iteration velocity.",
    skills: ["Git", "GitHub", "Vercel", "CI Ready"],
    accent: "from-amber-300 to-orange-400"
  }
];

export const projects: Project[] = [
  {
    title: "Client Operations Dashboard",
    category: "B2B Analytics",
    challenge: "Operators were making decisions from scattered spreadsheets and delayed reporting loops.",
    solution: "Designed a secure dashboard with KPI cards, role-aware views, and export-ready reporting flows.",
    outcome: "Created a single source of truth that makes the next decision visible within seconds.",
    stack: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
    image: "/projects/dashboard.svg",
    github: "https://github.com/yourname/client-operations-dashboard",
    demo: "https://client-operations-demo.vercel.app"
  },
  {
    title: "API Booking Platform",
    category: "Service Automation",
    challenge: "A service business needed predictable booking logic without manual coordination overhead.",
    solution: "Built an API-backed scheduling flow with availability rules, transactional records, and clean confirmations.",
    outcome: "Reduced operational friction and gave customers a clearer path from interest to booking.",
    stack: ["Java", "REST API", "MySQL", "React"],
    image: "/projects/booking.svg",
    github: "https://github.com/yourname/api-booking-platform",
    demo: "https://booking-platform-demo.vercel.app"
  },
  {
    title: "SaaS Landing System",
    category: "Go-To-Market",
    challenge: "Early-stage product ideas needed credible marketing pages before the product was fully mature.",
    solution: "Created a reusable landing system with modular sections, animated proof points, and fast deployment defaults.",
    outcome: "Helped validate positioning quickly while preserving a polished brand experience.",
    stack: ["Next.js", "Framer Motion", "TypeScript", "Vercel"],
    image: "/projects/saas.svg",
    github: "https://github.com/yourname/saas-landing-system",
    demo: "https://saas-landing-system.vercel.app"
  }
];

export const services: Service[] = [
  {
    title: "Web Application Development",
    description: "End-to-end web products with clean UX, reliable architecture, and production-ready delivery.",
    outcome: "Turn an idea into a working product people can actually use.",
    icon: "app"
  },
  {
    title: "API Development",
    description: "Thoughtful REST APIs with stable contracts, predictable errors, and integration-friendly structure.",
    outcome: "Connect products, users, and data without brittle glue code.",
    icon: "api"
  },
  {
    title: "Database Architecture",
    description: "MySQL schema design, relationships, indexing, and query patterns built for clarity and growth.",
    outcome: "Give the product a data foundation that stays understandable over time.",
    icon: "database"
  },
  {
    title: "Frontend Engineering",
    description: "Modern React and Next.js interfaces with premium interaction design and accessible components.",
    outcome: "Make the product feel trustworthy before a user reads the copy.",
    icon: "frontend"
  },
  {
    title: "MVP Development",
    description: "Focused first versions that prioritize learning velocity, core workflows, and launch momentum.",
    outcome: "Ship the smallest serious product and use real feedback to decide what comes next.",
    icon: "mvp"
  }
];

export const buildingNow: BuildNowItem[] = [
  {
    label: "Learning",
    title: "Systems that scale from simple foundations",
    description: "Deepening backend architecture, API design, and database performance so early products do not inherit avoidable complexity."
  },
  {
    label: "Side Projects",
    title: "Founder tools for faster product validation",
    description: "Exploring small SaaS utilities that help creators turn rough ideas into scoped experiments and launch-ready pages."
  },
  {
    label: "Next Up",
    title: "AI-assisted product workflows",
    description: "Studying how modern AI interfaces can make software feel more adaptive without sacrificing trust, privacy, or control."
  },
  {
    label: "Ambition",
    title: "Build useful products with a durable business model",
    description: "The long-term direction is simple: keep shipping, learn from real users, and compound technical taste into founder judgment."
  }
];
