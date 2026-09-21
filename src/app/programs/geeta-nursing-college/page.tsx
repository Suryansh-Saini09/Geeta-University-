import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { nursingSchool } from "@/data/programs/schools/nursing";

export const metadata: Metadata = {
  title: nursingSchool.seo.title,
  description: nursingSchool.seo.description,
  keywords: nursingSchool.seo.keywords,
};

export const dynamic = "force-dynamic";

export default function GeetaNursingCollegePage() {
  return <ProgramPage data={nursingSchool} />;
}
