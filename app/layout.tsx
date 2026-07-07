import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Hernandez — Desarrollador Web & Móvil",
  description:
    "Portafolio de Juan Hernandez. Desarrollo de aplicaciones web y móviles: landings, sistemas de gestión y apps a la medida con React, Next.js y TypeScript.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
