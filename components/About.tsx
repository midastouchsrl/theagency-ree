import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="chi-siamo" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      {/* Decorative corner */}
      <div className="absolute right-0 top-0 h-32 w-32 opacity-[0.04]">
        <div className="h-full w-full border-r-2 border-t-2 border-champagne" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              La Nostra Storia
            </span>
            <h2 className="text-3xl font-light tracking-wide text-urban-shadow sm:text-4xl lg:text-5xl">
              Chi Siamo
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-champagne" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Statement */}
          <ScrollReveal delay={1}>
            <div className="flex flex-col justify-center">
              <p className="mb-8 text-xl font-light leading-relaxed text-urban-shadow sm:text-2xl lg:text-3xl">
                La tua migliore agenzia immobiliare nel{" "}
                <span className="text-champagne">cuore dei Parioli</span>
              </p>
              <p className="mb-6 text-base leading-relaxed text-stone">
                THE AGENCY REE si trova nel cuore di Parioli, in Via Giovanni
                Paisiello 41, Palazzo Busiri Vici, in un comodo ed elegante
                appartamento posto al secondo piano. Siamo perfettamente inseriti
                nel mercato immobiliare di Roma grazie alla lunga esperienza del
                socio fondatore, consigliere da anni del Consiglio Provinciale di
                FIAIP Roma.
              </p>
              <p className="text-base leading-relaxed text-stone">
                Il nostro staff è formato da abili professionisti, affidabili e
                competenti, che ti seguiranno fino alla conclusione della pratica
                con dedizione e trasparenza.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Unique trait + values */}
          <ScrollReveal delay={2}>
            <div className="flex flex-col justify-center">
              {/* Unique trait card */}
              <div className="mb-10 border-l-2 border-champagne pl-8">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-champagne">
                  Cosa Ci Rende Unici
                </p>
                <p className="text-lg font-light leading-relaxed text-urban-shadow">
                  Il nostro team è composto da{" "}
                  <span className="font-medium text-champagne">sole donne</span>:
                  una squadra esperta e preparata il cui unico obiettivo è
                  accompagnare il cliente verso la realizzazione di un progetto di
                  felicità, serenità e trasparenza nella compravendita.
                </p>
              </div>

              <p className="mb-8 text-base leading-relaxed text-stone">
                Molti sono i momenti importanti della vita, tra questi rientra
                senza dubbio l&apos;acquisto o la vendita di una casa. Consapevoli
                dell&apos;importanza che tale situazione riveste, vogliamo far
                sentire il cliente tutelato e soddisfatto, mettendo a disposizione
                la nostra vasta esperienza, competenza e trasparenza nel settore
                immobiliare.
              </p>

              {/* Specializations */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Compravendite",
                  "Locazioni",
                  "Permute",
                  "Valutazioni",
                  "Residenziale",
                  "Commerciale",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-urban-shadow"
                  >
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
