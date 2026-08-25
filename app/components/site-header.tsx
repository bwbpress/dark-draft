"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { SITE_NAME } from "../lib/site-config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  // { label: "Connect", href: "/connect" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <Button href="/connect" variant="outline" size="sm" className="hidden sm:inline-block">
        Connect
      </Button>

      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        className="flex flex-col gap-1.5 sm:hidden"
      >
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
        <span className="h-0.5 w-6 bg-foreground" />
      </button>

      {isMenuOpen && (
        <div className="h-screen fixed inset-0 z-20 flex flex-col bg-background px-6 py-4 sm:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-lg font-bold tracking-widest text-accent-pink"
            >
              {SITE_NAME.toUpperCase()}
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-2xl leading-none text-foreground"
            >
              &times;
            </button>
          </div>
          <nav className="mt-12 flex flex-col items-center gap-8 text-lg font-medium uppercase tracking-wide">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted transition-colors hover:text-accent-pink"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/connect"
              variant="outline"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
