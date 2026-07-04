import CampoCarousel from "@/components/CampoCarousel";

export default function ElPiloto() {
  return (
    <section id="piloto" className="bg-rt-green-section py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 reveal">
          <p className="text-green-400 text-[0.65rem] tracking-[0.35em] uppercase mb-3 font-semibold">
            Bastó en el campo
          </p>
          <h2
            className="apple-headline text-white"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Funcionando en establecimientos<br />de toda Argentina.
          </h2>
        </div>

        {/* Grilla asimétrica: carrusel dominante + stats */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-start">

          {/* Izquierda — carrusel */}
          <div className="reveal">
            <CampoCarousel />
          </div>

          {/* Derecha — texto + stats verticales */}
          <div className="reveal reveal-delay-2 flex flex-col gap-8">
            <p className="apple-body text-green-100/60 text-base leading-relaxed">
              Miles de animales monitoreados en tiempo real. Productores que ya toman decisiones con datos — no con suposiciones.
            </p>

            <div className="flex flex-col">
              {[
                { value: "+5.000", label: "Animales monitoreados activamente" },
                { value: "LoRa",   label: "Conectividad sin internet, largo alcance" },
                { value: "24/7",   label: "Monitoreo continuo y alertas en tiempo real" },
                { value: "SENASA", label: "Compatible con trazabilidad oficial" },
              ].map((s, i) => (
                <div key={i} className="border-t border-white/10 py-5">
                  <p
                    className="apple-headline text-white leading-none mb-1"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-green-200/50 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
