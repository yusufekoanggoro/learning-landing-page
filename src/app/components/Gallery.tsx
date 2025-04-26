'use client';

import Image from "next/image";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Siswa Belajar Matematika" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Menggambar" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Diskusi Kelompok" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Membaca Buku" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Menggunakan Alat Peraga" },
  { src: "/images/gambar1.jpg", alt: "Kegiatan Les Siswa Berdiskusi" },
];

export default function Gallery() {
  // slick settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="galeri" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#004D40]">Galeri Kami</h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            Lihat kegiatan seru di tempat les kami!
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {galleryImages.map(({ src, alt }, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-lg"
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="contain" // Gunakan contain untuk mencegah gambar terpotong
                    className="rounded-3xl transform transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
