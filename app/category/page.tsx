"use client";

import { book, Book } from "@/data/book";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const categories = ["Novel", "Fiction", "Self-help", "Biography"];

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Novel");
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredBooks = book.filter(
    (b) => b.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const handleAddToCart = (book: Book) => {
    addToCart(book);
    router.push("/cart");
  };

  return (
    <div className="p-10">
      {/* Category Buttons */}
      <div className="flex gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="border p-3 rounded">
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={300}
              className="rounded"
            />

            <h2 className="font-semibold mt-2">{book.title}</h2>
            <p className="text-gray-700">{book.author}</p>
            <p className="font-bold">Rs. {book.price}</p>

            <button
              onClick={() => handleAddToCart(book)}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
