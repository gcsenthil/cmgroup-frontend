import departments from "@/data/departments";

export default function DepartmentsListPage() {
  return (
    <section className="pt-16 pb-16 px-4 bg-[#fff7ed] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#ec821e] mb-10 text-center">
          Our Departments
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {departments.map((dept) => (
            <div
              key={dept.slug}
              className="group flex flex-col items-center bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:bg-[#df8733] hover:text-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="rounded-full bg-[#ffe5d0] p-6 mb-5 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                <div className="w-14 h-14 flex items-center justify-center">
                  {dept.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#ec821e] mb-2 text-center group-hover:text-white transition-colors duration-300">
                {dept.title}
              </h4>
              <p className="text-gray-700 text-center mb-4 group-hover:text-white transition-colors duration-300">
                {dept.desc}
              </p>
              <a
                href={`/departments/${dept.slug}`}
                className="inline-block text-[#ec821e] font-semibold hover:underline group-hover:text-white transition-colors duration-300"
              >
                View Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
