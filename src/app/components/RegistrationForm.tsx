"use client";

import React, { useState, FormEvent } from "react";
import { Element } from 'react-scroll';

export default function RegistrationForm() {
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [program, setProgram] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validasi nomor WhatsApp
    const whatsappPattern = /^[0-9]{12,13}$/; // Validasi angka panjang 12-13 digit
    if (!whatsappPattern.test(whatsapp)) {
      setErrorMessage("Nomor WhatsApp tidak valid. Pastikan nomor terdiri dari 12-13 digit.");
      return;
    }

    // Reset error message jika valid
    setErrorMessage("");
    setIsLoading(true); // Menandakan bahwa proses sedang berlangsung

    const message = `Halo, saya ingin mendaftar.\n\nNama: ${name}\nNomor WhatsApp: ${whatsapp}\nProgram yang diminati: ${program}`;
    const whatsappNumber = "6285934531182"; // Ganti dengan nomor admin kamu (62 untuk Indonesia)
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Simulasi loading dan buka WhatsApp
    setTimeout(() => {
        window.open(url, "_blank");
        setIsLoading(false);

        // Reset form setelah mengalihkan ke WhatsApp
        setName("");
        setWhatsapp("");
        setProgram("");
    }, 1000); // Mengurangi loading selama 1 detik
  };

  return (
    <Element name="daftar">
      <div className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#FFEBEE] to-[#E8F5E9]" id="daftar">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-[#0077B6]">Formulir Pendaftaran</h2>
          <p className="text-lg text-gray-700 mt-4">Daftar sekarang dan mulai perjalanan belajarmu!</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto px-6 py-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 mb-6 rounded-lg text-center animate__animated animate__shakeX">
              {errorMessage}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-left text-gray-700 font-semibold mb-2" htmlFor="name">
              Nama
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 font-semibold mb-2" htmlFor="whatsapp">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-left text-gray-700 font-semibold mb-2" htmlFor="program">
              Program yang Diminati
            </label>
            <select
              id="program"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            >
              <option value="">-- Pilih Program --</option>
              <option value="Kelas Tatap Muka">Kelas Tatap Muka</option>
              <option value="Kelas Online">Kelas Online</option>
              <option value="Private Coaching">Private Coaching</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={isLoading}
          >
            {isLoading ? "Mengalihkan ke WhatsApp..." : "Daftar via WhatsApp"}
          </button>
        </form>
      </div>
    </Element>
  );
}