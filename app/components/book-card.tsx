import Link from "next/link";
import { GlowPanel } from "./glow-panel";

type BookCardProps = {
  title: string;
  series: string;
  blurb: string;
  href: string;
  animationDelay?: number;
};

export function BookCard({
  title,
  series,
  blurb,
  href,
  animationDelay,
}: BookCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <GlowPanel
        rounded="lg"
        background="gradient"
        border="animated"
        animationDelay={animationDelay}
        glow
        className="flex aspect-2/3 w-full items-end p-3"
      >
        <span className="font-display text-sm uppercase tracking-wide text-accent-blue">
          {title}
        </span>
      </GlowPanel>
      <div className="flex flex-col gap-1 rounded-lg bg-background/60 p-3 backdrop-blur-sm">
        <h3 className="font-display text-base text-foreground">{title}</h3>
        <p className="text-xs uppercase tracking-wide text-muted">{series}</p>
        <p className="text-sm text-muted">{blurb}</p>
        <Link
          href={href}
          className="mt-1 text-sm font-medium text-accent-pink hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
