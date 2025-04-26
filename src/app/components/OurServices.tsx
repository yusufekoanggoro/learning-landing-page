'use client';

import React from "react";

export default function OurServices() {
  return (
    <section
      id="layanan"
      className="py-20 bg-white relative"
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D40] mb-6">
          Layanan Kami
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
          Kami menawarkan berbagai layanan terbaik yang dirancang untuk mendukung perkembangan akademik anak Anda secara efektif, fleksibel, dan menyenangkan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 px-6 md:px-12">
        {[ 
          {
            title: "Kelas Tatap Muka",
            description: "Belajar langsung dengan interaksi aktif, meningkatkan pemahaman lewat metode komunikatif dan menyenangkan.",
          },
          {
            title: "Kelas Online",
            description: "Kemudahan belajar dari rumah dengan materi interaktif, fleksibel, dan pengalaman seru.",
          },
          {
            title: "Private Coaching",
            description: "Sesi belajar pribadi disesuaikan dengan kebutuhan dan gaya belajar anak Anda, didampingi mentor berpengalaman.",
          }
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-80 md:w-72 lg:w-64"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#004D40] mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 text-center px-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
          Dengan layanan kami yang fleksibel dan personal, kami siap mendampingi anak Anda meraih prestasi terbaik!
        </p>
      </div>
    </section>
  );
}
