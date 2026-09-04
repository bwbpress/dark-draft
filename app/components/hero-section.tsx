import { GlowPanel } from "./glow-panel";
import { NewsletterForm } from "./newsletter-form";
import { SocialLinks } from "./social-links";

export function HeroSection() {
  return (
    <section className="grid gap-10 pt-16 lg:pb-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16 ">
      <div className="flex flex-col items-start gap-6">
        <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display">
          <span className="bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl">
            Dystro Han
          </span>
          <span className="whitespace-nowrap text-xs font-semibold uppercase text-muted">
            AKA DYSTROH
          </span>
        </h1>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
          AN INDIE AUTHOR WRITING QUEER EPIC ROMANCE
        </p>
        <SocialLinks />
        <p className="max-w-2xl text-base text-muted rounded-lg bg-background/60 p-3 backdrop-blur-sm">
          Hello and welcome! I&apos;m currently working on <strong>Hack & Harrow</strong>, a sprawling dark MM action romance set in dystopian cyberpunk Boston, told across eight full-length novels. Coming to all major ebook and audiobook retailers in Q2 2027. 
          Early serial release on Royal Road TBA - subscribe and connect for updates!
        </p>
        {/* <div className="flex flex-wrap gap-4">
          <Button href="/books">Explore Books</Button>
        </div> */}
      </div>

      <GlowPanel id="newsletter" glow border="animated" className="flex flex-col gap-4 p-6 h-min">
        <h2 className="font-display text-xl font-bold text-foreground">
          Join my Newsletter
        </h2>
        <p className="text-sm text-muted">
          Stay in the loop with behind-the-scenes updates, release announcements, bonus content and more.
        </p>
        <NewsletterForm
          buttonLabel="Sign Up"
          className="flex flex-col gap-4"
        />
        <p className="text-center text-xs text-muted">
          General Newsletter goes out once or twice a month. Unsubscribe anytime.
        </p>
      </GlowPanel>
    </section>
  );
}
