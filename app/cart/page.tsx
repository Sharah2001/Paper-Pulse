"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((book) => (
          <div
            key={book.id}
            className="flex items-center gap-4 border p-4 rounded"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={80}
              height={120}
              className="rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="font-bold">Rs. {book.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(book.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
