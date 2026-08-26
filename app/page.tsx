import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { FeaturedBookBanner } from "./components/featured-book-banner";
import { BookGrid } from "./components/book-grid";
import { NewsletterCta } from "./components/newsletter-cta";
import { SiteFooter } from "./components/site-footer";
import AboutSection from "./components/aboutSection";
import BackgroundImageWithOverlay from "./components/BackgroundImageWithOverlay";
import { getFeaturedBook, getSeriesBySlug } from "./lib/books";

export default function Home() {
  const featuredBook = getFeaturedBook();
  const featuredSeries = featuredBook?.seriesSlug
    ? getSeriesBySlug(featuredBook.seriesSlug)
    : undefined;

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background">
      <BackgroundImageWithOverlay image="/img/Dystro-Han-BG.jpg" className="mt-40"/>
      <div className="relative flex flex-1 flex-col">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 sm:px-10 lg:px-8 xl:px-0">
          <HeroSection />
          {featuredBook && (
            <FeaturedBookBanner book={featuredBook} series={featuredSeries} />
          )}
          <BookGrid />
          <AboutSection/>
          <NewsletterCta />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
