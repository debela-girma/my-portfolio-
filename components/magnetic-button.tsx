"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "bg-white text-slate-950 shadow-[0_0_44px_rgba(125,211,252,0.28)] hover:bg-sky-100 dark:bg-white dark:hover:bg-sky-50",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:border-sky-300/50 hover:bg-sky-300/10"
};

export function MagneticButton({ children, className = "", variant = "primary", onMouseMove, onMouseLeave, ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.25 });

  return (
    <motion.a
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
