import Image from "next/image";
import { AnimatedCard } from "@/components/animated-card";
import { ContactForm } from "@/components/contact-form";
import { Counter } from "@/components/counter";
import { CursorGlow, ReadingProgress } from "@/components/experience-effects";
import { Icon } from "@/components/icons";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { buildingNow, navItems, projects, services, siteConfig, skillCategories, trustMetrics } from "@/lib/data";

const serviceIcons = {
  app: "terminal",
  api: "server",
  database: "database",
  frontend: "code",
  mvp: "rocket"
} as const;

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-ink text-white">
      <ReadingProgress />
      <CursorGlow />
      <SiteHeader />
      <Hero />
      <TrustBar />
      <About />
      <Skills />
      <Projects />
      <Services />
      <BuildingNow />
      <Contact />
      <Footer />
    </main>
  );
}

function TrustBar() {
  return (
    <section className="relative mx-auto -mt-12 w-full max-w-7xl px-6 pb-16 lg:px-8" aria-label="Portfolio trust metrics">
      <div className="glass-panel grid gap-px overflow-hidden rounded-[2rem] p-px sm:grid-cols-2 lg:grid-cols-4">
        {trustMetrics.map((metric, index) => (
          <AnimatedCard key={metric.label} index={index} className="bg-slate-950/72 p-6 transition duration-300 hover:bg-slate-900/86">
            <p className="font-display text-4xl font-semibold tracking-tight text-white">
              <Counter value={metric.value} suffix={metric.suffix} />
            </p>
            <h2 className="mt-3 font-semibold text-sky-100">{metric.label}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{metric.description}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="More than just code." description="The best software decisions are product decisions first. I care about what the product needs to prove, who it serves, and how the system can support the next version without collapsing under its own complexity.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-sky-100">
            <Icon name="braces" className="h-4 w-4" />
            Engineering taste + founder judgment
          </div>
          <div className="space-y-6 text-lg leading-9 text-slate-300">
            <p>
              My foundation starts close to the metal with C++, where precision and problem decomposition matter. Java strengthened the way I think about OOP, maintainable architecture, and explicit contracts. MySQL taught me that product reliability often begins with clear data models.
            </p>
            <p>
              Today, I bring those fundamentals into full-stack development: modern web interfaces, API-driven workflows, database-backed systems, and launch-ready experiences. I am not interested in decorative code. I want to build useful products that reduce friction, clarify decisions, and create measurable value.
            </p>
            <p>
              The direction is intentional: keep learning, keep shipping, and compound technical competence into the product instincts required to build companies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-premium">
            <Image src="/profile-placeholder.svg" alt="Professional portrait placeholder" fill sizes="(min-width: 1024px) 32rem, 90vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Portrait placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Drop in a confident, high-resolution portrait to complete the founder-brand feel.</p>
            </div>
          </div>
          <div className="grid gap-4">
            {["C++ problem-solving foundation", "Java OOP architecture", "MySQL database design", "Full-stack product delivery"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-sky-300/40 hover:bg-sky-300/10">
                <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-300 to-violet-300" />
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Technology Stack" title="A focused stack for moving from idea to durable product." description="Strong fundamentals, modern frontend craft, backend clarity, and deployment discipline in one practical toolkit.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category, index) => (
          <AnimatedCard key={category.title} index={index} className="group glass-panel relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:border-sky-300/40 hover:shadow-glow">
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`} />
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100">
              <Icon name={category.title === "Languages" ? "braces" : category.title === "Frontend" ? "code" : category.title === "Backend" ? "server" : "terminal"} className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">{category.title}</h3>
            <p className="mt-3 min-h-24 text-sm leading-6 text-slate-400">{category.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition group-hover:border-sky-300/30">
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
    <Section id="projects" eyebrow="Selected Work" title="Startup-style case studies, built around outcomes." description="Each concept is framed like a product: the user pain, the system response, and the business result it is designed to unlock.">
      <div className="grid gap-7 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedCard key={project.title} index={index} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-premium transition duration-300 hover:border-sky-300/45 hover:shadow-glow">
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true">
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-sky-300/18 via-transparent to-violet-300/18" />
            </div>
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950">
              <Image src={project.image} alt={`${project.title} product interface placeholder`} width={900} height={620} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-sky-100 backdrop-blur">{project.category}</div>
            </div>
            <div className="relative p-5">
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <ProjectPoint label="Challenge" text={project.challenge} />
              <ProjectPoint label="Solution" text={project.solution} />
              <ProjectPoint label="Outcome" text={project.outcome} />
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-300/40 hover:text-white">
                  GitHub <Icon name="github" className="h-4 w-4" />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
                  Live Demo <Icon name="arrow-up-right" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function ProjectPoint({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-4 border-l border-white/10 pl-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">{label}</p>
      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="How I Can Help" title="Execution that connects engineering work to business movement." description="The goal is not to produce more code. The goal is to ship the right product surface, make the system understandable, and create momentum.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => (
          <AnimatedCard key={service.title} index={index} className="group glass-panel rounded-[2rem] p-6 transition duration-300 hover:border-violet-300/40 hover:shadow-glow">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-100 transition group-hover:border-sky-300/40 group-hover:bg-sky-300/10">
              <Icon name={serviceIcons[service.icon]} className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm font-medium leading-6 text-sky-100">{service.outcome}</p>
          </AnimatedCard>
        ))}
      </div>
    </Section>
  );
}

function BuildingNow() {
  return (
    <Section id="building-now" eyebrow="Building Now" title="What I’m Currently Building" description="A founder-style operating log: what I am learning, testing, and compounding into the next version of my work.">
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-sky-300 via-violet-300 to-transparent md:block" aria-hidden="true" />
        <div className="grid gap-5 md:pl-12">
          {buildingNow.map((item, index) => (
            <AnimatedCard key={item.title} index={index} className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:border-sky-300/40 hover:bg-white/[0.06]">
              <span className="absolute -left-[2.55rem] top-8 hidden h-4 w-4 rounded-full border border-sky-200 bg-slate-950 shadow-glow md:block" />
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">{item.label}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Build Something Great" description="If you have an idea, a messy workflow, or a product surface that needs to feel more credible, send the context. I will help turn it into a clear next step.">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-sky-300/[0.07] p-4 shadow-premium sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-slate-950 shadow-glow">
              <Icon name="rocket" className="h-6 w-6" />
            </div>
            <h3 className="mt-7 font-display text-3xl font-semibold text-white">Start with the outcome.</h3>
            <p className="mt-4 leading-7 text-slate-300">Tell me what needs to exist, who it serves, and why it matters now. I will respond with product-minded questions and a practical path forward.</p>
            <div className="mt-8 space-y-3 text-sm">
              <ContactLink href={siteConfig.github} label="GitHub" icon="github" />
              <ContactLink href={siteConfig.linkedin} label="LinkedIn" icon="linkedin" />
              <ContactLink href={`mailto:${siteConfig.email}`} label={siteConfig.email} icon="mail" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function ContactLink({ href, label, icon }: { href: string; label: string; icon: "github" | "linkedin" | "mail" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200 transition hover:border-sky-300/50 hover:bg-sky-300/10 hover:text-white">
      <span className="inline-flex items-center gap-2"><Icon name={icon} className="h-4 w-4" /> {label}</span>
      <Icon name="arrow-up-right" className="h-4 w-4" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built for useful products and clear execution.</p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>
          ))}
          <a href="#top" className="transition hover:text-white">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
