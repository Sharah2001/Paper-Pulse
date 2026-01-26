"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

type Accessory = {
  id: number;
  name: string;
  category: "Tote Bag" | "Bookmark";
  price: number;
  image: string;
};

const accessories: Accessory[] = [
  {
    id: 1,
    name: "Classic Book Lover Tote Bag",
    category: "Tote Bag",
    price: 750,
    image: "/images/books/bag05.jpg",
  },
  {
    id: 2,
    name: "Minimal Canvas Tote",
    category: "Tote Bag",
    price: 680,
    image: "/images/books/bag03.jpg",
  },
  {
    id: 3,
    name: "Minimal Canvas Tote",
    category: "Tote Bag",
    price: 700,
    image: "/images/books/bag06.jpg",
  },
  {
    id: 4,
    name: "Quote Bookmark",
    category: "Bookmark",
    price: 350,
    image: "/images/books/bookMark01.jpg",
  },
    {
    id: 5,
    name: "Metal Bookmark",
    category: "Bookmark",
    price: 550,
    image: "/images/books/bookMark02.jpg",
  },
    {
    id: 6,
    name: "Wooden Bookmark",
    category: "Bookmark",
    price: 400,
    image: "/images/books/bookMark08.jpg",
  },
    {
    id: 7,
    name: "Silicone Bookmark",
    category: "Bookmark",
    price: 350,
    image: "/images/books/bookMark10.jpg",
  },
];

const categories = ["Tote Bag", "Bookmark"];

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tote Bag");
  const { addToCart } = useCart();
  const router = useRouter();

  const filteredAccessories = accessories.filter(
    (item) => item.category === selectedCategory
  );

  const handleAddToCart = (item: Accessory) => {
    // converting accessory to cart-friendly object
    addToCart({
      id: item.id,
      title: item.name,
      author: "Accessory",
      price: item.price,
      image: item.image,
      category: "Accessories",
    });
    router.push("/cart");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Accessories</h1>

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

      {/* Accessories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredAccessories.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={300}
              className="rounded"
            />

            <h2 className="font-semibold mt-2">{item.name}</h2>
            <p className="font-bold mt-1">Rs. {item.price}</p>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-2 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
