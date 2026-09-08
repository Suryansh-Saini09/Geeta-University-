"use client";

import React from "react";
import Image from "next/image";
import type { CourseHero as CourseHeroType } from "@/data/programs/courses/types";

interface CourseHeroProps {
  hero: CourseHeroType;
  schoolName?: string;
  schoolSlug?: string;
}

export default function CourseHero({ hero }: CourseHeroProps) {
  const hasMobileImage = Boolean(hero.mobileImage);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {hasMobileImage ? (
        <>
          {/* Desktop Banner Image */}
          <div className="hidden md:block relative w-full aspect-[16/9]">
            <Image
              src={hero.image}
              alt={hero.title || "Course Hero Banner"}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* Mobile Banner Image */}
          <div className="block md:hidden relative w-full aspect-[4/3]">
            <Image
              src={hero.mobileImage!}
              alt={hero.title || "Course Hero Banner"}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-black/10 pointer-events-none" />
          </div>
        </>
      ) : (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={hero.image}
            alt={hero.title || "Course Hero Banner"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-black/10 pointer-events-none" />
        </div>
      )}
    </section>
  );
}
