import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-rt-dark text-white">{children}</body>
    </html>
  );
}
