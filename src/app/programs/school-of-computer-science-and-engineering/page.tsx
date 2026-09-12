import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { computerScienceSchool } from "@/data/programs/schools/computerScience";

export const metadata: Metadata = {
  title: computerScienceSchool.seo.title,
  description: computerScienceSchool.seo.description,
  keywords: computerScienceSchool.seo.keywords,
};

export const dynamic = "force-dynamic";

export default function SchoolOfComputerSciencePage() {
  return <ProgramPage data={computerScienceSchool} />;
}
