"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ikon hamburger dan close

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800">Tempat Les Belajar</a>
          </Link>
        </div>

        {/* Tombol hamburger menu */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl text-gray-800" />
          ) : (
            <FaBars className="text-2xl text-gray-800" />
          )}
        </div>

        {/* Menu navigasi */}
        <nav className={`lg:flex space-x-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <Link href="/">
            <a className="text-gray-800 hover:text-blue-600">Home</a>
          </Link>
          <Link href="#layanan">
            <a className="text-gray-800 hover:text-blue-600">Layanan</a>
          </Link>
          <Link href="#galeri">
            <a className="text-gray-800 hover:text-blue-600">Galeri</a>
          </Link>
          <Link href="#registrasi">
            <a className="text-gray-800 hover:text-blue-600">Pendaftaran</a>
          </Link>
        </nav>
      </div>

      {/* Menu responsif (untuk mobile) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md absolute top-16 left-0 w-full`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link href="/">
            <a className="text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
              Home
            </a>
          </Link>
          <Link href="#layanan">
            <a className="text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
              Layanan
            </a>
          </Link>
          <Link href="#galeri">
            <a className="text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
              Galeri
            </a>
          </Link>
          <Link href="#registrasi">
            <a className="text-gray-800 hover:text-blue-600" onClick={toggleMenu}>
              Pendaftaran
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}