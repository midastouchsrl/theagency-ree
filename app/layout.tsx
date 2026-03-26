import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Agency REE | Real Estate Experts - Roma",
  description:
    "Agenzia immobiliare a Roma. Soluzioni immobiliari su misura, consulenze e servizi esclusivi. Via di Villa Emiliani 34, Roma.",
  keywords: [
    "agenzia immobiliare Roma",
    "real estate Roma",
    "consulenza immobiliare",
    "compravendita immobili Roma",
    "The Agency REE",
  ],
  openGraph: {
    title: "The Agency REE | Real Estate Experts",
    description:
      "Soluzioni immobiliari su misura nella capitale. Consulenze e servizi esclusivi.",
    url: "https://www.theagencyree.it",
    siteName: "The Agency REE",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/pittogramma-gold.png",
    apple: "/pittogramma-gold.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-urban-shadow">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
