'use client';

import React from "react";

export default function OurServices() {
  return (
    <section
      id="layanan"
      className="py-24 bg-gradient-to-r from-[#00796B] to-[#004D40] relative"
    >
      <div className="text-center mb-16 px-6 z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
          Layanan Kami
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed">
          Kami menawarkan berbagai layanan terbaik yang dirancang untuk mendukung perkembangan akademik anak Anda secara efektif, fleksibel, dan menyenangkan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 sm:gap-12 px-6 md:px-12 z-10 animate-fadeInUp">
        {[ 
          {
            title: "Belajar Privat",
            description: "Dapatkan perhatian penuh dari tentor berpengalaman yang akan membimbingmu secara personal, memastikan kamu menguasai materi dengan cara yang paling efektif dan menyenangkan.",
          },
          {
            title: "Belajar Kelompok",
            description: "Belajar bersama teman-teman dalam sesi yang interaktif, di mana kamu bisa berdiskusi, berbagi ide, dan belajar dengan cara yang menyenangkan, fleksibel, dan penuh semangat.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-80 md:w-72 lg:w-64"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#004D40] mb-6 tracking-wide">{service.title}</h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 text-center px-6 z-10">
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto font-medium">
          Dengan layanan kami yang fleksibel dan personal, kami siap mendampingi anak Anda meraih prestasi terbaik!
        </p>
      </div>
    </section>
  );
}
