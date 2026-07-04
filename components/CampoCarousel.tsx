"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/basto2.jpg", alt: "Hacienda con caravanas Bastó — campo abierto" },
  { src: "/basto5.jpg", alt: "Rodeo de Angus con caravanas Bastó en la pampa" },
  { src: "/basto1.jpg", alt: "Caravanas Bastó aplicadas en rodeo" },
];

const INTERVAL = 5000;

export default function CampoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
