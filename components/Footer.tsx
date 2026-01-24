import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white p-6 mt-10">
      <div className="flex justify-between flex-wrap">
        <div>
          <h2 className="font-bold mb-2">BookShop</h2>
          <p>Find your favorite books and more.</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Links</h2>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/orders">Orders</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-4">© 2026 BookShop. All rights reserved.</p>
    </footer>
  );
}
