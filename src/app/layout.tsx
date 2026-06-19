import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoaderOverlay from "@/components/layout/LoaderOverlay";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { PageTransition } from "@/components/ui/PageTransition";
import { FloatingContactButtons } from "@/components/ui/FloatingContactButtons";
import { CookieConsentProvider } from "@/components/providers/CookieConsentProvider";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import { GTMScript } from "@/components/analytics/GTMScript";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lalanicomputers.com'),
  title: {
    default: "Lalani Computers | Corporate IT Hardware & Turnkey Solutions Mumbai",
    template: "%s | Lalani Computers",
  },
  description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services. Over 30 years of excellence.",
  keywords: ["IT Hardware", "Corporate IT", "Laptops", "Servers", "Networking", "Mumbai IT supplier", "Turnkey IT Solutions"],
  authors: [{ name: "Lalani Computers" }],
  creator: "Lalani Computers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Lalani Computers",
    title: "Lalani Computers | Corporate IT Hardware & Turnkey Solutions",
    description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalani Computers | Corporate IT Hardware",
    description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, and turnkey office setups.",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col relative overflow-x-hidden">
        <CookieConsentProvider>
          <GTMScript />
          <CookieConsentBanner />
          <PageTransition />
          <ScrollProgressBar />
          <FloatingContactButtons />
          <LoaderOverlay />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-beige">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow flex flex-col pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
