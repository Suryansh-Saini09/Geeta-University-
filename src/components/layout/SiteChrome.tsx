"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/social-links");

  if (isStandaloneRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer />
    </>
  );
}
