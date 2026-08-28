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

export type BookStatus = "ARCs Available" | "Available Now" | "Preorder" | "Coming Soon";

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
  /**
   * Full back-cover-style description used on the book page and Book JSON-LD.
   * Rendered through FormattedText (app/components/formatted-text.tsx):
   * separate paragraphs with a blank line, wrap **text** for bold.
   */
  description: string;
  isbn13?: string;
  /** Reuses an existing site asset as a stand-in cover; swap for real cover art. */
  coverImage: string;
  coverImageAlt: string;
  /** True while coverImage is a stand-in — renders a "Cover Coming Soon" overlay instead of the raw placeholder art. */
  coverIsPlaceholder?: boolean;
  keywords: string[];
  retailerLinks: RetailerLink[];
  /** Shown in the homepage's FeaturedBookBanner. Exactly one book should be featured. */
  featured?: boolean;
  arcLink?: string;
};

export const SERIES: Series[] = [
  {
    slug: "hack-and-harrow",
    name: "Hack & Harrow",
    description:
      "Enter the world of near-future dystopian Boston with rival Ledger mercenaries Hack & Harrow as they join up to simply survive, and start to uncover the depths of the Ledger's corruption along the way... Hack & Harrow is a dark MM action romance series. Come on the journey with this dangerous enemies-to-lovers pair and witness their epic HEA at the end of the series!",
  },
];

export const BOOKS: Book[] = [
  {
    slug: "static-bind-a-hack-and-harrow-story",
    title: "Static Bind: A Hack & Harrow Story",
    seriesSlug: "hack-and-harrow",
    seriesPosition: null,
    status: "ARCs Available",
    releaseDate: "September 14, 2026",
    blurb: "Two dangerous mercenaries on the run make a sexy wager on an impromptu side job and avoid having revelations about their hopeless emotional entanglement with each other. Explore the world of Hack & Harrow with this standalone short.",
    description:
      "**Two fugitive mercenaries. One steamy wager. Enough denial to reduce competent killers to obsessive idiots.** \n\n It's been a long day. Tiernan just wants to settle in for the night, maybe have an emotionally detached bang with his unlikely, smokin' hot ally, and take a long, luxurious bath… not that he has access to a bathtub. So of course Danil has to drag things out by proposing this dumb kinky bet that pits them against each other in an unscheduled side heist. That smartass enigma of a hitman knows Tiernan can't turn down a little competition, no matter how tired he is.\n\n Danil has always been a makeout guy. Sure, sex is great, but there's just something electrifying about the ridiculous act of mashing your face into someone else's. Just his luck that his unbelievably sexy nemesis-with-benefits is all but allergic to kissing. Their time on the run together has been a thrill -- Tiernan is lethally adept, holds his own against Danil's nonstop heckling, and is absolutely wild in bed. If only there were about five hundred times more kissing, then this would be the perfect temporary arrangement. He couldn't possibly want any more out of this, right? \n\n Winner Takes Loser is a high-heat, emotionally messy, and danger-packed bonus story from an multi-part action-romance series set in dystopian cyberpunk Boston, starring these two violently unhinged men who would rather be tied up than face their feelings.",
    // isbn13: "SEO_PLACEHOLDER_ISBN13_the-datasource",
    isbn13: "979-8-952631-00-7 (ebook)",
    coverImage: "/img/books/hack-and-harrow/static_bind_arc_jpg_small.JPG",
    coverImageAlt:
      "Static Bind ARC cover art: two men entangled together, one with a glowing red eye, against a red glitch-effect cyberpunk cityscape",
    coverIsPlaceholder: false,
    keywords: [
      "Static Bind: idiots in love banter",
      "ex rivals with benefits",
    ],
    retailerLinks: [
      // { retailer: "Amazon", url: "SEO_PLACEHOLDER_RETAILER_URL_static-bind-a-hack-and-harrow-story_amazon" },
    ],
    featured: true,
    arcLink: "https://forms.gle/LFipAdDC6xvgB4Kv5"
  },
  {
    slug: "hack-and-harrow-book-1-breach",
    title: "Hack & Harrow Book 1: Breach",
    seriesSlug: "hack-and-harrow",
    seriesPosition: 1,
    status: "Coming Soon",
    releaseDate: "Q1 2027",
    blurb: "Coming Early 2027",
    description: "Coming Early 2027",
    // isbn13: "SEO_PLACEHOLDER_ISBN13_the-datasource",
    coverImage: "/img/books/hack-and-harrow/book1-breach-cover.jpg",
    coverImageAlt:
      "Hack & Harrow Book One: Breach — neon pink and teal title treatment on a black background",
    coverIsPlaceholder: false,
    keywords: [
      "Static Bind: idiots in love banter",
      "ex rivals with benefits",
    ],
    retailerLinks: [],
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
