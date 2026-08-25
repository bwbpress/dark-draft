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
    <svg viewBox="-5 -5 76.52803 80.302353" fill="currentColor" {...props}>
      <path
        transform="translate(-81.538322,-70.739007)"
        d="m 91.817683,75.148904 c 10.277477,-0.197001 20.575197,-0.235894 30.840787,0.284503 8.37195,0.84979 17.35245,4.35012 21.65263,12.038448 3.70859,7.058001 3.34604,15.961865 -0.26092,22.977585 -2.20618,3.66287 -5.87811,6.12456 -9.60965,8.03752 l -6.82556,-7.88153 c 4.59659,-1.41414 6.56367,-6.85515 6.70954,-11.181654 0.96771,-6.2396 -4.1843,-12.17595 -10.05109,-13.542379 -7.66451,-0.522747 -15.37674,0.230686 -23.04018,-0.401101 -5.057259,-0.643474 -9.371196,-5.168697 -9.415557,-10.331392 z m -6.8878,-4.409897 c 5.567654,17.676217 16.770567,22.861717 29.164897,31.465673 18.69174,12.97552 25.8392,28.13581 33.97157,38.83668 H 134.64297 C 128.49626,130.52556 122.1606,121.3853 110.81859,116.19992 93.305846,108.1934 77.444102,93.822387 84.929883,70.739007 Z m -3.322504,28.12882 c 5.245336,8.074923 12.662034,14.476123 21.097801,17.938753 8.90363,3.65467 18.35058,6.59123 24.2807,17.13937 -4.43227,-2.95097 -17.94883,-6.25562 -26.59573,-7.04496 C 88.879192,125.85021 80.697341,111.53887 81.607379,98.867827 Z m 12.983429,28.373353 c 2.675591,1.24765 11.518622,2.7736 19.982252,4.7197 8.46363,1.9461 16.79518,5.33233 17.58112,8.76727 -3.27155,-1.09522 -12.18826,-1.30137 -19.23757,-1.57447 -7.04931,-0.2731 -17.209476,-7.49146 -18.325802,-11.9125 z"
      />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="1 1 22 22" fill="currentColor" {...props}>
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
    <svg viewBox="1 1 22 22" fill="currentColor" {...props}>
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
