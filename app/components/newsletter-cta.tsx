import { GlowPanel } from "./glow-panel";
import { NewsletterForm } from "./newsletter-form";

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
            New releases, behind-the-scenes updates and more!
          </p>
        </div>
      </div>
      <NewsletterForm
        buttonLabel="Join The List"
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        inputClassName="sm:w-64"
      />
    </GlowPanel>
  );
}
