import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ReactLenis } from "@/utils/lenis";
import { Playfair_Display } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "HyperJump - Webdev agency",
  description: "HyperJump - Webdev agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Playfair.className}`}>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${Playfair.variable} ${space.variable} antialiased selection:bg-stone-200`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
