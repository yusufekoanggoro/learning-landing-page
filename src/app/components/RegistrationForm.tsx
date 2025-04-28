'use client';

import React, { useState, FormEvent } from "react";
import { Element } from "react-scroll";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [program, setProgram] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[0-9]{12,13}$/.test(whatsapp)) {
      setErrorMessage("Nomor WhatsApp tidak valid. Pastikan terdiri dari 12-13 digit.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);

    const message = `Halo, saya ingin mendaftar.\n\nNama: ${name}\nNomor WhatsApp: ${whatsapp}\nProgram: ${program}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
      <section
        id="daftar"
        className="py-20 bg-gradient-to-r from-[#004D40] to-[#00796B] relative"
      >
        <div className="text-center mb-16 px-6 z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Formulir Pendaftaran
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto font-light">
            Daftar sekarang dan mulai perjalanan belajarmu bersama kami!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#004D40]"
        >
          {errorMessage && (
            <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-lg text-center animate-shake">
              {errorMessage}
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-[#004D40] font-semibold mb-2">
              Nama
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Contoh: Yusuf"
              className="w-full p-3 border border-[#004D40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D40] placeholder-gray-700 text-[#004D40] transition-all duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="whatsapp" className="block text-left text-[#004D40] font-semibold mb-2">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => {
                const value = e.target.value;
                setWhatsapp(value);

                if (/^[0-9]{12,13}$/.test(value)) {
                  setErrorMessage(""); 
                } else {
                  setErrorMessage("Nomor WhatsApp tidak valid. Pastikan terdiri dari 12-13 digit.");
                }
              }}
              required
              placeholder="Contoh: 081234567890"
              className="w-full p-3 border border-[#004D40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D40] placeholder-gray-700 text-[#004D40] transition-all duration-300"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="program" className="block text-left text-[#004D40] font-semibold mb-2">
              Program yang Diminati
            </label>
            <select
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
              className="w-full p-3 border border-[#004D40] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004D40] placeholder-gray-700 text-[#004D40] transition-all duration-300"
            >
              <option value="">-- Pilih Program --</option>
              <option value="Belajar Privat">Belajar Privat</option>
              <option value="Belajar Kelompok">Belajar Kelompok</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading || errorMessage !== ""}
            className={`w-full py-3 rounded-lg font-semibold text-white transition duration-300 ${
              isLoading || errorMessage !== "" ? "bg-gray-400 cursor-not-allowed" : "bg-[#004D40] hover:bg-[#00695C] focus:ring-4 focus:ring-[#004D40]"
            }`}
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
