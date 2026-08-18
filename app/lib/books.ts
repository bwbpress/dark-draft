// Book/series catalog — single source of truth for every page that lists or
// links to a book (homepage grid, /books, /books/[slug], /series/[slug]).
//
// Fields still needing real content are prefixed SEO_PLACEHOLDER so they can
// be found with a single search across the repo.

export type RetailerName =
  | "Amazon"
  | "Apple Books"
  | "Kobo"
  | "Google Play"
  | "Barnes & Noble"
  | "Audible";

export type RetailerLink = {
  retailer: RetailerName;
  url: string;
};

export type BookStatus = "Available Now" | "Preorder" | "Coming Soon";

export type Series = {
  slug: string;
  name: string;
  description: string;
};

export type Book = {
  slug: string;
  title: string;
  seriesSlug: string | null;
  seriesPosition: number | null;
  status: BookStatus;
  /** ISO 8601 date, or a placeholder string like "2025-Q4" while unannounced. */
  releaseDate: string;
  /** One-sentence hook used on cards and in Open Graph descriptions. */
  blurb: string;
  /** Full back-cover-style description used on the book page and Book JSON-LD. */
  description: string;
  isbn13: string;
  /** Reuses an existing site asset as a stand-in cover; swap for real cover art. */
  coverImage: string;
  keywords: string[];
  retailerLinks: RetailerLink[];
  /** Shown in the homepage's FeaturedBookBanner. Exactly one book should be featured. */
  featured?: boolean;
};

export const SERIES: Series[] = [
  {
    slug: "neon-empire",
    name: "Neon Empire",
    description:
      "SEO_PLACEHOLDER_SERIES_DESCRIPTION_NEON_EMPIRE: One or two sentences describing the Neon Empire series arc, for the /series page and BookSeries JSON-LD.",
  },
];

function retailerLinksFor(bookSlug: string): RetailerLink[] {
  return [
    { retailer: "Amazon", url: `https://www.amazon.com/dp/SEO_PLACEHOLDER_ASIN_${bookSlug}` },
    {
      retailer: "Apple Books",
      url: `https://books.apple.com/book/SEO_PLACEHOLDER_APPLE_ID_${bookSlug}`,
    },
    { retailer: "Kobo", url: `https://www.kobo.com/ebook/SEO_PLACEHOLDER_KOBO_SLUG_${bookSlug}` },
    {
      retailer: "Google Play",
      url: `https://play.google.com/store/books/details?id=SEO_PLACEHOLDER_GOOGLE_PLAY_ID_${bookSlug}`,
    },
    {
      retailer: "Barnes & Noble",
      url: `https://www.barnesandnoble.com/w/SEO_PLACEHOLDER_BN_SLUG_${bookSlug}`,
    },
  ];
}

export const BOOKS: Book[] = [
  {
    slug: "the-datasource",
    title: "The Datasource",
    seriesSlug: "neon-empire",
    seriesPosition: 1,
    status: "Available Now",
    releaseDate: "SEO_PLACEHOLDER_RELEASE_DATE_the-datasource",
    blurb: "In a city of surveillance, secrets are the only currency that matters.",
    description:
      "SEO_PLACEHOLDER_BOOK_DESCRIPTION_the-datasource: Full back-cover-style description (150-300 words) for The Datasource, book 1 of the Neon Empire series.",
    isbn13: "SEO_PLACEHOLDER_ISBN13_the-datasource",
    coverImage: "/img/cyberpunk-city-2.png",
    keywords: [
      "SEO_PLACEHOLDER_KEYWORD_the-datasource-genre-term",
      "SEO_PLACEHOLDER_KEYWORD_the-datasource-trope-term",
    ],
    retailerLinks: retailerLinksFor("the-datasource"),
  },
  {
    slug: "shadow-signal",
    title: "Shadow Signal",
    seriesSlug: "neon-empire",
    seriesPosition: 2,
    status: "Available Now",
    releaseDate: "SEO_PLACEHOLDER_RELEASE_DATE_shadow-signal",
    blurb: "Some messages should never be received.",
    description:
      "SEO_PLACEHOLDER_BOOK_DESCRIPTION_shadow-signal: Full back-cover-style description (150-300 words) for Shadow Signal, book 2 of the Neon Empire series.",
    isbn13: "SEO_PLACEHOLDER_ISBN13_shadow-signal",
    coverImage: "/img/cyberpunk-city-2.png",
    keywords: [
      "SEO_PLACEHOLDER_KEYWORD_shadow-signal-genre-term",
      "SEO_PLACEHOLDER_KEYWORD_shadow-signal-trope-term",
    ],
    retailerLinks: retailerLinksFor("shadow-signal"),
  },
  {
    slug: "neon-exodus",
    title: "Neon Exodus",
    seriesSlug: "neon-empire",
    seriesPosition: 3,
    status: "Coming Soon",
    releaseDate: "SEO_PLACEHOLDER_RELEASE_DATE_neon-exodus",
    blurb:
      "A fugitive. A ghost in the net. A city that remembers everything. The next chapter in the Neon Empire saga.",
    description:
      "SEO_PLACEHOLDER_BOOK_DESCRIPTION_neon-exodus: Full back-cover-style description (150-300 words) for Neon Exodus, book 3 of the Neon Empire series.",
    isbn13: "SEO_PLACEHOLDER_ISBN13_neon-exodus",
    coverImage: "/img/cyberpunk-city-2.png",
    keywords: [
      "SEO_PLACEHOLDER_KEYWORD_neon-exodus-genre-term",
      "SEO_PLACEHOLDER_KEYWORD_neon-exodus-trope-term",
    ],
    retailerLinks: retailerLinksFor("neon-exodus"),
    featured: true,
  },
  {
    slug: "system-breakers",
    title: "System Breakers",
    seriesSlug: null,
    seriesPosition: null,
    status: "Available Now",
    releaseDate: "SEO_PLACEHOLDER_RELEASE_DATE_system-breakers",
    blurb: "A rebellion is coded in blood and chrome.",
    description:
      "SEO_PLACEHOLDER_BOOK_DESCRIPTION_system-breakers: Full back-cover-style description (150-300 words) for System Breakers, a standalone novella.",
    isbn13: "SEO_PLACEHOLDER_ISBN13_system-breakers",
    coverImage: "/img/cyberpunk-city-2.png",
    keywords: [
      "SEO_PLACEHOLDER_KEYWORD_system-breakers-genre-term",
      "SEO_PLACEHOLDER_KEYWORD_system-breakers-trope-term",
    ],
    retailerLinks: retailerLinksFor("system-breakers"),
  },
];

export function getAllBooks(): Book[] {
  return BOOKS;
}

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((book) => book.slug === slug);
}

export function getFeaturedBook(): Book | undefined {
  return BOOKS.find((book) => book.featured);
}

export function getSeriesBySlug(slug: string): Series | undefined {
  return SERIES.find((series) => series.slug === slug);
}

export function getBooksInSeries(seriesSlug: string): Book[] {
  return BOOKS.filter((book) => book.seriesSlug === seriesSlug).sort(
    (a, b) => (a.seriesPosition ?? 0) - (b.seriesPosition ?? 0)
  );
}
