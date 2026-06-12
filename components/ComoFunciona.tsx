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
        <div className="mb-16 reveal">
          <p className="text-rt-green text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Cómo funciona
          </p>
          <h2
            className="apple-headline text-[#1d1d1f] max-w-xl"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Tres pasos para empezar
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className={`relative overflow-hidden reveal ${delayClasses[i]}`}>
              {/* Large background number — signature visual element */}
              <span
                className="absolute -top-4 -left-2 font-display font-bold text-zinc-900/[0.055] select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(7rem, 14vw, 10rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative pt-12">
                <p className="font-display font-semibold text-rt-green text-sm tracking-wider mb-4">
                  {step.number}
                </p>
                <h3 className="apple-subhead text-[#1d1d1f] text-xl mb-3">
                  {step.title}
                </h3>
                <p className="apple-body text-[#6e6e73]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
