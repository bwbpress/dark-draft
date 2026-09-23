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
  retailer: string;
  url: string;
};

export type Isbn = {
  /** Human-readable form shown to users, e.g. "979-8-952631-00-7 (ebook)". */
  display: string;
  /** Digits-only ISBN-13, e.g. "9798952631007". Used in JSON-LD, Open Graph, and other machine-readable contexts. */
  value: string;
};

/** A purchasable format of a book — e.g. "Ebook", "Paperback", "Audiobook". */
export type Edition = {
  name: string;
  /** Shown after the name in smaller, muted text, e.g. "Narrated by Brendon North". */
  nameSubtitle?: string;
  subTitleLink?: string;
  isbn?: Isbn;
  /** e.g. "Static Bind will be available February 2027 on these platforms..." Use instead of isbn while unreleased. */
  availabilityText?: string;
  image: string;
  imageAlt: string;
  retailerLinks: RetailerLink[];
};

export type BookStatus = "ARCs Available" | "ALCs Available" | "Available Now" | "Preorder" | "Coming Soon";
export type BookLinks = Record<string, Record<string, string>>;

export type Series = {
  slug: string;
  name: string;
  description: string;
};

export type Book = {
  slug: string;
  title: string;
  shortTitle:string;
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
  isbn13?: Isbn;
  /** Reuses an existing site asset as a stand-in cover; swap for real cover art. */
  coverImage: string;
  coverImageThumb: string;
  coverImageAlt: string;
  /** True while coverImage is a stand-in — renders a "Cover Coming Soon" overlay instead of the raw placeholder art. */
  coverIsPlaceholder?: boolean;
  keywords: string[];
  retailerLinks: RetailerLink[];
  /** Purchasable formats, shown in the "Editions" section on the book page. */
  editions: Edition[];
  /** Shown in the homepage's FeaturedBookBanner. Exactly one book should be featured. */
  featured?: boolean;
  arcLink?: string;
  showNewsletter?:boolean;
};

export const SERIES: Series[] = [
  {
    slug: "hack-and-harrow",
    name: "Hack & Harrow",
    description:
      "Enter the world of near-future dystopian Boston with rival Ledger mercenaries Hack & Harrow as they join up to simply survive, and start to uncover the depths of the Ledger's corruption along the way... Hack & Harrow is a dark MM action romance series. Come on the journey with this dangerous enemies-to-lovers pair and witness their epic HEA at the end of the series!",
  },
];

export const BOOK_LINKS: BookLinks = {
  "static-bind": {
    "goodreads": "https://www.goodreads.com/book/show/258342436-static-bind",
    "amazon-ebook": "https://www.amazon.com/dp/B0HH81JK4C/",
    "apple-ebook": "https://books.apple.com/us/book/static-bind/id6806896293",
    "kobo-ebook": "https://www.kobo.com/us/en/ebook/static-bind",
    "barnes-ebook": "https://www.barnesandnoble.com/w/static-bind-dystro-han/1151310528?ean=2940197401977",
    "smashWords-ebook": "https://www.smashwords.com/books/view/2095645",
    "bookshop-org-ebook": "https://bookshop.org/p/books/static-bind-hack-harrow-0-dystro-han/519bae42fe7db1ae",
    "audible-audio": "https://www.audible.com/pd/Static-Bind-Audiobook/B0HKL2NRBZ",
    "spotify-audio": "https://open.spotify.com/show/0wav8lGUJ4setkvfpNd0gF?si=375dcb654e284f41",
    "apple-books-audio": "https://books.apple.com/us/audiobook/static-bind-a-dark-cyberpunk-mm-romance-short/id6812357849",
    // "google-play-audio": "",
    // "audioBooks-com-audio": "",
    "kobo-audio": "https://kobo.com/en/ebook/static-bind-a-dark-cyberpunk-mm-romance-short-1",
    "barnes-audio": "https://www.barnesandnoble.com/w/static-bind-dystro-han/1151310528?ean=2940204991309",
    "libro-fm-audio": "https://libro.fm/audiobooks/9798952631021-static-bind-a-dark-cyberpunk-mm-romance-short",
    "24symbols-audio": "https://www.24symbols.com/book/english/dystro-han/static-bind-a-dark-cyberpunk-mm-romance-short?id=5751179",
    "tuneIn-audio": "https://tunein.com/podcasts/Fiction---Gothic/Static-Bind-A-Dark-Cyberpunk-MM-Romance-Short-p4795740/",
    "bookmate-audio": "https://bookmate.com/audiobooks/zizpusDO",
  }
}

export const BOOKS: Book[] = [
  {
    slug: "static-bind",
    title: "Static Bind: A Dark Cyberpunk MM Romance Short",
    shortTitle: "Static Bind",
    seriesSlug: "hack-and-harrow",
    seriesPosition: null,
    status: "Available Now",
    releaseDate: "September 14, 2026",
    blurb: "Two dangerous mercenaries on the run make a sexy wager on an impromptu side job and avoid having revelations about their hopeless emotional entanglement with each other. Explore the world of Hack & Harrow with this standalone short.",
    description:
      // "**Two fugitive mercenaries. One steamy wager. Enough denial to reduce competent killers to obsessive idiots.** \n\n It's been a long day. Tiernan just wants to settle in for the night, maybe have an emotionally detached bang with his unlikely, smokin' hot ally, and take a long, luxurious bath… not that he has access to a bathtub. So of course Danil has to drag things out by proposing this dumb kinky bet that pits them against each other in an unscheduled side heist. That smartass enigma of a hitman knows Tiernan can't turn down a little competition, no matter how tired he is.\n\n Danil has always been a makeout guy. Sure, sex is great, but there's just something electrifying about the ridiculous act of mashing your face into someone else's. Just his luck that his unbelievably sexy nemesis-with-benefits is all but allergic to kissing. Their time on the run together has been a thrill -- Tiernan is lethally adept, holds his own against Danil's nonstop heckling, and is absolutely wild in bed. If only there were about five hundred times more kissing, then this would be the perfect temporary arrangement. He couldn't possibly want any more out of this, right? \n\n Static Bind is a high-heat, emotionally messy, and danger-packed bonus story from an multi-part action-romance series set in dystopian cyberpunk Boston, starring these two violently unhinged men who would rather be tied up than face their feelings.",
      "**Static Bind is a standalone short story introduction to the Hack & Harrow series, which features Danil and Tiernan as the main characters for the duration of the 8-installment saga. Get a taste for the world, the action, and the chemistry in this spicy, snack-sized story!**\n\n**Two fugitive mercenaries. One steamy wager. Enough denial to reduce competent killers to obsessive idiots.**\n\nIt’s been a long day. Tiernan just wants to settle in for the night, maybe have an emotionally detached bang with his unlikely, smokin' hot ally, and take a long, luxurious bath… not that he has access to a bathtub. So of course Danil has to drag things out by proposing this dumb kinky bet that pits them against each other in an unscheduled side heist. That smartass enigma of a hitman knows Tiernan can’t turn down a little competition, no matter how tired he is.\n\nDanil has always been a makeout guy. Sure, sex is great, but there's just something electrifying about the ridiculous act of mashing your face into someone else's. Just his luck that his unbelievably sexy nemesis-with-benefits is all but allergic to kissing. Their time on the run together has been a thrill – Tiernan is lethally adept, holds his own against Danil's nonstop heckling, and is absolutely wild in bed. If only there were about five hundred times more kissing, then this would be the perfect temporary arrangement. He couldn't possibly want any more out of this, right?\n\nStatic Bind is a high-heat, emotionally messy, and danger-packed bonus story from an multi-part action-romance series set in dystopian cyberpunk Boston, starring these two violently unhinged men who would rather be tied up than face their feelings.\n\n^^**Tropes**@@$idiots in love$nonstop banter$(ex) rivals with benefits$sarcastic panther x goofy doberman$diametrically opposed intimacy needs$morally gray couple$flirting through violence$partners/rivals in crime$caretaking$obsession$competence attraction$progression and level-up mechanics@@",
    isbn13: { display: "979-8-952631-00-7 (ebook)", value: "9798952631007" },
    coverImage: "/img/books/hack-and-harrow/static-bind_cover_art.jpg",
    coverImageThumb: "/img/books/hack-and-harrow/static-bind_cover_art_small.webp",
    coverImageAlt:
      "Static Bind cover art: two men entangled together, one with a glowing red eye, against a red glitch-effect cyberpunk cityscape",
    coverIsPlaceholder: false,
    keywords: [
      "Static Bind: idiots in love banter",
      "ex rivals with benefits",
    ],
    retailerLinks: [
      // { retailer: "Amazon", url: "SEO_PLACEHOLDER_RETAILER_URL_static-bind-a-hack-and-harrow-story_amazon" },
    ],
    editions: [
      {
        name: "Ebook",
        isbn: { display: "979-8-952631-00-7 (ebook)", value: "9798952631007" },
        image: "/img/books/hack-and-harrow/static-bind_ebook_small.webp",
        imageAlt:
          "Static Bind ebook cover art: two men entangled together, one with a glowing red eye, against a red glitch-effect cyberpunk cityscape",
        retailerLinks: [
          { retailer: "Amazon", url: BOOK_LINKS["static-bind"]["amazon-ebook"] },
          { retailer: "Apple", url: BOOK_LINKS["static-bind"]["apple-ebook"] },
          { retailer: "Kobo", url: BOOK_LINKS["static-bind"]["kobo-ebook"] },
          { retailer: "Barnes & Noble", url: BOOK_LINKS["static-bind"]["barnes-ebook"] },
          { retailer: "SmashWords", url: BOOK_LINKS["static-bind"]["smashwords-ebook"] },
          { retailer: "Bookshop.org", url: BOOK_LINKS["static-bind"]["bookshop-org-ebook"] },
          // { retailer: "Tolino", url: "https://www.thalia.de/shop/home/artikeldetails/A1081518379" },
          // { retailer: "Vivlio", url: "https://shop.vivlio.com/product/9798952631007_9798952631007_10020/static-bind" },
        ],
      },
      {
        name: "Audiobook",
        nameSubtitle: "Brendon North",
        subTitleLink: "https://brendonnorth.com/",
        isbn: { display: "979-8-952631-02-1 (audiobook)", value: "9798952631021" },
        availabilityText: "Coming to Google Play Audiobooks, audiobooks.com, amazon.com, and more.", 
        image: "/img/books/hack-and-harrow/static-bind_audio_drawn.webp",
        imageAlt:
          "Static Bind audiobook cover art: two men entangled together, one with a glowing red eye, against a red glitch-effect cyberpunk cityscape",
        retailerLinks: [
          { retailer: "Audible", url: BOOK_LINKS["static-bind"]["audible-audio"]},
          { retailer: "Spotify", url: BOOK_LINKS["static-bind"]["spotify-audio"]},
          { retailer: "Apple Books", url: BOOK_LINKS["static-bind"]["apple-books-audio"]},
          // { retailer: "Google Play", url: BOOK_LINKS["static-bind"]["amazon-audio"]},
          // { retailer: "AudioBooks.com", url: BOOK_LINKS["static-bind"]["amazon-audio"]},
          { retailer: "Kobo", url: BOOK_LINKS["static-bind"]["kobo-audio"]},
          { retailer: "Barnes & Noble", url: BOOK_LINKS["static-bind"]["barnes-audio"]},
          { retailer: "Libro.fm", url: BOOK_LINKS["static-bind"]["libro-fm-audio"]},
          { retailer: "24Symbols", url: BOOK_LINKS["static-bind"]["24symbols-audio"]},
          { retailer: "TuneIn", url: BOOK_LINKS["static-bind"]["tunein-audio"]},
          { retailer: "Bookmate", url: BOOK_LINKS["static-bind"]["bookmate-audio"]}
        ],
      },
      {
        name: "Paperback",
        isbn: { display: "979-8-952631-01-4", value: "9798952631014" },
        availabilityText: "Releasing October 2026", 
        image: "/img/books/hack-and-harrow/static-bind_cover_art_small.webp",
        imageAlt:
          "Static Bind ebook paperback art: two men entangled together, one with a glowing red eye, against a red glitch-effect cyberpunk cityscape",
        retailerLinks: [],
      },
    ],
    featured: true,
    arcLink: "https://forms.gle/LFipAdDC6xvgB4Kv5"
  },
  {
    slug: "hack-and-harrow-book-1-breach",
    title: "Hack & Harrow Book 1: Breach",
    shortTitle: "Breach",
    seriesSlug: "hack-and-harrow",
    seriesPosition: 1,
    status: "Coming Soon",
    releaseDate: "Q1 2027",
    blurb: "Die Hard. But make it gay. And add some shades of grey",
    description: "%%Die Hard%%\n\nBut make it gay\n\n And add some shades of grey",
    // isbn13: "SEO_PLACEHOLDER_ISBN13_the-datasource",
    coverImage: "/img/books/hack-and-harrow/book1-breach-cover.jpg",
    coverImageThumb: "/img/books/hack-and-harrow/book1-breach-cover_small.webp",
    coverImageAlt:
      "Hack & Harrow Book One: Breach — neon pink and teal title treatment on a black background",
    coverIsPlaceholder: false,
    keywords: [
      "Static Bind: idiots in love banter",
      "ex rivals with benefits",
    ],
    retailerLinks: [],
    editions: [],
    showNewsletter: true,
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
