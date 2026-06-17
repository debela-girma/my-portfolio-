"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/75 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-400 hover:text-slate-950 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-sky-300/50 dark:hover:text-white"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative h-5 w-10 rounded-full bg-slate-200 transition dark:bg-slate-800">
        <motion.span
          className="absolute top-1/2 grid h-4 w-4 -translate-y-1/2 place-items-center rounded-full bg-white text-[10px] shadow dark:bg-sky-300"
          animate={{ x: isDark ? 20 : 4 }}
          transition={{ type: "spring", stiffness: 420, damping: 30 }}
        >
          {isDark ? "☾" : "☀"}
        </motion.span>
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </motion.button>
  );
}
