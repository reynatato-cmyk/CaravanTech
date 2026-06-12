import type { ReactNode } from "react";

export default function ElProblema() {
  return (
    <section id="problema" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <p className="text-rt-green text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            El problema
          </p>
          <h2
            className="apple-headline font-bold text-[#1d1d1f] max-w-2xl"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
          >
            El productor ganadero mediano de hoy
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <ProblemCard
            icon={<BellOffIcon />}
            title="Celos sin detectar"
            desc="En un rodeo de 200 vacas, perder 10 celos por temporada son 10 terneros menos. A precio actual, eso supera los USD 8.000 que se pierden sin que te des cuenta."
            delay="reveal-delay-1"
          />
          <ProblemCard
            icon={<LocationOffIcon />}
            title="Sin ubicación en tiempo real"
            desc="Sabés cuántas vacas tenés pero no dónde están. Buscar un animal perdido o enfermo corta la jornada entera — y a veces llegás tarde."
            delay="reveal-delay-2"
          />
          <ProblemCard
            icon={<AlertIcon />}
            title="Caravanas electrónicas: obligatorias"
            desc="Desde enero de 2026, SENASA exige caravanas electrónicas para bovinos. El que no digitalice su rodeo empieza a quedar fuera del sistema."
            delay="reveal-delay-3"
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  delay: string;
}) {
  return (
    <div className={`reveal ${delay}`}>
      <div className="w-10 h-10 text-rt-green mb-6">{icon}</div>
      <h3 className="apple-subhead text-[#1d1d1f] text-xl mb-3">{title}</h3>
      <p className="apple-body text-[#6e6e73]">{desc}</p>
    </div>
  );
}

function BellOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
      <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}

function LocationOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      <path d="m10 10 4 4m0-4-4 4" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
