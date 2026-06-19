import Image from "next/image";
import CampoCarousel from "@/components/CampoCarousel";

export default function ElPiloto() {
  return (
    <section id="piloto" className="bg-rt-green-section py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-green-400 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Primer piloto
          </p>
          <h2
            className="apple-headline text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            En implementación
          </h2>
        </div>

        {/* Contenido: texto+logo | carrusel */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

          {/* Izquierda — texto + logo + estado */}
          <div className="reveal">
            {/* Logo La Escondida */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/90 rounded-xl p-3 flex items-center justify-center w-20 h-20 shrink-0">
                <Image
                  src="/logo-escondida.jpg"
                  alt="Campo La Escondida"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="apple-subhead text-white font-semibold">La Escondida</p>
                <p className="apple-body text-green-200/60 text-sm">Lincoln, Buenos Aires</p>
              </div>
            </div>

            <p className="apple-body text-green-100/70 mb-10">
              El primer kit de caravanas Bastó está próximo a llegar al campo. Así se va a ver el monitoreo en tiempo real de un rodeo real, en condiciones reales de la Provincia de Buenos Aires.
            </p>

            {/* Estado del piloto */}
            <div className="bg-white/8 border border-white/10 rounded-2xl p-6 reveal reveal-delay-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rt-green animate-pulse shrink-0" />
                <p className="text-white font-semibold text-sm tracking-wide">Piloto en proceso de implementación</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Kit de caravanas Bastó asignado al establecimiento",
                  "Instalación pendiente de llegada del equipo al campo",
                  "Resultados reales disponibles una vez iniciado el monitoreo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-green-200/55 text-sm leading-snug">
                    <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rt-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Derecha — carrusel con aclaración */}
          <div className="reveal reveal-delay-2">
            <p className="text-green-200/45 text-xs tracking-[0.2em] uppercase mb-3">El campo donde se implementará</p>
            <CampoCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
