'use client';

export default function Testimonial() {
    const testimonialsData = [
        {
            message: "Anak saya mengalami perkembangan pesat setelah mengikuti kelas di sini. Pengajarnya ramah dan perhatian terhadap kebutuhan siswa.",
            name: "Ibu Rina, Orang Tua",
            image: "/images/ibu-rina.jpg",
        },
        {
            message: "Belajar di sini seru banget! Materinya mudah dimengerti dan jadwalnya sangat fleksibel.",
            name: "Andi, Siswa",
            image: "/images/ibu-rina.jpg",
        },
        {
            message: "Program ini sangat membantu persiapan ujian. Saya jadi lebih percaya diri menghadapi ujian!",
            name: "Siti, Siswa",
            image: "/images/ibu-rina.jpg",
        },
    ];

    return (
        <section
            className="py-20 bg-gradient-to-br from-[#E0F7FA] via-[#E8F5E9] to-[#FFFDE7] relative"
            id="testimoni"
        >
            <div className="absolute inset-0 bg-[#0A192F] opacity-10 -z-10 rounded-lg"></div>

            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#004D40] mb-6">
                    Testimoni
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
                    Cerita inspiratif dari siswa dan orang tua yang telah merasakan manfaat bersama kami.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 text-center"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-transform duration-300 text-center h-full transform hover:scale-105 border-2 border-[#004D40]">
                            <div className="mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mx-auto object-cover shadow-sm border-2 border-[#004D40]"
                                />
                            </div>
                            <p className="text-gray-600 mb-6 italic">{testimonial.message}</p>
                            <h4 className="font-semibold text-lg text-[#004D40]">
                                - {testimonial.name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
