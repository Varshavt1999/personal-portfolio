"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { FadeIn, SectionHeading } from "@/components/ui/motion";

export function Experience() {
  return (
    <section id="experience" className="section-alt scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="Roles that shaped how I build for the web."
        />

        <div className="relative space-y-10">
          <div className="absolute top-2 left-[7px] hidden h-[calc(100%-1rem)] w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-0 hidden h-4 w-4 items-center justify-center md:left-1/2 md:flex md:-translate-x-1/2">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                </div>

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="card rounded-xl p-6"
                  >
                    <span className="font-mono text-sm text-accent">{job.period}</span>
                    <h3 className="mt-1 text-base font-semibold">{job.role}</h3>
                    <p className="mb-3 text-muted">{job.company}</p>
                    <p className="mb-4 text-sm leading-relaxed text-muted">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-accent-soft px-2.5 py-1 text-xs text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
