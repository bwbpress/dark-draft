export default function BackgroundImageWithOverlay({ image, className }: { image: string, className?: string }) {
   return (
      <div className={`pointer-events-none fixed inset-x-0 top-0 h-screen lg:h-auto lg:aspect-video ${className}`}>
         <div
            className="absolute inset-0 bg-cover bg- lg:bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
         />
         {/* <div className="absolute inset-0 bg-background/10" /> */}
         <div className="absolute inset-0 bg-linear-to-b from-background via-background/10 via-20% to-transparent" />
         <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/70 via-70% to-background" />
      </div>
   )
}