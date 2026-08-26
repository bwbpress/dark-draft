import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/json-ld";
import { buildPersonJsonLd, buildWebsiteJsonLd } from "./lib/structured-data";
import {
  AUTHOR_NAME,
  AUTHOR_BIO_SHORT,
  SITE_IS_LIVE,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "./lib/site-config";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const DESCRIPTION =
  `Author site for Dystro Han aka dystroh. Dystro is the indie queer romance author of the upcoming epic cyberpunk MM dark romance series, Hack & Harrow.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DESCRIPTION,
    // TODO change out opengraph!
    images: [{ url: "/img/Dystroh-OG.jpg", width: 1200, height: 630 }],
  },
    twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description: DESCRIPTION,
    images: [{ url: "/img/Dystroh-OG.jpg", width: 1200, height: 630 }],
  },
  // TODO(remove-before-launch): SITE_IS_LIVE forces noindex/nofollow
  // site-wide while placeholder content is still in place. Flip it in
  // app/lib/site-config.ts once the real domain and content are live.
  robots: SITE_IS_LIVE
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
        },
      }
    : {
        index: false,
        follow: false,
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <JsonLd data={buildPersonJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
