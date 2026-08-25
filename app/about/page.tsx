import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GlowPanel } from "../components/glow-panel";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { JsonLd } from "../components/json-ld";
import { buildBreadcrumbJsonLd } from "../lib/structured-data";
import {
  AUTHOR_BIO_LONG,
  AUTHOR_BIO_SHORT,
  AUTHOR_NAME,
  AUTHOR_PHOTO,
  AUTHOR_PHOTO_ALT,
  SOCIAL_LINKS,
} from "../lib/site-config";
import { SocialLinks } from "../components/social-links";

export const metadata: Metadata = {
  title: "About",
  description: AUTHOR_BIO_SHORT,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: "/about",
    title: `About ${AUTHOR_NAME}`,
    description: AUTHOR_BIO_SHORT,
  },
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-16 sm:px-10 lg:px-0">
        <nav aria-label="Breadcrumb" className="text-xs text-muted">
          <Link href="/" className="hover:text-accent-pink">
            Home
          </Link>{" "}
          / <span className="text-foreground">About</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <GlowPanel
            rounded="full"
            background="gradient"
            border="animated"
            glow
            className="aspect-square w-full max-w-xs"
          >
            <Image
                src={AUTHOR_PHOTO}
                alt={AUTHOR_PHOTO_ALT}
                fill
                priority
                sizes="(min-width: 400px) 320px, calc(100vw - 3rem)"
                className="z-0 rounded-[inherit] object-cover p-0.5"
            />
          </GlowPanel>

          <div className="flex flex-col gap-6">
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              About {AUTHOR_NAME}
            </h1>
            <div className="flex flex-col gap-4">
              {AUTHOR_BIO_LONG.map((paragraph) => (
                <p key={paragraph} className="max-w-xl text-sm text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                Find {AUTHOR_NAME} online
              </h2>
              <div className="flex flex-wrap gap-3">
                <SocialLinks/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </div>
  );
}
