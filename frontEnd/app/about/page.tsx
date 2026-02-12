export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="premium-card p-10 lg:p-16 space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold">
          Our Story
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          About <span className="gradient-text">Paper Pulse</span>
        </h1>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">Paper Pulse</strong> is more than just an online book shop; it's a heartbeat for literature enthusiasts. We was created for book lovers who enjoy exploring the depth of novels, the intrigue of fiction, the wisdom of self-help books, and the truth in biographies.
          </p>

          <p>
            Our platform showcases new arrivals, best sellers, and carefully curated collections across different categories, aiming to make quality books easily accessible to everyone. Whether you are a professional or an avid reader, Paper Pulse has something for you.
          </p>

          <div className="pt-8 border-t border-slate-100">
            <p className="font-semibold text-slate-900 italic">
              📚 Read more. Learn more. Feel the pulse of books with Paper Pulse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
