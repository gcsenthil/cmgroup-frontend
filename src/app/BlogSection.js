import React from "react";
import blogs from "@/data/blog";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative pt-32 pb-20 bg-[#f3f4f6] overflow-hidden"
    >
      {/* Decorative shape */}
      <div className="absolute left-0 top-0 z-0 opacity-30">
        <img src="/images/shapes/shape-6.svg" alt="" className="w-40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-lg font-semibold text-[#df8733] mb-2">
            Blog Post
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#2d2d2d] ">
            Latest News
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dinonumy <br className="hidden lg:block" /> eirmod tempor invidunt
            ut labore et dolore magn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <a href={blog.link}>
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-bold mb-2 text-[#df8733]">
                  <a href={`/blog/${blog.slug}`} className="hover:underline">
                    {blog.title}
                  </a>
                </h4>
                <p className="text-gray-600 mb-4 flex-1">{blog.desc}</p>
                <a
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-[#df8733] font-semibold hover:underline mt-auto"
                >
                  Read More
                  <i className="lni lni-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
