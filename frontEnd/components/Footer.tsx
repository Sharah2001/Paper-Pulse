import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
            <span className="text-2xl font-bold text-white tracking-tight">Paper<span className="text-indigo-400">Pulse</span></span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Curating the finest literature and accessories for the modern reader. Your pulse for inspiration and knowledge.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-indigo-400 transition-colors">Track Orders</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Categories</h4>
          <ul className="space-y-4">
            <li><Link href="/category?type=novel" className="hover:text-indigo-400 transition-colors">Novels</Link></li>
            <li><Link href="/category?type=fiction" className="hover:text-indigo-400 transition-colors">Fiction</Link></li>
            <li><Link href="/accessories" className="hover:text-indigo-400 transition-colors">Accessories</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2026 PaperPulse. Designed for the love of books.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
