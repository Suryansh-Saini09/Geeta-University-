import { getPageSectionsAdmin } from "@/server/services/pages";
import { CareersCmsDashboard } from "@/features/admin/pages/components/CareersCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminCareersPage() {
  const data = await getPageSectionsAdmin("careers");

  return <CareersCmsDashboard initialData={data} />;
}
