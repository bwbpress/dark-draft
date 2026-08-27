// Central place for site-wide SEO/brand values.
// Every value that still needs real content is prefixed SEO_PLACEHOLDER
// so it can be found with a single search across the repo.

export const SITE_IS_LIVE = true;

export const SITE_NAME = "Dystroh";

export const SITE_TAGLINE = "Dystro Han";

// Used as `metadataBase` for every relative URL in metadata (canonical,
// Open Graph images, sitemap, etc). Swap for the real production domain.
export const SITE_URL = "https://dystroh.com";

export const AUTHOR_NAME = "Dystro Han";

// ~150-160 characters, used as the default meta description and in the
// Person JSON-LD `description` field.
export const AUTHOR_BIO_SHORT =
  "Dystro Han aka dystroh (he/they) is the indie queer romance author and illustrator of the upcoming epic cyberpunk MM dark romance series, Hack & Harrow.";

// Longer bio for the /about page. Split into paragraphs.
export const AUTHOR_BIO_LONG = [
  "Dystroh spent over a decade burning out in the tech industry before returning to his sci-fi creative writing roots, with a spicy romantic twist - because life is too short not to have all the smut and HEAs our hearts desire. Now he spends every waking moment dreaming up epic multi-part romances set in expansive worlds.", 
  "In the spare time he doesn't have, he spends too many hours trying to relearn his decade-buried art skills, in an attempt to do his own character and cover illustrations.",
  "He lives in Boston with his husband and their two dogs. "
];

// Reuse an existing site asset as a stand-in so the build has a real file to
// point at. Replace with a real author headshot (min 800x800) when ready.
export const AUTHOR_PHOTO = "/img/dystro-han-portrait.jpg";
export const AUTHOR_PHOTO_ALT =
  "dystroh mm dark romance author, illustrated by dystroh";

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

export type SocialType = "Instagram" | "TikTok" | "Facebook" | "Patreon" | "Royal Road" | "Bluesky";
export type SocialLink = {
  label: SocialType;
  href: string;
};

// Every profile referenced here should use the identical author name/photo
// so Google can tie them together as the same entity (see Person JSON-LD
// `sameAs` in app/lib/structured-data.ts).
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@dystroh" },
  { label: "Patreon", href: "https://www.patreon.com/c/dystrohdreams" },
  { label: "Royal Road", href: "https://www.royalroad.com/profile/987576" },
  { label: "Facebook", href: "https://facebook.com/dystroh.dreams" },
  { label: "Instagram", href: "https://www.instagram.com/dystro.han/", },
  { label: "Bluesky", href: "https://bsky.app/profile/dystroh.bsky.social" },
];


// Google Search Console / Bing Webmaster Tools verification codes.
// https://search.google.com/search-console
// export const SEARCH_ENGINE_VERIFICATION = {
//   google: "SEO_PLACEHOLDER_GOOGLE_SITE_VERIFICATION",
//   bing: "SEO_PLACEHOLDER_BING_SITE_VERIFICATION",
// };
