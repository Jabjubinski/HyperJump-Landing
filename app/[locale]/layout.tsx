import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Header from "@/components/Header";
import { ReactLenis } from "@/utils/lenis";
import { Playfair_Display } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import Footer from "@/components/footer";

// next-intl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";

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

const notoSans = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "HyperJump - Webdev agency",
  description: "HyperJump - Webdev agency",
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
    <html lang={locale} className={`${Playfair.className}`}>
      <body
        className={`${geistSans.variable} ${notoSans.variable} ${geistMono.variable} ${Playfair.variable} ${space.variable} antialiased selection:bg-stone-200`}
      >
        <ReactLenis root>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
