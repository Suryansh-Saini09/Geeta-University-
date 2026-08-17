export interface LegacyEcosystemItem {
  id: number;
  name: string;
  description: string;
  accent: "saffron" | "blue" | "navy";
}

export const legacyEcosystemItems: LegacyEcosystemItem[] = [
  {
    id: 1,
    name: "Geeta University",
    description: "AI-enabled multidisciplinary campus",
    accent: "saffron",
  },
  {
    id: 2,
    name: "Geeta Finishing School (GFS)",
    description: "Communication & Corporate Readiness",
    accent: "blue",
  },
  {
    id: 3,
    name: "Geeta Technical Hub (GTH)",
    description:
      "Advanced Technology, Certifications, and Industry Skills",
    accent: "navy",
  },
];

export const legacyEcosystemIntro =
  "Founded in 1985, the Geeta Group of Institutions has emerged as a major educational hub with institutions spanning school education to doctoral programs. SPBSB benefits from the integrated ecosystem of:";

export const legacyEcosystemClosing =
  "Together, they form a holistic, future-ready talent development ecosystem.";