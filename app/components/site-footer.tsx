import Link from "next/link";
import { SITE_NAME, SOCIAL_LINKS } from "../lib/site-config";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-glow/20 px-6 py-8 text-xs text-muted sm:px-10 bg-linear-to-b from-surface/50 to-[#1a1030]/50 backdrop-blur-md">
      <nav aria-label="Social links" className="flex flex-wrap justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="me noopener noreferrer"
            className="transition-colors hover:text-accent-pink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <nav aria-label="Site" className="flex flex-wrap justify-center gap-4">
        <Link href="/books" className="transition-colors hover:text-accent-pink">
          Books
        </Link>
        <Link href="/about" className="transition-colors hover:text-accent-pink">
          About
        </Link>
      </nav>
      <p className="text-center">
        {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
