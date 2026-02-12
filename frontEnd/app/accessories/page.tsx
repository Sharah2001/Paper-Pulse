"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FiShoppingBag } from "react-icons/fi";
import { fetchAccessories } from "@/utils/api";

type Accessory = {
  _id: string;
  name: string;
  category: "Tote Bag" | "Bookmark";
  price: number;
  image: string;
};

const accessories: Accessory[] = [
];

const categories = ["Tote Bag", "Bookmark"];

export default function AccessoriesPage() {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tote Bag");
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const loadAccessories = async () => {
      try {
        const res = await fetchAccessories();
        setAccessories(res);
      } catch (err) {
        console.error("Failed to fetch accessories:", err);
      }
    };
    loadAccessories();
  }, []);

  const filteredAccessories = accessories.filter(
    (item) => item.category === selectedCategory
  );

  const handleAddToCart = (item: Accessory) => {
    addToCart({
      _id: item._id,
      title: item.name,
      author: "Accessory",
      price: item.price,
      image: item.image,
      category: "Accessories",
    } as any);
    router.push("/cart");
  };

  return (
    <div className="pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Essential <span className="gradient-text">Accessories</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Compliment your reading experience with our exclusive collection of tote bags and bookmarks.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAccessories.map((item) => (
          <div key={item._id} className="premium-card group flex flex-col h-full overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {item.name}
                </h3>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-indigo-600">
                  Rs. {item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="p-2.5 rounded-xl bg-slate-50 text-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <FiShoppingBag className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
