import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Bimbel Insan Kamil | Bimbingan Belajar Terbaik di Jakarta untuk Sukses Ujian</title>
        <meta name="author" content="Bimbel Insan Kamil" />
        <meta name="description" content="Bimbel Insan Kamil menawarkan bimbingan belajar intensif dengan tutor berpengalaman dan metode yang efektif untuk mempersiapkan ujian. Bergabunglah dengan kami untuk sukses ujian di Jakarta!" />
        <meta name="keywords" content="bimbel Insan Kamil, bimbingan belajar, bimbel terbaik, persiapan ujian, tutor berpengalaman, belajar efektif, ujian sukses, bimbel Jakarta" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Bimbel Insan Kamil | Bimbingan Belajar Terbaik untuk Persiapan Ujian di Jakarta" />
        <meta property="og:description" content="Bergabunglah dengan Bimbel Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas di Jakarta." />
        <meta property="og:image" content="https://bimbelinsankamil.vercel.app/images/pamflet.jpeg" />
        <meta property="og:url" content="https://bimbelinsankamil.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bimbel Insan Kamil | Bimbingan Belajar Terbaik untuk Persiapan Ujian di Jakarta" />
        <meta name="twitter:description" content="Bergabunglah dengan Bimbel Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas di Jakarta." />
        <meta name="twitter:image" content="https://bimbelinsankamil.vercel.app/images/pamflet.jpeg" />

        <link rel="canonical" href="https://bimbelinsankamil.vercel.app" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
