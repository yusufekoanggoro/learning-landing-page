'use client';

import Image from "next/image";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "/images/aktivitas-1.jpg", alt: "Kegiatan belajar kelompok di tempat bimbingan belajar." },
  { src: "/images/aktivitas-2.jpg", alt: "Siswa-siswi sedang belajar bersama di kelas bimbingan belajar." },
  { src: "/images/aktivitas-3.jpg", alt: "Suasana kelas bimbel dengan siswa yang fokus mengerjakan soal." },
  { src: "/images/aktivitas-4.jpg", alt: "Anak-anak antusias mengikuti sesi bimbel di ruang kelas." },
  { src: "/images/aktivitas-5.jpg", alt: "Anak-anak sedang berlatih gerakan sholat berjamaah di kelas." },
  { src: "/images/aktivitas-6.jpg", alt: "Anak-anak tersenyum bahagia saat menerima hadiah dari guru." },
  { src: "/images/aktivitas-7.jpg", alt: "Siswa-siswi dan guru berfoto bersama setelah acara bimbel selesai." },
];

export default function Gallery() {
  // slick settings
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true, // Pause autoplay on hover
    // nextArrow: <button className="slick-next text-white bg-[#004D40] hover:bg-[#003b2e] p-3 rounded-full shadow-lg transition-all duration-200 ease-in-out">→</button>, // Custom right arrow
    // prevArrow: <button className="slick-prev text-white bg-[#004D40] hover:bg-[#003b2e] p-3 rounded-full shadow-lg transition-all duration-200 ease-in-out">←</button>, // Custom left arrow
  };

  return (
    <section id="galeri" className="py-16 bg-[#f4f4f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#004D40] tracking-tight">Galeri Kami</h2>
          <p className="text-lg text-gray-700 mt-4">
            Lihat kegiatan seru di tempat les kami!
          </p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {galleryImages.map(({ src, alt }, index) => (
              <div key={index} className="relative overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    // objectFit="cover"
                    objectFit="contain" // Menjaga gambar tidak terpotong
                    className="rounded-3xl transition-all duration-300 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
