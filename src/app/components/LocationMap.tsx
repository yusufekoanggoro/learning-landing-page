'use client';

import React from "react";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#004D40] to-[#00796B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white text-[#004D40] shadow-lg animate-pulse">
            <MapPin size={40} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Lokasi Kami</h2>
          <p className="text-lg sm:text-xl text-white mt-4">
            Temukan kami dan datang belajar bersama di tempat yang nyaman!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6893313481564!2d106.936999!3d-6.172333999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b039c23940f%3A0x12466fea914f6396!2sAgen%20roti%20swanish!5e0!3m2!1sen!2sid!4v1745811256168!5m2!1sen!2sid"
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
