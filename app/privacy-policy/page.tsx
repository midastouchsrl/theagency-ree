import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Agency REE",
  description: "Informativa sulla privacy ai sensi del GDPR - The Agency REE",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-cream pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-6 lg:px-12">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-champagne transition-colors hover:text-champagne-dark"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Torna alla Home
        </Link>

        <h1 className="mb-4 text-3xl font-light tracking-wide text-urban-shadow sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-stone">
          Informativa sul trattamento dei dati personali ai sensi degli artt. 13
          e 14 del Regolamento UE 2016/679 (GDPR)
        </p>
        <div className="h-[1px] mb-12 w-16 bg-champagne" />

        <div className="prose-agency space-y-8 text-sm leading-relaxed text-stone [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:tracking-wide [&_h2]:text-urban-shadow [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-urban-shadow [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
          <h2>1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è <strong>The Agency REE</strong>,
            con sede legale in Via Giovanni Paisiello 41, Palazzo Busiri Vici,
            00198 Roma (RM), Italia.
          </p>
          <p>
            Email: <a href="mailto:info@theagencyree.it" className="text-champagne underline underline-offset-2">info@theagencyree.it</a>
            <br />
            Telefono: +39 340 912 0930
          </p>

          <h2>2. Tipologie di Dati Raccolti</h2>
          <p>
            I dati personali raccolti attraverso questo sito web, autonomamente o
            tramite terze parti, includono:
          </p>
          <ul>
            <li><strong>Dati di contatto:</strong> nome, cognome, indirizzo email, numero di telefono, forniti volontariamente attraverso il modulo di contatto.</li>
            <li><strong>Dati di navigazione:</strong> dati tecnici raccolti automaticamente durante la navigazione (indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orario di accesso).</li>
            <li><strong>Cookie:</strong> per maggiori dettagli consulta la nostra <Link href="/cookie-policy" className="text-champagne underline underline-offset-2">Cookie Policy</Link>.</li>
          </ul>

          <h2>3. Finalità del Trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <ul>
            <li><strong>Rispondere alle richieste di contatto</strong> inviate tramite il modulo presente sul sito (base giuridica: consenso dell&apos;interessato, art. 6.1.a GDPR).</li>
            <li><strong>Gestione delle richieste commerciali</strong> relative a servizi immobiliari (base giuridica: esecuzione di misure precontrattuali, art. 6.1.b GDPR).</li>
            <li><strong>Adempimento di obblighi legali</strong> a cui è soggetto il Titolare (base giuridica: obbligo legale, art. 6.1.c GDPR).</li>
            <li><strong>Funzionamento tecnico del sito web</strong> e garanzia della sicurezza informatica (base giuridica: legittimo interesse, art. 6.1.f GDPR).</li>
          </ul>

          <h2>4. Modalità di Trattamento</h2>
          <p>
            Il trattamento dei dati personali è effettuato con strumenti
            informatici e/o telematici, con logiche strettamente correlate alle
            finalità indicate e, comunque, in modo da garantire la sicurezza e la
            riservatezza dei dati stessi, nel rispetto delle misure
            organizzative, fisiche e logiche previste dalle disposizioni vigenti.
          </p>

          <h2>5. Comunicazione e Diffusione dei Dati</h2>
          <p>
            I dati personali non saranno diffusi. Potranno essere comunicati a:
          </p>
          <ul>
            <li>Soggetti che necessitano di accedervi per finalità ausiliarie al rapporto tra il Titolare e l&apos;interessato (es. provider di hosting, servizi email).</li>
            <li>Autorità competenti su richiesta e nei limiti della legge.</li>
          </ul>
          <p>
            I dati non sono trasferiti al di fuori dello Spazio Economico Europeo (SEE).
          </p>

          <h2>6. Conservazione dei Dati</h2>
          <p>
            I dati personali raccolti tramite il modulo di contatto saranno
            conservati per il tempo necessario a evadere la richiesta e, in ogni
            caso, per un periodo non superiore a <strong>24 mesi</strong> dalla
            raccolta, salvo obblighi di legge che ne impongano una conservazione
            più lunga.
          </p>
          <p>
            I dati di navigazione sono conservati per il tempo strettamente
            necessario alla gestione tecnica del sito.
          </p>

          <h2>7. Diritti dell&apos;Interessato</h2>
          <p>
            Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:
          </p>
          <ul>
            <li>Ottenere la conferma dell&apos;esistenza dei propri dati e accedere al loro contenuto (diritto di accesso).</li>
            <li>Aggiornare, rettificare o integrare i dati (diritto di rettifica).</li>
            <li>Chiedere la cancellazione dei dati (diritto all&apos;oblio).</li>
            <li>Chiedere la limitazione del trattamento.</li>
            <li>Opporsi al trattamento dei dati.</li>
            <li>Ricevere i propri dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico (diritto alla portabilità).</li>
            <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca.</li>
          </ul>
          <p>
            Per esercitare i propri diritti, è possibile inviare una richiesta a{" "}
            <a href="mailto:info@theagencyree.it" className="text-champagne underline underline-offset-2">info@theagencyree.it</a>.
          </p>
          <p>
            L&apos;interessato ha inoltre il diritto di proporre reclamo all&apos;Autorità
            Garante per la Protezione dei Dati Personali (
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-2">www.garanteprivacy.it</a>
            ).
          </p>

          <h2>8. Modifiche alla Privacy Policy</h2>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla
            presente informativa in qualunque momento, dandone comunicazione
            attraverso questa pagina. Si prega di consultare periodicamente
            questa pagina per verificare eventuali aggiornamenti.
          </p>

          <p className="mt-12 border-t border-champagne/20 pt-8 text-xs text-stone/60">
            Ultimo aggiornamento: marzo 2026
          </p>
        </div>
      </article>
    </div>
  );
}
