export type SkillCategory = {
  title: string;
  summary: string;
  skills: string[];
  accent: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  demo: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    summary: "Strong foundations for solving performance, architecture, and product problems.",
    skills: ["TypeScript", "JavaScript", "C++", "SQL"],
    accent: "from-sky-400 to-cyan-300"
  },
  {
    title: "Backend",
    summary: "Production APIs, authentication flows, integrations, and business logic built to scale.",
    skills: ["Node.js", "REST APIs", "OOP Principles", "System Design"],
    accent: "from-violet-400 to-fuchsia-300"
  },
  {
    title: "Frontend",
    summary: "Fast, accessible interfaces with clean component systems and persuasive UX.",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    accent: "from-emerald-400 to-teal-300"
  },
  {
    title: "Tools",
    summary: "Reliable delivery workflows for shipping, debugging, and maintaining client projects.",
    skills: ["Git", "MySQL", "Vercel", "CI/CD Ready"],
    accent: "from-amber-300 to-orange-400"
  }
];

export const projects: Project[] = [
  {
    title: "Client Operations Dashboard",
    description:
      "A secure analytics dashboard that turns scattered operational data into focused decisions with role-based access, KPI cards, and export-ready reporting.",
    stack: ["Next.js", "TypeScript", "MySQL", "Tailwind"],
    image: "/projects/dashboard.svg",
    github: "https://github.com/debela-girma/client-operations-dashboard",
    demo: "https://client-operations-demo.vercel.app"
  },
  {
    title: "API Booking Platform",
    description:
      "A resilient backend and polished booking flow for service businesses, including availability rules, transactional records, and clear customer communication.",
    stack: ["Node.js", "REST API", "TypeScript", "MySQL"],
    image: "/projects/booking.svg",
    github: "https://github.com/debela-girma/api-booking-platform",
    demo: "https://booking-platform-demo.vercel.app"
  },
  {
    title: "SaaS Landing System",
    description:
      "A conversion-focused marketing site system with reusable sections, fast page loads, animated proof points, and a maintainable content structure.",
    stack: ["Next.js", "Framer Motion", "TypeScript", "Vercel"],
    image: "/projects/saas.svg",
    github: "https://github.com/debela-girma/saas-landing-system",
    demo: "https://saas-landing-system.vercel.app"
  }
];

export const services: Service[] = [
  {
    title: "Backend Development",
    description:
      "Clean server-side foundations for products that need dependable business logic, maintainable structure, and room to grow.",
    icon: "◇"
  },
  {
    title: "API Development",
    description:
      "Well-documented REST APIs with thoughtful data contracts, predictable error handling, and integration-friendly architecture.",
    icon: "↔"
  },
  {
    title: "Database Architecture",
    description:
      "MySQL schemas, relationships, indexing strategies, and query patterns designed for clarity, performance, and future features.",
    icon: "▣"
  },
  {
    title: "Frontend Web Development",
    description:
      "Responsive Next.js interfaces that feel premium, load quickly, and guide users toward the actions that matter most.",
    icon: "✦"
  }
];
