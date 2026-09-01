"use client";

import React, { useState } from "react";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordionSection from "@/components/faq/FAQAccordionSection";

export default function FAQClientWrapper() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <FAQHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FAQAccordionSection searchQuery={searchQuery} />
    </>
  );
}
