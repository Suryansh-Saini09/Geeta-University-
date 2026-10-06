import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

function published() {
  return { status: ContentStatus.PUBLISHED, publishedAt: { not: null, lte: new Date() } };
}

export function getPublishedDepartments() {
  return prisma.department.findMany({
    where: published(),
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: { name: true, slug: true, summary: true, shortName: true },
  });
}

export function getPublishedDepartment(slug: string) {
  return prisma.department.findFirst({
    where: { ...published(), slug },
    include: {
      programs: { where: published(), orderBy: [{ sortOrder: "asc" }, { name: "asc" }] },
      faculty: { where: { status: ContentStatus.PUBLISHED }, orderBy: [{ sortOrder: "asc" }, { name: "asc" }] },
      seo: true,
    },
  });
}

function visibleProgram(): Prisma.ProgramWhereInput {
  return { ...published(), department: published() };
}

export function getPublishedPrograms() {
  return prisma.program.findMany({
    where: visibleProgram(),
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: { department: { select: { name: true, slug: true } } },
  });
}

export function getPublishedProgram(slug: string) {
  return prisma.program.findFirst({
    where: { ...visibleProgram(), OR: [{ slug }, { aliases: { some: { slug } } }] },
    include: { department: { select: { name: true, slug: true } }, seo: true },
  });
}

export function getPublishedFaculty() {
  return prisma.facultyMember.findMany({
    where: { status: ContentStatus.PUBLISHED, OR: [{ departmentId: null }, { department: published() }] },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: { department: { select: { name: true, slug: true } } },
  });
}

export function getPublishedFacultyMember(slug: string) {
  return prisma.facultyMember.findFirst({
    where: { slug, status: ContentStatus.PUBLISHED, OR: [{ departmentId: null }, { department: published() }] },
    include: {
      department: { select: { name: true, slug: true } },
      programs: { where: { program: visibleProgram() }, include: { program: { select: { name: true, slug: true } } } },
    },
  });
}

function visibleNotice(): Prisma.NoticeWhereInput {
  return {
    status: ContentStatus.PUBLISHED,
    publishedAt: { not: null, lte: new Date() },
    OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
  };
}

export function getPublishedNotices() {
  return prisma.notice.findMany({
    where: visibleNotice(),
    orderBy: { publishedAt: "desc" },
    select: { title: true, slug: true, summary: true, publishedAt: true },
  });
}

export function getPublishedNotice(slug: string) {
  return prisma.notice.findFirst({ where: { ...visibleNotice(), slug }, include: { seo: true } });
}
