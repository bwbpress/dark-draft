import type { Metadata } from "next"
import BackgroundImageWithOverlay from "../components/BackgroundImageWithOverlay"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/button"
import { GlowPanel } from "../components/glow-panel"
import { NewsletterForm } from "../components/newsletter-form"
import { BOOK_LINKS } from "../lib/books"

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

type ARC_LINK = {
   id: string;
   href:string;
   label:string;
   textBody:string;
   disabled?:boolean;
   disabledText?:string;
}
const CM_CONTENT:ARC_LINK[] = [
    {
        id: "patreon",
        href: "https://www.patreon.com/c/dystrohdreams",
        label:"Join my Patreon",
        textBody: "Join my Patreon free tier to get the Static Bind epilogue, bonus art, and more. New free content posted every month!"
    },
    {
        id: "preorder",
        href: "",
        label:"Preorder Hack & Harrow Book 1",
        textBody: "Preorder Hack & Harrow Book 1",
        disabled:true,
        disabledText:"(PREORDER LINK COMING SOON)"
   },
]

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
                  className="flex flex-col gap-6 items-center min-h-30 p-8 lg:p-12 my-6"
               >
                  <h1 className="text-center bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl mb-4">
                     Thanks for reading!
                  </h1>
                  <h2 className="font-display text-base md:text-xl font-bold text-foreground text-center">
                     Below are all the ways you can engage with Hack & Harrow.
                  </h2>
                  <div className="flex flex-col gap-12 max-w-3xl mt-8 text-muted">
                    <div key={"amazon-goodreads"} className="flex flex-col gap-6 items-center text-center border-accent-purple border-t pt-12">
                        <p>Thank you for reading Static Bind. If you enjoyed this story, a rating and a review would go a long way.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button href={BOOK_LINKS["static-bind"]["amazon-ebook"]} variant="outline" target="_blank" size="md" className="inline-block min-w-60 text-center">
                                Amazon
                            </Button>
                            <Button href={BOOK_LINKS["static-bind"]["goodreads"]} variant="outline" target="_blank" size="md" className="inline-block min-w-60 text-center">
                                Goodreads
                            </Button>
                        </div>
                    </div>
                    <div key={"audiobook"} className="flex flex-col gap-6 items-center text-center border-accent-purple border-t pt-12">
                        <p>If you enjoyed Static Bind get a copy of the audiobook narrated by Brendan North</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button href={BOOK_LINKS["static-bind"]["audible-audio"]} variant="outline" target="_blank" size="sm" className="inline-block min-w-60 text-center">
                                Audible
                            </Button>
                            <Button href={BOOK_LINKS["static-bind"]["spotify-audio"]} variant="outline" target="_blank" size="sm" className="inline-block min-w-60 text-center">
                                Spotify
                            </Button>
                            <Button href={BOOK_LINKS["static-bind"]["kobo-audio"]} variant="outline" target="_blank" size="sm" className="inline-block min-w-60 text-center">
                                Kobo
                            </Button>
                        </div>
                        <p className="mt-4">For a list of all available retailers click here:</p>
                        <Button href={"/books/static-bind#editions"} variant="outline" target="_blank" size="md" className="inline-block min-w-60 text-center">
                            More about Static Bind
                        </Button>
                    </div>


                     {CM_CONTENT.map((option) => (
                        <div key={option.label} className="flex flex-col gap-6 items-center text-center border-accent-purple border-t pt-12">
                           <p>{option.textBody}</p>
                           {option.id === "newsletter" && (
                              <NewsletterForm
                                 buttonLabel="Sign up"
                                 className="flex flex-col gap-3 sm:flex-row sm:items-center"
                                 inputClassName="sm:w-64"
                              />
                           )}
                           {option.id !== "newsletter" && (
                              <Button href={option.href} variant="outline" disabled={option.disabled} target="_blank" size="md" className="inline-block min-w-60 text-center">
                                 {option.disabled ? option.disabledText : option.label}
                              </Button>
                           )}
                        </div>
                     ))}
                  </div>
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}