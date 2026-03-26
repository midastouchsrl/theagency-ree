import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="chi-siamo" className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="absolute right-0 top-0 h-32 w-32 opacity-[0.04]">
        <div className="h-full w-full border-r-2 border-t-2 border-champagne" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">La Nostra Storia</span>
            <h2 className="text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl" style={{ color: "var(--text-heading)" }}>Chi Siamo</h2>
            <div className="mt-6 h-[1px] w-16 bg-champagne" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={1}>
            <div className="flex flex-col justify-center">
              <p className="mb-8 text-xl font-light leading-relaxed sm:text-2xl lg:text-3xl" style={{ color: "var(--text-heading)" }}>
                Assistenza immobiliare <span className="text-champagne">d&apos;eccellenza</span>
              </p>
              <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                Con sede nel cuore di Roma, THE AGENCY REE mette al servizio dei propri clienti esperienza e professionalità per un&apos;assistenza immobiliare d&apos;eccellenza. Accompagniamo ogni cliente con dedizione in tutte le fasi della trattativa, fino alla piena soddisfazione.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                Siamo specializzati in compravendite, locazioni, permute e valutazioni di mercato, trattando immobili residenziali e commerciali: appartamenti, ville, negozi e attività.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="flex flex-col justify-center">
              <div className="mb-10 border-l-2 border-champagne pl-8">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">La Nostra Filosofia</p>
                <p className="text-lg font-light leading-relaxed" style={{ color: "var(--text-heading)" }}>
                  Acquistare o vendere casa è uno dei momenti più significativi della vita. Ne siamo profondamente consapevoli: per questo offriamo un servizio fondato su{" "}
                  <span className="font-medium text-champagne">competenza, trasparenza e assistenza personalizzata</span>, garantendo un&apos;esperienza affidabile e su misura.
                </p>
              </div>

              <p className="mb-8 text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                Offriamo inoltre servizi di consulenza tecnica, notarile e finanziaria, oltre a supporto post-vendita, collaborando con professionisti qualificati per valorizzare al meglio ogni immobile.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["Compravendite", "Locazioni", "Permute", "Valutazioni", "Residenziale", "Commerciale"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-heading)" }}>
                    <div className="h-1 w-1 rounded-full bg-champagne" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
