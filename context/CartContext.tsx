"use client";

import { createContext, useContext, useState } from "react";
import { Book } from "@/data/book";

interface CartContextType {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeFromCart:(id:number)=>void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart((prev) => [...prev, book]);
  };

  const removeFromCart=(id:number)=>{
    setCart((prev)=>prev.filter((item)=>item.id !==id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
