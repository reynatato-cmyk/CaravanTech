import type { ReactNode } from "react";
import ProductImage from "@/components/ProductImage";

export default function LaSolucion() {
  return (
    <section id="solucion" className="bg-rt-section py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Header + imagen ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 reveal">
          <div>
            <p className="text-rt-green text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
              La solución
            </p>
            <h2
              className="apple-headline text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Dos dispositivos. Una plataforma. Todo el rodeo conectado.
            </h2>
            <p className="apple-body text-white/50 mb-8">
              El <strong className="text-white">Btag®</strong> es la caravana inteligente que va en la oreja de cada animal — 40 gramos, hasta 2,5 años de batería, sensor de temperatura, transmisión BLE cada 3 minutos. El <strong className="text-white">Bgw®</strong> es el gateway móvil que recopila todos los datos y los envía vía LoRaWAN hasta 12 km a la estación base, sin necesitar internet en el campo.
            </p>
            <ul className="space-y-3">
              {[
                "BLE de largo alcance: hasta 450 metros de recepción",
                "Triangulación RSSI con margen de error de ±20 metros",
                "LoRaWAN: hasta 12 km sin internet en el campo",
                "Temperatura corporal + medición ITH en tiempo real",
                "Batería Btag® hasta 2,5 años — Bgw® hasta 4 años con panel solar",
                "Carcasa RTP policarbonato: alto impacto, resistente UV, IP67",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 apple-body text-white/60">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

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
              "Ahorra tiempo en localización y arreo del ganado",
              "Conteo diario automático de animales",
              "Control de manejo de hacienda con historial",
              "Prevención del robo de ganado y protección del capital",
              "Trazabilidad blockchain integrada a la cadena productiva",
            ]}
            delay="reveal-delay-1"
          />
          <RichCard
            icon={<PastoreoIcon />}
            title="Pastoreo"
            subtitle="Selección de lotes óptimos e índices verdes NDVI"
            items={[
              "Selección de lotes óptimos por índices verdes (NDVI)",
              "Estimación de biomasa y cálculo de carga animal",
              "Detección de áreas sobrepastoreadas por dinámicas GPS",
              "Calorías consumidas y distancia recorrida diaria",
              "Alertas de días de ocupación y descanso por lote",
            ]}
            delay="reveal-delay-2"
          />
          <RichCard
            icon={<HealthIcon />}
            title="Salud y bienestar"
            subtitle="Monitoreo proactivo de cada animal 24/7"
            items={[
              "Temperatura corporal continua: prevención de pérdidas en partos",
              "ITH en tiempo real: el estrés calórico impacta producción y reproducción",
              "Alertas de comportamiento: rumia, pastoreo, bebida y descanso",
              "Captura de carbono en suelo vía satélite e inteligencia artificial",
            ]}
            delay="reveal-delay-3"
          />
        </div>

        {/* ── Platform callout ── */}
        <div className="reveal border border-rt-green/25 rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-rt-green text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
              Plataforma IoT incluida
            </p>
            <h3 className="apple-subhead font-bold text-white text-2xl md:text-3xl mb-4">
              Big Data · Machine Learning · IA
            </h3>
            <p className="apple-body text-white/50">
              La plataforma Bastó transforma datos de campo en decisiones. Algoritmos de IA aplicados a procesos de mejora continua para una ganadería eficiente y regenerativa — accesible desde cualquier dispositivo.
            </p>
          </div>
          <ul className="space-y-3 apple-body text-white/60">
            {[
              "Tracking de animales en tiempo real con mapa satelital",
              "Gestión individual por animal + trazabilidad blockchain",
              "Biometría: temperatura corporal y medición THI",
              "Balance de carbono: captura de CO₂ y créditos de carbono",
              "Reportes para mercados premium y certificaciones sustentables",
              "Dashboard accesible desde celular, tablet o PC",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Trazabilidad callout ── */}
        <div className="reveal mt-8 bg-rt-green/10 border border-rt-green/20 rounded-xl px-8 py-6 text-center">
          <p className="apple-body text-white/80">
            <strong className="text-white">Trazabilidad extendida con blockchain.</strong>{" "}
            Bastó habilita el acceso a mercados premium internacionales que exigen carne sustentable y carbono neutral — con salud, comportamiento y trazabilidad documentados en tiempo real.
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
