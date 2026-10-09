import { getPageSectionsAdmin } from "@/server/services/pages";
import { ContactUsCmsDashboard } from "@/features/admin/pages/components/ContactUsCmsDashboard";

export const dynamic = "force-dynamic";

export default async function AdminContactUsPage() {
  const data = await getPageSectionsAdmin("contact-us");

  return <ContactUsCmsDashboard initialData={data} />;
}
