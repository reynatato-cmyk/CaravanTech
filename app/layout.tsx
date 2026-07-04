import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bastó — Caravanas IoT para Ganadería Inteligente",
  description:
    "Monitoreo GPS en tiempo real, detección de celo y alertas de salud para tu hacienda. Tecnología ganadera hecha en Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased ${montserrat.variable}`}>
      <body className="min-h-full bg-rt-dark text-white">{children}</body>
    </html>
  );
}
