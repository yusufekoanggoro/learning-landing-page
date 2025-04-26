'use client';

import React, { useState, FormEvent } from "react";
import { Element } from "react-scroll";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [program, setProgram] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[0-9]{12,13}$/.test(whatsapp)) {
      setErrorMessage("Nomor WhatsApp tidak valid. Pastikan terdiri dari 12-13 digit.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    const message = `Halo, saya ingin mendaftar.\n\nNama: ${name}\nNomor WhatsApp: ${whatsapp}\nProgram: ${program}`;
    const adminNumber = "6289522615724";
    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setIsLoading(false);
      setName("");
      setWhatsapp("");
      setProgram("");
    }, 1000);
  };

  return (
    <Element name="daftar">
      <section id="daftar" className="py-16 bg-gradient-to-b from-[#E3F2FD] via-[#FFEBEE] to-[#E8F5E9]">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">Formulir Pendaftaran</h2>
          <p className="text-lg text-gray-700 mt-4">Daftar sekarang dan mulai perjalanan belajarmu!</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
          {errorMessage && (
            <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-lg text-center animate-shake">
              {errorMessage}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">
              Nama
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="whatsapp" className="block text-left text-gray-700 font-semibold mb-2">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="Contoh: 081234567890"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="program" className="block text-left text-gray-700 font-semibold mb-2">
              Program yang Diminati
            </label>
            <select
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            >
              <option value="">-- Pilih Program --</option>
              <option value="Kelas Tatap Muka">Kelas Tatap Muka</option>
              <option value="Kelas Online">Kelas Online</option>
              <option value="Private Coaching">Private Coaching</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1E3A8A] hover:bg-[#005B8A]"}`}
          >
            {isLoading ? (
              <div className="spinner-border animate-spin border-4 border-t-4 border-white w-6 h-6 mx-auto" />
            ) : (
              "Daftar via WhatsApp"
            )}
          </button>
        </form>
      </section>
    </Element>
  );
}
