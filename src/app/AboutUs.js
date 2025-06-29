import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-16 bg-white overflow-hidden"
    >
      {/* Decorative Shape */}
      <div className="absolute right-0 top-0 w-32 md:w-48 opacity-20 z-0">
        <img src="/images/shapes/shape-2.svg" alt="" className="w-full" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="uppercase tracking-widest text-[#ec821e] font-bold text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d2d2d] mb-4 mt-2">
            Welcome to Our Clinic
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#ffb347] via-[#ffcc33] to-[#ff7e5f] text-[#2d2d2d] font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            Learn More
          </a>
        </div>
        <div className="about-img text-center mt-10">
          <img
            src="/images/doctorpatient.jpg"
            alt="About Clinic"
            className="mx-auto w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
