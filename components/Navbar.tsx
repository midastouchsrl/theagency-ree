"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#perche-noi", label: "Perche Noi" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(189,156,114,0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src={scrolled ? "/logo-colori.png" : "/logo-white.png"}
            alt="The Agency REE"
            width={140}
            height={48}
            className="h-10 w-auto transition-opacity duration-300 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-champagne ${
                  scrolled ? "text-urban-shadow" : "text-warm-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-[1.5px] w-6 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-[3.5px] rotate-45 bg-urban-shadow"
                : scrolled
                ? "bg-urban-shadow"
                : "bg-warm-white"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 transition-all duration-300 ${
              mobileOpen
                ? "-translate-y-[2.5px] -rotate-45 bg-urban-shadow"
                : scrolled
                ? "bg-urban-shadow"
                : "bg-warm-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-warm-white transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium uppercase tracking-[0.25em] text-urban-shadow transition-colors hover:text-champagne"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
