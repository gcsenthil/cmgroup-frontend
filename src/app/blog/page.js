import blogs from "@/data/blog";

export default function BlogListPage() {
  return (
    <section className="pt-16 pb-16 max-w-5xl mx-auto px-4 md:px-8 bg-[#f9fafb] min-h-screen">
      <h1 className="text-4xl font-extrabold text-[#2d2d2d] mb-8 text-center">
        Our Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <a href={`/blog/${blog.slug}`}>
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
            </a>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#df8733] font-semibold">
                  {blog.author}
                </span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#ec821e] mb-2">
                <a href={`/blog/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </a>
              </h2>
              <p className="text-gray-700 mb-4 flex-1">{blog.desc}</p>
              <a
                href={`/blog/${blog.slug}`}
                className="inline-block text-[#df8733] font-semibold hover:underline mt-auto"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
