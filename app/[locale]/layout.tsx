import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Space_Grotesk,
  Noto_Serif_Georgian,
} from "next/font/google";
import "../../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { ReactLenis } from "@/utils/lenis";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const notoSans = Noto_Serif_Georgian({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "HyperJump | Digital Experience Agency",
  description:
    "HyperJump is a web development agency crafting immersive digital experiences.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${space.variable} ${geistSans.variable} ${geistMono.variable} ${notoSans.variable}`}
    >
      <body className="font-sans antialiased bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        <ReactLenis root>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Cursor/>
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
