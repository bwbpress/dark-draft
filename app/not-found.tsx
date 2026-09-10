import type { Metadata } from "next"
import BackgroundImageWithOverlay from "./components/BackgroundImageWithOverlay"
import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"
import { Button } from "./components/button"
import { GlowPanel } from "./components/glow-panel"
import { NewsletterForm } from "./components/newsletter-form"

export const metadata: Metadata = {
   title: "Thank you for being an ARC reader",
   description: "Thank you for reading! Here's where else you can find Dystro Han.",
   alternates: {
      canonical: "/arc-connect",
   },
   robots: {
      index: false,
      follow: true,
   },
};

export default function NotFound() {
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
                  className="flex flex-col gap-6 items-center min-h-30 p-8 lg:p-12 my-6"
               >
                  <h1 className="text-center bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl mb-4">
                     404 Not Found
                  </h1>
                  <Button>Head Home</Button>
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}