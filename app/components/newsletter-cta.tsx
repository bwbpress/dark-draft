import { Button } from "./button";

export function NewsletterCta() {
  return (
    <section className="mb-16 flex flex-col gap-6 rounded-2xl border border-glow/30 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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
    </section>
  );
}
