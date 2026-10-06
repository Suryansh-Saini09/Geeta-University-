import type { Metadata } from "next";
import LenisProvider from "@/components/providers/LenisProvider";
import SiteChrome from "@/components/layout/SiteChrome";
import { getLocale } from "@/lib/i18n/getLocale";
import { LOCALE_DIRECTIONS } from "@/lib/i18n/localization";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geeta University | Panipat, Delhi NCR",
  description: "Welcome to Geeta University, a premier state university in Panipat, Haryana.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dir = LOCALE_DIRECTIONS[locale] || "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <LenisProvider>
          <SiteChrome>
            {children}
          </SiteChrome>
        </LenisProvider>
      </body>
    </html>
  );
}
