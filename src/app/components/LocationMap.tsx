import React from "react";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#FFEBEE] to-[#E8F5E9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#1E3A8A] text-white shadow-lg animate-bounce">
            <MapPin size={32} />
          </div>
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Lokasi Kami</h2>
          <p className="text-lg text-gray-700">
            Temukan kami dan datang belajar bersama! 🎒✨
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.849716616447!2d-122.08424928468962!3d37.42199977982578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b4b22c4f8d%3A0x444cb5c1b56a8ec8!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614214861576!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
