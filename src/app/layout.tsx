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
      <title>Bimbel Insan Kamil - Belajar untuk Sukses</title>
        <meta name="description" content="Bimbel Insan Kamil menyediakan bimbingan belajar terbaik dengan program intensif, tutor berpengalaman, dan metode belajar yang efektif untuk membantu Anda meraih kesuksesan ujian." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bimbel Insan Kamil - Bimbingan Belajar Terbaik untuk Ujian" />
        <meta property="og:description" content="Bergabunglah dengan Bimbingan Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas." />
        <meta property="og:image" content="https://bimbelinsankamil.vercel.app/images/pamflet.jpeg" />
        <meta property="og:url" content="https://bimbelinsankamil.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bimbel Insan Kamil - Bimbingan Belajar Terbaik untuk Ujian" />
        <meta name="twitter:description" content="Bergabunglah dengan Bimbingan Belajar Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas." />
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
