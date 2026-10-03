import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DynamicGradient from "@/components/DynamicGradient";

const inter = localFont({ src: "./fonts/inter.woff2", variable: "--font-inter", weight: "400 700", display: "swap", fallback: ["Arial"] });
const rubik = localFont({ src: "./fonts/rubik.woff2", variable: "--font-rubik", weight: "400", display: "swap", fallback: ["Arial"] });
const caveat = localFont({ src: "./fonts/caveat.woff2", variable: "--font-caveat", weight: "400 700", display: "swap", preload: false, fallback: ["cursive"], adjustFontFallback: false });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Arqila Surya Putra | Portfolio",
    template: "%s | Arqila Surya Putra",
  },
  description:
    "Portfolio of Arqila Surya Putra - Software Developer showcasing projects, works, and skills in web development.",
  keywords: [
    "Arqila Surya Putra",
    "portfolio",
    "software developer",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Arqila Surya Putra" }],
  creator: "Arqila Surya Putra",
  metadataBase: new URL("https://arqilasp.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arqila Surya Putra Portfolio",
    title: "Arqila Surya Putra | Portfolio",
    description:
      "Portfolio of Arqila Surya Putra - Software Developer showcasing projects, works, and skills.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arqila Surya Putra | Portfolio",
    description:
      "Portfolio of Arqila Surya Putra - Software Developer showcasing projects, works, and skills.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable} ${caveat.variable}`}>
      <body>
        <DynamicGradient />
        <div className="site-content relative z-0 min-h-[100dvh] overflow-x-hidden">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
