import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/json-ld";
import { buildPersonJsonLd, buildWebsiteJsonLd } from "./lib/structured-data";
import {
  AUTHOR_NAME,
  AUTHOR_BIO_SHORT,
  SEARCH_ENGINE_VERIFICATION,
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
  `Author site for ${AUTHOR_BIO_SHORT}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
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
    images: [{ url: "/img/dystro-han-portrait.jpg", width: 1200, height: 630 }],
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
  verification: {
    google: SEARCH_ENGINE_VERIFICATION.google,
    other: {
      "msvalidate.01": SEARCH_ENGINE_VERIFICATION.bing,
    },
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
