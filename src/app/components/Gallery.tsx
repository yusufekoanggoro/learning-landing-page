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
    <section id="galeri" className="py-16 bg-gradient-to-b from-[#E3F2FD] to-[#FFEBEE]">
      <div className="text-center mb-12 px-6">
        <h2 className="text-4xl font-bold text-[#0077B6]">Galeri Kami</h2>
        <p className="text-lg text-gray-700 mt-4">Lihat kegiatan seru di tempat les kami!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full transition duration-500 ease-in-out"
              loading="lazy" // Mengaktifkan lazy loading untuk optimasi performa
            />
          </div>
        ))}
      </div>
    </section>
  );
}
