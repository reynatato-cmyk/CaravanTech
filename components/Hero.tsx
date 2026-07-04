import Image from "next/image";
import { WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Imagen hero — vaca negra con dispositivo Bastó visible */}
      <Image
        src="/basto4.jpg"
        alt="Caravana Bastó en hacienda"
        fill
        priority
        className="object-cover object-[center_30%] hero-video-zoom"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85 z-[2]" />

      {/* Intro overlay — se desvanece al cargar */}
      <div className="hero-intro-overlay absolute inset-0 bg-black z-20 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="animate-hero-eyebrow text-rt-green text-xs tracking-[0.4em] uppercase mb-8 font-semibold">
          Tecnología ganadera · Argentina
        </p>
        <h1
          className="animate-hero-title apple-headline text-white mb-6"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Cada animal,<br />conectado.
        </h1>
        <p className="animate-hero-sub apple-body text-white/65 mb-12 max-w-xl mx-auto">
          Caravanas IoT de largo alcance para monitoreo ganadero en tiempo real. GPS, detección de celo y alertas de salud — todo desde el celular.
        </p>
        <div className="animate-hero-cta">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-rt-green hover:bg-rt-green-deep text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_32px_rgba(46,125,50,0.45)]"
          >
            <WaIcon />
            Hablá con Bastó
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
