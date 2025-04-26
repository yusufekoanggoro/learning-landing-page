'use client';

import { Link } from 'react-scroll';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#E0F7FA] via-[#E8F5E9] to-[#FFFDE7] flex items-center justify-center text-gray-800 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#FF7043] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#4DB6AC] opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 z-10 max-w-7xl w-full">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#00796B] mb-6 font-sans">
            Bimbingan <span className="text-[#004D40]">Anak Ceria</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Dukung tumbuh kembang anak dengan <span className="font-semibold text-[#FF7043]">bimbingan yang menyenangkan</span>, <span className="font-semibold text-[#FF7043]">interaktif</span>, dan <span className="font-semibold text-[#FF7043]">mendalam</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="daftar"
              smooth={true}
              duration={800}
              className="bg-[#FF7043] text-white py-4 px-10 rounded-full font-semibold text-lg shadow-xl hover:bg-[#F4511E] transition-transform transform hover:scale-105 cursor-pointer"
            >
              Daftar Sekarang
            </Link>
            <a
              href="#konsultasi"
              className="border-2 border-[#004D40] text-[#004D40] py-4 px-10 rounded-full font-semibold text-lg shadow-xl hover:bg-[#004D40] hover:text-white transition-transform transform hover:scale-105"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Ilustrasi / Gambar */}
        <div className="flex-1 hidden md:block">
          <img
            src="/images/kid-education-illustration-design-vector.jpg"
            alt="Bimbingan Belajar Anak"
            className="w-full max-w-md mx-auto animate-fadeInUp"
          />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="mengapa-pilih-kami" smooth={true} duration={800}>
          <svg
            className="w-8 h-8 text-[#004D40]"
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
    </section>
  );
}
