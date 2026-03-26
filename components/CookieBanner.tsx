"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-champagne/20 bg-urban-shadow/95 px-6 py-5 backdrop-blur-md transition-all duration-500">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-warm-white/70">
          Utilizziamo cookie tecnici per garantire il corretto funzionamento del
          sito. Per maggiori informazioni consulta la nostra{" "}
          <Link
            href="/cookie-policy"
            className="text-champagne underline underline-offset-2"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="px-5 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-warm-white/50 transition-colors hover:text-warm-white"
          >
            Solo Necessari
          </button>
          <button
            onClick={accept}
            className="bg-champagne px-5 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-urban-shadow transition-colors hover:bg-champagne-light"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
