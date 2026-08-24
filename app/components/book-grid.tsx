import Link from "next/link";
import { BookCard } from "./book-card";
import { getAllBooks, getSeriesBySlug } from "../lib/books";

export function BookGrid() {
  const books = getAllBooks();

  return (
    <section id="books" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
          Books
        </h2>
        <Link
          href="/books"
          className="text-sm font-medium text-accent-pink hover:underline"
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
              series={series ? `${series.name} Book ${book.seriesPosition}` : "Standalone Novella"}
              blurb={book.blurb}
              href={`/books/${book.slug}`}
              coverImage={book.coverImage}
              coverImageAlt={book.coverImageAlt}
              animationDelay={-(index * 1.3) % 4}
            />
          );
        })}
      </div>
    </section>
  );
}
