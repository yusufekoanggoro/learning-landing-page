'use client';

import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Info Bimbel */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-3xl font-extrabold text-[#004D40]">
              Bimbel Insan Kamil
            </h4>
            <p className="text-lg sm:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
              Menyediakan fasilitas terbaik untuk membantu siswa meraih prestasi gemilang.
            </p>
          </div>

          {/* Kontak Icon dalam Circle */}
          <div className="flex space-x-6 justify-center md:justify-start mt-6 md:mt-0">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 transition-colors duration-300">
                <FaWhatsapp className="text-green-500 text-2xl" />
              </div>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                WhatsApp
              </span>
            </a>

            <a
              href="mailto:info@bimbel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-green-100 transition-colors duration-300">
                <FaEnvelope className="text-[#004D40] text-2xl" />
              </div>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>

            {/* Icon Instagram */}
            <a
              href="https://www.instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-100 transition-colors duration-300">
                <FaInstagram className="text-pink-500 text-2xl" />
              </div>
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Garis pemisah */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm sm:text-base text-gray-600">
          &copy; {new Date().getFullYear()} Bimbel Insan Kamil. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
