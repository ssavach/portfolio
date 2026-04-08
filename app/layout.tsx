import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Savach",
  description:
    "Savach — estudiante. Obsesionado con entender qué hay debajo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark ${sans.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased">
        {/* Background layers — morphing blobs + subtle grid */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="blob blob-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
