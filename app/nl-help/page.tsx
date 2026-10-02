import type { Metadata } from "next"
import BackgroundImageWithOverlay from "../components/BackgroundImageWithOverlay"
import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { GlowPanel } from "../components/glow-panel"

export const metadata: Metadata = {
   title: "Newsletter Help",
   description: "How to whitelist Dystro Han's newsletter in Gmail, Outlook, Yahoo, and Proton Mail.",
   alternates: {
      canonical: "/nl-help",
   },
   robots: {
      index: false,
      follow: true,
   },
};

const providers = [
   {
      id: "gmail",
      name: "Gmail",
      steps: [
         "Open the newsletter email (check Spam or the Promotions tab if you can't find it).",
         "If it's in Spam, click \"Report not spam\".",
         "If it's in Promotions, drag it to the Primary tab and choose \"Yes\" when asked to do this for future messages.",
         "Click the sender's name and choose \"Add to contacts\" (or hover over the name and click the person icon).",
         "Optional: in Settings > See all settings > Filters and Blocked Addresses, create a filter for the sender's address and select \"Never send it to Spam\".",
      ],
   },
   {
      id: "outlook",
      name: "Outlook",
      steps: [
         "Open the newsletter email (check Junk Email if you can't find it).",
         "If it's in Junk, select the email and click \"Not junk\" (or \"Report\" > \"Not junk\").",
         "Click the sender's name or address and choose \"Add to contacts\".",
         "Optional: go to Settings > Mail > Junk email > Safe senders and domains, click \"Add\", and enter the sender's address.",
         "Optional: create a rule under Settings > Mail > Rules to always move mail from the sender to your Inbox.",
      ],
   },
   {
      id: "yahoo",
      name: "Yahoo Mail",
      steps: [
         "Open the newsletter email (check the Spam folder if you can't find it).",
         "If it's in Spam, select the email and click \"Not spam\".",
         "Click the sender's name and choose \"Add to contacts\".",
         "Optional: go to Settings > More settings > Filters, click \"Add new filter\", set the sender's address in the \"From\" field, and choose Inbox as the destination folder.",
      ],
   },
   {
      id: "protonmail",
      name: "Proton Mail",
      steps: [
         "Open the newsletter email (check the Spam folder if you can't find it).",
         "If it's in Spam, select the email and click \"Not spam\" to move it to your Inbox.",
         "Add the sender to your Contacts so future emails are trusted.",
         "Optional: go to Settings > All settings > Filters, click \"Add filter\", and create a filter for the sender's address with the action \"Move to Inbox\". Alternatively, add the address to the Allow list under Spam, block, and allow lists.",
      ],
   },
]

export default function NewsletterHelp() {
   return (
      <div className="relative flex min-h-full flex-1 flex-col bg-background">
         <BackgroundImageWithOverlay image="/img/Dystro-Han-BG.jpg" className="mt-40"/>
         <div className="relative flex flex-1 flex-col">
            <SiteHeader />
            <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-16 px-6 sm:px-10 lg:px-0">
               <GlowPanel
                  as="section"
                  id="nl-help"
                  background="gradient"
                  // border="animated"
                  glow
                  className="flex w-full flex-col gap-8 p-8 lg:p-12 my-6"
               >
                  <h1 className="text-center bg-linear-to-r from-accent-pink to-accent-blue bg-clip-text font-display text-4xl md:text-5xl font-semibold uppercase tracking-wide text-transparent sm:text-6xl">
                     Newsletter Help
                  </h1>

                  <nav aria-label="Table of contents">
                     <h2 className="font-display text-xl font-bold text-foreground mb-2">Contents</h2>
                     <ul className="list-disc pl-6 text-foreground">
                        {providers.map((p) => (
                           <li key={p.id}>
                              <a href={`#${p.id}`} className="underline hover:text-accent-pink">
                                 {p.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </nav>

                  {providers.map((p) => (
                     <section key={p.id} id={p.id} className="flex scroll-mt-24 flex-col gap-3">
                        <h2 className="font-display text-2xl font-bold text-foreground mt-8">{p.name}</h2>
                        <ul className="list-disc pl-6 text-foreground space-y-2">
                           {p.steps.map((step) => (
                              <li key={step}>{step}</li>
                           ))}
                        </ul>
                     </section>
                  ))}
               </GlowPanel>
            </main>
            <SiteFooter />
         </div>
      </div>
   )
}
