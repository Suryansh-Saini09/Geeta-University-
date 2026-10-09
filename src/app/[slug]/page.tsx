import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CoursePage from "@/components/programs/course/CoursePage";
import {
  getCourseByDirectSlug,
  getAllCourses,
} from "@/lib/programs/courseRepository";
import { getProgramBySlug } from "@/lib/programs/programRepository";
import { getLocale } from "@/lib/i18n/getLocale";
import { getPublishedPageBySlug } from "@/server/services/pages";
import { parsePageSections } from "@/validations/page";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allCourses = getAllCourses();
  return allCourses.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();

  const course = getCourseByDirectSlug(slug);
  if (course) {
    const canonical =
      locale === "en"
        ? `https://geetauniversity.edu.in/${course.slug}`
        : `https://geetauniversity.edu.in/${locale}/${course.slug}`;

    return {
      title: course.seo.title,
      description: course.seo.description,
      keywords: course.seo.keywords,
      alternates: {
        canonical,
        languages: {
          en: `https://geetauniversity.edu.in/${course.slug}`,
          hi: `https://geetauniversity.edu.in/hi/${course.slug}`,
          fr: `https://geetauniversity.edu.in/fr/${course.slug}`,
          "x-default": `https://geetauniversity.edu.in/${course.slug}`,
        },
      },
      openGraph: {
        title: course.seo.title,
        description: course.seo.description,
        images: course.seo.ogImage ? [{ url: course.seo.ogImage }] : undefined,
      },
    };
  }

  try {
    const page = await getPublishedPageBySlug(slug);
    if (page) {
      return {
        title: page.seo?.title ?? page.title,
        description: page.seo?.description ?? undefined,
        robots: page.seo?.noIndex ? { index: false, follow: false } : undefined,
      };
    }
  } catch {
    // ignore database error
  }

  return {};
}

export default async function DirectSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getLocale();

  // 1. Check if slug matches a course directly (e.g., phd-computer-application, phd-cse, mca, etc.)
  const course = getCourseByDirectSlug(slug);
  if (course) {
    const school = await getProgramBySlug(course.schoolSlug, locale);
    return <CoursePage course={course} school={school} />;
  }

  // 2. Check if slug matches a published page from CMS
  try {
    const page = await getPublishedPageBySlug(slug);
    if (page) {
      const sections = parsePageSections(page.sections);
      return (
        <article className="min-h-screen bg-white text-[#0A1F44]">
          <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl">
              <h1 className="font-serif text-4xl font-bold sm:text-5xl">
                {page.title}
              </h1>
            </div>
          </header>
          <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
            {sections.map((section, index) => (
              <section
                key={index}
                className="border-b border-slate-200 py-7 first:pt-0 last:border-b-0"
              >
                <h2 className="font-serif text-2xl font-bold">
                  {section.heading}
                </h2>
                <p className="mt-4 whitespace-pre-wrap text-base leading-8 text-slate-700">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      );
    }
  } catch {
    // ignore database error
  }

  // 3. Fallback to 404
  notFound();
}
