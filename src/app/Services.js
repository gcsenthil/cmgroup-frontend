import React from "react";
import departments from "../data/departments";

export default function Services() {
  return (
    <section
      id="services"
      className="relative pt-32 pb-16 bg-[#fff7ed] overflow-hidden" // Changed to a light orange background
    >
      {/* Decorative Shape */}
      <div className="absolute left-0 top-0 w-32 md:w-48 opacity-20 z-0">
        <img src="/images/shapes/shape-3.svg" alt="" className="w-full" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="uppercase tracking-widest text-[#ec821e] font-bold text-sm">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d2d2d] mb-4 mt-2">
            Our Healthcare Services
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {departments.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-[#fff7ed] rounded-2xl shadow-md p-10 transition-all duration-300 ease-in-out hover:bg-[#df8733] hover:text-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="rounded-full bg-[#ffe5d0] p-6 mb-5 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white group-hover:scale-110">
                <div className="w-14 h-14 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#ec821e] mb-2 text-center transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h4>
              <p className="text-gray-700 text-center mb-4 transition-colors duration-300 group-hover:text-white">
                {service.desc}
              </p>
              <a
                href={`/departments/${service.slug}`}
                className="inline-block text-[#ec821e] font-semibold hover:underline transition-colors duration-300 group-hover:text-white"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
