"use client";

import { useState, useEffect } from "react";
import { WA_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-rt-dark/96 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo Bastó — marca de ganado + texto hasta que llegue logo oficial */}
        <a href="#" className="flex items-center gap-3">
          <BastoIcon />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-[1.15rem] tracking-[0.08em] text-white uppercase">
              Bast<span className="text-rt-green">ó</span>
            </span>
            <span className="font-display text-[0.55rem] tracking-[0.28em] text-white/40 uppercase mt-[3px]">
              Caravanas IoT
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-[0.7rem] tracking-widest uppercase text-white/55 font-display">
          <a href="#problema" className="hover:text-white transition-colors">El problema</a>
          <a href="#solucion"  className="hover:text-white transition-colors">La solución</a>
          <a href="#piloto"    className="hover:text-white transition-colors">Clientes</a>
          <a href="#contacto"  className="hover:text-white transition-colors">Contacto</a>
        </nav>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] font-display font-semibold tracking-widest uppercase border border-white/30 hover:border-rt-green hover:text-rt-green text-white px-5 py-2.5 rounded-full transition-all duration-300"
        >
          Contactanos
        </a>
      </div>
    </header>
  );
}

function BastoIcon() {
  return (
    <svg
      width="48"
      height="44"
      viewBox="0 0 60 52"
      fill="none"
      aria-label="Bastó"
    >
      {/* Marca de ganado — fierro gaucho */}
      <line x1="15" y1="5" x2="45" y2="5" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="5" x2="30" y2="24" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 24 Q22 26 15 36 Q13 40 11 43" stroke="white" strokeWidth="3.8" strokeLinecap="round" fill="none" />
      <path d="M30 24 Q38 26 45 36 Q47 40 49 43" stroke="white" strokeWidth="3.8" strokeLinecap="round" fill="none" />
      <path d="M11 43 Q8 46 6 44" stroke="white" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M49 43 Q52 46 54 44" stroke="white" strokeWidth="3.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
