import { getPageSectionsAdmin } from "@/server/services/pages";
import { UgcCmsDashboard } from "@/features/admin/pages/components/UgcCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminUgcPage() {
  const data = await getPageSectionsAdmin("ugc");

  return <UgcCmsDashboard initialData={data} />;
}
