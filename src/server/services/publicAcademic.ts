import { ContentStatus, type Prisma } from "@prisma/client";
import { prisma } from "@/server/db/client";

function published() {
  return { status: ContentStatus.PUBLISHED, publishedAt: { not: null, lte: new Date() } };
}

export async function getPublishedDepartments() {
  try {
    return await prisma.department.findMany({
      where: published(),
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { name: true, slug: true, summary: true, shortName: true },
    });
  } catch (err) {
    console.warn("[CMS WARNING] Failed to query published departments:", err);
    return [];
  }
}

export async function getPublishedDepartment(slug: string) {
  try {
    return await prisma.department.findFirst({
      where: { ...published(), slug },
      include: {
        programs: { where: published(), orderBy: [{ sortOrder: "asc" }, { name: "asc" }] },
        faculty: { where: { status: ContentStatus.PUBLISHED }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] },
        seo: true,
      },
    });
  } catch (err) {
    console.warn(`[CMS WARNING] Failed to query published department '${slug}':`, err);
    return null;
  }
}

function visibleProgram(): Prisma.ProgramWhereInput {
  return { ...published(), department: published() };
}

export async function getPublishedPrograms() {
  try {
    return await prisma.program.findMany({
      where: visibleProgram(),
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { department: { select: { name: true, slug: true } } },
    });
  } catch (err) {
    console.warn("[CMS WARNING] Failed to query published programs:", err);
    return [];
  }
}

export async function getPublishedProgram(slug: string) {
  try {
    return await prisma.program.findFirst({
      where: { ...visibleProgram(), OR: [{ slug }, { aliases: { some: { slug } } }] },
      include: { department: { select: { name: true, slug: true } }, seo: true },
    });
  } catch (err) {
    console.warn(`[CMS WARNING] Failed to query published program '${slug}':`, err);
    return null;
  }
}

export async function getPublishedFaculty() {
  try {
    return await prisma.facultyMember.findMany({
      where: { status: ContentStatus.PUBLISHED, OR: [{ departmentId: null }, { department: published() }] },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { department: { select: { name: true, slug: true } } },
    });
  } catch (err) {
    console.warn("[CMS WARNING] Failed to query published faculty:", err);
    return [];
  }
}

export async function getPublishedFacultyMember(slug: string) {
  try {
    return await prisma.facultyMember.findFirst({
      where: { slug, status: ContentStatus.PUBLISHED, OR: [{ departmentId: null }, { department: published() }] },
      include: {
        department: { select: { name: true, slug: true } },
        programs: { where: { program: visibleProgram() }, include: { program: { select: { name: true, slug: true } } } },
      },
    });
  } catch (err) {
    console.warn(`[CMS WARNING] Failed to query published faculty member '${slug}':`, err);
    return null;
  }
}

function visibleNotice(): Prisma.NoticeWhereInput {
  return {
    status: ContentStatus.PUBLISHED,
    publishedAt: { not: null, lte: new Date() },
    OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
  };
}

export async function getPublishedNotices() {
  try {
    return await prisma.notice.findMany({
      where: visibleNotice(),
      orderBy: { publishedAt: "desc" },
      select: { title: true, slug: true, summary: true, publishedAt: true },
    });
  } catch (err) {
    console.warn("[CMS WARNING] Failed to query published notices:", err);
    return [];
  }
}

export async function getPublishedNotice(slug: string) {
  try {
    return await prisma.notice.findFirst({ where: { ...visibleNotice(), slug }, include: { seo: true } });
  } catch (err) {
    console.warn(`[CMS WARNING] Failed to query published notice '${slug}':`, err);
    return null;
  }
}
