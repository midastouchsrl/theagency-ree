import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "Roma", label: "Cuore della Capitale" },
  { value: "FIAIP", label: "Membro del Consiglio" },
  { value: "100%", label: "Dedizione al Cliente" },
  { value: "360°", label: "Assistenza Completa" },
];

const values = [
  {
    title: "Esperienza",
    description:
      "Una presenza consolidata nel mercato immobiliare romano, con una profonda conoscenza del territorio e delle sue dinamiche.",
  },
  {
    title: "Trasparenza",
    description:
      "Ogni fase della compravendita è gestita con la massima chiarezza. Il cliente è sempre informato e tutelato.",
  },
  {
    title: "Dedizione",
    description:
      "Il nostro obiettivo è accompagnarti verso la realizzazione del tuo progetto immobiliare con serenità e professionalità.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="perche-noi"
      className="relative overflow-hidden bg-urban-shadow py-24 dark:bg-dark-elevated lg:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="/pattern-gold.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne">
              I Nostri Valori
            </span>
            <h2 className="text-3xl font-light tracking-wide text-warm-white sm:text-4xl lg:text-5xl">
              Perché Sceglierci
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-champagne" />
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal>
          <div className="mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <span className="text-gold-gradient mb-2 text-3xl font-light tracking-wide sm:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-stone">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Values */}
        <div className="grid gap-8 lg:grid-cols-3">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
              <div className="group border border-warm-white/10 p-8 transition-all duration-500 hover:border-champagne/20 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-champagne" />
                  <h3 className="text-[13px] font-medium uppercase tracking-[0.2em] text-champagne">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-warm-white/70">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
