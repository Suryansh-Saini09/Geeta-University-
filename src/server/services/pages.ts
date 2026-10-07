import { prisma } from "@/server/db/client";
import { getLocalizedBody, getLocalizedField, DEFAULT_LOCALE } from "@/lib/i18n/localization";

export async function getPublishedHomePage(locale: string = DEFAULT_LOCALE) {
  const [
    sections,
    recruiters,
    awards,
    testimonials,
    industryPartners,
    starPerformances,
    homePageRecord,
  ] = await Promise.all([
    prisma.pageSection.findMany({
      where: { pageSlug: "home", status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.recruiter.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.awardRanking.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.testimonial.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.industryPartner.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.starPerformance.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.page.findUnique({
      where: { slug: "home" },
      include: { seo: true },
    }),
  ]);

  const sectionMap: Record<string, any> = {};
  sections.forEach((sec: any) => {
    sectionMap[sec.sectionKey] = getLocalizedBody(sec.body, sec.translations, locale);
  });

  const localizedRecruiters = recruiters.map((r: any) => ({
    ...r,
    name: getLocalizedField(r, "name", locale),
  }));

  const localizedAwards = awards.map((a: any) => ({
    ...a,
    title: getLocalizedField(a, "title", locale),
    presentedBy: getLocalizedField(a, "presentedBy", locale),
    designation: getLocalizedField(a, "designation", locale),
  }));

  const localizedTestimonials = testimonials.map((t: any) => ({
    ...t,
    name: getLocalizedField(t, "name", locale),
    testimonial: getLocalizedField(t, "testimonial", locale),
    package: getLocalizedField(t, "package", locale),
  }));

  const localizedIndustryPartners = industryPartners.map((p: any) => ({
    ...p,
    name: getLocalizedField(p, "name", locale),
  }));

  const localizedStarPerformances = starPerformances.map((s: any) => ({
    ...s,
    name: getLocalizedField(s, "name", locale),
  }));

  const localizedSeo = homePageRecord?.seo
    ? {
        ...homePageRecord.seo,
        title: getLocalizedField(homePageRecord.seo, "title", locale),
        description: getLocalizedField(homePageRecord.seo, "description", locale),
        ogTitle: getLocalizedField(homePageRecord.seo, "ogTitle", locale),
      }
    : null;

  return {
    hero: sectionMap.hero || null,
    smartCampus: sectionMap.smartCampus || null,
    stats: sectionMap.stats || null,
    globalEducation: sectionMap.globalEducation || null,
    universe: sectionMap.universe || null,
    updates: sectionMap.updates || null,
    whyJoinGeeta: sectionMap.whyJoinGeeta || null,
    scholarships: sectionMap.scholarships || null,
    virtualTour: sectionMap.virtualTour || null,
    programsOffered: sectionMap.programsOffered || null,
    starPerformancesCta: sectionMap.starPerformancesCta || null,
    recruiters: localizedRecruiters,
    awards: localizedAwards,
    testimonials: localizedTestimonials,
    industryPartners: localizedIndustryPartners,
    starPerformances: localizedStarPerformances,
    seo: localizedSeo,
  };
}

export async function getPublishedAboutPage(locale: string = DEFAULT_LOCALE) {
  const [
    sections,
    recognitions,
    awards,
    leadership,
    governanceDocs,
    aboutPageRecord,
  ] = await Promise.all([
    prisma.pageSection.findMany({
      where: { pageSlug: "about", status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.recognition.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.awardRanking.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.leadershipMember.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.governanceDocument.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.page.findUnique({
      where: { slug: "about" },
      include: { seo: true },
    }),
  ]);

  const sectionMap: Record<string, any> = {};
  sections.forEach((sec: any) => {
    sectionMap[sec.sectionKey] = getLocalizedBody(sec.body, sec.translations, locale);
  });

  const localizedRecognitions = recognitions.map((r: any) => ({
    ...r,
    name: getLocalizedField(r, "name", locale),
    fullName: getLocalizedField(r, "fullName", locale),
  }));

  const localizedLeadership = leadership.map((l: any) => ({
    ...l,
    name: getLocalizedField(l, "name", locale),
    role: getLocalizedField(l, "role", locale),
    message: getLocalizedField(l, "message", locale),
    quote: getLocalizedField(l, "quote", locale),
  }));

  const localizedGovernance = governanceDocs.map((g: any) => ({
    ...g,
    title: getLocalizedField(g, "title", locale),
    description: getLocalizedField(g, "description", locale),
  }));

  const governance = localizedGovernance.filter((d: any) => d.category === "governance");
  const policies = localizedGovernance.filter((d: any) => d.category === "policy");

  const localizedAwards = awards.map((a: any) => ({
    ...a,
    title: getLocalizedField(a, "title", locale),
    presentedBy: getLocalizedField(a, "presentedBy", locale),
    designation: getLocalizedField(a, "designation", locale),
  }));

  const localizedSeo = aboutPageRecord?.seo
    ? {
        ...aboutPageRecord.seo,
        title: getLocalizedField(aboutPageRecord.seo, "title", locale),
        description: getLocalizedField(aboutPageRecord.seo, "description", locale),
        ogTitle: getLocalizedField(aboutPageRecord.seo, "ogTitle", locale),
      }
    : null;

  return {
    hero: sectionMap.hero || null,
    visionMission: sectionMap.visionMission || null,
    impactRankings: sectionMap.impactRankings || null,
    legacy: sectionMap.legacy || null,
    legacyEcosystem: sectionMap.legacyEcosystem || null,
    recognitions: localizedRecognitions,
    awards: localizedAwards,
    leadership: localizedLeadership,
    governance,
    policies,
    seo: localizedSeo,
  };
}

export async function getPageSectionsAdmin(pageSlug: string) {
  const [sections, pageRecord] = await Promise.all([
    prisma.pageSection.findMany({
      where: { pageSlug },
      orderBy: { sortOrder: "asc" },
    }),
    prisma.page.findUnique({
      where: { slug: pageSlug },
      include: { seo: true },
    }),
  ]);

  const sectionMap: Record<string, any> = {};
  sections.forEach((sec: any) => {
    sectionMap[sec.sectionKey] = {
      id: sec.id,
      title: sec.title,
      body: sec.body,
      translations: sec.translations || {},
      status: sec.status,
      updatedAt: sec.updatedAt,
    };
  });

  return {
    sections: sectionMap,
    seo: pageRecord?.seo || null,
  };
}

export async function getAdminPages(filters: any = {}) {
  const pages = await prisma.page.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      seo: true,
      createdBy: { select: { name: true } },
      updatedBy: { select: { name: true } },
      _count: { select: { revisions: true } },
    },
  });
  return { pages, totalCount: pages.length, page: 1, totalPages: 1 };
}

export async function getAdminPageById(id: string) {
  return prisma.page.findUnique({
    where: { id },
    include: {
      seo: true,
      revisions: { include: { createdBy: { select: { name: true } } } },
    },
  });
}

export async function getPublishedPageBySlug(slug: string) {
  return prisma.page.findFirst({
    where: { slug, status: "PUBLISHED" },
    include: { seo: true },
  });
}

