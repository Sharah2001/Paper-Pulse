export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>

      <p className="text-gray-700 text-center mb-8">
        We’d love to hear from you! Reach out to us using the details below.
      </p>

      <div className="space-y-4 text-center">
        <p className="text-lg">
          📧 <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:paperpulse@gmail.com"
            className="text-blue-600 hover:underline"
          >
            paperpulse@gmail.com
          </a>
        </p>

        <p className="text-lg">
          📱 <span className="font-semibold">WhatsApp:</span>{" "}
          <a
            href="https://wa.me/94763992352"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            +94 76 399 2352
          </a>
        </p>
      </div>
    </div>
  );
}
