
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Paper Pulse | Online Book Shop",
  description: "Online book shop for new arrivals, bestsellers and accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-sky-50">
        <CartProvider>
          <Header />
          <main className="flex-grow pt-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
