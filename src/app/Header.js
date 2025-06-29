"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Always use the same background for all pages
  const headerBg =
    "bg-gradient-to-r from-[#ffb347] via-[#ffcc33] to-[#ff7e5f] shadow-lg";

  return (
    <>
      <header
        className={`top-0 left-0 w-full transition-colors duration-500 ${headerBg}`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/images/Cmg.png"
              alt="Logo"
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
              className="block"
            />
            <span className="text-2xl font-extrabold tracking-wide flex items-center text-[#2d2d2d]">
              Chino Medical Group
            </span>
          </a>
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="block h-1 w-6 rounded bg-[#2d2d2d] transition-all duration-300" />
            <span className="block h-1 w-6 rounded my-1 bg-[#2d2d2d] transition-all duration-300" />
            <span className="block h-1 w-6 rounded bg-[#2d2d2d] transition-all duration-300" />
          </button>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {["home", "about", "services", "team", "blog"].map((section) => (
              <a
                key={section}
                href={section === "home" ? "/" : `/#${section}`}
                className="font-semibold text-[#2d2d2d] hover:text-[#df8733] transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a
              href="/contact"
              className="font-semibold text-[#2d2d2d] hover:text-[#df8733] transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* Mobile Side Drawer Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
          {/* Side Drawer */}
          <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#ffb347] via-[#ffcc33] to-[#ff7e5f] z-50 shadow-2xl animate-slide-in">
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#f6d365]">
              <span className="text-xl font-bold text-[#2d2d2d]">Menu</span>
              <button
                className="text-2xl text-[#2d2d2d] focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col">
              <li>
                <a
                  href="/"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200 border-b border-[#f6d365]"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200 border-b border-[#f6d365]"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200 border-b border-[#f6d365]"
                  onClick={() => setMenuOpen(false)}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200 border-b border-[#f6d365]"
                  onClick={() => setMenuOpen(false)}
                >
                  Doctor
                </a>
              </li>
              <li>
                <a
                  href="/#blog"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200 border-b border-[#f6d365]"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-6 py-4 text-[#2d2d2d] font-semibold hover:text-white transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Slide-in animation */}
          <style jsx global>{`
            @keyframes slide-in {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in {
              animation: slide-in 0.3s ease-out;
            }
          `}</style>
        </>
      )}
    </>
  );
}
