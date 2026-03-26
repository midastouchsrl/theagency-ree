import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | The Agency REE",
  description: "Informativa sull'utilizzo dei cookie - The Agency REE",
};

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <p className="mb-12 text-sm text-stone">
          Informativa sull&apos;utilizzo dei cookie ai sensi dell&apos;art. 122 del
          D.Lgs. 196/2003 e del Regolamento UE 2016/679 (GDPR)
        </p>
        <div className="h-[1px] mb-12 w-16 bg-champagne" />

        <div className="space-y-8 text-sm leading-relaxed text-stone [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:tracking-wide [&_h2]:text-urban-shadow [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-urban-shadow [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
          <h2>1. Cosa Sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati
            dall&apos;utente inviano al suo dispositivo (computer, tablet,
            smartphone), dove vengono memorizzati per essere poi ritrasmessi
            agli stessi siti nelle visite successive. I cookie permettono al
            sito di ricordare le azioni e le preferenze dell&apos;utente.
          </p>

          <h2>2. Tipologie di Cookie Utilizzati</h2>

          <h3>Cookie Tecnici (Necessari)</h3>
          <p>
            Questi cookie sono essenziali per il corretto funzionamento del
            sito e non possono essere disabilitati. Comprendono:
          </p>
          <ul>
            <li><strong>Cookie di sessione:</strong> garantiscono la normale navigazione e fruizione del sito web.</li>
            <li><strong>Cookie di preferenza:</strong> memorizzano le scelte dell&apos;utente relative al consenso cookie (cookie-consent).</li>
          </ul>
          <p>
            Questi cookie non richiedono il consenso preventivo dell&apos;utente in
            quanto strettamente necessari alla fornitura del servizio richiesto.
          </p>

          <h3>Cookie di Terze Parti</h3>
          <p>
            Il sito integra il servizio Google Maps per la visualizzazione
            della mappa nella sezione contatti. Google potrebbe impostare
            cookie propri. Per maggiori informazioni sulla politica dei cookie
            di Google, si rimanda a:{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne underline underline-offset-2"
            >
              policies.google.com/technologies/cookies
            </a>
          </p>

          <h2>3. Cookie Utilizzati su Questo Sito</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-champagne/30">
                  <th className="py-3 pr-4 font-medium text-urban-shadow">Nome</th>
                  <th className="py-3 pr-4 font-medium text-urban-shadow">Tipo</th>
                  <th className="py-3 pr-4 font-medium text-urban-shadow">Durata</th>
                  <th className="py-3 font-medium text-urban-shadow">Finalità</th>
                </tr>
              </thead>
              <tbody className="text-stone">
                <tr className="border-b border-champagne/10">
                  <td className="py-3 pr-4">cookie-consent</td>
                  <td className="py-3 pr-4">Tecnico</td>
                  <td className="py-3 pr-4">12 mesi</td>
                  <td className="py-3">Memorizza la scelta dell&apos;utente sui cookie</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>4. Come Gestire i Cookie</h2>
          <p>
            L&apos;utente può gestire le proprie preferenze sui cookie attraverso
            le impostazioni del proprio browser. Di seguito i link alle
            istruzioni per i browser più diffusi:
          </p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-2">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-2">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-2">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-champagne underline underline-offset-2">
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            Si ricorda che la disabilitazione dei cookie tecnici potrebbe
            compromettere il funzionamento di alcune aree del sito.
          </p>

          <h2>5. Titolare del Trattamento</h2>
          <p>
            <strong>The Agency REE</strong>
            <br />
            Via di Villa Emiliani 34, 00197 Roma (RM)
            <br />
            Email:{" "}
            <a href="mailto:info@theagencyree.it" className="text-champagne underline underline-offset-2">
              info@theagencyree.it
            </a>
          </p>
          <p>
            Per ulteriori informazioni sul trattamento dei dati personali,
            consulta la nostra{" "}
            <Link href="/privacy-policy" className="text-champagne underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>

          <h2>6. Aggiornamenti</h2>
          <p>
            La presente Cookie Policy può essere soggetta ad aggiornamenti. Si
            invita l&apos;utente a consultare periodicamente questa pagina per
            essere informato su eventuali modifiche.
          </p>

          <p className="mt-12 border-t border-champagne/20 pt-8 text-xs text-stone/60">
            Ultimo aggiornamento: marzo 2026
          </p>
        </div>
      </article>
    </div>
  );
}
