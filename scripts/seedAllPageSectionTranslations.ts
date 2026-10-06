import { prisma } from "../src/server/db/client";

async function seedAllTranslations() {
  console.log("Seeding comprehensive published Hindi and French translations into MySQL...");

  // 1. About Vision & Mission
  const visionMissionSec = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "visionMission" } },
  });

  if (visionMissionSec) {
    const rawBody = visionMissionSec.body as any || {};
    await prisma.pageSection.update({
      where: { id: visionMissionSec.id },
      data: {
        translations: {
          fr: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...rawBody,
              visionHeading: "Notre Vision",
              visionStatement: "« Atteindre le sommet de l'excellence académique et nourrir les rêves et les aspirations des étudiants désireux d'évoluer en technocrates, professionnels, scientifiques, leaders et entrepreneurs accomplis au service de la nation. »",
              missionHeading: "Notre Mission",
              missionPoints: [
                "Inspirer l'excellence académique grâce à un processus d'enseignement-apprentissage axé sur l'étudiant et orienté vers les résultats.",
                "Développer les connaissances, les compétences, les comportements et les attitudes adéquats chez les étudiants.",
                "Promouvoir la recherche interdisciplinaire.",
                "Établir un lien solide entre l'industrie et le monde académique.",
                "Nourrir l'esprit d'entreprise et soutenir les idées novatrices des étudiants.",
              ],
              identityTitle: "Notre Identité : Ancrée dans l'Héritage, Façonnant l'Avenir",
              identityDescription: "À Geeta University, nous offrons une combinaison d'une vision futuriste audacieuse et de la sagesse du passé.",
              saffronText: "Le safran symbolise le savoir intemporel des sages indiens — un hommage à notre riche héritage culturel.",
              blueText: "Le bleu représente l'avenir — guidé par la technologie, l'ouverture et la recherche de l'excellence académique.",
              crestStatement: "Notre blason incarne le courage, l'ambition et la transformation.",
            },
          },
          hi: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...rawBody,
              visionHeading: "हमारा दृष्टिकोण (Vision)",
              visionStatement: "“अकादमिक उत्कृष्टता के शिखर तक पहुंचना और राष्ट्र निर्माण के लिए समर्पित छात्रों के सपनों और आकांक्षाओं को पोषण देना।”",
              missionHeading: "हमारा मिशन (Mission)",
              missionPoints: [
                "छात्र-केंद्रित और परिणाम-आधारित शिक्षण-अध्ययन प्रक्रिया के माध्यम से अकादमिक उत्कृष्टता को प्रेरित करना।",
                "छात्रों में सही ज्ञान, कौशल, व्यवहार और दृष्टिकोण विकसित करना।",
                "अंतरविषय अनुसंधान को बढ़ावा देना।",
                "एक मजबूत उद्योग-अकादमिक संबंध स्थापित करना।",
                "उद्यमशीलता को बढ़ावा देना और छात्रों के नवीन विचारों का समर्थन करना।",
              ],
              identityTitle: "हमारी पहचान: विरासत में निहित, भविष्य को आकार देना",
              identityDescription: "गीता यूनिवर्सिटी में, हम अतीत के ज्ञान और एक साहसी भविष्यवादी दृष्टिकोण का संयोजन प्रस्तुत करते हैं।",
              saffronText: "केसरिया रंग भारतीय संतों के कालातीत ज्ञान का प्रतीक है।",
              blueText: "नीला रंग भविष्य का प्रतिनिधित्व करता है — जो प्रौद्योगिकी और अकादमिक उत्कृष्टता से प्रेरित है।",
              crestStatement: "हमारा प्रतीक साहस, महत्वाकांक्षा और परिवर्तन का प्रतीक है।",
            },
          },
        },
      },
    });
    console.log("✓ Seeded About Vision & Mission translations (FR & HI - PUBLISHED)");
  }

  // 2. About Legacy
  let legacySec = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "legacy" } },
  });

  if (!legacySec) {
    legacySec = await prisma.pageSection.create({
      data: {
        pageSlug: "about",
        sectionKey: "legacy",
        title: "About Our Legacy",
        status: "PUBLISHED",
        body: {
          eyebrow: "A LEGACY OF EXCELLENCE",
          title: "A Legacy Built on Vision,",
          highlightedTitle: "Values, and Excellence.",
          description: "Rooted in decades of educational leadership, the Geeta Group of Institutions has continuously expanded its horizons.",
          milestones: [
            { year: "1985", institutions: [{ name: "Geeta Group Founded", location: "Panipat", note: "Pioneering quality education in NCR" }] },
            { year: "2008", institutions: [{ name: "Geeta Engineering College", location: "Panipat" }] },
            { year: "2022", institutions: [{ name: "Geeta University Established", location: "Panipat", note: "State Private University Status" }] },
          ],
        },
      },
    });
  }

  const rawLegacyBody = legacySec.body as any || {};
  await prisma.pageSection.update({
    where: { id: legacySec.id },
    data: {
      translations: {
        fr: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawLegacyBody,
            eyebrow: "UN HÉRITAGE D'EXCELLENCE",
            title: "Un héritage bâti sur la vision,",
            highlightedTitle: "les valeurs et l'excellence.",
            description: "Enraciné dans des décennies de leadership éducatif, le groupe d'institutions Geeta a continuellement élargi ses horizons.",
            milestones: [
              { year: "1985", institutions: [{ name: "Fondation du Groupe Geeta", location: "Panipat", note: "Pionnier de l'éducation de qualité dans la région NCR" }] },
              { year: "2008", institutions: [{ name: "École d'Ingénieurs Geeta", location: "Panipat" }] },
              { year: "2022", institutions: [{ name: "Établissement de Geeta University", location: "Panipat", note: "Statut d'Université Privée d'État" }] },
            ],
          },
        },
        hi: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawLegacyBody,
            eyebrow: "उत्कृष्टता की विरासत",
            title: "दृष्टिकोण पर निर्मित एक विरासत,",
            highlightedTitle: "मूल्य और उत्कृष्टता।",
            description: "दशकों के शैक्षणिक नेतृत्व में निहित, गीता ग्रुप ऑफ इंस्टीट्यूशंस ने लगातार अपने क्षितिज का विस्तार किया है।",
            milestones: [
              { year: "1985", institutions: [{ name: "गीता ग्रुप की स्थापना", location: "पानीपत", note: "एनसीआर में गुणवत्तापूर्ण शिक्षा का शुभारंभ" }] },
              { year: "2008", institutions: [{ name: "गीता इंजीनियरिंग कॉलेज", location: "पानीपत" }] },
              { year: "2022", institutions: [{ name: "गीता विश्वविद्यालय की स्थापना", location: "पानीपत", note: "राज्य निजी विश्वविद्यालय का दर्जा" }] },
            ],
          },
        },
      },
    },
  });
  console.log("✓ Seeded About Legacy translations (FR & HI - PUBLISHED)");

  // 3. About Legacy Ecosystem
  let ecosystemSec = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "legacyEcosystem" } },
  });

  if (!ecosystemSec) {
    ecosystemSec = await prisma.pageSection.create({
      data: {
        pageSlug: "about",
        sectionKey: "legacyEcosystem",
        title: "Legacy & Ecosystem",
        status: "PUBLISHED",
        body: {
          heading: "Legacy & Ecosystem",
          contextText: "Students benefit from the integrated ecosystem of:",
          description: "Founded in 1985, the Geeta Group of Institutions has emerged as a major educational hub.",
          items: [
            { name: "Geeta University", detail: "AI-enabled multidisciplinary campus", color: "#E85C2D" },
            { name: "Geeta Finishing School (GFS)", detail: "Communication & Corporate Readiness", color: "#07589f" },
            { name: "Geeta Technical Hub (GTH)", detail: "Advanced Technology, Certifications, and Industry Skills", color: "#013d55" },
          ],
          footerText: "Together, they form a holistic, future-ready talent development ecosystem.",
        },
      },
    });
  }

  const rawEcoBody = ecosystemSec.body as any || {};
  await prisma.pageSection.update({
    where: { id: ecosystemSec.id },
    data: {
      translations: {
        fr: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawEcoBody,
            heading: "Héritage et Écosystème",
            contextText: "Les étudiants bénéficient de l'écosystème intégré de :",
            description: "Fondé en 1985, le groupe d'institutions Geeta est devenu un pôle éducatif majeur.",
            items: [
              { name: "Université Geeta", detail: "Campus pluridisciplinaire axé sur l'IA", color: "#E85C2D" },
              { name: "Geeta Finishing School (GFS)", detail: "Communication et préparation au monde de l'entreprise", color: "#07589f" },
              { name: "Geeta Technical Hub (GTH)", detail: "Technologie avancée, certifications et compétences industrielles", color: "#013d55" },
            ],
            footerText: "Ensemble, ils forment un écosystème holistique de développement des talents prêt pour l'avenir.",
          },
        },
        hi: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawEcoBody,
            heading: "विरासत एवं पारिस्थितिकी तंत्र",
            contextText: "छात्रों को एकीकृत पारिस्थितिकी तंत्र से लाभ मिलता है:",
            description: "1985 में स्थापित, गीता ग्रुप ऑफ इंस्टीट्यूशंस एक प्रमुख शैक्षणिक केंद्र के रूप में उभरा है।",
            items: [
              { name: "गीता विश्वविद्यालय", detail: "एआई-सक्षम बहुविषयक परिसर", color: "#E85C2D" },
              { name: "गीता फिनिशिंग स्कूल (GFS)", detail: "संचार और कॉर्पोरेट तैयारी", color: "#07589f" },
              { name: "गीता टेक्निकल हब (GTH)", detail: "उन्नत तकनीक, प्रमाणपत्र और उद्योग कौशल", color: "#013d55" },
            ],
            footerText: "साथ मिलकर, वे एक समग्र, भविष्य के लिए तैयार प्रतिभा विकास पारिस्थितिकी तंत्र का निर्माण करते हैं।",
          },
        },
      },
    },
  });
  console.log("✓ Seeded About Legacy Ecosystem translations (FR & HI - PUBLISHED)");

  // 4. Leadership Members Relational Entity Translations
  const leaders = await prisma.leadershipMember.findMany();
  for (const leader of leaders) {
    await prisma.leadershipMember.update({
      where: { id: leader.id },
      data: {
        translations: {
          fr: {
            status: "PUBLISHED",
            _status: "PUBLISHED",
            name: leader.name.startsWith("S. ") ? "S. SP Bansal (FR)" : leader.name,
            role: "Chancelier",
            message: "Bienvenue à Geeta University. Notre engagement est d'offrir une éducation mondiale axée sur l'innovation.",
            quote: "L'éducation est l'arme la plus puissante pour transformer la société.",
          },
          hi: {
            status: "PUBLISHED",
            _status: "PUBLISHED",
            name: leader.name.startsWith("S. ") ? "एस. एसपी बंसल" : leader.name,
            role: "कुलाधिपति (Chancellor)",
            message: "गीता विश्वविद्यालय में आपका स्वागत है। हमारी प्रतिबद्धता नवाचार पर आधारित वैश्विक शिक्षा प्रदान करना है।",
            quote: "शिक्षा समाज को बदलने का सबसे शक्तिशाली साधन है।",
          },
        },
      },
    });
  }
  console.log(`✓ Seeded ${leaders.length} Leadership Member translations (FR & HI)`);

  // 5. Recognitions Relational Entity Translations
  const recognitions = await prisma.recognition.findMany();
  for (const rec of recognitions) {
    await prisma.recognition.update({
      where: { id: rec.id },
      data: {
        translations: {
          fr: {
            status: "PUBLISHED",
            _status: "PUBLISHED",
            name: rec.name,
            fullName: rec.fullName ? `${rec.fullName} (Reconnu par la Commission des Subventions Universitaires)` : rec.name,
          },
          hi: {
            status: "PUBLISHED",
            _status: "PUBLISHED",
            name: rec.name,
            fullName: rec.fullName ? `${rec.fullName} (विश्वविद्यालय अनुदान आयोग द्वारा मान्यता प्राप्त)` : rec.name,
          },
        },
      },
    });
  }
  console.log(`✓ Seeded ${recognitions.length} Recognition translations (FR & HI)`);

  // 6. Home Smart Campus Section
  const smartCampusSec = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "smartCampus" } },
  });

  if (smartCampusSec) {
    const rawSmart = smartCampusSec.body as any || {};
    await prisma.pageSection.update({
      where: { id: smartCampusSec.id },
      data: {
        translations: {
          fr: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...rawSmart,
              eyebrow: "UN CAMPUS INTELLIGENT DE CLASSE MONDIALE",
              heading: "Conçu pour l'Innovation et la Découverte",
              description: "Découvrez nos installations de pointe, nos laboratoires IA et notre infrastructure moderne.",
            },
          },
          hi: {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
            body: {
              ...rawSmart,
              eyebrow: "विश्व स्तरीय स्मार्ट कैंपस",
              heading: "नवाचार और खोज के लिए डिज़ाइन किया गया",
              description: "हमारी अत्याधुनिक सुविधाओं, एआई प्रयोगशालाओं और आधुनिक बुनियादी ढांचे का अनुभव करें।",
            },
          },
        },
      },
    });
    console.log("✓ Seeded Home Smart Campus translations (FR & HI - PUBLISHED)");
  }

  // 7. Home Stats Section
  let statsSec = await prisma.pageSection.findUnique({
    where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "stats" } },
  });

  if (!statsSec) {
    statsSec = await prisma.pageSection.create({
      data: {
        pageSlug: "home",
        sectionKey: "stats",
        title: "Home Stats",
        status: "PUBLISHED",
        body: {
          heading: "Our Impact in Numbers",
          stats: [
            { label: "Placements Rate", value: "95%+" },
            { label: "Industry Partners", value: "500+" },
            { label: "Global Alumni Network", value: "10,000+" },
            { label: "Highest Package Offered", value: "₹40 LPA" },
          ],
        },
      },
    });
  }

  const rawStatsBody = statsSec.body as any || {};
  await prisma.pageSection.update({
    where: { id: statsSec.id },
    data: {
      translations: {
        fr: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawStatsBody,
            heading: "Notre impact en chiffres",
            stats: [
              { label: "Taux de placement", value: "95%+" },
              { label: "Partenaires industriels", value: "500+" },
              { label: "Réseau mondial d'anciens", value: "10 000+" },
              { label: "Offre de salaire la plus élevée", value: "₹40 LPA" },
            ],
          },
        },
        hi: {
          status: "PUBLISHED",
          updatedAt: new Date().toISOString(),
          body: {
            ...rawStatsBody,
            heading: "आंकड़ों में हमारा प्रभाव",
            stats: [
              { label: "प्लेसमेंट दर", value: "95%+" },
              { label: "उद्योग भागीदार", value: "500+" },
              { label: "वैश्विक पूर्व छात्र नेटवर्क", value: "10,000+" },
              { label: "उच्चतम पैकेज", value: "₹40 लाख प्रति वर्ष" },
            ],
          },
        },
      },
    },
  });
  console.log("✓ Seeded Home Stats translations (FR & HI - PUBLISHED)");

  console.log("\nAll translations successfully seeded!");
}

seedAllTranslations()
  .catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
