import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Valutazioni Immobiliari",
    description:
      "Valutazioni gratuite e certificate degli immobili, con analisi di mercato dettagliata e programmi dedicati per risultati ottimali.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M9 7h6m-6 4h6m-6 4h4M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    title: "Compravendita Residenziale",
    description:
      "Appartamenti, ville e immobili di pregio. Ti accompagniamo dalla ricerca fino alla conclusione della trattativa con professionalità.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Compravendita Commerciale",
    description:
      "Negozi, uffici e attività commerciali. Soluzioni su misura per investitori e imprenditori nel mercato romano.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M3 21h18M4 21V10l8-7 8 7v11M9 21v-4h6v4M9 10h6M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Locazioni",
    description:
      "Locazioni di abitazioni residenziali e immobili commerciali, con supporto completo nella gestione contrattuale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
    ),
  },
  {
    title: "Consulenza Tecnica",
    description:
      "Supporto su pratiche urbanistiche, catastali, di mutuo, notarili e legali. Una rete di professionisti al tuo servizio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M12 2a3 3 0 00-3 3v1a3 3 0 006 0V5a3 3 0 00-3-3zM20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      </svg>
    ),
  },
  {
    title: "Assistenza Post-Vendita",
    description:
      "Il nostro impegno non finisce con la firma. Continuiamo ad assisterti anche dopo la conclusione dell'affare.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="relative bg-warm-white py-24 dark:bg-dark-base lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              Cosa Facciamo
            </span>
            <h2 className="text-3xl font-light tracking-wide text-urban-shadow dark:text-light-text sm:text-4xl lg:text-5xl">
              I Nostri Servizi
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-champagne" />
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-stone dark:text-light-muted">
              I nostri clienti possono contare su un servizio di alta qualità che
              li accompagna in ogni fase, dalla ricerca dell&apos;immobile fino
              alla conclusione della trattativa.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div className="group relative h-full border border-warm-white bg-cream p-8 transition-all duration-500 hover:border-champagne/30 hover:shadow-[0_8px_40px_-12px_rgba(189,156,114,0.15)] dark:border-dark-border dark:bg-dark-surface dark:hover:border-champagne/20 lg:p-10">
                {/* Gold corner accent */}
                <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-champagne/0 transition-all duration-500 group-hover:border-champagne/40" />
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-champagne/0 transition-all duration-500 group-hover:border-champagne/40" />

                <div className="mb-6 text-champagne transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-[13px] font-medium uppercase tracking-[0.2em] text-urban-shadow dark:text-light-text">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone dark:text-light-muted">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Network section */}
        <ScrollReveal>
          <div className="mt-20 border-t border-champagne/20 pt-12 text-center">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              La Nostra Rete
            </p>
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 text-sm text-stone dark:text-light-muted">
              {[
                "Geometri e Architetti",
                "Studi Notarili",
                "Consulenti Marketing",
                "Home Stager",
                "Fotografi Professionisti",
              ].map((partner) => (
                <div key={partner} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-champagne" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
