import departments from "@/data/departments";
import { notFound } from "next/navigation";

export default function DepartmentDetail({ params }) {
  const department = departments.find((d) => d.slug === params.slug);
  if (!department) return notFound();

  return (
    <section className="pt-16 pb-16 px-4 bg-[#fff7ed] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-14">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="w-20 h-20 flex items-center justify-center bg-[#ffe5d0] rounded-full shadow-lg">
            {department.icon}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-[#ec821e] mb-2">
              {department.title}
            </h1>
            <div className="h-1 w-16 bg-[#df8733] rounded mx-auto md:mx-0 mb-2"></div>
            <p className="text-gray-600 text-lg">{department.desc}</p>
          </div>
        </div>
        {/* Add more department details here if needed */}
        <div className="flex justify-center mt-10">
          <a
            href="/departments"
            className="inline-block px-8 py-3 rounded-full bg-[#df8733] text-white font-semibold shadow-lg hover:bg-[#ec821e] transition text-lg"
          >
            ← Back to All Departments
          </a>
        </div>
      </div>
    </section>
  );
}
