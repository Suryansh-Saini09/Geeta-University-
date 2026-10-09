import { PrismaClient } from "@prisma/client";
import {
  contactHeroData,
  contactMainInfo,
  admissionOfficesList,
  googleMapEmbedUrl,
} from "../src/data/contactUsData";
import {
  CAREER_BENEFITS,
  CAREER_FAQS,
  JOB_CATEGORIES,
  DEPARTMENTS,
} from "../src/data/careers";
import {
  ugcHeroData,
  ugcDocuments,
  ugcApprovalsList,
} from "../src/data/ugcData";
import {
  teachingHero,
  teachingOverview,
  pedagogicalMethods,
  teachingStats,
} from "../src/data/teachingLearningPractices";
import { newsData, publicationsList } from "../src/data/geetaInNewsData";
import {
  HARDCODED_SOCIAL_PROFILE,
  HARDCODED_SOCIAL_LINKS,
} from "../src/lib/socialLinks";

const prisma = new PrismaClient();

function maskConnectionString(url?: string): string {
  if (!url) return "NOT_SET";
  try {
    const parsed = new URL(url);
    return `Protocol: ${parsed.protocol} | Host: ${parsed.hostname} | Port: ${parsed.port} | Database: ${parsed.pathname.replace("/", "")}`;
  } catch {
    return "INVALID_URL_FORMAT";
  }
}

function safeDeepMerge(dbObj: any, tsObj: any, path = ""): { merged: any; changes: string[] } {
  const changes: string[] = [];

  if (dbObj === null || dbObj === undefined) {
    changes.push(`Added missing field [${path || "root"}] from TS reference`);
    return { merged: JSON.parse(JSON.stringify(tsObj)), changes };
  }

  if (typeof tsObj !== "object" || tsObj === null || typeof dbObj !== "object") {
    return { merged: dbObj, changes };
  }

  if (Array.isArray(tsObj)) {
    if (!Array.isArray(dbObj)) {
      changes.push(`Replaced non-array with array at [${path}]`);
      return { merged: JSON.parse(JSON.stringify(tsObj)), changes };
    }
    const mergedArray = [...dbObj];
    tsObj.forEach((tsItem: any, idx: number) => {
      if (idx >= mergedArray.length) {
        mergedArray.push(JSON.parse(JSON.stringify(tsItem)));
        changes.push(`Added missing array element at [${path}[${idx}]]`);
      } else if (typeof tsItem === "object" && tsItem !== null) {
        const { merged: mergedChild, changes: childChanges } = safeDeepMerge(mergedArray[idx], tsItem, `${path}[${idx}]`);
        mergedArray[idx] = mergedChild;
        changes.push(...childChanges);
      }
    });
    return { merged: mergedArray, changes };
  }

  const mergedObj = { ...dbObj };
  for (const key of Object.keys(tsObj)) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in mergedObj) || mergedObj[key] === undefined || mergedObj[key] === null) {
      mergedObj[key] = JSON.parse(JSON.stringify(tsObj[key]));
      changes.push(`Imported missing property [${currentPath}]`);
    } else if (typeof tsObj[key] === "object" && tsObj[key] !== null) {
      const { merged: mergedChild, changes: childChanges } = safeDeepMerge(mergedObj[key], tsObj[key], currentPath);
      mergedObj[key] = mergedChild;
      changes.push(...childChanges);
    }
  }

  return { merged: mergedObj, changes };
}

const remainingPagesConfig = [
  {
    slug: "careers",
    title: "Careers at Geeta University",
    template: "generic",
    sections: [
      {
        sectionKey: "hero",
        title: "Careers Hero Section",
        body: {
          title: "Careers at Geeta University",
          subtitle: "Empowering Minds, Inspiring Innovation, and Building Tomorrow's Leaders.",
          description:
            "Join our team of visionary educators, researchers, and professional staff in a top private university in Haryana. Explore current job openings and apply online.",
          heroImage: "/careers/hero-bg.webp",
          ctaText: "Apply Online",
        },
      },
      {
        sectionKey: "benefits",
        title: "Why Join Geeta University?",
        body: {
          title: "Why Work at Geeta University?",
          subtitle: "Institutional grants, competitive compensation, professional growth & AI-enabled labs",
          items: CAREER_BENEFITS,
        },
      },
      {
        sectionKey: "faqs",
        title: "Frequently Asked Questions",
        body: {
          title: "Frequently Asked Questions",
          subtitle: "Find quick answers to common queries regarding recruitment, eligibility, and working at Geeta University.",
          faqs: CAREER_FAQS,
        },
      },
      {
        sectionKey: "form_config",
        title: "Job Application Form Configuration",
        body: {
          heading: "Apply for Open Positions",
          description: "Select your specialization and submit your details to join our recruitment candidate pipeline.",
          categories: [...JOB_CATEGORIES],
          departments: DEPARTMENTS,
        },
      },
    ],
  },
  {
    slug: "contact-us",
    title: "Contact Us - Geeta University",
    template: "generic",
    sections: [
      {
        sectionKey: "hero",
        title: "Contact Us Hero",
        body: {
          title: contactHeroData.title,
          subtitle: contactHeroData.subtitle,
          description: contactHeroData.description,
          heroImage: contactHeroData.heroImage,
          breadcrumbs: contactHeroData.breadcrumbs,
        },
      },
      {
        sectionKey: "main_info",
        title: "Main Campus Contact Info",
        body: {
          universityName: "Geeta University",
          location: contactMainInfo.location,
          locationDetails: contactMainInfo.locationDetails,
          phonePrimary: contactMainInfo.phonePrimary,
          phoneSecondary: contactMainInfo.phoneSecondary,
          emailPrimary: contactMainInfo.emailPrimary,
          emailAdmissions: contactMainInfo.emailAdmissions,
          workingHours: contactMainInfo.workingHours,
          mapUrl: googleMapEmbedUrl,
        },
      },
      {
        sectionKey: "offices",
        title: "Regional Admission Offices",
        body: {
          title: "Our Regional Admission Offices",
          offices: admissionOfficesList,
        },
      },
      {
        sectionKey: "map",
        title: "Google Map Location",
        body: {
          title: "Find Us on Google Maps",
          subtitle: "NH-71, Naultha, Panipat, Haryana 132145 (Gohana Road)",
          mapEmbedUrl: googleMapEmbedUrl,
        },
      },
    ],
  },
  {
    slug: "ugc",
    title: "UGC Accreditation & Statutory Documents",
    template: "generic",
    sections: [
      {
        sectionKey: "hero",
        title: "UGC Hero Section",
        body: {
          title: ugcHeroData.title,
          subtitle: ugcHeroData.subtitle,
          description: ugcHeroData.description,
          inspectionTitle: ugcHeroData.inspectionTitle,
          heroImage: "/ugc/campus-ecosystem.webp",
          breadcrumbs: ugcHeroData.breadcrumbs,
        },
      },
      {
        sectionKey: "documents",
        title: "Official UGC Performa & Inspection Files",
        body: {
          title: "Official UGC Performa & Inspection Files",
          documents: ugcDocuments,
        },
      },
      {
        sectionKey: "approvals",
        title: "Statutory Approvals & Council Recognitions",
        body: {
          title: "Statutory Council Approvals & Accreditations",
          approvals: ugcApprovalsList,
        },
      },
      {
        sectionKey: "callout_cta",
        title: "Statutory Callout & Inquiry Banner",
        body: {
          title: "Have Questions Regarding Approvals & Verification?",
          subtitle: "Our Academic Affairs and Registrar's Office maintain transparent disclosures.",
          description:
            "Contact our official desk or explore the UGC Samadhaan Portal for statutory inquiries.",
          ctaText: "Apply for Admission",
          ctaHref: "https://admissions.geetauniversity.edu.in/",
          helplineText: "Call Helpline: +91 92787 68000",
          helplinePhone: "+91 92787 68000",
        },
      },
    ],
  },
  {
    slug: "teaching-learning-practices",
    title: "Teaching & Learning Practices",
    template: "generic",
    sections: [
      {
        sectionKey: "hero",
        title: "Teaching & Learning Practices Hero",
        body: {
          title: teachingHero.title,
          subtitle: teachingHero.subtitle,
          description: teachingHero.description,
          heroImage: teachingHero.heroImage,
          breadcrumbs: teachingHero.breadcrumbs,
        },
      },
      {
        sectionKey: "overview",
        title: "Teaching Practice Overview",
        body: {
          title: teachingOverview.title,
          headingOrange: teachingOverview.headingOrange,
          headingBlack: teachingOverview.headingBlack,
          paragraphs: teachingOverview.paragraphs,
          image: teachingOverview.image,
        },
      },
      {
        sectionKey: "pedagogy",
        title: "Innovative Pedagogical Practices",
        body: {
          title: "Innovative Pedagogical Practices",
          methods: pedagogicalMethods,
        },
      },
      {
        sectionKey: "stats",
        title: "Academic & Life-Skill Statistics",
        body: {
          title: "Academic & Life-Skill Highlights",
          stats: teachingStats,
        },
      },
      {
        sectionKey: "cta",
        title: "Teaching Call To Action",
        body: {
          title: "Transform Your Future With World-Class Pedagogy",
          subtitle: "Join Geeta University to experience innovative, student-oriented education.",
          ctaText: "Apply Now",
          ctaHref: "https://admissions.geetauniversity.edu.in/",
        },
      },
    ],
  },
  {
    slug: "geeta-in-news",
    title: "Geeta in News",
    template: "generic",
    sections: [
      {
        sectionKey: "hero",
        title: "Geeta in News Hero",
        body: {
          title: "Geeta in News",
          subtitle: "Media Coverage, Press Releases & Regional Acclaim",
          heroImage: "https://geetauniversity.edu.in/uploads/all/252/conversions/new-building-3-(1)-full.webp",
        },
      },
      {
        sectionKey: "news_items",
        title: "Press Clippings Gallery",
        body: {
          title: "Media Coverage & News Clippings",
          publications: publicationsList,
          items: newsData,
        },
      },
    ],
  },
];

async function reconcile() {
  const isApply = process.argv.includes("--apply");
  console.log("=================================================");
  console.log("REMAINING PAGES & SHARED SETTINGS RECONCILIATION");
  console.log("=================================================");
  console.log(`MODE: ${isApply ? "APPLY (WRITING TO MYSQL)" : "DRY RUN (READ ONLY)"}`);
  console.log(`DB TARGET: ${maskConnectionString(process.env.DATABASE_URL)}`);
  console.log("=================================================\n");

  let totalPagesProcessed = 0;
  let totalSectionsInspected = 0;
  let totalMissingFieldsFound = 0;

  for (const pageConfig of remainingPagesConfig) {
    console.log(`PAGE: ${pageConfig.title} (Slug: /${pageConfig.slug})`);
    console.log("-------------------------------------------------");

    // 1. Ensure Page record exists
    let pageRecord = await prisma.page.findUnique({
      where: { slug: pageConfig.slug },
    });

    if (!pageRecord) {
      console.log(`  [PAGE RECORD] Page record missing in DB for /${pageConfig.slug}`);
      if (isApply) {
        pageRecord = await prisma.page.create({
          data: {
            slug: pageConfig.slug,
            title: pageConfig.title,
            template: pageConfig.template,
            status: "PUBLISHED",
            sections: [],
          },
        });
        console.log(`  => CREATED Page record ID ${pageRecord.id}`);
      }
    } else {
      console.log(`  [PAGE RECORD] Found Page ID ${pageRecord.id} ("${pageRecord.title}")`);
    }

    totalPagesProcessed++;

    // 2. Reconcile PageSection records
    for (const secDef of pageConfig.sections) {
      totalSectionsInspected++;
      const dbSec = await prisma.pageSection.findFirst({
        where: {
          pageSlug: pageConfig.slug,
          sectionKey: secDef.sectionKey,
        },
      });

      if (!dbSec) {
        console.log(`  [SECTION: ${secDef.sectionKey}] Record missing in DB. Will insert standard payload.`);
        totalMissingFieldsFound++;
        if (isApply) {
          const createdSec = await prisma.pageSection.create({
            data: {
              pageSlug: pageConfig.slug,
              sectionKey: secDef.sectionKey,
              title: secDef.title,
              body: secDef.body as any,

              status: "PUBLISHED",
              sortOrder: 1,
            },
          });
          console.log(`      => CREATED PageSection ID ${createdSec.id}`);
        }
      } else {
        const dbBody = dbSec.body || {};
        const { merged: mergedBody, changes } = safeDeepMerge(dbBody, secDef.body, secDef.sectionKey);

        if (changes.length === 0) {
          console.log(`  [SECTION: ${secDef.sectionKey.padEnd(20)}] 100% Complete & Reconciled (No missing fields)`);
        } else {
          totalMissingFieldsFound += changes.length;
          console.log(`  [SECTION: ${secDef.sectionKey}] Found ${changes.length} missing field(s):`);
          changes.forEach((c) => console.log(`      + ${c}`));

          if (isApply) {
            const updatedSec = await prisma.pageSection.update({
              where: { id: dbSec.id },
              data: {
                body: mergedBody,
                status: "PUBLISHED",
              },
            });
            console.log(`      => UPDATED PageSection ID ${updatedSec.id} in Aiven MySQL`);
          }
        }
      }
    }
    console.log("");
  }

  // 3. Reconcile Shared Site Settings (contact, social_links)
  console.log("SHARED SITE SETTINGS RECONCILIATION");
  console.log("-------------------------------------------------");

  // Contact setting
  const dbContact = await prisma.siteSetting.findUnique({
    where: { key: "contact" },
  });

  const contactDefaultPayload = {
    universityName: "Geeta University",
    location: contactMainInfo.location,
    locationDetails: contactMainInfo.locationDetails,
    phonePrimary: contactMainInfo.phonePrimary,
    phoneSecondary: contactMainInfo.phoneSecondary,
    emailPrimary: contactMainInfo.emailPrimary,
    emailAdmissions: contactMainInfo.emailAdmissions,
    workingHours: contactMainInfo.workingHours,
    mapUrl: googleMapEmbedUrl,
  };

  if (!dbContact) {
    console.log("  [SETTING: contact] Missing in DB. Creating setting record.");
    if (isApply) {
      await prisma.siteSetting.create({
        data: {
          key: "contact",
          value: contactDefaultPayload,
          description: "University contact details and location settings",
        },
      });
      console.log("      => CREATED SiteSetting 'contact'");
    }
  } else {
    const { merged: mergedContact, changes } = safeDeepMerge(dbContact.value || {}, contactDefaultPayload, "contact");
    if (changes.length === 0) {
      console.log("  [SETTING: contact] 100% Complete & Reconciled");
    } else {
      console.log(`  [SETTING: contact] Found ${changes.length} missing field(s):`);
      changes.forEach((c) => console.log(`      + ${c}`));
      if (isApply) {
        await prisma.siteSetting.update({
          where: { key: "contact" },
          data: { value: mergedContact },
        });
        console.log("      => UPDATED SiteSetting 'contact'");
      }
    }
  }

  // Social Links setting
  const dbSocial = await prisma.siteSetting.findUnique({
    where: { key: "social_links" },
  });

  const socialDefaultPayload = {
    profile: HARDCODED_SOCIAL_PROFILE,
    links: HARDCODED_SOCIAL_LINKS,
  };

  if (!dbSocial) {
    console.log("  [SETTING: social_links] Missing in DB. Creating setting record.");
    if (isApply) {
      await prisma.siteSetting.create({
        data: {
          key: "social_links",
          value: socialDefaultPayload as any,

          description: "Official social media channels and profile settings",
        },
      });
      console.log("      => CREATED SiteSetting 'social_links'");
    }
  } else {
    const { merged: mergedSocial, changes } = safeDeepMerge(dbSocial.value || {}, socialDefaultPayload, "social_links");
    if (changes.length === 0) {
      console.log("  [SETTING: social_links] 100% Complete & Reconciled");
    } else {
      console.log(`  [SETTING: social_links] Found ${changes.length} missing field(s):`);
      changes.forEach((c) => console.log(`      + ${c}`));
      if (isApply) {
        await prisma.siteSetting.update({
          where: { key: "social_links" },
          data: { value: mergedSocial },
        });
        console.log("      => UPDATED SiteSetting 'social_links'");
      }
    }
  }

  console.log("\n=================================================");
  console.log("RECONCILIATION SUMMARY");
  console.log("=================================================");
  console.log(`Total Pages Processed: ${totalPagesProcessed}`);
  console.log(`Total Sections Inspected: ${totalSectionsInspected}`);
  console.log(`Total Missing Fields Identified: ${totalMissingFieldsFound}`);
  console.log(`Status: ${isApply ? "SUCCESSFULLY APPLIED TO AIVEN MYSQL" : "DRY RUN COMPLETE (Run with --apply to commit)"}`);
  console.log("=================================================\n");
}

reconcile()
  .catch((e) => {
    console.error("Reconciliation error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
