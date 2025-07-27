import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DynamicGradient from "@/components/DynamicGradient";

export const metadata: Metadata = {
  title: "Arqila Surya Putra Portfolio",
  description: "My first portfolio, showcasing my works and skills.",
  icons: {
    icon: "/bear.svg",
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
