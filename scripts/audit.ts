import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== COMPREHENSIVE SCHOOL CMS DIAGNOSTIC AUDIT ===\n");

  const depts = await prisma.department.findMany({
    orderBy: { createdAt: "asc" },
  });

  for (const d of depts) {
    const body = (d.body && typeof d.body === "object" ? d.body : {}) as Record<string, any>;
    console.log(`----------------------------------------`);
    console.log(`DB ID:       ${d.id}`);
    console.log(`Name:        ${d.name}`);
    console.log(`DB Slug:     ${d.slug}`);
    console.log(`Status:      ${d.status}`);
    console.log(`Body Keys:   ${Object.keys(body).join(", ")}`);
    
    if (Array.isArray(body.faqs)) {
      console.log(`FAQs Count:  ${body.faqs.length}`);
      if (body.faqs[0]) {
        console.log(`FAQ[0] Raw: `, JSON.stringify(body.faqs[0]));
      }
    } else {
      console.log(`FAQs:        NONE OR NOT AN ARRAY`);
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
