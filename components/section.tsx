"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-7xl scroll-mt-40 px-6 py-20 sm:scroll-mt-32 sm:py-24 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      variants={reveal}
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
