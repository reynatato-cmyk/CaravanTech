import Image from "next/image";
import CampoCarousel from "@/components/CampoCarousel";

const stats = [
  { value: "+40%", label: "Reducción en tiempos de gestión del rodeo" },
  { value: "100%", label: "Trazabilidad individual de cada animal" },
  { value: "0", label: "Pérdidas por animales fuera de zona" },
];

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

            <p className="apple-body text-green-100/70 mb-10">
              El primer despliegue de RodeoTech fue en este establecimiento ganadero real, con necesidades reales. Los resultados confirmaron que la tecnología funciona en el campo argentino.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`reveal ${delayClasses[i]} bg-white/8 border border-white/10 rounded-xl p-5`}
                >
                  <p
                    className="apple-headline text-white leading-none mb-2"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-green-200/55 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
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
