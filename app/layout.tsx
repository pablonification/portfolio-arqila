import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DynamicGradient from "@/components/DynamicGradient";

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
    <html lang="en">
      <body>
        <DynamicGradient />
        <div className="relative z-0 min-h-[100dvh] overflow-x-hidden">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
