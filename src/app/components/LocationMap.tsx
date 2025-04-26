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
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63462.42876695347!2d106.77432857004322!3d-6.210619277235301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e69f6aa0ce995f9%3A0xed935b94a739c157!2sJl.%20K.H.%20Mas%20Mansyur%20No.Kav.%20126%2C%20Karet%20Tengsin%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010250!3m2!1d-6.2107062!2d106.8155286!5e0!3m2!1sen!2sid!4v1745689073225!5m2!1sen!2sid"
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
