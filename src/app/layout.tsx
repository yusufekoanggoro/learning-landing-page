import Head from 'next/head';
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Bimbel Insan Kamil - Belajar untuk Sukses",
  description: "Bimbel Insan Kamil menyediakan bimbingan belajar terbaik dengan program intensif, tutor berpengalaman, dan metode belajar yang efektif untuk membantu Anda meraih kesuksesan ujian.",
  openGraph: {
    title: "Bimbel Insan Kamil - Bimbingan Belajar Terbaik untuk Ujian",
    description: "Bergabunglah dengan Bimbingan Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas.",
    images: "https://bimbelinsankamil.vercel.app/images/pamflet.jpeg",
    url: "https://bimbelinsankamil.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bimbel Insan Kamil - Bimbingan Belajar Terbaik untuk Ujian",
    description: "Bergabunglah dengan Bimbingan Belajar Insan Kamil untuk persiapan ujian terbaik. Kami menyediakan bimbingan untuk semua tingkat dan berbagai mata pelajaran dengan pengajaran berkualitas.",
    images: "https://bimbelinsankamil.vercel.app/images/pamflet.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
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
