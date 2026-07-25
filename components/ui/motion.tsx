"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const directionOffset = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 text-center">
      <span className="mb-2 inline-block font-mono text-[11px] tracking-widest text-accent uppercase">
        {label}
      </span>
      <h2 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description && (
        <p className="mx-auto max-w-xl text-sm text-muted md:text-base">{description}</p>
      )}
    </FadeIn>
  );
}
