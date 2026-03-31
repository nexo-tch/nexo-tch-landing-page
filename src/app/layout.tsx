import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexo Vending — Máquinas de café premium para tu empresa | Medellín",
  description:
    "Máquinas vending de café de especialidad, proteína y snacks premium para oficinas, coworkings y gimnasios en Medellín. Instalación en 48h, sin costo, sin compromiso.",
  keywords: [
    "máquinas vending",
    "café oficina",
    "vending Medellín",
    "café premium empresas",
    "máquina café coworking",
    "Nexo Vending",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Nexo Vending — Café premium en tu oficina sin invertir un peso",
    description:
      "Instalamos máquinas de café de especialidad, proteína y snacks en tu empresa. Sin costo de instalación, sin compromiso.",
    url: "https://nexovending.com",
    siteName: "Nexo Vending",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Vending — Café premium para tu empresa",
    description:
      "Máquinas vending de café de especialidad en tu oficina. Instalación en 48h, sin costo.",
  },
  metadataBase: new URL("https://nexovending.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-nexo-black text-nexo-white font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
