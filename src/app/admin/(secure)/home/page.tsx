import { getPageSectionsAdmin, getPublishedHomePage } from "@/server/services/pages";
import { HomeCmsDashboard } from "@/features/admin/pages/components/HomeCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const [adminData, homeData] = await Promise.all([
    getPageSectionsAdmin("home"),
    getPublishedHomePage(),
  ]);

  return (
    <HomeCmsDashboard
      sections={adminData.sections}
      seo={adminData.seo}
      recruiters={homeData.recruiters}
      awards={homeData.awards}
      testimonials={homeData.testimonials}
      industryPartners={homeData.industryPartners}
      starPerformances={homeData.starPerformances}
    />
  );
}
