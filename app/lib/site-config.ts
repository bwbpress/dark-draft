// Central place for site-wide SEO/brand values.
// Every value that still needs real content is prefixed SEO_PLACEHOLDER
// so it can be found with a single search across the repo.

// TODO(remove-before-launch): flip to `true` once the real domain is
// connected and every SEO_PLACEHOLDER value above has been replaced.
// Until then this keeps the whole site out of search results so
// placeholder copy/links don't get indexed or cached by link-preview bots.
export const SITE_IS_LIVE = false;

export const SITE_NAME = "Arlan Chen";

export const SITE_TAGLINE = "Cyberpunk Stories. Human Heart.";

// Used as `metadataBase` for every relative URL in metadata (canonical,
// Open Graph images, sitemap, etc). Swap for the real production domain.
export const SITE_URL = "https://SEO_PLACEHOLDER-domain.com";

export const AUTHOR_NAME = "Arlan Chen";

// ~150-160 characters, used as the default meta description and in the
// Person JSON-LD `description` field.
export const AUTHOR_BIO_SHORT =
  "SEO_PLACEHOLDER_AUTHOR_BIO_SHORT: One or two sentences introducing Arlan Chen and the Neon Empire series, written for search snippets (~155 characters).";

// Longer bio for the /about page. Split into paragraphs.
export const AUTHOR_BIO_LONG = [
  "SEO_PLACEHOLDER_AUTHOR_BIO_LONG_P1: Paragraph about who Arlan Chen is, writing background, and what drew them to cyberpunk fiction.",
  "SEO_PLACEHOLDER_AUTHOR_BIO_LONG_P2: Paragraph about the Neon Empire series, its themes, and what readers can expect.",
  "SEO_PLACEHOLDER_AUTHOR_BIO_LONG_P3: Paragraph with a personal hook (where they live, other interests, what's next) to build a human connection with readers.",
];

// Reuse an existing site asset as a stand-in so the build has a real file to
// point at. Replace with a real author headshot (min 800x800) when ready.
export const AUTHOR_PHOTO = "/img/cyberpunk-city.jpg";
export const AUTHOR_PHOTO_ALT =
  "SEO_PLACEHOLDER_AUTHOR_PHOTO_ALT: Descriptive alt text for Arlan Chen's author photo.";

// Default keywords for the homepage. Keep this short and specific — the
// legacy <meta name="keywords"> tag is ignored by Google, but genre/trope
// terms here still guide on-page copy and other engines that read it.
export const SITE_KEYWORDS = [
  "SEO_PLACEHOLDER_KEYWORD_cyberpunk-fiction",
  "SEO_PLACEHOLDER_KEYWORD_near-future-thriller",
  "SEO_PLACEHOLDER_KEYWORD_neon-empire-series",
  "SEO_PLACEHOLDER_KEYWORD_arlan-chen-author",
];

export type SocialLink = {
  label: string;
  href: string;
};

// Every profile referenced here should use the identical author name/photo
// so Google can tie them together as the same entity (see Person JSON-LD
// `sameAs` in app/lib/structured-data.ts).
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X / Twitter", href: "https://x.com/SEO_PLACEHOLDER_TWITTER_HANDLE" },
  { label: "Instagram", href: "https://instagram.com/SEO_PLACEHOLDER_INSTAGRAM_HANDLE" },
  { label: "TikTok", href: "https://tiktok.com/@SEO_PLACEHOLDER_TIKTOK_HANDLE" },
  { label: "Facebook", href: "https://facebook.com/SEO_PLACEHOLDER_FACEBOOK_PAGE" },
  {
    label: "Goodreads",
    href: "https://www.goodreads.com/author/show/SEO_PLACEHOLDER_GOODREADS_AUTHOR_ID",
  },
  {
    label: "Amazon Author Page",
    href: "https://www.amazon.com/author/SEO_PLACEHOLDER_AMAZON_AUTHOR_SLUG",
  },
  {
    label: "BookBub",
    href: "https://www.bookbub.com/authors/SEO_PLACEHOLDER_BOOKBUB_SLUG",
  },
];

// @<handle> form, used for twitter:creator / twitter:site meta tags.
export const TWITTER_HANDLE = "@SEO_PLACEHOLDER_TWITTER_HANDLE";

// Google Search Console / Bing Webmaster Tools verification codes.
// https://search.google.com/search-console
export const SEARCH_ENGINE_VERIFICATION = {
  google: "SEO_PLACEHOLDER_GOOGLE_SITE_VERIFICATION",
  bing: "SEO_PLACEHOLDER_BING_SITE_VERIFICATION",
};
