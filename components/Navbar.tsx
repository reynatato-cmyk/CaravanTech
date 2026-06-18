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
          Escribinos
        </a>
      </div>
    </header>
  );
}

function RodeoTechIcon() {
  return (
    <svg
      width="54"
      height="36"
      viewBox="0 0 54 36"
      fill="none"
      aria-label="RodeoTech"
    >
      {/* Penacho izquierdo — pluma de búho */}
      <path
        d="M21 13 C17 11 11 8 4 4 C2 3 1 1 2 0"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Penacho derecho — espejo */}
      <path
        d="M33 13 C37 11 43 8 50 4 C52 3 53 1 52 0"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cara — óvalo */}
      <ellipse
        cx="27"
        cy="21"
        rx="11"
        ry="13"
        stroke="white"
        strokeWidth="1.6"
        fill="none"
        opacity="0.55"
      />
      {/* Ojo izquierdo */}
      <circle cx="22" cy="19" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="19" r="1.6" fill="#2E7D32" />
      {/* Ojo derecho */}
      <circle cx="32" cy="19" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="32" cy="19" r="1.6" fill="#2E7D32" />
      {/* Pico */}
      <path
        d="M25 23 L27 26 L29 23"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
