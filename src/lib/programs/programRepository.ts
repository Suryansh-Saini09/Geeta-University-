import type { ProgramPageData } from "@/data/programs/types";
import {
  programs,
  ALIAS_TO_CANONICAL,
  getProgramBySlugSync,
  getAliasesForSlug,
  getAllProgramSlugs,
  getAllPrograms,
} from "@/lib/programs/staticPrograms";

export {
  programs,
  ALIAS_TO_CANONICAL,
  getProgramBySlugSync,
  getAliasesForSlug,
  getAllProgramSlugs,
  getAllPrograms,
};

export async function getProgramBySlug(
  slug: string,
  locale: string = "en"
): Promise<ProgramPageData | undefined> {
  const normalizedSlug = slug.toLowerCase();
  const canonicalSlug = ALIAS_TO_CANONICAL[normalizedSlug] || normalizedSlug;
  const staticFallback = getProgramBySlugSync(normalizedSlug);

  try {
    const { prisma } = await import("@/server/db/client");
    const { getLocalizedBody, getLocalizedField } = await import("@/lib/i18n/localization");
    const dept = await prisma.department.findFirst({
      where: {
        OR: [
          { slug: normalizedSlug },
          { slug: canonicalSlug },
        ],
        status: "PUBLISHED",
      },
      include: {
        heroImage: true,
        seo: true,
      },
    });

    if (dept && dept.body && typeof dept.body === "object") {
      const resolvedBody = getLocalizedBody(dept.body, (dept as any).translations, locale);
      const data = JSON.parse(JSON.stringify(resolvedBody)) as ProgramPageData;

      // Preserve requested slug so links on the page remain consistent
      data.slug = normalizedSlug;

      const deptName = getLocalizedField(dept, "name", locale);
      if (deptName) {
        data.name = deptName;
        if (data.hero) {
          data.hero.title = data.hero.title || deptName;
        }
      }

      // Dynamically inject updated MediaAsset hero image if present
      if (dept.heroImage?.url && data.hero) {
        data.hero = {
          ...data.hero,
          image: dept.heroImage.url,
        };
      }

      // Dynamically inject updated SEO metadata if present
      if (dept.seo) {
        data.seo = {
          title: getLocalizedField(dept.seo, "title", locale),
          description: getLocalizedField(dept.seo, "description", locale),
          keywords: dept.seo.keywords ? JSON.parse(String(dept.seo.keywords)) : data.seo?.keywords,
        };
      }

      return data;
    }
    
    console.warn(`[CMS FALLBACK WARNING] Department for slug '${slug}' not resolved from MySQL. Using static TS fallback.`);
  } catch (err) {
    console.error(`[CMS ERROR] DB query failed for school slug '${slug}', using static fallback:`, err);
  }

  return staticFallback;
}