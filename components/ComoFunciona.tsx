const steps = [
  {
    number: "01",
    tag: "Btag®",
    title: "La caravana registra cada animal",
    desc: "El Btag® va en la oreja. 40 gramos. Sensor de temperatura, BLE de largo alcance. Transmite identidad, actividad y bienestar cada 3 minutos con un alcance de hasta 450 metros.",
  },
  {
    number: "02",
    tag: "Bgw®",
    title: "El gateway recopila el campo entero",
    desc: "El Bgw® va en un animal guía o punto fijo. Recibe los datos de todos los Btag® por BLE y los envía vía LoRaWAN hasta 12 km — sin internet, sin infraestructura adicional.",
  },
  {
    number: "03",
    tag: "Base Station",
    title: "La antena conecta el campo a la nube",
    desc: "La estación base LoRaWAN tiene cobertura de 6 a 15 km con antena externa. Certificación IP67. Conectividad 4G global con backup 3G/2G y Ethernet. Los datos suben a la nube en tiempo real.",
  },
  {
    number: "04",
    tag: "Software IA",
    title: "Los datos se convierten en decisiones",
    desc: "Los algoritmos de Big Data, Machine Learning e IA de Bastó procesan el flujo continuo de datos. Biomasa, NDVI, ITH, calorías, carbono — todo calculado automáticamente.",
  },
  {
    number: "05",
    tag: "Dashboard",
    title: "Vos ves todo desde cualquier dispositivo",
    desc: "El productor accede al mapa de su establecimiento en tiempo real: ubicación de cada animal, alertas de salud, dinámica de pastoreo, índices verdes y reportes para trazabilidad — desde el celular.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 reveal">
          <p className="text-rt-green text-[0.65rem] tracking-[0.35em] uppercase mb-4 font-semibold">
            Sistema Bastó
          </p>
          <h2
            className="apple-headline text-[#1d1d1f]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            Cómo funciona la tecnología
          </h2>
        </div>

        {/* Mobile: lista vertical / Desktop: dos filas */}
        <div className="flex flex-col gap-0">

          {/* Fila 1: Hardware (3 pasos) */}
          <div className="grid md:grid-cols-3 border-t border-[#1d1d1f]/10">
            {steps.slice(0, 3).map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} pt-10 pb-12 ${
                  i < 2 ? "md:pr-12 md:border-r border-[#1d1d1f]/8" : ""
                } ${i > 0 ? "md:pl-12" : ""} border-b md:border-b-0 border-[#1d1d1f]/10`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-rt-green text-xs font-bold tracking-[0.25em]">
                    {step.number}
                  </p>
                  <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#1d1d1f]/30 border border-[#1d1d1f]/15 px-2 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                </div>
                <h3 className="apple-subhead text-[#1d1d1f] text-xl mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="apple-body text-[#6e6e73] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fila 2: Software (2 pasos) */}
          <div className="grid md:grid-cols-2 border-t border-[#1d1d1f]/10">
            {steps.slice(3).map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} pt-10 pb-12 ${
                  i === 0 ? "md:pr-16 md:border-r border-[#1d1d1f]/8 border-b md:border-b-0 border-[#1d1d1f]/10" : "md:pl-16"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-rt-green text-xs font-bold tracking-[0.25em]">
                    {step.number}
                  </p>
                  <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#1d1d1f]/30 border border-[#1d1d1f]/15 px-2 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                </div>
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
      </div>
    </section>
  );
}
