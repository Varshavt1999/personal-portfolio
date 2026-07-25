"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FadeIn, SectionHeading, staggerContainer, fadeInUp } from "@/components/ui/motion";

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-alt scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A few things I've built recently."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="card group overflow-hidden rounded-xl transition-colors hover:border-accent/30"
            >
              <div className={`flex h-36 items-center justify-center ${project.tone}`}>
                <span className="font-mono text-xs tracking-widest text-muted uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6 pt-5">
                <h3 className="mb-2 text-base font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <GithubIcon />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
