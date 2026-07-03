import { Button } from "./button";
import { GlowPanel } from "./glow-panel";

export function NewsletterCta() {
  return (
    <GlowPanel
      as="section"
      border="animated"
      glow
      className="mb-16 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl text-accent-pink" aria-hidden>
          ✉
        </span>
        <div>
          <h2 className="font-display text-xl font-bold text-foreground">
            Stay In The Loop
          </h2>
          <p className="text-sm text-muted">
            New releases, exclusive stories, and behind-the-scenes updates.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-pink focus:outline-none sm:w-64"
        />
        <Button>Join The List</Button>
      </div>
    </GlowPanel>
  );
}
