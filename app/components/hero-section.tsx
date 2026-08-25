import { Button } from "./button";
import { GlowPanel } from "./glow-panel";
import { NewsletterForm } from "./newsletter-form";
import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <section className="grid gap-10 pt-16 lg:pb-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 ">
      <div className="flex flex-col items-start gap-6">
        <h1 className="bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl">
          Dystro Han
        </h1>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          Cyberpunk Stories. Human Heart.
        </p>
        <SocialLinks />
        <div className="flex flex-wrap gap-4">
          <Button href="/books">Explore Books</Button>
        </div>
      </div>

      <GlowPanel id="newsletter" glow border="animated" className="flex flex-col gap-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
          Free Short Story
        </p>
        <h2 className="font-display text-xl font-bold text-foreground">
          Get The Blacksite Protocol
        </h2>
        <p className="text-sm text-muted">
          Join my newsletter and get an exclusive cyberpunk short story instantly.
        </p>
        <NewsletterForm
          buttonLabel="Get My Free Story"
          className="flex flex-col gap-4"
        />
        <p className="text-center text-xs text-muted">
          No spam. Unsubscribe anytime.
        </p>
      </GlowPanel>
    </section>
  );
}
