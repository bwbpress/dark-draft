import { BookCard } from "./book-card";
import booksData from "./books.json";

type Book = {
  title: string;
  series: string;
  blurb: string;
};

const BOOKS: Book[] = booksData;

export function BookGrid() {
  return (
    <section id="books" className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
          Books
        </h2>
        <a
          href="#all-books"
          className="text-sm font-medium text-accent-pink hover:underline"
        >
          View All Books →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {BOOKS.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </section>
  );
}
