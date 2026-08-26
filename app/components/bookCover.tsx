import Image from "next/image";
import { GlowPanel } from "./glow-panel";

export default function BookCover({ image, alt, animationDelay, isAnimated = false, isPlaceholder = false, className }: { image: string, alt:string, animationDelay?:number, isAnimated?:boolean, isPlaceholder?:boolean, className?:string }) {
   return (
      <GlowPanel
         rounded="lg"
         background="gradient"
         border={isAnimated ? "animated" : "gradient"}
         animationDelay={animationDelay}
         glow
         className={`aspect-5/8 w-full max-w-xs rounded-lg ${className}`}
      >
         {isPlaceholder ? (
            <div className="absolute inset-0.5 z-10 flex items-center justify-center overflow-hidden rounded-[inherit]">
               <div
                  aria-hidden
                  className="absolute -inset-8 opacity-20"
                  style={{
                     backgroundImage:
                        "repeating-linear-gradient(135deg, var(--accent-pink) 0px 70px, transparent 70px 140px, var(--accent-blue) 140px 210px, transparent 210px 280px)",
                     filter: "blur(24px)",
                  }}
               />
               <span className="relative rounded-md border border-glow/40 bg-background/70 px-3 py-1.5 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.2em] text-foreground backdrop-blur-sm">
                  Cover
                  <br />
                  Coming Soon
               </span>
            </div>
         ) : (
            <Image
               src={image}
               alt={alt}
               fill
               priority
               sizes="(min-width: 400px) 320px, calc(100vw - 3rem)"
               className="z-0 rounded-[inherit] object-cover p-0.5"
            />
         )}
      </GlowPanel>
   )
}