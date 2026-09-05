import type { CoursePageData } from "@/data/programs/courses/types";
import { mscAgricultureAgronomy } from "@/data/programs/courses/agriculture/msc-agriculture-agronomy";
import { phdAgriculture } from "@/data/programs/courses/agriculture/phd-agriculture";
import { bscAgriculture } from "@/data/programs/courses/agriculture/bsc-agriculture";

const courses: CoursePageData[] = [
  bscAgriculture,
  mscAgricultureAgronomy,
  phdAgriculture,
];

// Helper to normalize school slug for comparison (handling aliases)
function normalizeSchoolSlug(slug: string): string {
  const s = slug.toLowerCase();
  if (s === "school-of-agricultural-sciences") return "school-of-agricultural-studies";
  if (s === "school-of-humanities-and-social-sciences") return "school-of-humanities";
  if (s === "school-of-management-and-business-studies") return "school-of-commerce";
  if (s === "school-of-sciences") return "school-of-forensic-sciences";
  if (s === "spbsb") return "sp-bansal-school-of-business";
  return s;
}

export function getCourseBySlug(
  schoolSlug: string,
  courseSlug: string
): CoursePageData | undefined {
  const normSchool = normalizeSchoolSlug(schoolSlug);
  const normCourse = courseSlug.toLowerCase();

  return courses.find(
    (c) =>
      normalizeSchoolSlug(c.schoolSlug) === normSchool &&
      c.slug.toLowerCase() === normCourse
  );
}

export function getCoursesBySchool(schoolSlug: string): CoursePageData[] {
  const normSchool = normalizeSchoolSlug(schoolSlug);
  return courses.filter((c) => normalizeSchoolSlug(c.schoolSlug) === normSchool);
}

export function getAllCourses(): CoursePageData[] {
  return courses;
}

export function getAllCourseParams(): { schoolSlug: string; courseSlug: string }[] {
  const params: { schoolSlug: string; courseSlug: string }[] = [];

  courses.forEach((c) => {
    // Primary school slug
    params.push({
      schoolSlug: c.schoolSlug,
      courseSlug: c.slug,
    });

    // Also include canonical alias if applicable
    if (c.schoolSlug === "school-of-agricultural-studies") {
      params.push({
        schoolSlug: "school-of-agricultural-sciences",
        courseSlug: c.slug,
      });
    }
  });

  return params;
}
