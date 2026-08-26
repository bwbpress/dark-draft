import { Button } from "./button";
import { GlowPanel } from "./glow-panel";
import BookCover from "./bookCover";
import type { Book, Series } from "../lib/books";

type FeaturedBookBannerProps = {
  book: Book;
  series?: Series;
};

export function FeaturedBookBanner({ book, series }: FeaturedBookBannerProps) {
  const {
    title,
    blurb,
    releaseDate,
    status,
    seriesPosition,
    slug,
    coverImage,
    coverImageAlt,
    coverIsPlaceholder,
  } = book;
  const eyebrow = status;
  const href = `/books/${slug}`;
  const seriesLabel = series
    ? `${series.name}${seriesPosition && seriesPosition >= 1 ? ` Book ${seriesPosition}` : ""}`
    : "Standalone Novella";

  return (
    <GlowPanel
      as="section"
      border="animated"
      glow
      className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="min-w-24 shrink-0">
          <BookCover
            image={coverImage}
            alt={coverImageAlt}
            isPlaceholder={coverIsPlaceholder}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-pink">
            {eyebrow}
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground">
            {title}
          </h2>
          <p className="max-w-md text-sm text-muted">{blurb}</p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-muted">
            <span>{releaseDate}</span>
            <span>{seriesLabel}</span>
            <span>{status}</span>
          </div>
        </div>
      </div>
      <Button
        href={href}
        variant="outline"
        className="shrink-0 self-start sm:self-center"
      >
        View Details
      </Button>
    </GlowPanel>
  );
}
