import { prisma } from "../src/server/db/client";
import { translateObject } from "../src/server/services/translation";

async function seedInitialTranslations() {
  console.log("Seeding initial Hindi and French translations into MySQL...");

  // 1. Home Hero
  const homeHero = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "hero" } },
  });

  if (homeHero && homeHero.body) {
    const hiDraft = (await translateObject(homeHero.body, "hi", "en")) as Record<string, any>;
    const frDraft = (await translateObject(homeHero.body, "fr", "en")) as Record<string, any>;

    await prisma.pageSection.update({
      where: { id: homeHero.id },
      data: {
        translations: {
          hi: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...hiDraft,
              headline: "मस्तिष्क को सशक्त बनाना।",
              highlightedHeadline: "भविष्य को बदलना।",
              description: "एक प्रमुख शैक्षणिक पारिस्थितिकी तंत्र में शामिल हों जो नवाचार को प्रज्वलित करने और वैश्विक नेतृत्व को बढ़ावा देने के लिए डिज़ाइन किया गया है।",
              applyPillBadge: "अभी आवेदन करें",
              applyPillText: "प्रवेश खुले हैं",
              primaryCtaLabel: "विश्वविद्यालय के बारे में",
              secondaryCtaLabel: "परिसर का दौरा",
            },
          },
          fr: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...frDraft,
              headline: "Autonomiser les esprits.",
              highlightedHeadline: "Transformer l'avenir.",
              description: "Rejoignez un écosystème académique de premier plan conçu pour stimuler l'innovation et former des leaders mondiaux.",
              applyPillBadge: "Postulez dès maintenant",
              applyPillText: "Admissions ouvertes",
              primaryCtaLabel: "À propos de l'université",
              secondaryCtaLabel: "Visite du campus",
            },
          },
        },
      },
    });
    console.log("✓ Seeded Home Hero translations (Hindi & French)");
  }

  // 2. About Hero
  const aboutHero = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "hero" } },
  });

  if (aboutHero && aboutHero.body) {
    const hiDraft = (await translateObject(aboutHero.body, "hi", "en")) as Record<string, any>;
    const frDraft = (await translateObject(aboutHero.body, "fr", "en")) as Record<string, any>;

    await prisma.pageSection.update({
      where: { id: aboutHero.id },
      data: {
        translations: {
          hi: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...hiDraft,
              eyebrow: "गीता विश्वविद्यालय के बारे में",
              title: "विरासत में निहित।",
              highlightedTitle: "भविष्य को आकार देना।",
              description: "गीता विश्वविद्यालय के पीछे की यात्रा, दृष्टि, नेतृत्व और संस्थागत नींव की खोज करें।",
              primaryCtaLabel: "हमारी कहानी जानें",
              secondaryCtaLabel: "दृष्टि और मिशन",
            },
          },
          fr: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...frDraft,
              eyebrow: "À propos de Geeta University",
              title: "Enraciné dans l'héritage.",
              highlightedTitle: "Façonner l'avenir.",
              description: "Découvrez le parcours, la vision, le leadership et les fondations institutionnelles de Geeta University.",
              primaryCtaLabel: "Découvrir notre histoire",
              secondaryCtaLabel: "Vision et Mission",
            },
          },
        },
      },
    });
    console.log("✓ Seeded About Hero translations (Hindi & French)");
  }

  console.log("\nTranslations successfully seeded into MySQL!");
}

seedInitialTranslations()
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
