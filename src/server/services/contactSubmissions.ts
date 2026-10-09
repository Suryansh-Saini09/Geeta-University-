import { Prisma, SubmissionStatus } from "@prisma/client";

import { prisma } from "@/server/db/client";

const PAGE_SIZE = 20;

export async function getContactSubmissions({ query, status, page }: {
  query: string;
  status: SubmissionStatus | "ALL";
  page: number;
}) {
  const where: Prisma.ContactSubmissionWhereInput = {
    ...(status !== "ALL" ? { status } : {}),
    ...(query ? { OR: [
      { name: { contains: query } },
      { email: { contains: query } },
      { phone: { contains: query } },
      { subject: { contains: query } },
    ] } : {}),
  };
  const totalCount = await prisma.contactSubmission.count({ where });
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const submissions = await prisma.contactSubmission.findMany({
    where,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    select: { id: true, type: true, status: true, name: true, email: true, phone: true, subject: true, sourcePath: true, createdAt: true },
  });
  return { submissions, totalCount, totalPages, page: currentPage };
}

export async function getContactSubmission(id: string) {
  return prisma.contactSubmission.findUnique({ where: { id } });
}
