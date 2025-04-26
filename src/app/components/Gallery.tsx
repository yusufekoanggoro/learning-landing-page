import Image from "next/image";

const galleryImages = [
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Siswa Belajar Matematika" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Menggambar" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Diskusi Kelompok" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Membaca Buku" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Menggunakan Alat Peraga" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Siswa Berdiskusi" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#FFEBEE] to-[#E8F5E9]">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">Galeri Kami</h2>
        <p className="text-lg text-gray-700 mt-4">
          Lihat kegiatan seru di tempat les kami!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {galleryImages.map(({ src, alt }, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={300}
              className="object-cover w-full h-full transition duration-500 ease-in-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
