export default function Testimonial() {
    const testimonialsData = [
      {
        message:
          "Anak saya sangat berkembang setelah mengikuti kelas di sini. Pengajarnya ramah dan sangat memperhatikan kebutuhan siswa.",
        name: "Ibu Rina, Orang Tua",
        image: "/images/ibu-rina.jpg", // Gambar profil
      },
      {
        message:
          "Belajar di sini sangat menyenangkan! Materinya mudah dipahami dan jadwalnya fleksibel.",
        name: "Andi, Siswa",
        image: "/images/ibu-rina.jpg", // Gambar profil
      },
      {
        message:
          "Sangat membantu untuk persiapan ujian. Saya merasa lebih percaya diri setelah ikut program ini.",
        name: "Siti, Siswa",
        image: "/images/ibu-rina.jpg", // Gambar profil
      },
    ];
  
    return (
      <section
        className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#FFEBEE] to-[#E8F5E9] relative"
        id="testimoni"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00B4D8] opacity-20 -z-10 rounded-lg animate-pulse"></div>
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-semibold text-[#0077B6] mb-4">Testimoni</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Apa kata siswa dan orang tua tentang kami?
          </p>
        </div>
  
        <div className="flex flex-wrap justify-center gap-8 px-6 md:px-12">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 text-center">
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 hover:rotate-1">
                {/* Gambar profil */}
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.message}"</p>
                <h4 className="font-semibold text-lg text-[#00B4D8]">- {testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  