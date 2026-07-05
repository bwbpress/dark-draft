import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { FeaturedBookBanner } from "./components/featured-book-banner";
import { BookGrid } from "./components/book-grid";
import { NewsletterCta } from "./components/newsletter-cta";
import { SiteFooter } from "./components/site-footer";
import AboutSection from "./components/aboutSection";
import BackgroundImageWithOverlay from "./components/BackgroundImageWithOverlay";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <BackgroundImageWithOverlay image="/img/cyberpunk-city-2.png" className="mt-40"/>
      <div className="relative flex flex-1 flex-col">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 sm:px-10 lg:px-0">
          <HeroSection />
          <FeaturedBookBanner
            eyebrow="Coming Soon"
            title="Neon Exodus"
            blurb="A fugitive. A ghost in the net. A city that remembers everything. The next chapter in the Neon Empire saga."
            releaseDate="Q4 2025"
            seriesLabel="Neon Empire Book 3"
            status="Preorder Coming Soon"
          />
          <BookGrid />
          <AboutSection/>
          <NewsletterCta />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
