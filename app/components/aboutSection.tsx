import Image from "next/image";
import Link from "next/link";
import { GlowPanel } from "./glow-panel";
import { AUTHOR_BIO_SHORT, AUTHOR_PHOTO, AUTHOR_PHOTO_ALT } from "../lib/site-config";

export default function AboutSection() {
   return (
      <GlowPanel
         as="section"
         id="about"
         background="gradient"
         border="animated"
         glow
         className="flex flex-col lg:flex-row gap-12 items-center min-h-30 p-6"
      >
         <div className="relative aspect-2/3 w-full lg:w-40 shrink-0 overflow-hidden rounded-lg bg-linear-to-b from-accent-blue/40 to-surface">
            <Image
               src={AUTHOR_PHOTO}
               alt={AUTHOR_PHOTO_ALT}
               fill
               sizes="(min-width: 1024px) 20rem, 100vw"
               className="object-cover"
            />
         </div>
         <div className="lg:max-w-1/2 flex flex-col gap-4 py-4">
            <p className="text-sm text-white">{AUTHOR_BIO_SHORT}</p>
            <Link
               href="/about"
               className="text-sm font-medium text-accent-pink hover:underline"
            >
               More About Dystro Han →
            </Link>
         </div>
      </GlowPanel>
   )
}