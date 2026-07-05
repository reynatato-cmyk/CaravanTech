import Image from "next/image";

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
          Caravanas IoT de largo alcance para monitoreo ganadero en tiempo real. Salud, bienestar, comportamiento en pastoreo y producción de pasto — todo desde el celular.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}

