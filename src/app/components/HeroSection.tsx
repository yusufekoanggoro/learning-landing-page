'use client';

import { Link } from 'react-scroll';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3E5FC] via-[#C8E6C9] to-[#FFF9C4] flex items-center justify-center text-gray-800">
      <div className="text-center px-6 md:px-12 max-w-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans text-[#00796B]">
          Bimbingan <span className="text-[#004D40]">Anak Ceria</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 opacity-90 transition-opacity duration-500 hover:opacity-100">
          Dukung tumbuh kembang anak dengan bimbingan yang menyenangkan, interaktif, dan mendalam.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="daftar"
            smooth={true}
            duration={800}
            className="bg-[#FF7043] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#F4511E] transition duration-300 shadow-lg transform hover:scale-105 cursor-pointer text-lg"
          >
            Daftar Sekarang
          </Link>
          <a
            href="#konsultasi"
            className="border-2 border-[#004D40] text-[#004D40] py-3 px-8 rounded-full font-semibold hover:bg-[#004D40] hover:text-white transition duration-300 shadow-lg transform hover:scale-105 text-lg"
          >
            Konsultasi Gratis
          </a>
        </div>
        <div className="mt-6 animate-bounce">
          <Link to="mengapa-pilih-kami" smooth={true} duration={800}>
            <svg
              className="w-8 h-8 text-[#004D40] mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
