"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FloatingSocialBar from "@/components/layout/FloatingSocialBar";
import type {
  AdmissionCtaSettings,
  AnnouncementSettings,
  ContactSettings,
  SiteMetadataSettings,
  SocialLinkItem,
} from "@/validations/siteSettings";

interface SiteChromeClientProps {
  children: React.ReactNode;
  contactSettings: ContactSettings;
  announcementSettings: AnnouncementSettings;
  admissionCtaSettings: AdmissionCtaSettings;
  socialLinks: SocialLinkItem[];
  siteMetadata: SiteMetadataSettings;
}

export default function SiteChromeClient({
  children,
  contactSettings,
  announcementSettings,
  admissionCtaSettings,
  socialLinks,
  siteMetadata,
}: SiteChromeClientProps) {
  const pathname = usePathname();
  const isStandaloneRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/social-links");

  if (isStandaloneRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar
        contactSettings={contactSettings}
        announcementSettings={announcementSettings}
        admissionCtaSettings={admissionCtaSettings}
      />
      <FloatingSocialBar socialLinks={socialLinks} />
      <main className="w-full min-w-0 flex-1">{children}</main>
      <Footer
        contactSettings={contactSettings}
        socialLinks={socialLinks}
        siteMetadata={siteMetadata}
      />
    </>
  );
}
