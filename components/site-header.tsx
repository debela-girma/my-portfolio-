"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-ink/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" onClick={closeMenu} className="font-display text-lg font-semibold tracking-tight text-slate-950 dark:text-white" aria-label="Your Name home">
          Your<span className="text-sky-300">Name</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-sky-400/50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-500 hover:bg-sky-100 dark:border-sky-300/40 dark:text-sky-200 dark:hover:border-sky-200 dark:hover:bg-sky-300/10 dark:hover:text-white"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-800 shadow-sm transition hover:border-sky-400 hover:text-sky-700 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-100 dark:hover:border-sky-300/50"
            aria-label="Toggle mobile navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Open main menu</span>
            <span className="relative h-4 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-4 mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-premium backdrop-blur dark:border-white/10 dark:bg-slate-950/95">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 dark:text-slate-200 dark:hover:bg-sky-300/10 dark:hover:text-sky-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 shadow-glow transition hover:bg-sky-300 dark:bg-sky-300 dark:hover:bg-sky-200"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
