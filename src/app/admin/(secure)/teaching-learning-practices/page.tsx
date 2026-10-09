import { getPageSectionsAdmin } from "@/server/services/pages";
import { TeachingCmsDashboard } from "@/features/admin/pages/components/TeachingCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminTeachingPracticesPage() {
  const data = await getPageSectionsAdmin("teaching-learning-practices");

  return <TeachingCmsDashboard initialData={data} />;
}
