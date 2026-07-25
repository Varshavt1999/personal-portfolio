"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, siteConfig } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-surface/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-base font-semibold tracking-tight">
          <span className="text-foreground">{siteConfig.name.split(" ")[0]}</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href="#contact" className="btn-primary text-sm">
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-surface md:hidden"
        >
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-muted transition-colors hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary inline-block text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
