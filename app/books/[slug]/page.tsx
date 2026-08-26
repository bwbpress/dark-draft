import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { JsonLd } from "../../components/json-ld";
import { getAllBooks, getBookBySlug, getSeriesBySlug } from "../../lib/books";
import { buildBookJsonLd, buildBreadcrumbJsonLd } from "../../lib/structured-data";
import { SITE_NAME } from "../../lib/site-config";
import BookCover from "@/app/components/bookCover";
import { FormattedText } from "../../components/formatted-text";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const url = `/books/${book.slug}`;

  return {
    title: book.title,
    description: book.blurb,
    keywords: book.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "book",
      url,
      title: `${book.title} | ${SITE_NAME}`,
      description: book.blurb,
      ...(book.isbn13 ? { isbn: book.isbn13 } : {}),
      releaseDate: book.releaseDate,
    },
    // No `images` here on purpose: leaving it unset makes Next.js fall back
    // to `openGraph.images` (this route's generated opengraph-image), instead
    // of inheriting the root layout's site-wide twitter image.
    twitter: {
      card: "summary_large_image",
      title: `${book.title} | ${SITE_NAME}`,
      description: book.blurb,
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const series = book.seriesSlug ? getSeriesBySlug(book.seriesSlug) : undefined;

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 sm:px-10 lg:px-0">
        <nav aria-label="Breadcrumb" className="text-xs text-muted">
          <Link href="/" className="hover:text-accent-pink">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/books" className="hover:text-accent-pink">
            Books
          </Link>{" "}
          / <span className="text-foreground">{book.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <BookCover image={book.coverImage} alt={book.coverImageAlt} isPlaceholder={book.coverIsPlaceholder}/>

          <div className="flex flex-col gap-5">
            {series && (
              <Link
                href={`/series/${series.slug}`}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-pink hover:underline"
              >
                {series.name} {book.seriesPosition && book.seriesPosition >= 1 ? `— Book ${book.seriesPosition}` : ""}
              </Link>
            )}
            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {book.title}
            </h1>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-blue">
              {book.status}
              {book.releaseDate ? ` · ${book.releaseDate}` : ""}
            </p>
            {/* <p className="max-w-xl text-base text-muted">{book.blurb}</p> */}
            <FormattedText text={book.description} className="max-w-xl text-sm text-muted" />

            {book.retailerLinks.length > 0 && (
              <div className="flex flex-col gap-3 pt-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                  Get the book
                </h2>
                <div className="flex flex-wrap gap-3">
                  {book.retailerLinks.map((link) => (
                    <a
                      key={link.retailer}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-accent-pink px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-pink transition-colors hover:bg-accent-pink hover:text-background"
                    >
                      {link.retailer}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
      <JsonLd data={buildBookJsonLd(book, series)} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Books", path: "/books" },
          { name: book.title, path: `/books/${book.slug}` },
        ])}
      />
    </div>
  );
}
