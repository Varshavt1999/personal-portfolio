"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig, stats } from "@/data/portfolio";
import { FadeIn, SectionHeading } from "@/components/ui/motion";

export function About() {
  return (
    <section id="about" className="section-alt scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="A bit about me"
          description="I care about the details — readable code, thoughtful UX, and interfaces that feel considered."
        />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <AboutAvatar />
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-muted md:text-base">{siteConfig.bio}</p>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                When I&apos;m not coding, you&apos;ll find me exploring new web
                technologies, contributing to open source, or sharing knowledge
                with the developer community. I believe great frontend work sits
                at the intersection of performance, accessibility, and delightful
                user experience.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card rounded-lg p-4 text-center"
                  >
                    <p className="text-lg font-semibold text-accent">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AboutAvatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card max-w-lg overflow-hidden rounded-xl p-12 flex flex-col items-center">
      <div className="h-40 w-40 rounded-full overflow-hidden mb-4 relative">
        {!imgError ? (
          <Image
            src="/me.png"
            alt={`Avatar of ${siteConfig.name}`}
            fill
            onError={() => setImgError(true)}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="block"
          />
        ) : (
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-accent-soft text-3xl font-semibold text-accent">
            {siteConfig.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold">{siteConfig.name}</p>
        <p className="text-muted">{siteConfig.title}</p>
        <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
      </div>
    </div>
  );
}
