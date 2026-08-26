// Builders for schema.org JSON-LD objects. Kept as plain data builders
// (rather than JSX) so they're easy to unit-reason-about and reuse between
// the layout and individual pages.

import {
  AUTHOR_BIO_SHORT,
  AUTHOR_NAME,
  AUTHOR_PHOTO,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./site-config";
import type { Book, Series } from "./books";
import { toPlainText } from "../components/formatted-text";

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    image: absoluteUrl(AUTHOR_PHOTO),
    description: AUTHOR_BIO_SHORT,
    jobTitle: "Author",
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildBookJsonLd(book: Book, series: Series | undefined) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    url: absoluteUrl(`/books/${book.slug}`),
    image: absoluteUrl(book.coverImage),
    description: toPlainText(book.description),
    ...(book.isbn13 ? { isbn: book.isbn13 } : {}),
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    ...(series
      ? {
          isPartOf: {
            "@type": "BookSeries",
            name: series.name,
            url: absoluteUrl(`/series/${series.slug}`),
          },
          position: book.seriesPosition ?? undefined,
        }
      : {}),
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
