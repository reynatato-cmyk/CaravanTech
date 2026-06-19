const steps = [
  {
    number: "01",
    title: "Consultás por WhatsApp",
    desc: "Contanos el tamaño de tu rodeo y te armamos el kit ideal. En menos de 24 hs tenés la propuesta con cantidad de caravanas y costo total.",
  },
  {
    number: "02",
    title: "Recibís las caravanas en tu campo",
    desc: "El kit llega a tu establecimiento. Las ponés en las orejas de tus animales vos mismo, sin técnicos, sin instalaciones, en menos de una hora.",
  },
  {
    number: "03",
    title: "Ves todo desde el celular",
    desc: "Accedés a la plataforma RodeoTech y empezás a monitorear tu rodeo en tiempo real. GPS, celo, salud y alertas — todo en un solo lugar.",
  },
];

const delayClasses = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function ComoFunciona() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 reveal">
          <p className="text-rt-green text-[0.65rem] tracking-[0.35em] uppercase mb-4 font-semibold">
            Cómo funciona
          </p>
          <h2
            className="apple-headline text-[#1d1d1f]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Tres pasos para empezar
          </h2>
        </div>

        {/* Pasos — layout editorial con borde superior, sin números ghost */}
        <div className="grid md:grid-cols-3 border-t border-[#1d1d1f]/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal ${delayClasses[i]} pt-10 pb-12 ${
                i < 2 ? "md:pr-12 md:border-r border-[#1d1d1f]/8" : ""
              } ${i > 0 ? "md:pl-12" : ""}`}
            >
              <p className="text-rt-green text-xs font-bold tracking-[0.25em] mb-6">
                {step.number}
              </p>
              <h3 className="apple-subhead text-[#1d1d1f] text-xl mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
