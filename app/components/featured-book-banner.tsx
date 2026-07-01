type FeaturedBookBannerProps = {
  eyebrow: string;
  title: string;
  blurb: string;
  releaseDate: string;
  seriesLabel: string;
  status: string;
};

import { Button } from "./button";

export function FeaturedBookBanner({
  eyebrow,
  title,
  blurb,
  releaseDate,
  seriesLabel,
  status,
}: FeaturedBookBannerProps) {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-glow/30 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="aspect-[2/3] w-24 shrink-0 rounded-lg bg-gradient-to-b from-accent-blue/40 to-surface" />
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
        href="#notify"
        variant="outline"
        className="shrink-0 self-start sm:self-center"
      >
        Notify Me
      </Button>
    </section>
  );
}
