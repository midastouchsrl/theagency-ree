import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-urban-shadow">
      {/* Background pittogramma watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
        <Image
          src="/a-gold.png"
          alt=""
          width={800}
          height={800}
          className="h-[80vh] w-auto object-contain"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Subtle gold pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #BD9C72 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Gold line above */}
        <div className="mb-8 h-[1px] w-16 bg-champagne gold-line-animated" />

        {/* Logo */}
        <Image
          src="/logo-white.png"
          alt="The Agency REE"
          width={280}
          height={96}
          className="mb-8 h-16 w-auto object-contain sm:h-20 md:h-24"
          priority
        />

        {/* Tagline */}
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.35em] text-champagne">
          Real Estate Experts
        </p>

        {/* Main headline */}
        <h1 className="max-w-3xl text-3xl font-light leading-tight tracking-wide text-warm-white sm:text-4xl md:text-5xl lg:text-6xl">
          Eccellenza Immobiliare
          <br />
          <span className="text-gold-gradient font-normal">
            nel Cuore di Roma
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-stone sm:text-lg">
          Soluzioni immobiliari su misura nel quartiere Parioli.
          <br className="hidden sm:block" />
          Consulenze e servizi esclusivi dal nostro team di esperte.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contatti"
            className="group relative overflow-hidden border border-champagne px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] text-champagne transition-all duration-500 hover:text-urban-shadow"
          >
            <span className="absolute inset-0 -translate-x-full bg-champagne transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Contattaci</span>
          </a>
          <a
            href="#servizi"
            className="px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.2em] text-warm-white/60 transition-colors duration-300 hover:text-champagne"
          >
            I Nostri Servizi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div
          className="flex flex-col items-center gap-3"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone">
            Scorri
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-champagne to-transparent" />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-40" />
    </section>
  );
}
