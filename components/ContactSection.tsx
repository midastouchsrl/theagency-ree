"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", message: "", privacy: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              Parliamo del Tuo Progetto
            </span>
            <h2 className="text-3xl font-light tracking-wide text-urban-shadow sm:text-4xl lg:text-5xl">
              Contattaci
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-champagne" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Form */}
          <ScrollReveal delay={1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Nome e Cognome"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input-premium"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-premium"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="input-premium"
                />
              </div>
              <div>
                <textarea
                  placeholder="Il tuo messaggio..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="input-premium resize-none"
                />
              </div>

              {/* Privacy consent */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={(e) =>
                    setFormData({ ...formData, privacy: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 accent-champagne"
                />
                <span className="text-xs leading-relaxed text-stone">
                  Ho letto e accetto la{" "}
                  <a
                    href="/privacy-policy"
                    className="text-champagne underline underline-offset-2"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>{" "}
                  e acconsento al trattamento dei miei dati personali ai sensi
                  del GDPR (Reg. UE 2016/679).
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative overflow-hidden border border-champagne px-10 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] text-champagne transition-all duration-500 hover:text-urban-shadow disabled:opacity-50"
              >
                <span className="absolute inset-0 -translate-x-full bg-champagne transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">
                  {status === "sending"
                    ? "Invio in corso..."
                    : status === "sent"
                    ? "Messaggio Inviato"
                    : "Invia Messaggio"}
                </span>
              </button>

              {status === "sent" && (
                <p className="text-sm text-champagne">
                  Grazie per averci contattato. Ti risponderemo al più presto.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Si è verificato un errore. Riprova o contattaci direttamente.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Right: Contact info */}
          <ScrollReveal delay={2}>
            <div className="flex flex-col justify-between lg:pl-8">
              {/* Contact details */}
              <div className="space-y-8">
                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                    Sede
                  </p>
                  <p className="text-base leading-relaxed text-urban-shadow">
                    Via di Villa Emiliani 34
                    <br />
                    Roma - Parioli
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                    Contatti
                  </p>
                  <div className="space-y-2">
                    <p className="text-base text-urban-shadow">
                      <span className="text-stone">Giorgia Cordeschi</span>
                    </p>
                    <a
                      href="mailto:info@theagencyree.it"
                      className="block text-base text-urban-shadow transition-colors hover:text-champagne"
                    >
                      info@theagencyree.it
                    </a>
                    <a
                      href="https://wa.me/393409120930"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base text-urban-shadow transition-colors hover:text-champagne"
                    >
                      +39 340 912 0930
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                    Social
                  </p>
                  <a
                    href="https://www.instagram.com/the.agencyree/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-urban-shadow transition-colors hover:text-champagne"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @the.agencyree
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/393409120930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[#25D366]/30 bg-[#25D366]/5 px-6 py-3.5 text-[13px] font-medium text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Scrivici su WhatsApp
                </a>
              </div>

              {/* Map embed placeholder */}
              <div className="mt-10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.1!2d12.4752!3d41.9284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f8e5e7e7b7%3A0x0!2sVia+di+Villa+Emiliani+34%2C+Roma!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.3) sepia(0.15)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Agency REE - Mappa"
                  className="rounded-none"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
