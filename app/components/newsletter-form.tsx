"use client";

import { FormEvent, useState } from "react";
import { Button } from "./button";

type NewsletterFormProps = {
  buttonLabel: string;
  className?: string;
  inputClassName?: string;
};

const BASE_INPUT_CLASSES =
  "rounded-lg border border-foreground/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-pink focus:outline-none";

export function NewsletterForm({
  buttonLabel,
  className = "",
  inputClassName = "",
}: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // AWeber's endpoint doesn't send CORS headers, so the response is opaque.
    // Fire-and-forget the request and trust it went through rather than
    // following the redirect it returns, so we can show our own thank-you state.
    await fetch(form.action, {
      method: "post",
      body: new FormData(form),
      mode: "no-cors",
    }).catch(() => {});

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={`text-sm text-accent-pink ${className}`}>
        Thanks for signing up! Please check your inbox to confirm.
      </p>
    );
  }

  return (
    <form
      method="post"
      action="https://www.aweber.com/scripts/addlead.pl"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="meta_web_form_id" value="968524833" />
      <input type="hidden" name="meta_split_id" value="" />
      <input type="hidden" name="listname" value="awlist6972684" />
      <input
        type="hidden"
        name="redirect"
        value="https://www.aweber.com/thankyou-coi.htm?m=text"
      />
      <input
        type="hidden"
        name="meta_redirect_onlist"
        value="https://www.aweber.com/thankyou-coi.htm?m=text"
      />
      <input
        type="hidden"
        name="meta_adtracking"
        value="dystroh.com_newsletter_signup"
      />
      <input type="hidden" name="meta_message" value="1" />
      <input type="hidden" name="meta_required" value="email" />
      <input type="hidden" name="meta_tooltip" value="" />
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        aria-label="Email"
        className={`${BASE_INPUT_CLASSES} ${inputClassName}`}
      />
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
}
