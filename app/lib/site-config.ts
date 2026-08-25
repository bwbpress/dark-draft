// Central place for site-wide SEO/brand values.
// Every value that still needs real content is prefixed SEO_PLACEHOLDER
// so it can be found with a single search across the repo.

// TODO(remove-before-launch): flip to `true` once the real domain is
// connected and every SEO_PLACEHOLDER value above has been replaced.
// Until then this keeps the whole site out of search results so
// placeholder copy/links don't get indexed or cached by link-preview bots.
export const SITE_IS_LIVE = false;

export const SITE_NAME = "Dystroh";

export const SITE_TAGLINE = "Dystrohpian Dreams: Home of Hack & Harrow";

// Used as `metadataBase` for every relative URL in metadata (canonical,
// Open Graph images, sitemap, etc). Swap for the real production domain.
export const SITE_URL = "https://dystroh.com";

export const AUTHOR_NAME = "Dystro Han";

// ~150-160 characters, used as the default meta description and in the
// Person JSON-LD `description` field.
export const AUTHOR_BIO_SHORT =
  "Dystro Han (they/he) aka dystroh is the indie queer romance author of the upcoming epic cyberpunk MM dark romance series, Hack & Harrow.";

// Longer bio for the /about page. Split into paragraphs.
export const AUTHOR_BIO_LONG = [
  "Hey. I'm dystroh, a queer romance indie author and artist. Recently I've embarked on this crazy, scary journey to follow the dreams I've had since I was a kid. My life has been pretty upended in the last couple months. I spent over a decade burning out in the tech industry, sometimes working over 100 hours a week. I couldn't catch my breath. I became depressed.",
  "I'd like to think that I've always been a writer. I wrote my first novella when I was ten years old - science fiction. I've always been a sci-fi nerd. I grew up watching Star Trek and always loved the idea of a bright, hopeful future for humanity. Over the years I've tried to keep up with writing. I've drafted many long sci-fi series, always with strong romance subplots. But they never fully got off the ground. At some point, I realized that what I love to write about more than expansive universes with hopeful futures, is human relationships. Friendships, partnerships, romances. Stories about people finding meaning in one another. One day I stopped writing romance-forward science fiction, and started writing science-fiction-forward romance. It lit a fire under me. ",
  "At work, things got worse. They started laying off my coworkers in droves and were trying to shove more and more AI down our throats. Something changed in me. Even if they had doubled my salary, I couldn't keep making myself do the work in my industry. I had enough. My soul wanted to write, all the time, even if it was for pennies. So I quit, and picked up my pen. ",
  "I suppose that means I'm a full-time author now, and a part time artist attempting to draw my own covers. It's been terrifying to start an art and writing business now, of all times. But it also feels more important than ever to lean into my own human creativity. With the most wonderful and patient spouse ever supporting me (he made my web page!) along with our two dogs, I'm so excited to be on this wild ride. I have more stories to tell than I think I have years to live, so I better get going. "
];

// Reuse an existing site asset as a stand-in so the build has a real file to
// point at. Replace with a real author headshot (min 800x800) when ready.
export const AUTHOR_PHOTO = "/img/dystro-han-portrait.jpg";
export const AUTHOR_PHOTO_ALT =
  "Portrait of dystroh mm dark romance author, digitally drawn by the artist themselves.";

// Default keywords for the homepage. Keep this short and specific — the
// legacy <meta name="keywords"> tag is ignored by Google, but genre/trope
// terms here still guide on-page copy and other engines that read it.
export const SITE_KEYWORDS = [
  "indie author",
  "romance author",
  "dark romance",
  "mm romance",
  "dystopian cyberpunk",
  "science fiction romance",
];

export type SocialType = "Instagram" | "TikTok" | "Facebook" | "Patreon" | "Royal Road"; // | "Bluesky"
export type SocialLink = {
  label: SocialType;
  href: string;
};

// Every profile referenced here should use the identical author name/photo
// so Google can tie them together as the same entity (see Person JSON-LD
// `sameAs` in app/lib/structured-data.ts).
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Patreon", href: "https://www.patreon.com/c/dystrohdreams" },
  { label: "Royal Road", href: "https://www.royalroad.com/profile/987576" },
  { label: "Instagram", href: " https://www.instagram.com/dystro.han/", },
  { label: "Facebook", href: "https://facebook.com/dystroh.dreams" },
  { label: "TikTok", href: "https://www.tiktok.com/@dystroh" },
  // { label: "Bluesky", href: "https://bsky.app/profile/SEO_PLACEHOLDER_BLUESKY_HANDLE" },
  // {
  //   label: "Goodreads",
  //   href: "https://www.goodreads.com/author/show/SEO_PLACEHOLDER_GOODREADS_AUTHOR_ID",
  // },
  // {
  //   label: "Amazon Author Page",
  //   href: "https://www.amazon.com/author/SEO_PLACEHOLDER_AMAZON_AUTHOR_SLUG",
  // },
  // {
  //   label: "BookBub",
  //   href: "https://www.bookbub.com/authors/SEO_PLACEHOLDER_BOOKBUB_SLUG",
  // },
];


// Google Search Console / Bing Webmaster Tools verification codes.
// https://search.google.com/search-console
export const SEARCH_ENGINE_VERIFICATION = {
  google: "SEO_PLACEHOLDER_GOOGLE_SITE_VERIFICATION",
  bing: "SEO_PLACEHOLDER_BING_SITE_VERIFICATION",
};
