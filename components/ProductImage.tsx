"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProductImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(48px) scale(0.9)",
        transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className="relative w-full max-w-sm mx-auto">
        {/* Glow pulsante */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl"
          style={{
            background: "#2E7D32",
            opacity: visible ? undefined : 0,
            animation: visible ? "glowPulse 4s ease-in-out 0.8s infinite" : "none",
          }}
        />
        {/* Imagen flotante */}
        <div style={{ animation: visible ? "productFloat 5.5s ease-in-out 0.8s infinite" : "none" }}>
          <Image
            src="/caravana.png"
            alt="Caravana inteligente Bastó — frente y dorso"
            width={520}
            height={480}
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
