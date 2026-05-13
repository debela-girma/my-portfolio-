"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const roles = ["Full-Stack Developer", "Problem Solver", "Freelance Ready"];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-8">
      <motion.div
        aria-hidden="true"
        className="animated-grid absolute inset-0 opacity-70"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl sm:h-96 sm:w-96"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={item} className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200 shadow-glow">
            Available for high-impact freelance projects
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Debela Girma
            <span className="block bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent">
              builds systems that feel effortless.
            </span>
          </motion.h1>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3 text-lg font-medium text-slate-300 sm:text-xl">
            <span>Full-Stack Developer</span>
            <span className="text-sky-300">|</span>
            <RotatingRole />
          </motion.div>
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I design and develop scalable web products for founders, teams, and service businesses that need more than a pretty interface: clean architecture, reliable data flow, and a polished user experience built with TypeScript and modern frameworks.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              className="rounded-2xl bg-sky-300 px-6 py-4 text-center font-semibold text-slate-950 shadow-glow transition hover:bg-sky-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-4 text-center font-semibold text-white transition hover:border-sky-300/50 hover:bg-sky-300/10 hover:shadow-glow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={item} className="glass-panel relative rounded-[2rem] p-5">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 shadow-premium">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-300">
              <CodeLine color="text-sky-300" text="const developer = {" />
              <CodeLine indent color="text-violet-300" text="name: 'Debela Girma'," />
              <CodeLine indent color="text-emerald-300" text="focus: ['APIs', 'Databases', 'UX']," />
              <CodeLine indent color="text-amber-200" text="delivery: 'production-ready'," />
              <CodeLine color="text-sky-300" text="};" />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-4 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-4 text-sm font-semibold text-emerald-200 shadow-premium">
            Lighthouse-minded builds
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RotatingRole() {
  return (
    <span className="relative inline-flex h-8 min-w-44 overflow-hidden text-sky-200">
      {roles.map((role, index) => (
        <motion.span
          key={role}
          className="absolute left-0 top-0"
          animate={{ y: [28, 0, 0, -28], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: index * 2, times: [0, 0.12, 0.72, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

function CodeLine({ text, color, indent = false }: { text: string; color: string; indent?: boolean }) {
  return <p className={`${indent ? "pl-6" : ""} ${color}`}>{text}</p>;
}
