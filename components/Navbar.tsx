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
        {/* Logo — estilo Bastó */}
        <a href="#" className="flex items-center gap-3">
          <RodeoTechIcon />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-[1.1rem] tracking-wide text-white uppercase">
              Rodeo<span className="text-rt-green">Tech</span>
            </span>
            <span className="font-display text-[0.55rem] tracking-[0.28em] text-white/40 uppercase mt-[3px]">
              Ganado Inteligente
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-[0.7rem] tracking-widest uppercase text-white/55 font-display">
          <a href="#problema" className="hover:text-white transition-colors">El problema</a>
          <a href="#solucion"  className="hover:text-white transition-colors">La solución</a>
          <a href="#piloto"    className="hover:text-white transition-colors">El piloto</a>
          <a href="#contacto"  className="hover:text-white transition-colors">Contacto</a>
        </nav>

        {/* CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] font-display font-semibold tracking-widest uppercase border border-white/30 hover:border-rt-green hover:text-rt-green text-white px-5 py-2.5 rounded-full transition-all duration-300"
        >
          Escribinos
        </a>
      </div>
    </header>
  );
}

function RodeoTechIcon() {
  return (
    <svg
      width="52"
      height="34"
      viewBox="0 0 52 34"
      fill="none"
      aria-label="RodeoTech"
    >
      {/* Ala izquierda — cuerno estilizado */}
      <path
        d="M22 17 C17 16 10 13 4 8 C2 7 1 5 2 3"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Ala derecha — espejo */}
      <path
        d="M30 17 C35 16 42 13 48 8 C50 7 51 5 50 3"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cuerpo central — curva inferior de la cabeza */}
      <path
        d="M20 19 Q20 28 26 30 Q32 28 32 19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      {/* Pin GPS — verde, centrado arriba */}
      <path
        d="M26 0 C22.5 0 20 2.8 20 6.5 C20 11.5 26 18 26 18 C26 18 32 11.5 32 6.5 C32 2.8 29.5 0 26 0Z"
        fill="#2E7D32"
      />
      {/* Punto interior del pin */}
      <circle cx="26" cy="6.5" r="2.8" fill="white" />
    </svg>
  );
}
