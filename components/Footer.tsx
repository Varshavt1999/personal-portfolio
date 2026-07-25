import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
        <a
          href="#"
          className="font-mono text-sm text-muted transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
