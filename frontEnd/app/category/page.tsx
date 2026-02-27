"use client";


import { useState, useEffect } from "react";

import BookCard from "@/components/BookCard";
import type { Book } from "@/data/book";

const categories = ["Novel", "Fiction", "Self-help", "Biography"];

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Novel");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://127.0.0.1:3001/books/category/${selectedCategory.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [selectedCategory]);


  return (
    <div className="pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Browse by <span className="gradient-text">Category</span>
        </h1>
        <p className="text-slate-500">
          Find exactly what you're looking for among our curated collections.
        </p>
      </div>


      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 border ${selectedCategory === cat
              ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100 scale-105"
              : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400 hover:text-indigo-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {loading ? (
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div>
          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
              <p className="text-slate-500 text-lg">
                No books found in this category yet.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
