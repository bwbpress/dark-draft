import { CSSProperties, ReactNode } from "react";

type BorderVarient = "base" | "gradient" | "animated";
type GlowPanelProps = {
  as?: "div" | "section";
  rounded?: "lg" | "2xl" | "full";
  background?: "flat" | "gradient";
  border?: BorderVarient;
  /** Offsets the animated border's cycle (seconds), so identical panels don't animate in lockstep. */
  animationDelay?: number;
  glow?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

const borderVarients: Record<BorderVarient, string> = {
  base: "border border-glow/30",
  gradient: "gradient-border",
  animated: "gradient-border-animated"
}

export function GlowPanel({
  as: Tag = "div",
  rounded = "2xl",
  background = "flat",
  border = "base",
  animationDelay,
  glow = false,
  id,
  className = "",
  children,
}: GlowPanelProps) {
  const roundedClass =
    rounded === "lg" ? "rounded-lg" : rounded === "full" ? "rounded-full" : "rounded-2xl";
  const backgroundClass =
    background === "gradient"
      ? "bg-linear-to-b from-surface/50 to-[#1a1030]/50 backdrop-blur-md"
      : "bg-surface/50 backdrop-blur-md";
  const style =
    border === "animated" && animationDelay !== undefined
      ? ({ "--border-delay": `${animationDelay}s` } as CSSProperties)
      : undefined;

  return (
    <Tag
      id={id}
      className={`${borderVarients[border]} ${backgroundClass} ${roundedClass} ${glow ? "inset-glow " : ""} ${className}`}
      style={style}
    >
        {children}
    </Tag>
  );
}
