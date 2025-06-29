import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 bg-gradient-to-r from-[#2d2d2d] via-[#444444] to-[#6d6d6d] bg-cover bg-center relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-10">
          {/* Logo & About */}
          <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mb-8">
            <div className="mb-6">
              <a href="/" className="inline-block mb-4">
                <img src="/images/cmg.png" alt="Logo" className="h-14" />
              </a>
              <p className="text-white/90 mb-4">
                Lorem ipsum dolor serit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore dolore magna
                aliquyam erat diam voluptua.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-[#4267B2] text-2xl transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-[#1da1f2] text-2xl transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white hover:text-[#0077b5] text-2xl transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white hover:text-[#e1306c] text-2xl transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          {/* Quick Links 1 */}
          <div className="w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Quick Link</h4>
              <ul className="space-y-2 text-white/90">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#team" className="hover:underline">
                    Doctor
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Quick Links 2 */}
          <div className="w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Departments</h4>
              <ul className="space-y-2 text-white/90">
                <li>
                  <a href="/departments/cardiology" className="hover:underline">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="/departments/neurology" className="hover:underline">
                    Neurology
                  </a>
                </li>
                <li>
                  <a
                    href="/departments/gastroenterology"
                    className="hover:underline"
                  >
                    Gastroenterology
                  </a>
                </li>
                <li>
                  <a
                    href="/departments/orthopedics"
                    className="hover:underline"
                  >
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a href="/departments/gynecology" className="hover:underline">
                    Gynecology
                  </a>
                </li>
                <li>
                  <a
                    href="/departments/dentalsurgery"
                    className="hover:underline"
                  >
                    Dental Surgery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Location/Map */}
          <div className="w-full lg:w-1/3 xl:w-1/3 mb-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                Primarycare Location
              </h4>
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white/20">
                <iframe
                  className="w-full h-40 md:h-32"
                  src="https://maps.google.com/maps?q=chinohills ca&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Primarycare Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/90 mb-0">
            Designed and Developed By{" "}
            <a
              href="https://www.geniusnexa.com/"
              rel="nofollow"
              target="_blank"
              className="underline hover:text-white"
            >
              GeniusNexa
            </a>
          </p>
          <p className="text-white/70 text-xs mt-2">
            © 2025 Chino Medical Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
