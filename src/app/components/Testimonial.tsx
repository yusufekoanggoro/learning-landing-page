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
      id="testimoni"
      className="py-20 bg-white relative"
    >
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D40] mb-6">
          Testimoni
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light">
          Cerita inspiratif dari siswa dan orang tua yang telah merasakan manfaat bersama kami.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 px-6 md:px-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-80 md:w-72 lg:w-64"
          >
            <div className="mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto object-cover shadow-md border-2 border-[#004D40]"
              />
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed text-sm sm:text-base">
              {testimonial.message}
            </p>
            <h4 className="font-semibold text-lg text-[#004D40]">
              {testimonial.name}
            </h4>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-20 text-center px-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
          Kami bangga menjadi bagian dari perjalanan belajar setiap siswa!
        </p>
      </div>
    </section>
  );
}
