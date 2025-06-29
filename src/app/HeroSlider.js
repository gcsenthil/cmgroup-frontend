"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slider-1.jpg",
    heading: "Complete Healthcare Solution",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    button: { text: "Learn More", href: "#about" },
  },
  {
    image: "/images/slider-2.jpg",
    heading: "Best Doctors in Town",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    button: { text: "Make Appointment", href: "#contact" },
  },
  {
    image: "/images/slider-3.jpg",
    heading: "Your Health is Our Top Priority",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    button: { text: "Our Services", href: "#services" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000
    );
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section
      id="home"
      className="relative w-full h-[650px] md:h-[650px] overflow-hidden "
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Full image overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 100%)",
            }}
            aria-hidden="true"
          />
          {/* Centered content (now left-aligned) */}
          <div className="relative w-full flex items-center justify-start">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-[720px]  bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-12 text-white space-y-8 text-left animate-fade-in">
                <h1 className="text-3xl md:text-6xl font-extrabold drop-shadow mb-4 leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-base md:text-2xl drop-shadow mb-6">
                  {slide.text}
                </p>
                <a
                  href={slide.button.href}
                  className="inline-block mt-2 px-8 py-4 bg-gradient-to-r from-[#ffb347] via-[#ffcc33] to-[#ff7e5f] text-[#2d2d2d] font-bold rounded-full shadow-lg hover:scale-105 transition"
                >
                  {slide.button.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Slider Controls */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 border-white ${
              current === idx ? "bg-white" : "bg-transparent"
            } transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {/* Fade-in animation */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.2s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
