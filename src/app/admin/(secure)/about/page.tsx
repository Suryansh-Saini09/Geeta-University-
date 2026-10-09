import { getPageSectionsAdmin, getPublishedAboutPage } from "@/server/services/pages";
import { AboutCmsDashboard } from "@/features/admin/pages/components/AboutCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminAboutPage() {
  const [adminData, aboutData] = await Promise.all([
    getPageSectionsAdmin("about"),
    getPublishedAboutPage(),
  ]);

  return (
    <AboutCmsDashboard
      sections={adminData.sections}
      seo={adminData.seo}
      recognitions={aboutData.recognitions}
      awards={aboutData.awards}
      leadership={aboutData.leadership}
      governance={aboutData.governance}
      policies={aboutData.policies}
    />
  );
}
