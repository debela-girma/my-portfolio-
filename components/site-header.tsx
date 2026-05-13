"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink/75">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-slate-950 dark:text-white" aria-label="Your Name home">
            Your<span className="text-sky-300">Name</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full border border-sky-400/50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-500 hover:bg-sky-100 dark:border-sky-300/40 dark:text-sky-200 dark:hover:border-sky-200 dark:hover:bg-sky-300/10 dark:hover:text-white sm:inline-flex"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 md:hidden" aria-label="Mobile section navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 bg-white/75 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-sky-300/50 dark:hover:bg-sky-300/10 dark:hover:text-sky-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
