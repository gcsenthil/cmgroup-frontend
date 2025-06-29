import React from "react";

const team = [
  {
    img: "/images/team/doctor1.jpg",
    name: "Dr. Emily Carter",
    title: "Chief Medical Officer",
    desc: "Expert in internal medicine with 15+ years of experience.",
    linkedin: "#",
  },
  {
    img: "/images/team/doctor2.png",
    name: "Dr. Michael Lee",
    title: "Cardiologist",
    desc: "Specialist in heart health and preventive cardiology.",
    linkedin: "#",
  },
  {
    img: "/images/team/doctor3.jpg",
    name: "Dr. Sophia Patel",
    title: "Pediatrician",
    desc: "Dedicated to children’s health and family wellness.",
    linkedin: "#",
  },
  {
    img: "/images/team/doctor4.png",
    name: "Dr. James Kim",
    title: "Orthopedic Surgeon",
    desc: "Focused on advanced orthopedic care and recovery.",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-lg font-semibold text-[#df8733] mb-2">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#2d2d2d]">
            Meet Our Professionals
          </h2>
          <p className="text-gray-600">
            Our experienced and compassionate team is dedicated to providing the
            highest quality care for you and your family.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#fff7ed] rounded-2xl shadow-lg flex flex-col items-center p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full bg-white shadow-xl mb-4 border-4 border-white hover:scale-105"
              />
              <h4 className="text-xl font-bold text-[#df8733] mb-1">
                {member.name}
              </h4>
              <span className="text-gray-700 font-medium mb-2">
                {member.title}
              </span>
              <p className="text-gray-600 text-center mb-4">{member.desc}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#df8733] hover:text-[#2d2d2d] transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
