import CampoCarousel from "@/components/CampoCarousel";

export default function ElPiloto() {
  return (
    <section id="piloto" className="bg-rt-green-section py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <p className="text-green-400 text-[0.65rem] tracking-[0.35em] uppercase mb-4 font-semibold">
            Bastó en el campo
          </p>
          <h2
            className="apple-headline text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Funcionando en establecimientos<br />de toda Argentina.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

          {/* Izquierda — datos reales */}
          <div className="reveal">
            <p className="apple-body text-green-100/70 mb-10 text-lg leading-relaxed">
              Miles de animales monitoreados en tiempo real. Productores ganaderos que ya toman decisiones con datos — no con suposiciones.
            </p>

            {/* Stats de Bastó */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "+5.000", label: "Animales monitoreados activamente" },
                { value: "LoRa", label: "Conectividad de largo alcance sin internet" },
                { value: "24/7", label: "Monitoreo continuo, alertas en tiempo real" },
                { value: "SENASA", label: "Compatible con trazabilidad oficial" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 3) + 1} bg-white/8 border border-white/10 rounded-xl p-5`}
                >
                  <p
                    className="apple-headline text-white leading-none mb-2"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-green-200/55 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Derecha — carrusel con fotos reales */}
          <div className="reveal reveal-delay-2">
            <CampoCarousel />
          </div>

        </div>
      </div>
    </section>
  );
}
