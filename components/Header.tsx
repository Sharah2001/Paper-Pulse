"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";

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

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header className="bg-blue-400 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <Link href={brandHref} className="text-xl font-bold text-gray-900">
          {brand}
        </Link>

        {/* Desktop Nav */}
        {navItems.length > 0 && (
          <nav className="hidden sm:flex gap-10">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {showCart && (
            <Link href="/cart" className="text-xl text-gray-800 hover:text-black">
              <FiShoppingBag />
            </Link>
          )}

          {/* Mobile menu button */}
          {navItems.length > 0 && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-2xl text-gray-800"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-blue-300 border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-800 font-medium"
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
