import Image from "next/image";
import CampoCarousel from "@/components/CampoCarousel";

const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function ElPiloto() {
  return (
    <section id="piloto" className="bg-rt-green-section py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-green-400 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Productores que confían en RodeoTech
          </p>
          <h2
            className="apple-headline text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Nuestros clientes
          </h2>
        </div>

        {/* Contenido: texto+logo | carrusel */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

          {/* Izquierda — texto + logo + stats */}
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

            {/* Testimonial */}
            <div className="reveal reveal-delay-1 relative">
              <span
                className="absolute -top-6 -left-2 text-rt-green/20 font-display font-bold leading-none select-none"
                style={{ fontSize: "8rem" }}
                aria-hidden="true"
              >
                "
              </span>
              <blockquote className="relative">
                <p className="apple-body text-green-100/85 text-lg leading-relaxed mb-6">
                  Yo era bastante escéptico con todo esto. La primera semana me llegó una alerta de una vaca en celo a las dos de la mañana — mandé al peón al otro día temprano y ya estaba cubierta. Ese ternero solo ya me pagó varias caravanas.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-px bg-rt-green/50" />
                  <div>
                    <p className="text-white font-semibold text-sm">Hernán G.</p>
                    <p className="text-green-200/50 text-xs">Encargado de campo · La Escondida</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Derecha — carrusel */}
          <div className="reveal reveal-delay-2">
            <CampoCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
