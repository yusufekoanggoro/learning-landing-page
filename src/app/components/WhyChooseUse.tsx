'use client';

import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      id="mengapa-pilih-kami"
      className="min-h-screen bg-gradient-to-r from-[#00bfae] to-[#00796B] text-gray-800 overflow-hidden py-20 px-6 flex flex-col items-center justify-center"
    >
      <div className="text-center mb-16 z-10 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 font-sans animate-fadeIn">
          Kenapa Memilih <span className="text-[#FFEB3B]">Kami?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white font-light animate-fadeIn delay-100">
          Kami mendampingi anak Anda dengan pendekatan sabar, penuh semangat, dan terpercaya. 
          Pengalaman belajar yang menyenangkan menanti!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12 z-10 animate-fadeInUp">
        {[ 
          {
            title: 'Pembelajaran Fleksibel',
            description: 'Belajar privat atau kelompok, pilih sesuai kebutuhanmu.',
          },
          {
            title: 'Tentor Profesional & Ramah',
            description: 'Kami memiliki tentor yang berpengalaman dan siap mendampingimu dengan sabar.',
          },
          {
            title: 'Materi Terstruktur & Sesuai Kurikulum',
            description: 'Dapatkan materi yang sesuai dengan kurikulum agar lebih mudah dipahami.',
          },
          {
            title: 'Latihan Soal Rutin',
            description: 'Latihan soal secara rutin untuk meningkatkan pemahaman dan persiapan ujian.',
          },
          {
            title: 'Siap Hadapi Ujian Sekolah',
            description: 'Kami membantu kamu mempersiapkan ujian sekolah dengan percaya diri.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-80 md:w-72 lg:w-64"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#004D40] mb-4 font-sans">{item.title}</h3>
            <p className="text-gray-600 font-light">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 text-center px-6 z-10 animate-fadeIn delay-200">
        <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto font-medium">
          Banyak orang tua telah mempercayakan pendidikan anak mereka kepada kami. Kini saatnya anak Anda bersinar bersama kami!
        </p>
      </div>
    </section>
  );
}
