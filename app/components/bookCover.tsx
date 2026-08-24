import Image from "next/image";
import { GlowPanel } from "./glow-panel";

export default function BookCover({ image, alt, animationDelay, isAnimated = false, className }: { image: string, alt:string, animationDelay?:number, isAnimated?:boolean, className?:string }) {
   return (
      <GlowPanel
         rounded="lg"
         background="gradient"
         border={isAnimated ? "animated" : "gradient"}
         animationDelay={animationDelay}
         glow
         className={`aspect-2/3 w-full max-w-xs rounded-lg ${className}`}
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