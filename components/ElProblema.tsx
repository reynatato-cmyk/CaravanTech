export default function ElProblema() {
  return (
    <section id="problema" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 reveal">
          <h2
            className="apple-headline font-bold text-[#1d1d1f] max-w-2xl"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
          >
            Cada año perdés terneros<br />sin saberlo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border-t border-[#1d1d1f]/10">

          {/* Problema 1 */}
          <div className="reveal reveal-delay-1 pt-10 md:pr-16 pb-12 border-b md:border-b-0 md:border-r border-[#1d1d1f]/8">
            <p className="text-[#6e6e73] text-[0.65rem] tracking-[0.35em] uppercase mb-6">Localización</p>
            <h3
              className="apple-headline text-[#1d1d1f] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              No sabés dónde están.
            </h3>
            <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
              Sabés cuántas vacas tenés pero no dónde están ni cómo están. Buscar un animal perdido o enfermo corta la jornada entera — y a veces llegás tarde.
            </p>
          </div>

          {/* Problema 2 */}
          <div className="reveal reveal-delay-2 pt-10 md:pl-16 pb-12">
            <p className="text-[#6e6e73] text-[0.65rem] tracking-[0.35em] uppercase mb-6">Identificación vs. inteligencia</p>
            <h3
              className="apple-headline text-[#1d1d1f] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              Un número no es suficiente.
            </h3>
            <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
              Las caravanas electrónicas de baja frecuencia solo dan un número de identificación. Los dispositivos Bastó son de alta frecuencia: almacenan y procesan información real — salud, comportamiento, pastoreo, trazabilidad. Eso es ganadería inteligente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
