import { notFound } from "next/navigation";
import blogs from "@/data/blog";

export default function BlogDetailPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <section className="pt-16 pb-16 px-2 md:px-0 bg-[#f9fafb] min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-56 md:h-96 object-cover"
        />
        <div className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <span className="inline-block text-sm text-[#df8733] font-semibold uppercase tracking-wider">
              {blog.author}
            </span>
            <span className="text-xs text-gray-400">{blog.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d2d2d] mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            {blog.desc}
          </div>
          <a
            href="/blog"
            className="inline-block px-6 py-2 rounded-full bg-[#df8733] text-white font-semibold shadow hover:bg-[#ec821e] transition"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </section>
  );
}
