import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gloty — Amor real, comida real",
  description: "Alimento natural para perros, formulado por nutricionistas veterinarios. Ingredientes 100% reales, cocidos a baja temperatura.",
  openGraph: {
    title: "Gloty — Amor real, comida real",
    description: "Alimento natural para perros. Ingredientes 100% reales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
