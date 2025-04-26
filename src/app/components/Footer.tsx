import { FaWhatsapp } from "react-icons/fa"; // Import ikon WhatsApp dari react-icons

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#E3F2FD] to-[#FFEBEE] border-t border-gray-200 py-16">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Informasi Tempat Les */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-[#1E3A8A]">Tempat Les Belajar</h4>
          <p className="text-gray-700 text-lg">Membantu siswa meraih prestasi terbaik.</p>
        </div>

        {/* Alamat, Nomor WA dan Email */}
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            <strong>Alamat:</strong> Jl. Merdeka No. 10, Jakarta
          </p>
          <p className="flex items-center text-gray-700 text-lg">
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
          <p className="text-gray-700 text-lg">
            <strong>Email:</strong> info@tempatles.com
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-700 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Tempat Les Belajar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}