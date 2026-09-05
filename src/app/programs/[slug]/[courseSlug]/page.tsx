import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CoursePage from "@/components/programs/course/CoursePage";
import {
  getCourseBySlug,
  getAllCourseParams,
} from "@/lib/programs/courseRepository";
import { getProgramBySlug } from "@/lib/programs/programRepository";

interface PageProps {
  params: Promise<{
    slug: string;
    courseSlug: string;
  }>;
}

export async function generateStaticParams() {
  const paramsList = getAllCourseParams();
  return paramsList.map(({ schoolSlug, courseSlug }) => ({
    slug: schoolSlug,
    courseSlug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, courseSlug } = await params;

  const course = getCourseBySlug(slug, courseSlug);

  if (!course) {
    return {};
  }

  return {
    title: course.seo.title,
    description: course.seo.description,
    keywords: course.seo.keywords,
    alternates: {
      canonical: course.seo.canonical,
    },
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      images: course.seo.ogImage ? [{ url: course.seo.ogImage }] : undefined,
    },
  };
}

export default async function CourseRoute({ params }: PageProps) {
  const { slug, courseSlug } = await params;

  const course = getCourseBySlug(slug, courseSlug);

  if (!course) {
    notFound();
  }

  const school = getProgramBySlug(slug);

  return <CoursePage course={course} school={school} />;
}
