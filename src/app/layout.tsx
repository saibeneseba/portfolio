import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://saibeneseba.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sebastián Saibene — Full Stack Developer Jr",
    template: "%s | Sebastián Saibene",
  },
  description:
    "Desarrollador Full Stack Junior con foco en Frontend. React, TypeScript, Next.js, Java y Spring Boot. Certificado por Digital House (CTD), respaldado por Globant y Mercado Libre.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Java",
    "Spring Boot",
    "Buenos Aires",
    "Argentina",
    "Sebastián Saibene",
  ],
  authors: [{ name: "Sebastián Saibene", url: siteUrl }],
  creator: "Sebastián Saibene",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    title: "Sebastián Saibene — Full Stack Developer Jr",
    description:
      "Portfolio de Sebastián Saibene. Full Stack Dev Jr con foco en Frontend. React · TypeScript · Next.js · Java · Spring Boot.",
    siteName: "Sebastián Saibene",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sebastián Saibene — Full Stack Developer Jr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Saibene — Full Stack Developer Jr",
    description:
      "Portfolio de Sebastián Saibene. React · TypeScript · Next.js · Java · Spring Boot.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}