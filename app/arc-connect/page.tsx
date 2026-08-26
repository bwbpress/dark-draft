import type { Metadata } from "next"
import BackgroundImageWithOverlay from "../components/BackgroundImageWithOverlay"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { SocialLinks } from "../components/social-links"
import { Button } from "../components/button"
import { GlowPanel } from "../components/glow-panel"

export const metadata: Metadata = {
   title: "Thanks for Requesting an ARC",
   description: "You're on the list! Here's where else you can find Dystro Han.",
   alternates: {
      canonical: "/arc-connect",
   },
   robots: {
      index: false,
      follow: true,
   },
};

export default function ArcThankYou() {
   return (
      <div className="relative flex min-h-full flex-1 flex-col bg-background">
         <BackgroundImageWithOverlay image="/img/Dystro-Han-BG.jpg" className="mt-40"/>
         <div className="relative flex flex-1 flex-col">
            <SiteHeader />
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-6 sm:px-10 lg:px-0">
               <GlowPanel
                  as="section"
                  id="thank-you"
                  background="gradient"
                  border="animated"
                  glow
                  className="flex flex-col gap-6 items-center min-h-30 p-12"
               >
                  <h1 className="bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl mb-8">
                     Thank you for joining!
                  </h1>
                  <h2 className="font-display text-xl font-bold text-foreground">
                     Connect with me everywhere!
                  </h2>
                  <Button href="/connect" variant="outline" size="md" className="inline-block min-w-40 text-center">
                     Connect
                  </Button>
                  <SocialLinks/>
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}