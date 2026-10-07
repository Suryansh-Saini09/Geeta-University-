import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CONTACT_SETTINGS = {
  universityName: "Geeta University",
  location: "NH-44, GT Road, Panipat, Haryana 132145, India",
  locationDetails: "Panipat, Haryana, India",
  phonePrimary: "+91 9278768000",
  phoneSecondary: "+91 9996303799",
  emailPrimary: "info@geetauniversity.edu.in",
  emailAdmissions: "admissions@geetauniversity.edu.in",
  workingHours: "Mon - Sat: 9:00 AM - 5:00 PM",
  mapUrl: "https://maps.google.com/?q=Geeta+University+Panipat",
};

const ANNOUNCEMENT_SETTINGS = {
  enabled: false,
  text: "Admissions Open 2026-27 — Apply Today for GUTS Scholarship Exam!",
  href: "/admissions",
  target: "_self",
};

const ADMISSION_CTA_SETTINGS = {
  enabled: true,
  label: "Apply Now",
  href: "https://geetauniversity.edu.in/Rapi/form/insert",
  target: "_blank",
};

const SOCIAL_LINKS_SETTINGS = {
  links: [
    {
      id: 1,
      name: "WhatsApp Chat",
      type: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=919996303799",
      icon: "whatsapp",
      description: "Chat with Geeta University on WhatsApp",
      category: "Social Media",
      target: "_blank",
      enabled: true,
      sortOrder: 1,
    },
    {
      id: 2,
      name: "Facebook",
      type: "facebook",
      url: "https://www.facebook.com/geetauniversity",
      icon: "facebook",
      description: "Follow Geeta University on Facebook",
      category: "Social Media",
      target: "_blank",
      enabled: true,
      sortOrder: 2,
    },
    {
      id: 3,
      name: "Instagram",
      type: "instagram",
      url: "https://www.instagram.com/geetauniversitypanipat/",
      icon: "instagram",
      description: "Follow Geeta University on Instagram",
      category: "Social Media",
      target: "_blank",
      enabled: true,
      sortOrder: 3,
    },
    {
      id: 4,
      name: "YouTube",
      type: "youtube",
      url: "https://www.youtube.com/c/geetauniversity",
      icon: "youtube",
      description: "Watch Geeta University videos on YouTube",
      category: "Social Media",
      target: "_blank",
      enabled: true,
      sortOrder: 4,
    },
    {
      id: 5,
      name: "LinkedIn",
      type: "linkedin",
      url: "https://www.linkedin.com/school/geeta-university-official/",
      icon: "linkedin",
      description: "Connect with Geeta University on LinkedIn",
      category: "Social Media",
      target: "_blank",
      enabled: true,
      sortOrder: 5,
    },
    {
      id: 6,
      name: "Google Review",
      type: "gu",
      url: "https://www.google.com/search?q=geeta+university+panipat",
      icon: "gu",
      description: "Review Geeta University on Google",
      category: "Reviews",
      target: "_blank",
      enabled: true,
      sortOrder: 6,
    },
  ],
};

const SITE_METADATA_SETTINGS = {
  siteName: "Geeta University",
  shortName: "GU",
  tagline: "Empowering Minds. Transforming Futures.",
  siteDescription: "Official website of Geeta University, Panipat, Haryana.",
  defaultLanguage: "en",
  logoUrl: "https://geetauniversity.edu.in/uploads/all/754/GU-Logo-PNG-(1).webp",
  faviconUrl: "/favicon.ico",
  copyrightText: "© Geeta University. All Rights Reserved.",
};

async function seedSettingIfMissing(key, value, description) {
  const existing = await prisma.siteSetting.findUnique({ where: { key } });
  if (!existing) {
    await prisma.siteSetting.create({
      data: { key, value, description },
    });
    console.log(`Seeded setting '${key}'`);
  } else {
    console.log(`Setting '${key}' already exists in DB — preserving existing value.`);
  }
}

async function main() {
  try {
    await seedSettingIfMissing("contact", CONTACT_SETTINGS, "Public contact details");
    await seedSettingIfMissing("announcement", ANNOUNCEMENT_SETTINGS, "Header announcement bar settings");
    await seedSettingIfMissing("admission_cta", ADMISSION_CTA_SETTINGS, "Global admission CTA settings");
    await seedSettingIfMissing("social_links", SOCIAL_LINKS_SETTINGS, "Official social media channels");
    await seedSettingIfMissing("site_metadata", SITE_METADATA_SETTINGS, "Site general metadata");
    console.log("Global settings seeding completed successfully.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("Failed to seed global settings:", err);
  process.exit(1);
});
