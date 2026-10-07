import { PrismaClient } from "@prisma/client";

async function auditDetails() {
  const prisma = new PrismaClient();
  try {
    const pageSections = await prisma.pageSection.findMany({ select: { pageSlug: true, sectionKey: true } });
    console.log(`Total PageSections: ${pageSections.length}`);
    pageSections.forEach((s) => console.log(` - page: ${s.pageSlug}, section: ${s.sectionKey}`));

    const awards = await prisma.awardRanking.count();
    console.log(`AwardRanking count: ${awards}`);

    const recruiters = await prisma.recruiter.count();
    console.log(`Recruiter count: ${recruiters}`);

    const testimonials = await prisma.testimonial.count();
    console.log(`Testimonial count: ${testimonials}`);

    const industryPartners = await prisma.industryPartner.count();
    console.log(`IndustryPartner count: ${industryPartners}`);

    const starPerformances = await prisma.starPerformance.count();
    console.log(`StarPerformance count: ${starPerformances}`);

    const governanceDocs = await prisma.governanceDocument.count();
    console.log(`GovernanceDocument count: ${governanceDocs}`);

    const leadership = await prisma.leadershipMember.count();
    console.log(`LeadershipMember count: ${leadership}`);

    const recognitions = await prisma.recognition.count();
    console.log(`Recognition count: ${recognitions}`);

  } catch (err: any) {
    console.error("Audit error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

auditDetails();
