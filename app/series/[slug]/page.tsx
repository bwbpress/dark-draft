import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { JsonLd } from "../../components/json-ld";
import { SERIES, getBooksInSeries, getSeriesBySlug } from "../../lib/books";
import { buildBreadcrumbJsonLd } from "../../lib/structured-data";
import { SITE_NAME } from "../../lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERIES.map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) return {};

  const url = `/series/${series.slug}`;
  const title = `${series.name} Reading Order`;

  return {
    title,
    description: series.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE_NAME}`,
      description: series.description,
    },
  };
}

export default async function SeriesPage({ params }: Props) {
  const { slug } = await params;
  const series = getSeriesBySlug(slug);
  if (!series) notFound();

  const books = getBooksInSeries(series.slug);

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-16 sm:px-10 lg:px-0">
        <nav aria-label="Breadcrumb" className="text-xs text-muted">
          <Link href="/" className="hover:text-accent-pink">
            Home
          </Link>{" "}
          / <span className="text-foreground">{series.name}</span>
        </nav>

        <div className="flex flex-col gap-3">
          <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
            {series.name} Reading Order
          </h1>
          <p className="max-w-2xl text-sm text-muted">{series.description}</p>
        </div>

        <ol className="flex flex-col gap-4">
          {books.map((book) => (
            <li key={book.slug}>
              <Link
                href={`/books/${book.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-glow/20 bg-surface/50 p-4 transition-colors hover:border-accent-pink"
              >
                <span className="font-display text-2xl text-accent-blue">
                  {book.seriesPosition}
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-base text-foreground">{book.title}</h2>
                  <p className="text-sm text-muted">{book.blurb}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: series.name, path: `/series/${series.slug}` },
        ])}
      />
    </div>
  );
}
