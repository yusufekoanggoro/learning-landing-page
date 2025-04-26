'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          {/* Info Bimbel */}
          <div className="space-y-4">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#004D40]">Bimbel Insan Kamil</h4>
            <p className="text-lg sm:text-xl text-gray-700">
              Menyediakan fasilitas terbaik untuk membantu siswa meraih prestasi gemilang.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-700">
              <strong>Alamat:</strong> Jl. Merdeka No. 10, Jakarta
            </p>
            <p className="flex items-center justify-center md:justify-start text-lg sm:text-xl text-gray-700">
              <FaWhatsapp className="text-green-500 mr-2" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition-colors duration-200"
                aria-label="Hubungi melalui WhatsApp"
              >
                0812-3456-7890
              </a>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              <strong>Email:</strong> info@bimbel.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm sm:text-base text-gray-600">
          &copy; {new Date().getFullYear()} Bimbel Insan Kamil. Semua hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
