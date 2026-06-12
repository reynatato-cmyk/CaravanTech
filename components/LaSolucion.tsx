import type { ReactNode } from "react";
import Image from "next/image";

export default function LaSolucion() {
  return (
    <section id="solucion" className="bg-rt-section py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header + product image ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 reveal">
          <div>
            <p className="text-rt-green text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
              La solución
            </p>
            <h2
              className="apple-headline text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Hardware IoT + plataforma digital para tu rodeo
            </h2>
            <p className="apple-body text-white/50 mb-8">
              La caravana Bastó va en la oreja del animal y transmite datos en tiempo real a tu celular. Sin técnicos. Sin instalaciones. Vos mismo la ponés en menos de un minuto.
            </p>
            <ul className="space-y-3">
              {[
                "GPS con geolocalización precisa en tiempo real",
                "Detección automática de celo con alerta al celular",
                "Sensor de temperatura y comportamiento",
                "Batería de hasta 2 años sin recarga",
                "Conectividad LoRaWAN — no necesita internet en el campo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 apple-body text-white/60">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product image */}
          <div className="flex items-center justify-center reveal reveal-delay-2">
            <div className="relative w-full max-w-sm">
              {/* Glow de fondo */}
              <div className="absolute inset-0 bg-rt-green/10 rounded-3xl blur-3xl scale-110" />
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

        {/* ── Feature cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={<GpsIcon />}
            title="GPS en tiempo real"
            desc="Sabés exactamente dónde está cada animal en tu campo, desde el celular, a cualquier hora del día."
            delay="reveal-delay-1"
          />
          <FeatureCard
            icon={<CycleIcon />}
            title="Detección de celo automática"
            desc="El sensor detecta el momento exacto y te manda una alerta. Actuás ese mismo día — sin madrugar, sin recorrer el campo."
            delay="reveal-delay-2"
          />
          <FeatureCard
            icon={<HealthIcon />}
            title="Alertas de salud"
            desc="Si un animal sube la temperatura o muestra comportamiento inusual, recibís una alerta para actuar antes de que se complique."
            delay="reveal-delay-3"
          />
        </div>

        {/* ── Platform callout ── */}
        <div className="reveal border border-rt-green/25 rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-rt-green text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
              Plataforma digital incluida
            </p>
            <h3 className="apple-subhead font-bold text-white text-2xl md:text-3xl mb-4">
              Tu rodeo entero en la palma de tu mano
            </h3>
            <p className="apple-body text-white/50">
              La plataforma RodeoTech muestra el mapa de tu campo con cada animal en tiempo real, historial de alertas, registros por animal y reportes exportables. Desde{" "}
              <strong className="text-white">USD 30/mes</strong> según el tamaño de tu rodeo.
            </p>
          </div>
          <ul className="space-y-3 apple-body text-white/60">
            {[
              "Mapa en tiempo real de todo el rodeo",
              "Alertas de celo, salud y temperatura",
              "Historial individual por animal",
              "Reportes exportables para trazabilidad SENASA",
              "Soporte por WhatsApp Business",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── ROI callout ── */}
        <div className="reveal mt-8 bg-rt-green/10 border border-rt-green/20 rounded-xl px-8 py-6 text-center">
          <p className="apple-body text-white/80">
            <strong className="text-white">Las caravanas se pagan solas en la primera temporada</strong>{" "}
            por los terneros recuperados gracias a la detección de celo.
          </p>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, delay }: {
  icon: ReactNode; title: string; desc: string; delay: string;
}) {
  return (
    <div className={`border border-white/8 rounded-2xl p-8 reveal ${delay} hover:border-rt-green/40 transition-colors duration-300`}>
      <div className="w-10 h-10 text-rt-green mb-6">{icon}</div>
      <h3 className="apple-subhead text-white text-xl mb-3">{title}</h3>
      <p className="apple-body text-white/50">{desc}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-rt-green mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GpsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CycleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
