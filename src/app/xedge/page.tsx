import type { Metadata } from "next";
import XEdgePage from "@/components/xedge/XEdgePage";

export const metadata: Metadata = {
  title: "XEDGE | Developing Complete Corporate Citizens | Geeta University",
  description:
    "Geeta University's XEDGE initiative empowers students with Career Skills, Life Skills, and Social Skills to transform into complete, future-ready corporate citizens.",
  keywords: [
    "xedge geeta university",
    "complete corporate citizens",
    "career skills university panipat",
    "life skills education delhi ncr",
    "social skills training haryana",
    "geeta university personality development",
    "gu edge xedge",
  ],
};

export default function XEdgeRoute() {
  return <XEdgePage />;
}
