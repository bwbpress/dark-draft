import Link from "next/link";
import { Button } from "./button";
import { SITE_NAME } from "../lib/site-config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Connect", href: "/#newsletter" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-glow/20 bg-background/90 px-6 py-4 backdrop-blur sm:px-10">
      <Link
        href="/"
        className="font-display text-lg font-bold tracking-widest text-accent-pink"
      >
        {SITE_NAME.toUpperCase()}
      </Link>
      <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-muted transition-colors hover:text-accent-pink"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Button href="/#newsletter" variant="outline" size="sm">
        Newsletter
      </Button>
    </header>
  );
}
