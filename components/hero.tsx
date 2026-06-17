"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { MagneticButton } from "@/components/magnetic-button";
import { siteConfig } from "@/lib/data";

const roles = ["Developer", "Builder", "Future Founder"];
const profileImage = "/prof.JPG";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 lg:px-8">
      <motion.div
        aria-hidden="true"
        className="animated-grid absolute inset-0 opacity-70"
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-400/14 blur-3xl"
        animate={{ scale: [1, 1.14, 1], opacity: [0.42, 0.75, 0.42] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/12 blur-3xl"
        animate={{ x: [0, -32, 0], y: [0, 28, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 shadow-[0_0_1rem_0_rgba_16_185_129_0.25]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Available for freelance opportunities
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            <span>{siteConfig.role}</span>
            <span className="text-sky-300">/</span>
            <RotatingRole />
          </motion.div>

          <motion.h1 variants={item} className="mt-5 max-w-5xl text-balance font-display text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Building software that solves real problems.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            I help businesses and founders transform ideas into scalable digital products through thoughtful engineering and modern web technologies.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#projects">
              View Work
              <Icon name="arrow-up-right" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Let&apos;s Build Together
              <Icon name="rocket" className="h-4 w-4" />
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <SocialLink href={siteConfig.github} label="GitHub" icon="github" />
            <SocialLink href={siteConfig.linkedin} label="LinkedIn" icon="linkedin" />
            <SocialLink href={`mailto:${siteConfig.email}`} label="Email" icon="mail" />
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-[33rem]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-300/25 via-violet-300/15 to-transparent blur-2xl" aria-hidden="true" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
              <Image src={profileImage} alt="Professional portrait" fill priority sizes="(min-width: 1024px) 33rem, 90vw" className="object-cover opacity-90 transition duration-700 hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Founder-grade portfolio</p>
                <p className="mt-2 max-w-sm font-display text-2xl font-semibold text-white">Replace this portrait with your own image before launch.</p>
              </div>
            </div>
          </div>
          <FloatingBadge className="-left-2 bottom-8" icon="zap" title="Fast shipping" />
          <FloatingBadge className="-right-3 top-10" icon="badge-check" title="Product-minded" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 2200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex min-w-[10rem] text-sky-200">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: "github" | "linkedin" | "mail" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 transition hover:border-white/40 hover:text-white">
      <Icon name={icon} className="h-4 w-4" />
      {label}
    </a>
  );
}

function FloatingBadge({ className, icon, title }: { className: string; icon: "zap" | "badge-check"; title: string }) {
  return (
    <motion.div
      className={`absolute hidden items-center gap-2 rounded-2xl border border-white/12 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-white shadow-premium backdrop-blur-xl sm:flex ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon name={icon} className="h-4 w-4 text-sky-200" />
      {title}
    </motion.div>
  );
}
