import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Softwaremine | AI-Powered Platforms for Clinics, Education & SaaS",
  description:
    "Softwaremine builds modern clinic management systems, education platforms, SaaS dashboards, and AI-powered digital products designed for scalability, speed, and real-world workflows.",
  metadataBase: new URL("https://softwaremine.vercel.app"),
  generator: "Softwaremine",
  keywords: ["Clinic Management", "SaaS MVP Development", "Education Platforms", "AI Integrations", "Software Agency"],
  authors: [{ name: "Softwaremine" }],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Softwaremine | AI-Powered Platforms for Clinics, Education & SaaS",
    description: "Modern digital systems for healthcare, education, and startup environments.",
    url: "https://softwaremine.vercel.app",
    siteName: "Softwaremine",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
