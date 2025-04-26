'use client';

import React from "react";

export default function OurServices() {
    return (
        <section
            className="py-20 bg-gradient-to-br from-[#E0F7FA] via-[#E8F5E9] to-[#FFFDE7] relative" // Aligning background with previous sections
            id="layanan"
        >
            <div className="absolute inset-0 bg-[#0A192F] opacity-10 -z-10 rounded-lg"></div>

            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#004D40] mb-6">
                    Layanan Kami
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
                    Kami menawarkan berbagai layanan terbaik yang dirancang khusus untuk mendukung perkembangan akademik anak Anda secara efektif, fleksibel, dan menyenangkan.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
                {[
                    {
                        title: "Kelas Tatap Muka",
                        description: "Belajar secara langsung dengan interaksi aktif, meningkatkan pemahaman melalui metode pengajaran yang komunikatif dan menyenangkan.",
                    },
                    {
                        title: "Kelas Online",
                        description: "Nikmati kemudahan belajar dari rumah dengan materi interaktif, fleksibel, dan tetap menghadirkan pengalaman belajar yang seru.",
                    },
                    {
                        title: "Private Coaching",
                        description: "Sesi belajar pribadi yang sepenuhnya disesuaikan dengan kebutuhan dan gaya belajar anak Anda, didampingi mentor berpengalaman.",
                    }
                ].map((service, idx) => (
                    <div key={idx} className="w-full sm:w-1/2 md:w-1/3">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-transform duration-300 text-center h-full transform hover:scale-105 border-2 border-[#004D40]">
                            <h3 className="text-2xl font-semibold text-[#004D40] mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 font-light">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
