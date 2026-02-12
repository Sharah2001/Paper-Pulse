"use client";
import BookCard from "@/components/BookCard";
import { useState, useEffect } from "react";
import { Book } from "@/data/book";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/utils/api";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    api.getBooks()
      .then((data) => {
        setBooks(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setBooks([]);
        setLoading(false);
      });
  }, []);



  const newArrivals = Array.isArray(books) ? books.filter((book) => book.isNewArrival) : [];
  const bestSellers = Array.isArray(books) ? books.filter((book) => book.isBestSeller) : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white p-12 lg:p-24 shadow-2xl">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            Handpicked Book Collection
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Discover the <span className="gradient-text">Pulse</span> of Literature
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Welcome to Paper-Pulse! Immerse yourself in a world of stories,
            knowledge, and inspiration with our curated book store.
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <button className="btn-primary" onClick={() => router.push("/category")}>Explore Collection</button>
            <button className="px-8 py-3 rounded-xl border border-slate-700 font-medium hover:bg-slate-800 transition-colors">
              Special Offers
            </button>

          </div>
        </div>
      </section>


      <section>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">New Arrivals</h2>
            <p className="text-slate-500 mt-1">Lately added to our shelves</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors text-sm">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newArrivals.slice(0, 4).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>


      <section className="relative bg-indigo-50 rounded-[2rem] p-10 lg:p-16 overflow-hidden">

        {/* <span className="absolute right-8 bottom-6 text-[10rem] font-extrabold text-indigo-600/10 select-none pointer-events-none">
    P
  </span> */}

        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Join the Pulse Community
          </h2>
          <p className="text-slate-600 mb-8 max-w-lg">
            Subscribe to our newsletter and get exclusive access to new releases,
            author interviews, and member-only discounts.
          </p>
          <div className="flex gap-2 max-w-md">
            <Link href="/register" >

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Best Sellers</h2>
            <p className="text-slate-500 mt-1">Most loved by our readers</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors text-sm">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bestSellers.slice(0, 4).map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
