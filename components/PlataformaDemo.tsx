export default function PlataformaDemo() {
  return (
    <section className="bg-rt-dark py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-12 reveal text-center">
          <p className="text-rt-green text-[0.65rem] tracking-[0.35em] uppercase mb-4 font-semibold">
            Demo de la plataforma
          </p>
          <h2
            className="apple-headline text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            La plataforma Bastó en acción
          </h2>
          <p className="apple-body text-white/40 max-w-xl mx-auto">
            Mirá cómo el productor visualiza su rodeo, gestiona potreros y recibe alertas — todo en tiempo real desde cualquier dispositivo.
          </p>
        </div>

        {/* Video embed */}
        <div className="reveal relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          <iframe
            src="https://www.loom.com/embed/59f914f580274f719b35fa96f0911ada?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="Demo de la plataforma Bastó"
          />
        </div>

      </div>
    </section>
  );
}
