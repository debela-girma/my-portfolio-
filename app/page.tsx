import Image from "next/image";
import { AnimatedCard } from "@/components/animated-card";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { navItems, projects, services, skillCategories } from "@/lib/data";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white" aria-label="Your Name home">
          Your<span className="text-sky-300">Name</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-sky-300/40 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-200 hover:bg-sky-300/10 hover:text-white"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A systems-minded developer who understands both code and client outcomes."
      description="I build digital products with the discipline of an engineer and the judgment of a freelance partner."
    >
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="glass-panel rounded-3xl p-8 sm:p-10">
          <p className="text-lg leading-9 text-slate-300">
            I help businesses turn ambiguous technical needs into reliable software: scalable systems, practical workflows, and interfaces people can use without friction. My foundation spans C++ for disciplined problem solving, Java with strong OOP principles for maintainable architecture, MySQL for structured data design, and TypeScript for safer full-stack delivery. Whether the goal is a new API, a database-backed web app, or a polished client portal, I focus on clean decisions, clear communication, and production-ready execution from the first conversation.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {["Scalable Systems", "Freelance Ready", "Clear Delivery"].map((item) => (
            <div key={item} className="rounded-3xl border border-line bg-white/[0.04] p-6 shadow-premium">
              <div className="mb-4 h-2 w-14 rounded-full bg-gradient-to-r from-sky-300 to-violet-300" />
              <p className="font-display text-xl font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The technical range to move from idea to stable product."
      description="A focused toolkit for solving real business problems without over-engineering the path to launch."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, index) => (
          <AnimatedCard
            key={category.title}
            index={index}
            className="group glass-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-sky-300/40 hover:shadow-glow"
          >
            <div className={`mb-6 h-2 w-16 rounded-full bg-gradient-to-r ${category.accent}`} />
            <h3 className="font-display text-2xl font-semibold text-white">{category.title}</h3>
            <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">{category.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected builds designed for performance, clarity, and trust."
      description="Three portfolio-ready examples that show how frontend polish and backend thinking work together."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <AnimatedCard key={project.title} className="group relative overflow-hidden rounded-3xl border border-line bg-slate-950/70 p-3 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-sky-300/50 hover:shadow-glow">
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-sky-300/20 via-transparent to-violet-300/20" />
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                width={900}
                height={620}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative p-5">
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} className="text-sm font-semibold text-slate-300 transition hover:text-white" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href={project.demo} className="text-sm font-semibold text-sky-300 transition hover:text-sky-200" target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Freelance services for clients who need dependable execution."
      description="Choose focused implementation, architecture support, or an end-to-end build from planning through deployment."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <AnimatedCard key={service.title} index={index} className="group glass-panel rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-300/10 text-2xl text-sky-200 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have a build in mind? Let’s make it clear, fast, and launch-ready."
      description="Share the outcome you want, and I’ll help translate it into the right architecture, timeline, and next step."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-line bg-white/[0.04] p-8">
          <h3 className="font-display text-2xl font-semibold text-white">Start with a focused conversation.</h3>
          <p className="mt-4 leading-7 text-slate-300">
            I’m available for freelance development, API builds, database planning, and responsive web experiences. Expect direct communication, realistic scope, and work that is designed to be maintained after launch.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-300/10">
              GitHub <span>↗</span>
            </a>
            <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-300/10">
              LinkedIn <span>↗</span>
            </a>
            <a href="mailto:hello@yourname.dev" className="flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-slate-200 transition hover:border-sky-300/40 hover:bg-sky-300/10">
              hello@yourname.dev <span>→</span>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Your Name. Built for thoughtful freelance delivery.</p>
        <a href="#top" className="transition hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}
