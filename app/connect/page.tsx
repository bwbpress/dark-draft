import BackgroundImageWithOverlay from "../components/BackgroundImageWithOverlay"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { SOCIAL_LINKS } from "../lib/site-config"
import { Button } from "../components/button"
import { GlowPanel } from "../components/glow-panel"
import { AUTHOR_NAME } from "../lib/site-config"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: "Connect",
   description: `Follow ${AUTHOR_NAME} on Instagram, TikTok, Facebook, Patreon, and Royal Road for updates on the Hack & Harrow series.`,
   alternates: {
      canonical: "/connect",
   },
   openGraph: {
      type: "website",
      url: "/connect",
      title: `Connect | ${AUTHOR_NAME}`,
      description: `Follow ${AUTHOR_NAME} on Instagram, TikTok, Facebook, Patreon, and Royal Road for updates on the Hack & Harrow series.`,
   },
};

export default function Connect() {
   return (
      <div className="relative flex min-h-full flex-1 flex-col bg-background">
         <BackgroundImageWithOverlay image="/img/Dystro-Han-BG.jpg" className="mt-40"/>
         <div className="relative flex flex-1 flex-col">
            <SiteHeader />
            <main className="mx-auto flex w-full min-h-80 max-w-2xl flex-1 flex-col items-center justify-center gap-16 px-6 sm:px-10 lg:px-0">
               <GlowPanel
                  as="section"
                  id="connect"
                  background="gradient"
                  border="animated"
                  glow
                  className="flex flex-col gap-6 items-center min-h-30 py-12 px-4 lg:px-12"
         >
                  <h1 className="font-display text-xl font-bold text-foreground mb-8 text-center">Connect with me everywhere!</h1>
                  {SOCIAL_LINKS.map((option) =>  (
                     <Button href={option.href} variant="outline" size="md" className="inline-block min-w-60 text-center" key={option.label}>
                        {option.label}
                     </Button>
                  ))}
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}