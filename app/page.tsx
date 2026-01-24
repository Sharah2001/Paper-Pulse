
import BookCard from "@/components/BookCard";
import { book } from "@/data/book";

export default function Home() {
  const newArrivals = book.filter(book => book.isNewArrival);
  const bestSellers = book.filter(book => book.isBestSeller);

  return (
    <div>
      
      <header className="bg-slate-100 bg-transparent p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Paper-Pulse!!</h1>
        <p className="text-gray-700">Curated books for every reader!</p>
      </header>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </section>

    </div>
  );
}
