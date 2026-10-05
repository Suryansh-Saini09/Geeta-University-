import type { Metadata } from "next";
import ProgramPage from "@/components/programs/ProgramPage";
import { computerScienceSchool } from "@/data/programs/schools/computerScience";
import { getPublishedDepartment } from "@/server/services/publicAcademic";

const departmentSlug = "school-of-computer-science-and-engineering";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const department = await getPublishedDepartment(departmentSlug);
  return {
    title: department?.seo?.title ?? department?.name ?? computerScienceSchool.seo.title,
    description: department?.seo?.description ?? department?.summary ?? computerScienceSchool.seo.description,
    keywords: computerScienceSchool.seo.keywords,
    robots: department?.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function SchoolOfComputerSciencePage() {
  const department = await getPublishedDepartment(departmentSlug);
  if (!department) return <ProgramPage data={computerScienceSchool} />;

  const summary = department.summary?.trim();
  const safeSummary = summary?.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
  const data = {
    ...computerScienceSchool,
    name: department.name,
    shortName: department.shortName ?? computerScienceSchool.shortName,
    hero: { ...computerScienceSchool.hero, title: department.name, description: summary ?? computerScienceSchool.hero.description },
    about: {
      ...computerScienceSchool.about!,
      title: department.name,
      paragraphs: safeSummary ? [safeSummary] : computerScienceSchool.about!.paragraphs,
    },
  };

  return <ProgramPage data={data} />;
}
