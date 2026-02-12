"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  brand?: ReactNode;
  brandHref?: string;
  navItems?: NavItem[];
  actions?: ReactNode;
  showCart?: boolean;
}

const Header = ({
  brand = "PaperPulse",
  brandHref = "/",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
    { label: "Accessories", href: "/accessories" },
    { label: "Login", href: "/login" },
  ],
  showCart = true,
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="glass w-full sticky top-0 z-50 border-b border-slate-200/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-20">
        <Link href={brandHref} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
            <span className="text-xl font-bold">P</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Paper<span className="text-indigo-600">Pulse</span>
          </span>
        </Link>

        {navItems.length > 0 && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-5">
          {showCart && (
            <Link
              href="/cart"
              className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors group"
            >
              <FiShoppingBag className="text-2xl" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-indigo-600 text-[10px] font-bold text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {cartCount}
              </span>
            </Link>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-2xl text-slate-600 hover:text-indigo-600"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>


      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-indigo-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
