export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold text-yellow-500">
          Contact Us
        </h2>

        <p className="mb-12 text-center text-gray-300">
          We'd love to hear from you. Reach out or visit Iron Peak Gym.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-3xl font-bold">Get in Touch</h3>

            <div className="space-y-4 text-lg">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 +254 712 345 678</p>
              <p>📧 info@ironpeakgym.com</p>
              <p>🕒 Mon - Sat: 5:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 rounded-xl bg-black p-8 shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white focus:border-yellow-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white focus:border-yellow-500 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white focus:border-yellow-500 focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-4 text-white focus:border-yellow-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-lg bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}