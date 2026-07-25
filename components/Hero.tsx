"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/portfolio";

const roles = ["Frontend Developer", "React Specialist", "UI Enthusiast"];

function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [roles.length]);

  return (
    <span className="inline-block">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="inline-block"
      >
        {roles[index]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="section-alt relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-xs tracking-wide text-muted uppercase"
        >
          Open to work · {siteConfig.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-3xl leading-tight font-semibold tracking-tight md:text-4xl"
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 min-h-7 text-base text-muted md:text-lg"
        >
          <RoleRotator roles={roles} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted md:text-base"
        >
          {siteConfig.tagline} I&apos;ve spent{" "}
          <span className="font-medium text-foreground">
            {siteConfig.yearsOfExperience}+ years
          </span>{" "}
          building products with{" "}
          <span className="font-medium text-accent">React</span>,{" "}
          <span className="font-medium text-highlight">TypeScript</span>, and{" "}
          <span className="font-medium text-accent">Next.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
