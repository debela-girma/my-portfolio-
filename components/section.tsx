"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl scroll-mt-32 px-6 py-20 sm:py-24 lg:px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      variants={reveal}
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
