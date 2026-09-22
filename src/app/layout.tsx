import type { Metadata } from "next";
import LenisProvider from "@/components/providers/LenisProvider";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geeta University | Panipat, Delhi NCR",
  description: "Welcome to Geeta University, a premier state university in Panipat, Haryana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
