import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-16 pb-20 bg-[#fff7ed] overflow-hidden"
    >
      {/* Decorative Shape */}
      <div className="absolute left-0 top-0 w-32 md:w-48 opacity-20 z-0">
        <img src="/images/shapes/shape-2.svg" alt="" className="w-full" />
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="uppercase tracking-widest text-[#df8733] font-bold text-sm">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d2d2d] mb-4 mt-2">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Have questions or want to schedule an appointment? Fill out the form
            below and our team will get back to you soon.
          </p>
        </div>
        <form className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df8733]"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df8733]"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#df8733]"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#ffb347] via-[#ffcc33] to-[#ff7e5f] text-[#2d2d2d] font-bold rounded-full shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 text-center text-gray-700">
          <p>
            <span className="font-bold">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="text-[#df8733] hover:underline"
            >
              +1 234 567 890
            </a>
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:info@chinomedicalgroup.com"
              className="text-[#df8733] hover:underline"
            >
              info@chinomedicalgroup.com
            </a>
          </p>
          <p>
            <span className="font-bold">Address:</span> 123 Main Street, Chino,
            CA 91710
          </p>
        </div>
      </div>
    </section>
  );
}
