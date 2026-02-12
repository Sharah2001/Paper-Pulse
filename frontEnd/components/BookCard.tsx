"use client";
import { Book } from "@/data/book";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { FiShoppingBag } from "react-icons/fi";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(book);
    router.push("/cart");
  };

  return (
    <div className="premium-card group flex flex-col h-full overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        {book.isNewArrival && (
          <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
            NEW
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {book.title}
          </h3>
          <p className="text-slate-500 text-sm mt-1">{book.author}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-indigo-600">
            Rs. {book.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="p-2.5 rounded-xl bg-slate-50 text-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            <FiShoppingBag className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
