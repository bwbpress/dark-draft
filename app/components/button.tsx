import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "neutral";
type Size = "lg" | "md" | "sm";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
    target?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    target?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "border border-accent-pink bg-accent-pink text-background transition-colors hover:bg-transparent hover:text-accent-pink",
  outline:
    "border border-accent-pink text-accent-pink transition-colors hover:bg-accent-pink hover:text-background",
  neutral:
    "border border-accent-pink text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue",
};

const SIZE_CLASSES: Record<Size, string> = {
  lg: "px-10 py-4 text-base",
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  disabled = false,
  target="_self",
  ...props
}: ButtonProps) {
  const classes = `rounded-md font-semibold uppercase tracking-wide hover:cursor-pointer duration-300
    aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 
    ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={classes}
        target={target}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
