"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { navItems, siteConfig } from "@/lib/data";

function useActiveSection() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = ["#top", ...navItems.map((item) => item.href)]
      .map((id) => document.querySelector(id))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const active = useActiveSection();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => scrollY.on("change", (latest) => setIsScrolled(latest > 18)), [scrollY]);

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-2xl transition duration-300 sm:px-4 ${
          isScrolled
            ? "border-white/15 bg-slate-950/72 shadow-[0_18px_70px_rgba(0,0,0,0.34)]"
            : "border-white/10 bg-white/[0.05]"
        }`}
        aria-label="Primary navigation"
      >
        <a href="#top" className="group flex items-center gap-2 rounded-full px-2 py-1.5" aria-label={`${siteConfig.name} home`}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-slate-950 shadow-glow">
            <Icon name="sparkles" className="h-4 w-4" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:inline">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                {isActive ? <motion.span layoutId="active-nav" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 380, damping: 34 }} /> : null}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-300/20"
        >
          Build together
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </a>
      </nav>
    </motion.header>
  );
}
