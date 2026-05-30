"use client";

import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  return <motion.div className="fixed left-0 top-0 z-[80] h-px origin-left bg-gradient-to-r from-sky-300 via-violet-300 to-white" style={{ scaleX }} />;
}

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 90, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    const updatePosition = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", updatePosition, { passive: true });
    return () => window.removeEventListener("pointermove", updatePosition);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[70] hidden h-80 w-80 rounded-full bg-sky-300/10 blur-3xl dark:block"
      style={{ x: springX, y: springY }}
    />
  );
}
