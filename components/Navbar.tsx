"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
        {/* Logo oficial Bastó */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bastó — Ganado Inteligente"
            width={130}
            height={58}
            className="h-9 w-auto"
            priority
          />
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
