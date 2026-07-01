import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { FeaturedBookBanner } from "./components/featured-book-banner";
import { BookGrid } from "./components/book-grid";
import { NewsletterCta } from "./components/newsletter-cta";
import { SiteFooter } from "./components/site-footer";
import AboutSection from "./components/aboutSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col gap-16 px-6 sm:px-10">
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
  );
}
