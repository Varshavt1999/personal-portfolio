"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { FadeIn, SectionHeading, staggerContainer, fadeInUp } from "@/components/ui/motion";

export function Skills() {
  return (
    <section id="skills" className="section-alt scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="What I work with"
          description="Tools and technologies I use day to day."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className="card group rounded-xl p-6 transition-colors hover:border-accent/30"
            >
              <h3 className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface-hover px-3 py-1.5 text-sm text-muted transition-colors group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
