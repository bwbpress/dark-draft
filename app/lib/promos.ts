// Promo page content — single source of truth for /promo/[slug].
//
// A promo is a flat list of blocks rendered top to bottom inside one panel, so
// each promo can mix headings, formatted text and buttons in any order/amount.
// Text blocks use the FormattedText syntax (blank line = paragraph, **bold**,
// %%italic%%, [label](url)).

export type PromoButton = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "neutral";
  /** Defaults to true (new tab). Set false for internal links. */
  external?: boolean;
};

export type PromoBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "text"; text: string; align?: "left" | "center" }
  | { type: "buttons"; buttons: PromoButton[] }
  /** "with gratitude, ~dystroh" sign-off. Always rendered in the monospace stack; the only text that is. */
  | { type: "signoff"; text?: string };

export const DEFAULT_SIGNOFF = "with gratitude,\n\n~dystroh 💜🩵💚";

export type Promo = {
  slug: string;
  /** Used for the browser tab title and metadata only. */
  title?: string;
  blocks: PromoBlock[];
};

const HEADER_IMAGE: PromoBlock = {
  type: "image",
  src: "/img/promo/promo-header.png",
  alt: "The Ledger — Dystroh's Newsletter",
  width: 600,
  height: 150,
};

export const PROMOS: Promo[] = [
  {
    slug: "nl-ty-read",
    title: "Thank you for Reading",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Click below to get the %%Static Bind%% epilogue." },
      {
        type: "buttons",
        buttons: [{ label: "Get the Epilogue", href: "https://BookHip.com/KBVWRVQ", variant: "primary" }],
      },
      {
        type: "text",
        text: `If you enjoyed %%Static Bind%%, leaving a rating and review on Amazon would help significantly.

The audiobook features narration by [Brendon North](https://brendonnorth.com). Additional audiobook retailers are listed at [dystroh.com/sb](https://dystroh.com/sb), including subscription services like Spotify Premium and Kobo Plus.`,
      },
      {
        type: "buttons",
        buttons: [{ label: "Static Bind Amazon Page", href: "https://www.amazon.com/dp/B0HH81JK4C", variant: "outline" }],
      },
      { type: "signoff" },
    ],
  },
  {
    slug: "nl-not-read-promo",
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      {
        type: "text",
        text: "You will receive an email reminder in one week with a download link for the %%Static Bind%% epilogue.\n\nLost your promo link to download the book? Here it is again!",
      },
      {
        type: "buttons",
        buttons: [{ label: "Static Bind BookFunnel Link", href: "https://dl.bookfunnel.com/3ko8hox5oq", variant: "outline" }],
      },
    ],
  },
  {
    slug: "nl-not-read",
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      {
        type: "text",
        text: "You will receive an email reminder in one week with a download link for the %%Static Bind%% epilogue.",
      },
    ],
  },
  {
    slug: "sb-tiernan",
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "sb-danil", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "sb-dt", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "nl-hnh", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "nl-ab", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "nl-bts", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
  { 
    slug: "nl-fsp", 
    title: "Thank You For Your Response",
    blocks: [
      HEADER_IMAGE,
      { type: "heading", text: "Thank you for your response!" },
      { type: "text", text: "Your newsletter poll participation means a lot! Your answer has been recorded." },
    ],
  },
];

export function getAllPromos(): Promo[] {
  return PROMOS;
}

export function getPromoBySlug(slug: string): Promo | undefined {
  return PROMOS.find((promo) => promo.slug === slug);
}
