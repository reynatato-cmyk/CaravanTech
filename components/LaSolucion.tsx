import type { ReactNode } from "react";
import ProductImage from "@/components/ProductImage";

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
          <ProductImage />
        </div>

        {/* ── Tres formas en que Bastó trabaja ── */}
        <div className="mb-10 reveal">
          <p className="text-rt-green text-xs tracking-[0.35em] uppercase mb-3 font-semibold">
            Tecnología en acción
          </p>
          <h3 className="apple-headline text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Tres formas en que Bastó trabaja para el productor
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <RichCard
            icon={<GpsIcon />}
            title="Geoposición"
            subtitle="Ubicación e identificación del ganado en tiempo real"
            items={[
              "Ahorra tiempos en la localización y el arreo del ganado",
              "Control del manejo de hacienda",
              "Conteo diario de animales",
              "Prevención del robo de ganado y protección del capital",
              "Aporta trazabilidad a la cadena productiva",
            ]}
            delay="reveal-delay-1"
          />
          <RichCard
            icon={<PastoreoIcon />}
            title="Pastoreo"
            subtitle="Monitoreo de patrones de comportamiento en la alimentación"
            items={[
              "Detecta cambios en tiempos de pastoreo, bebida, rumia y descanso",
              "Relaciona alteraciones con menor oferta o baja calidad forrajera",
              "Usa distancias recorridas para estimar gasto calórico diario",
            ]}
            delay="reveal-delay-2"
          />
          <RichCard
            icon={<HealthIcon />}
            title="Salud"
            subtitle="Gestión proactiva de la salud animal a través de alertas"
            items={[
              "Monitoreo de temperatura 24/7: evitá perder crías durante el parto",
              "Control de ITH: el estrés calórico afecta producción y reproducción",
              "Disminución de índices reproductivos en vacas y toros",
              "Bajo condiciones extremas, previene la muerte de animales",
            ]}
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

function RichCard({ icon, title, subtitle, items, delay }: {
  icon: ReactNode; title: string; subtitle: string; items: string[]; delay: string;
}) {
  return (
    <div className={`border border-white/8 rounded-2xl p-8 reveal ${delay} hover:border-rt-green/40 transition-colors duration-300 flex flex-col`}>
      <div className="w-10 h-10 text-rt-green mb-5">{icon}</div>
      <h3 className="apple-subhead text-white text-xl mb-2">{title}</h3>
      <p className="text-rt-green text-xs mb-5 leading-snug">{subtitle}</p>
      <ul className="space-y-2.5 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-white/55 text-sm leading-snug">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
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

function PastoreoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 5 6c3 0 5.5 1.5 7 4z" />
      <path d="M12 12C12 12 17 10 19 6c-3 0-5.5 1.5-7 4z" />
      <path d="M12 17C12 17 8 15.5 6 12c2.5.5 4.5 2 6 5z" />
      <path d="M12 17C12 17 16 15.5 18 12c-2.5.5-4.5 2-6 5z" />
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
