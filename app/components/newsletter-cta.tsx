"use client";

import { GlowPanel } from "./glow-panel";
import { NewsletterForm } from "./newsletter-form";
import { Button } from "./button";

const CONTACT_EMAIL_PARTS = ["dystroh", "dystroh.com"];

function openContactEmail() {
  window.location.href = `mailto:${CONTACT_EMAIL_PARTS.join("@")}`;
}

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
            Contact and Inquiries
          </h2>
          {/* <p className="text-sm text-muted">
            Please send an email to: hello at website
          </p> */}
        </div>

      </div>
      <Button onClick={openContactEmail}>Email Me</Button>
    </GlowPanel>
  );
}
