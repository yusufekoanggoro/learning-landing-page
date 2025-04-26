import React from "react";

export default function OurServices() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-[#FFEBEE] via-[#C8E6C9] to-[#E0F7FA] relative"
      id="layanan"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00796B] opacity-20 -z-10 rounded-lg animate-pulse"></div>
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-[#00796B] mb-4">
          Layanan Terbaik Kami
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Kami menyediakan berbagai pilihan layanan yang disesuaikan dengan kebutuhan anak Anda, agar proses belajar menjadi efektif, fleksibel, dan menyenangkan.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#00796B] mb-4">
              Kelas Tatap Muka
            </h3>
            <p className="text-gray-600">
              Pengalaman belajar langsung dengan interaksi yang lebih intens. Meningkatkan pemahaman anak melalui suasana belajar yang menyenangkan.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#00796B] mb-4">
              Kelas Online
            </h3>
            <p className="text-gray-600">
              Belajar dari mana saja dengan fleksibilitas penuh, tetap dengan materi yang interaktif dan menyenangkan.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#00796B] mb-4">
              Private Coaching
            </h3>
            <p className="text-gray-600">
              Fokus penuh pada kebutuhan anak Anda dengan sesi belajar pribadi bersama mentor ahli. Setiap anak dapat berkembang dengan cara yang paling sesuai dengan gaya belajarnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
