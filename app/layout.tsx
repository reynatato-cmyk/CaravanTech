import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RodeoTech — Caravanas Inteligentes para tu Rodeo",
  description:
    "Monitoreo GPS en tiempo real, detección de celo y alertas de salud para tu hacienda. Lincoln, Buenos Aires.",
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
