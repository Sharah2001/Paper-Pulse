// import "../styles/globals.css";

// export const metadata = {
//   title: "Paper Pulse",
//   description: "Online Book Shop",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white">
//         {children}
//       </body>
//     </html>
//   );
// }






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
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <CartProvider>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
