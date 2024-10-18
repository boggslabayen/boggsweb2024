import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StickyNavbar } from "./components/ui/Navbar";
import "./globals.css";
import Footer from "./components/ui/Footer";
import { quickSand } from "./components/ui/Fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Labayen | Portfolio",
  description: "Learn something about me then let's collaborate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <StickyNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
