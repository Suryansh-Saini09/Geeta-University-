import {
  getAdmissionCtaSettings,
  getAnnouncementSettings,
  getContactSettings,
  getSiteMetadataSettings,
  getSocialLinksSettings,
} from "@/server/services/siteSettings";
import { getLocale } from "@/lib/i18n/getLocale";
import SiteChromeClient from "@/components/layout/SiteChromeClient";

export default async function SiteChrome({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const [contactSettings, announcementSettings, admissionCtaSettings, socialLinksSettings, siteMetadata] =
    await Promise.all([
      getContactSettings(locale),
      getAnnouncementSettings(locale),
      getAdmissionCtaSettings(locale),
      getSocialLinksSettings(),
      getSiteMetadataSettings(locale),
    ]);

  return (
    <SiteChromeClient
      contactSettings={contactSettings}
      announcementSettings={announcementSettings}
      admissionCtaSettings={admissionCtaSettings}
      socialLinks={socialLinksSettings.links}
      siteMetadata={siteMetadata}
    >
      {children}
    </SiteChromeClient>
  );
}
