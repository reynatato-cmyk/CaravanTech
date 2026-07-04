import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ElProblema from "@/components/ElProblema";
import LaSolucion from "@/components/LaSolucion";
import ComoFunciona from "@/components/ComoFunciona";
import PlataformaDemo from "@/components/PlataformaDemo";
import ElPiloto from "@/components/ElPiloto";
import Contacto from "@/components/Contacto";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElProblema />
        <LaSolucion />
        <ComoFunciona />
        <PlataformaDemo />
        <ElPiloto />
        <Contacto />
      </main>
      <WhatsAppFloat />
      <ScrollRevealInit />
    </>
  );
}
