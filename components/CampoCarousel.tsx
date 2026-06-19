"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  { type: "image" as const, src: "/laescondida1.jpg", alt: "Campo La Escondida — Lincoln" },
  { type: "image" as const, src: "/laescondida2.jpg", alt: "Campo La Escondida — hacienda" },
  { type: "video" as const, src: "/laescondida3.mov" },
];

const INTERVAL = 5000;

export default function CampoCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [current]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="w-full">
      {/* Slides */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <video
                ref={i === current ? videoRef : undefined}
                src={slide.src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay={i === current}
              />
            )}
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
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
