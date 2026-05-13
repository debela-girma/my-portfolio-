"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const roles = ["Full-Stack Developer", "Problem Solver", "Freelance Ready"];

// Replace this path with your own file, for example: /your-photo.jpg in the public folder.
const profileImage = "/profile-placeholder.svg";

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
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-44 sm:pt-36 lg:px-8 lg:pt-28">
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
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={item} className="mb-5 inline-flex rounded-full border border-sky-300/40 bg-sky-100/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-glow dark:bg-sky-300/10 dark:text-sky-200">
            Available for high-impact freelance projects
          </motion.p>
          <motion.h1 variants={item} className="font-display text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Your Name
            <span className="block bg-gradient-to-r from-sky-600 via-slate-950 to-violet-600 bg-clip-text text-transparent dark:from-sky-200 dark:via-white dark:to-violet-200">
              builds systems that feel effortless.
            </span>
          </motion.h1>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3 text-lg font-medium text-slate-700 dark:text-slate-300 sm:text-xl">
            <span>Full-Stack Developer</span>
            <span className="text-sky-500 dark:text-sky-300">|</span>
            <RotatingRole />
          </motion.div>
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I design and develop scalable web products for founders, teams, and service businesses that need more than a pretty interface: clean architecture, reliable data flow, and a polished user experience ready for real users.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              className="rounded-2xl bg-sky-400 px-6 py-4 text-center font-semibold text-slate-950 shadow-glow transition hover:bg-sky-300 dark:bg-sky-300 dark:hover:bg-sky-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-2xl border border-slate-300 bg-white/70 px-6 py-4 text-center font-semibold text-slate-950 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-glow dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-sky-300/50 dark:hover:bg-sky-300/10"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-300/30 via-violet-300/20 to-transparent blur-2xl dark:from-sky-400/25 dark:via-violet-500/20" aria-hidden="true" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/40 bg-slate-100 dark:border-white/10 dark:bg-slate-950/80">
              <Image
                src={profileImage}
                alt="Portrait placeholder for Your Name"
                fill
                priority
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Your photo goes here</p>
                <p className="mt-2 font-display text-2xl font-semibold">Replace `/public/profile-placeholder.svg` with your image.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-emerald-300/35 bg-white/85 px-5 py-4 text-sm font-semibold text-emerald-700 shadow-premium backdrop-blur dark:bg-emerald-300/10 dark:text-emerald-200">
            Lighthouse-minded builds
          </div>
          <div className="absolute -right-3 top-8 rounded-2xl border border-sky-300/35 bg-white/85 px-4 py-3 text-sm font-semibold text-sky-700 shadow-premium backdrop-blur dark:bg-sky-300/10 dark:text-sky-200">
            Open to freelance work
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RotatingRole() {
  return (
    <span className="relative inline-flex h-8 min-w-44 overflow-hidden text-sky-600 dark:text-sky-200">
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
