import { Button } from "./button";

export function HeroSection() {
  return (
    <section className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-24">
      <div className="flex flex-col items-start gap-6">
        <h1 className="bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-5xl font-bold uppercase tracking-wide text-transparent sm:text-6xl">
          Arlan Chen
        </h1>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          Cyberpunk Stories. Human Heart.
        </p>
        <p className="max-w-lg text-base text-muted">
          I write near-future fiction about choice, consequence, and the people who
          refuse to be programmed.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="#books">Explore Books</Button>
          <Button href="#trailer" variant="neutral">
            ▷ Watch Trailer
          </Button>
        </div>
      </div>

      <div
        id="newsletter"
        className="flex flex-col gap-4 rounded-2xl border border-glow/30 bg-surface p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
          Free Short Story
        </p>
        <h2 className="font-display text-xl font-bold text-foreground">
          Get The Blacksite Protocol
        </h2>
        <p className="text-sm text-muted">
          Join my newsletter and get an exclusive cyberpunk short story instantly.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-pink focus:outline-none"
        />
        <Button>Get My Free Story</Button>
        <p className="text-center text-xs text-muted">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
