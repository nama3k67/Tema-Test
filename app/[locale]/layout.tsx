import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Montserrat, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import "../globals.css";

// Load Montserrat with all weights you need
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Load Playfair Display
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Z Tech",
  description: "Z Tech Application",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} font-montserrat antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
