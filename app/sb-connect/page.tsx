import type { Metadata } from "next"
import BackgroundImageWithOverlay from "../components/BackgroundImageWithOverlay"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/button"
import { GlowPanel } from "../components/glow-panel"
import { NewsletterForm } from "../components/newsletter-form"

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
const SB_CONTENT:ARC_LINK[] = [
   {
      id: "goodreads",
      href: "https://www.goodreads.com/book/show/257868337-static-bind",
      label:"GoodReads",
      textBody: "Thank you for reading Static Bind. If you enjoyed this story, a rating and a review would go a long way. Find the Goodreads page here:",
      // disabled:true,
      // disabledText:"(GOODREADS PAGE COMING SOON)"
   },
   {
      id: "newsletter",
      href: "",
      label:"Sign Up for my Newsletter",
      textBody: "Sign up for my newsletter below to stay updated on all things Hack & Harrow, including updates on the series launch in Spring 2027."
   },
   {
      id: "audiobook",
      href: "",
      label:"Get the Audiobook",
      textBody: "",
      disabled:true,
      disabledText:"(AUDIOBOOK COMING SOON)"
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

export default function SBConnect() {
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
                     {SB_CONTENT.map((option) => (
                        <div key={option.label} className="flex flex-col gap-6 items-center border-accent-purple border-t pt-12">
                           <p>{option.textBody}</p>
                           {option.id === "newsletter" && (
                              <NewsletterForm
                                 buttonLabel={option.label || "Sign Up"}
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
                     <div key={"Patreon"} className="flex flex-col gap-4 items-center border-t border-accent-purple pt-12 ">
                        <p>Finally, if you really enjoyed reading about Dan and Tiernan and would like to give them a little extra love, you can support me in bringing their full story to life by joining my patreon below.</p><br/><br/>
                        <p className="pb-4">Find the summary of support tiers that will be active leading up to the series launch below. All pre-launch Discord roles are permanent - grab yours today!</p>
                        <ul className="text-start list-disc pl-4 lg:pl-16 text-sm">
                           <li className='pb-3'><strong>Pre-Launch Supporter ($3)</strong>: Exclusive access to side stories, character sketches, behind the scenes processes. Receive a permanent discord role denoting you as an early supporter.</li>
                           <li className='pb-3'><strong>Early Audiobook Funder ($8)</strong>:  Everything that Pre-Launch Supporter gets you, plus contribute to the series audiobook fund. Receive the audiobook version to my upcoming second Hack & Harrow short, when it becomes available. Plus, get a permanent discord role. </li>
                           <li><strong>Primordial Super-Fan ($20)</strong>: For those who really want to show extra support - which I appreciate FULLY! Receive everything that Early Audiobook Funder gets you, plus a special permanent super-shiny Discord role and private chat channel.</li>
                        </ul>
                        <Button href={"https://www.patreon.com/c/dystrohdreams"} variant="outline" size="md" className="inline-block min-w-60 text-center my-4">
                           Check out my Patreon
                        </Button>
                     </div>
                  </div>
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}