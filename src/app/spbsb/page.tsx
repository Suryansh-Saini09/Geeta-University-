import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { spBansalSchool } from "@/data/programs/schools/spBansal";

export const metadata: Metadata = {
  title: spBansalSchool.seo.title,
  description: spBansalSchool.seo.description,
  keywords: spBansalSchool.seo.keywords,
};

export const dynamic = "force-dynamic";

export default function SPBSBPage() {
  return <ProgramPage data={spBansalSchool} />;
}
