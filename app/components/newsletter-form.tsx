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
  return (
    <form
      method="post"
      action="https://www.aweber.com/scripts/addlead.pl"
      className={className}
    >
      <input type="hidden" name="meta_web_form_id" value="719956678" />
      <input type="hidden" name="meta_split_id" value="" />
      <input type="hidden" name="listname" value="awlist6972365" />
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
      <input type="hidden" name="meta_adtracking" value="Newsletter_Signup" />
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
