"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#perche-noi", label: "Perche Noi" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  // Logo logic:
  // Over hero (not scrolled) → always light logo (hero is dark)
  // Scrolled, light mode → dark logo (on warm-white bg)
  // Scrolled, dark mode → light logo (on dark bg)
  const logoSrc =
    !scrolled || theme === "dark" ? "/logo-light.png" : "/logo-dark.png";

  // Text color:
  // Over hero → warm-white
  // Scrolled, light mode → urban-shadow
  // Scrolled, dark mode → warm-white/light-text
  const textClass = scrolled
    ? theme === "dark"
      ? "text-light-text"
      : "text-urban-shadow"
    : "text-warm-white";

  const hamburgerColor = scrolled
    ? theme === "dark"
      ? "bg-light-text"
      : "bg-urban-shadow"
    : "bg-warm-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === "dark"
            ? "bg-dark-base/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(189,156,114,0.15)]"
            : "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(189,156,114,0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src={logoSrc}
            alt="The Agency REE"
            width={140}
            height={48}
            className="h-10 w-auto transition-opacity duration-300 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-champagne ${textClass}`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 hover:text-champagne ${textClass}`}
            aria-label={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className={`relative z-10 flex h-8 w-8 items-center justify-center transition-colors hover:text-champagne ${
              mobileOpen
                ? theme === "dark"
                  ? "text-light-text"
                  : "text-urban-shadow"
                : textClass
            }`}
            aria-label={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? `translate-y-[3.5px] rotate-45 ${theme === "dark" ? "bg-light-text" : "bg-urban-shadow"}`
                  : hamburgerColor
              }`}
            />
            <span
              className={`h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? `-translate-y-[2.5px] -rotate-45 ${theme === "dark" ? "bg-light-text" : "bg-urban-shadow"}`
                  : hamburgerColor
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 transition-all duration-500 md:hidden ${
          theme === "dark" ? "bg-dark-base" : "bg-warm-white"
        } ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-lg font-medium uppercase tracking-[0.25em] transition-colors hover:text-champagne ${
                theme === "dark" ? "text-light-text" : "text-urban-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
