import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
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
          <Navbar />

          <main className="w-full min-w-0 flex-1">
            {children}
          </main>

          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}