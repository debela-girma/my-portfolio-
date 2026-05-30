"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function AnimatedCard({ children, className = "", index = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
