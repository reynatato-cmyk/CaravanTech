export default function ElProblema() {
  return (
    <section id="problema" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Headline — sin eyebrow genérico, el título lleva el peso */}
        <div className="mb-20 reveal">
          <h2
            className="apple-headline font-bold text-[#1d1d1f] max-w-2xl"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
          >
            Cada año perdés terneros<br />sin saberlo.
          </h2>
        </div>

        {/* Problemas — layout editorial con borde superior, sin íconos genéricos */}
        <div className="grid md:grid-cols-3 border-t border-[#1d1d1f]/10">

          {/* Problema 1 — cifra como elemento visual */}
          <div className="reveal reveal-delay-1 pt-10 md:pr-12 pb-12 border-b md:border-b-0 md:border-r border-[#1d1d1f]/8">
            <p className="text-[#6e6e73] text-[0.65rem] tracking-[0.35em] uppercase mb-6">Pérdida productiva</p>
            <p
              className="font-display font-bold text-[#1d1d1f] leading-none mb-4"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)", letterSpacing: "-0.035em" }}
            >
              USD 8.000
            </p>
            <h3 className="apple-subhead text-[#1d1d1f] text-lg mb-3">Animales sin monitoreo</h3>
            <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
              Sin datos en tiempo real, los problemas de salud y comportamiento se detectan tarde. El costo de un animal perdido o un lote mal manejado supera con creces el de la tecnología.
            </p>
          </div>

          {/* Problema 2 */}
          <div className="reveal reveal-delay-2 pt-10 md:px-12 pb-12 border-b md:border-b-0 md:border-r border-[#1d1d1f]/8">
            <p className="text-[#6e6e73] text-[0.65rem] tracking-[0.35em] uppercase mb-6">Localización</p>
            <h3
              className="apple-headline text-[#1d1d1f] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.025em" }}
            >
              No sabés dónde están.
            </h3>
            <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
              Sabés cuántas vacas tenés pero no dónde están. Buscar un animal perdido o enfermo corta la jornada entera — y a veces llegás tarde.
            </p>
          </div>

          {/* Problema 3 */}
          <div className="reveal reveal-delay-3 pt-10 md:pl-12 pb-12">
            <p className="text-[#6e6e73] text-[0.65rem] tracking-[0.35em] uppercase mb-6">Mercados premium</p>
            <h3
              className="apple-headline text-[#1d1d1f] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", letterSpacing: "-0.025em" }}
            >
              El mundo pide trazabilidad.
            </h3>
            <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
              Los mercados más exigentes requieren carne sustentable y carbono neutral con la cadena documentada. Sin tecnología, tu hacienda no califica — y SENASA ya lo exige desde 2026.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
