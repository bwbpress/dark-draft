import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { JsonLd } from "../components/json-ld";
import { getAllBooks, getSeriesBySlug } from "../lib/books";
import { buildBreadcrumbJsonLd } from "../lib/structured-data";
import { SITE_NAME } from "../lib/site-config";
import BookCover from "../components/bookCover";

export const metadata: Metadata = {
  title: "Books",
  description:
    "The complete Dystro Han catalog - the Hack & Harrow series with links to every retailer",
  alternates: {
    canonical: "/books",
  },
  openGraph: {
    type: "website",
    url: "/books",
    title: `Books | ${SITE_NAME}`,
    description:
      "The complete Dystro Han catalog - the Hack & Harrow series with links to every retailer",
  },
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-16 sm:px-10 lg:px-0">
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
            Books
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => {
            const series = book.seriesSlug ? getSeriesBySlug(book.seriesSlug) : undefined;
            return (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className="flex flex-col gap-3 items-center rounded-2xl border border-glow/20 bg-surface/50 p-4 transition-colors hover:border-accent-pink"
              >
                <BookCover
                  image={book.coverImage}
                  alt={book.coverImageAlt}
                  isPlaceholder={book.coverIsPlaceholder}
                  className="max-w-none!"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-base text-foreground">{book.title}</h2>
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {series ? `${series.name} ${book.seriesPosition && book.seriesPosition >= 1 ? `Book ${book.seriesPosition}` : ""}` : "Standalone Novella"}
                  </p>
                  <p className="text-sm text-muted">{book.blurb}</p>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-blue">
                    {book.status}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Books", path: "/books" },
        ])}
      />
    </div>
  );
}
