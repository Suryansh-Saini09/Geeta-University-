import { getPageSectionsAdmin } from "@/server/services/pages";
import { GeetaInNewsCmsDashboard } from "@/features/admin/pages/components/GeetaInNewsCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminGeetaInNewsPage() {
  const data = await getPageSectionsAdmin("geeta-in-news");

  return <GeetaInNewsCmsDashboard initialData={data} />;
}
