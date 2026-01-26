"use client";

import Link from "next/link";
import { Book } from "../data/book";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  const {addToCart}= useCart();
  const router = useRouter();

  const handleAddToCart=()=>{
    addToCart(book);
    router.push("/cart");
  };
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={book.image} alt={book.title} className="h-48 w-full object-cover rounded mb-2" />
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-gray-800">{book.author}</p>
      <p className="mt-2 font-semibold">Rs.{book.price}</p>
      <button  onClick={handleAddToCart} className="mt-3 w-full bg-green-600 text-white py-1 rounded hover:bg-blue-700">
          Add to Cart
      </button>
     
    </div>
  );
}
