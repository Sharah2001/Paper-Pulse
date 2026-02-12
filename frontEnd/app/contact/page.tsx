export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="premium-card p-10 lg:p-16 text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold">
          Get In Touch
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact <span className="gradient-text">Us</span>
        </h1>

        <p className="text-slate-500 text-lg">
          We’d love to hear from you! Reach out to us using the details below for any inquiries or support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
          <a
            href="mailto:paperpulse@gmail.com"
            className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-sm opacity-80">paperpulse@gmail.com</p>
          </a>

          <a
            href="https://wa.me/94763992352"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm opacity-80">+94 76 399 2352</p>
          </a>
        </div>
      </div>
    </div>
  );
}
