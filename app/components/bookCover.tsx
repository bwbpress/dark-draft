import Image from "next/image";
import { GlowPanel } from "./glow-panel";

export default function BookCover({ image, alt, animationDelay }: { image: string, alt:string, animationDelay?:number }) {
   return (
      <GlowPanel
         rounded="lg"
         background="gradient"
         border="animated"
         animationDelay={animationDelay}
         glow
         className="aspect-2/3 w-full max-w-xs rounded-lg"
      >
         <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(min-width: 400px) 320px, calc(100vw - 3rem)"
            className="z-0 rounded-[inherit] object-cover p-0.5"
         />
      </GlowPanel>
   )
}