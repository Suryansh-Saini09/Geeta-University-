import { prisma } from "../src/server/db/client";

async function checkMediaUrls() {
  const recruiters = await prisma.recruiter.findMany({ take: 5 });
  console.log("Sample Recruiter Logos:", recruiters.map(r => ({ name: r.name, logo: r.logo })));

  const partners = await prisma.industryPartner.findMany({ take: 5 });
  console.log("Sample Partner Images:", partners.map(p => ({ name: p.name, image: p.image })));

  const leaders = await prisma.leadershipMember.findMany({ take: 5 });
  console.log("Sample Leadership Images:", leaders.map(l => ({ name: l.name, image: l.image })));

  await prisma.$disconnect();
}

checkMediaUrls();
