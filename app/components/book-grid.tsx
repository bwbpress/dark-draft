import Link from "next/link";
import { BookCard } from "./book-card";
import { getAllBooks, getSeriesBySlug } from "../lib/books";

export function BookGrid() {
  const books = getAllBooks();

  return (
    <section id="books" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground rounded-lg bg-background/60 p-3 backdrop-blur-sm">
          Books
        </h2>
        <Link
          href="/books"
          className="text-sm font-medium text-accent-pink hover:underline rounded-lg bg-background/60 p-3 backdrop-blur-sm"
        >
          View All Books →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {books.map((book, index) => {
          const series = book.seriesSlug ? getSeriesBySlug(book.seriesSlug) : undefined;
          return (
            <BookCard
              key={book.slug}
              title={book.title}
              series={series ? `${series.name} ${book.seriesPosition && book.seriesPosition >= 1 ? `Book ${book.seriesPosition}` : ""}` : "Standalone Novella"}
              blurb={book.blurb}
              href={`/books/${book.slug}`}
              coverImage={book.coverImage}
              coverImageAlt={book.coverImageAlt}
              coverIsPlaceholder={book.coverIsPlaceholder}
              animationDelay={-(index * 1.3) % 4}
            />
          );
        })}
      </div>
    </section>
  );
}
