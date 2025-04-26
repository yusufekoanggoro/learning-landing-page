'use client';

import React from 'react';

export default function WhyChooseUs() {
    return (
        <section
            id="mengapa-pilih-kami"
            className="py-20 bg-gradient-to-br from-[#E0F7FA] via-[#E8F5E9] to-[#FFFDE7] relative" // Aligning background with HeroSection
        >
            <div className="absolute inset-0 bg-[#0A192F] opacity-10 -z-10 rounded-lg"></div>

            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#004D40] mb-6">
                    Kenapa Memilih Kami?
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
                    Kami mendampingi anak Anda dengan pendekatan sabar, penuh semangat, dan terpercaya. Pengalaman belajar yang menyenangkan menanti!
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 px-6 md:px-12">
                {[{
                    title: 'Pembelajaran Fleksibel',
                    description: 'Privat atau kelompok, sesuai gaya belajar anak dan jadwal orang tua.',
                }, {
                    title: 'Tentor Profesional & Ramah',
                    description: 'Pengajar sabar, berpengalaman, dengan pendekatan menyenangkan.',
                }, {
                    title: 'Siap Hadapi Ujian',
                    description: 'Materi sesuai kurikulum, latihan rutin, dan pembekalan mental.',
                }].map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-3xl shadow-lg p-10 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-80 md:w-72"
                    >
                        <h3 className="text-2xl font-bold text-[#004D40] mb-4">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 font-light">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center px-6">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
                    Banyak orang tua telah mempercayakan pendidikan anak mereka kepada kami. Kini saatnya anak Anda bersinar bersama kami!
                </p>
            </div>
        </section>
    );
}
