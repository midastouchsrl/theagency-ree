"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden sm:min-h-screen">
      {/* Background image */}
      <Image
        src="/hero-bg.webp"
        alt="Appartamento di lusso con vista su Roma"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0.7) 50%, rgba(20,20,20,0.82) 100%)"
            : "linear-gradient(to bottom, rgba(255,255,253,0.72) 0%, rgba(255,255,253,0.85) 50%, rgba(255,255,253,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Gold line */}
        <div className="mb-8 h-[1px] w-16 bg-champagne gold-line-animated" />

        {/* Logo */}
        <Image
          src={isDark ? "/logo-light.png" : "/logo-dark.png"}
          alt="The Agency REE"
          width={280}
          height={96}
          className="mb-8 h-16 w-auto object-contain sm:h-20 md:h-24"
          priority
        />

        {/* Tagline - darker gold in light mode for contrast */}
        <p
          className="mb-4 text-[13px] font-medium uppercase tracking-[0.35em]"
          style={{ color: isDark ? "#BD9C72" : "#A68B5B" }}
        >
          Real Estate Experts
        </p>

        {/* Headline */}
        <h1
          className="max-w-3xl text-3xl font-light leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ color: isDark ? "#E8E4DD" : "#1E1E1E" }}
        >
          Eccellenza Immobiliare
          <br />
          <span
            className="font-normal"
            style={{ color: isDark ? "#BD9C72" : "#9A7E52" }}
          >
            nel Cuore di Roma
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed sm:text-lg"
          style={{ color: isDark ? "#8A8480" : "#4A4440" }}
        >
          Soluzioni immobiliari su misura nel cuore di Roma.
          <br className="hidden sm:block" />
          Consulenze e servizi esclusivi.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contatti"
            className="group relative overflow-hidden px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] transition-all duration-500"
            style={{
              border: isDark ? "1px solid #BD9C72" : "1px solid #9A7E52",
              color: isDark ? "#BD9C72" : "#9A7E52",
            }}
          >
            <span className="absolute inset-0 -translate-x-full bg-champagne transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative group-hover:text-warm-white">Contattaci</span>
          </a>
          <a
            href="#servizi"
            className="px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-champagne"
            style={{ color: isDark ? "#8A8480" : "#5A5450" }}
          >
            I Nostri Servizi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div
          className="flex flex-col items-center gap-3"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em]"
            style={{ color: isDark ? "#8A8480" : "#5A5450" }}
          >
            Scorri
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-champagne to-transparent" />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-40 z-10" />
    </section>
  );
}
