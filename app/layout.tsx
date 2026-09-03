import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AppMotionConfig } from "@/components/motion-config";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://softwaremine.vercel.app";

export const metadata: Metadata = {
  title: "Softwaremine | Software Systems, SaaS & AI Automation",
  description:
    "Softwaremine builds modern software systems, SaaS products and AI-powered automation solutions for healthcare, education and growing businesses.",
  metadataBase: new URL(siteUrl),
  generator: "Softwaremine",
  keywords: [
    "Software Systems",
    "SaaS Development",
    "AI Automation",
    "Healthcare Software",
    "Education Platforms",
    "Business Automation",
  ],
  authors: [{ name: "Softwaremine" }],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Softwaremine | Software Systems, SaaS & AI Automation",
    description:
      "Softwaremine builds modern software systems, SaaS products and AI-powered automation solutions for healthcare, education and growing businesses.",
    url: siteUrl,
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
  twitter: {
    card: "summary_large_image",
    title: "Softwaremine | Software Systems, SaaS & AI Automation",
    description:
      "Softwaremine builds modern software systems, SaaS products and AI-powered automation solutions for healthcare, education and growing businesses.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <AppMotionConfig>{children}</AppMotionConfig>
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
