import Link from "next/link";
import { SITE_NAME } from "../lib/site-config";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-glow/20 px-6 py-8 text-xs text-muted sm:px-10 bg-linear-to-b from-surface/50 to-[#1a1030]/50 backdrop-blur-md">
      <nav aria-label="Social links" className="flex flex-wrap justify-center gap-4">
        <SocialLinks/>
      </nav>
      <nav aria-label="Site" className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="transition-colors hover:text-accent-pink">
          Home
        </Link>
        <Link href="/books" className="transition-colors hover:text-accent-pink">
          Books
        </Link>
        <Link href="/about" className="transition-colors hover:text-accent-pink">
          About
        </Link>
        <Link href="/connect" className="transition-colors hover:text-accent-pink">
          Connect
        </Link>
      </nav>
      <p className="text-center">
        {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
