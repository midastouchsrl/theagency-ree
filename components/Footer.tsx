import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--bg-dark-section)" }}>
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-40" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-light.png"
              alt="The Agency REE"
              width={160}
              height={56}
              className="mb-6 h-12 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-warm-white/50">
              Real Estate Experts nel cuore di Roma. Soluzioni immobiliari
              su misura con competenza e trasparenza.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#chi-siamo", label: "Chi Siamo" },
                { href: "#servizi", label: "Servizi" },
                { href: "#perche-noi", label: "Perche Noi" },
                { href: "#contatti", label: "Contatti" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-white/50 transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
              Contatti
            </h4>
            <ul className="space-y-3 text-sm text-warm-white/50">
              <li>
                Via di Villa Emiliani 34
                <br />
                Roma - Parioli
              </li>
              <li>
                <a
                  href="mailto:info@theagencyree.it"
                  className="transition-colors hover:text-champagne"
                >
                  info@theagencyree.it
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393409120930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-champagne"
                >
                  +39 340 912 0930
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
              Informazioni Legali
            </h4>
            <ul className="mb-8 space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-warm-white/50 transition-colors hover:text-champagne"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-warm-white/50 transition-colors hover:text-champagne"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            {/* Social */}
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
              Seguici
            </h4>
            <a
              href="https://www.instagram.com/the.agencyree/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-warm-white/50 transition-colors hover:text-champagne"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @the.agencyree
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-warm-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-warm-white/30">
            &copy; {currentYear} The Agency REE - Dionisi Stefano | P.IVA
            11245791006 | REA RM-1289409
          </p>
          <p className="text-xs text-warm-white/30">
            Agente Immobiliare iscritto alla CCIAA di Roma
          </p>
        </div>
      </div>
    </footer>
  );
}
