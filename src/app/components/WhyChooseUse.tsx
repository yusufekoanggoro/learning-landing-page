import React from "react";

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-[#B3E5FC] via-[#C8E6C9] to-[#FFF9C4] relative"
      id="mengapa-pilih-kami"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#004D40] opacity-20 -z-10 rounded-lg animate-pulse"></div>
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-[#004D40] mb-4">
          Kenapa Memilih Kami?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Kami mendampingi anak Anda untuk belajar dengan cara yang penuh kesabaran, kepercayaan, dan semangat. Dapatkan pengalaman belajar yang menyenangkan untuk anak Anda!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#004D40] mb-4">
              Pembelajaran Fleksibel
            </h3>
            <p className="text-gray-600">
              Pilihan untuk belajar secara privat atau kelompok, disesuaikan dengan gaya belajar anak dan jadwal orang tua.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#004D40] mb-4">
              Tentor Profesional dan Ramah
            </h3>
            <p className="text-gray-600">
              Pengajar yang sabar, berpengalaman, dan ramah siap mendampingi anak dengan pendekatan yang penuh semangat dan perhatian.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 text-center h-full transform hover:scale-105 hover:rotate-1">
            <h3 className="text-2xl font-semibold text-[#004D40] mb-4">
              Siap Hadapi Ujian
            </h3>
            <p className="text-gray-600">
              Materi disesuaikan dengan kurikulum dan latihan soal secara berkala untuk membantu anak merasa siap dan percaya diri menghadapi ujian.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center px-6">
        <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
          Banyak orang tua telah mempercayakan pendidikan anak mereka bersama kami. Saatnya anak Anda meraih prestasi terbaik!
        </p>
      </div>
    </section>
  );
}
