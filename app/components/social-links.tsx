import { ReactElement, SVGProps } from "react";

type Social = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

function PatreonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="15" cy="8.5" r="5.5" />
      <rect x="3" y="2" width="3" height="20" />
    </svg>
  );
}

function RoyalRoadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 21 12 3l9 18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 12h9" strokeLinecap="round" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-2.9-1.13V15.6a4.9 4.9 0 1 1-4.1-4.83v2.5a2.4 2.4 0 1 0 1.7 2.29V2h2.4a4.28 4.28 0 0 0 2.9 3.82v2z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 22v-8h2.7l.4-3H14V9c0-.9.3-1.5 1.6-1.5H17V4.1C16.6 4 15.6 4 14.5 4 12 4 10.3 5.5 10.3 8.3V11H7.6v3h2.7v8z" />
    </svg>
  );
}

const SOCIALS: Social[] = [
  { name: "Patreon", href: "#", icon: PatreonIcon },
  { name: "Royal Road", href: "#", icon: RoyalRoadIcon },
  { name: "TikTok", href: "#", icon: TikTokIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Facebook", href: "#", icon: FacebookIcon },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {SOCIALS.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors hover:text-accent-pink"
        >
          <Icon className="h-7 w-7" />
        </a>
      ))}
    </div>
  );
}
