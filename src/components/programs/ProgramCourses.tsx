"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
} from "lucide-react";

import type {
  CourseCategory,
  ProgramPageData,
} from "@/data/programs/types";

interface ProgramCoursesProps {
  courses: CourseCategory[];
}

/* ============================================================
   FLEXIBLE PROGRAM TYPE

   The existing project may already have some of these fields,
   while older school data may contain only name/href.

   Keeping this type flexible allows the shared component to
   support all schools without forcing every school to have the
   same amount of information.
   ============================================================ */

type ProgramItem = NonNullable<CourseCategory["programs"]>[number] & {
  duration?: string;
  eligibility?: string;
  specializations?: (string | { name: string; href?: string })[];
  specialisation?: (string | { name: string; href?: string })[];
  specialization?: (string | { name: string; href?: string })[];
  description?: string;
};

/* ============================================================
   HELPERS
   ============================================================ */

function getProgramSpecializations(
  program: ProgramItem
): (string | { name: string; href?: string })[] {
  let list: (string | { name: string; href?: string })[] = [];

  if (Array.isArray(program.specializations)) {
    list = program.specializations;
  } else if (Array.isArray(program.specialisation)) {
    list = program.specialisation;
  } else if (Array.isArray(program.specialization)) {
    list = program.specialization;
  }

  if (!list || list.length === 0) {
    return [];
  }

  const programName = (program.name || (program as any).program || "")
    .toLowerCase()
    .trim();

  // Filter out any invalid items
  const validSpecs = list.filter((item) => {
    if (!item) return false;
    const name = typeof item === "object" ? item.name : String(item);
    return typeof name === "string" && name.trim().length > 0;
  });

  // Defensive check: If there is only 1 item and its name is identical or virtually identical to parent program name,
  // it is not a true sub-specialization (e.g. M.Tech. CSE having 1 specialization "M.Tech. CSE").
  if (validSpecs.length === 1 && programName) {
    const singleName = (
      typeof validSpecs[0] === "object"
        ? validSpecs[0].name
        : String(validSpecs[0])
    )
      .toLowerCase()
      .trim();
    const cleanProgram = programName.replace(/[^a-z0-9]/g, "");
    const cleanSingle = singleName.replace(/[^a-z0-9]/g, "");
    if (
      cleanProgram &&
      cleanSingle &&
      (cleanProgram === cleanSingle ||
        cleanProgram.includes(cleanSingle) ||
        cleanSingle.includes(cleanProgram))
    ) {
      return [];
    }
  }

  return validSpecs;
}

function getCategoryMeta(index: number, title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes("under")) {
    return {
      number: "01",
      eyebrow: "Academic Level",
      title: "Undergraduate Programs",
    };
  }

  if (
    normalized.includes("post") ||
    normalized.includes("master")
  ) {
    return {
      number: "02",
      eyebrow: "Academic Level",
      title: "Postgraduate Programs",
    };
  }

  if (
    normalized.includes("doctoral") ||
    normalized.includes("ph.d") ||
    normalized.includes("phd")
  ) {
    return {
      number: "03",
      eyebrow: "Academic Level",
      title: "Doctoral Programs",
    };
  }

  return {
    number: String(index + 1).padStart(2, "0"),
    eyebrow: "Academic Level",
    title,
  };
}

/* ============================================================
   PROGRAM ROW
   ============================================================ */

function ProgramRow({
  program,
  categoryDuration,
  categoryEligibility,
  open,
  onToggle,
}: {
  program: ProgramItem;
  categoryDuration?: string;
  categoryEligibility?: string;
  open: boolean;
  onToggle: () => void;
}) {
  const displayName =
    program.name ||
    (program as any).program ||
    "Academic Program";

  const specializations =
    getProgramSpecializations(program);

  const hasSpecializations =
    specializations.length > 0;

  const programDuration =
    program.duration || categoryDuration || undefined;

  const programEligibility =
    program.eligibility || categoryEligibility || undefined;

  const hasExtraContent =
    hasSpecializations ||
    !!program.description ||
    !!programEligibility;

  const handleRowClick = () => {
    if (hasExtraContent) {
      onToggle();
    }
  };

  return (
    <article
      className={`
        group
        relative
        border-b
        border-[#DCE2EB]
        transition-colors
        duration-300
        ${open ? "bg-[#F8FAFC]" : "bg-transparent"}
      `}
    >
      <div
        className={`
          flex
          items-center
          justify-between
          gap-5
          px-1
          py-5
          sm:py-6
        `}
      >
        {/* ==================================================
            PROGRAM INFORMATION
            ================================================== */}

        <button
          type={hasExtraContent ? "button" : undefined}
          onClick={
            hasExtraContent
              ? handleRowClick
              : undefined
          }
          className={`
            min-w-0
            flex-1
            text-left
            ${hasExtraContent ? "cursor-pointer" : "cursor-default"}
          `}
          aria-expanded={
            hasExtraContent ? open : undefined
          }
        >
          <div className="flex min-w-0 flex-col gap-2">
            <div className="flex min-w-0 items-start gap-3">
              <GraduationCap
                size={17}
                strokeWidth={1.8}
                className="
                  mt-[5px]
                  shrink-0
                  text-[#E8871A]
                  opacity-80
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <h3
                className="
                  min-w-0
                  font-serif
                  text-[18px]
                  font-black
                  leading-[1.25]
                  tracking-[-0.3px]
                  text-[#0A1F44]
                  transition-colors
                  duration-300
                  group-hover:text-[#173F6D]
                  sm:text-[20px]
                  md:text-[21px]
                "
              >
                {displayName}
              </h3>
            </div>

            {programDuration && (
              <span
                className="
                  ml-7
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#E8871A]/30
                  bg-[#FFF8EC]
                  px-3
                  py-1
                  text-[11px]
                  font-bold
                  tracking-[0.1px]
                  text-[#9B5D0A]
                  sm:text-[12px]
                "
              >
                <Clock3
                  size={12}
                  strokeWidth={2}
                />

                {programDuration}
              </span>
            )}
          </div>
        </button>

        {/* ==================================================
            ACTION
            ================================================== */}

        {hasExtraContent ? (
          <button
            type="button"
            onClick={onToggle}
            aria-label={
              open
                ? `Collapse ${displayName}`
                : `Expand ${displayName}`
            }
            aria-expanded={open}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE2EB]
              bg-white
              text-[#0A1F44]
              shadow-[0_4px_12px_rgba(10,31,68,0.04)]
              transition-all
              duration-300
              hover:border-[#E8871A]/50
              hover:bg-[#FFF8EC]
              hover:text-[#E8871A]
              sm:h-10
              sm:w-10
            "
          >
            <ChevronDown
              size={18}
              strokeWidth={1.8}
              className={`
                transition-transform
                duration-300
                ${open ? "rotate-180" : ""}
              `}
            />
          </button>
        ) : program.href ? (
          <Link
            href={program.href}
            aria-label={`View ${displayName}`}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE2EB]
              bg-white
              text-[#0A1F44]
              shadow-[0_4px_12px_rgba(10,31,68,0.04)]
              transition-all
              duration-300
              hover:border-[#E8871A]/50
              hover:bg-[#E8871A]
              hover:text-white
              sm:h-10
              sm:w-10
            "
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </Link>
        ) : (
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#E8EDF3]
              text-[#CBD5E1]
              sm:h-10
              sm:w-10
            "
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
            />
          </span>
        )}
      </div>

      {/* ======================================================
          EXPANDED PROGRAM CONTENT
          ====================================================== */}

      {open && hasExtraContent && (
        <div className="pb-6 pt-2 pl-7 sm:pl-10 pr-2">
          <div className="rounded-2xl border border-[#CBD5E1]/60 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(10,31,68,0.06)]">
            {/* --------------------------------------------------
                SPECIALIZATIONS GRID
                -------------------------------------------------- */}

            {hasSpecializations && (
              <div className="mb-6">
                <div className="mb-3.5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E8871A]" />
                  <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#E8871A]">
                    Available Specializations
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {specializations.map((specItem, index) => {
                    const isObj =
                      typeof specItem === "object" && specItem !== null;
                    const name = isObj ? specItem.name : String(specItem);
                    const href = isObj ? specItem.href : undefined;

                    const innerContent = (
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E8871A]/70 group-hover/spec:bg-[#E8871A]" />
                          <span className="text-[13px] font-semibold text-[#0A1F44] group-hover/spec:text-[#E8871A] transition-colors truncate">
                            {name}
                          </span>
                        </div>
                        {href && (
                          <ArrowUpRight
                            size={14}
                            className="shrink-0 text-[#94A3B8] transition-transform duration-200 group-hover/spec:-translate-y-0.5 group-hover/spec:translate-x-0.5 group-hover/spec:text-[#E8871A]"
                          />
                        )}
                      </div>
                    );

                    if (href) {
                      return href.startsWith("/") ? (
                        <Link
                          key={`${name}-${index}`}
                          href={href}
                          className="group/spec flex items-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 px-3.5 transition-all duration-200 hover:border-[#E8871A]/60 hover:bg-[#FFF8EC] hover:shadow-md"
                        >
                          {innerContent}
                        </Link>
                      ) : (
                        <a
                          key={`${name}-${index}`}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/spec flex items-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 px-3.5 transition-all duration-200 hover:border-[#E8871A]/60 hover:bg-[#FFF8EC] hover:shadow-md"
                        >
                          {innerContent}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={`${name}-${index}`}
                        className="flex items-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 px-3.5"
                      >
                        {innerContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* --------------------------------------------------
                DESCRIPTION
                -------------------------------------------------- */}

            {program.description && (
              <p className="mb-5 text-[14px] leading-[1.7] text-[#475569] sm:text-[15px]">
                {program.description}
              </p>
            )}

            {/* --------------------------------------------------
                ELIGIBILITY & ROUTING CTA
                -------------------------------------------------- */}

            <div
              className={`
                flex flex-col gap-4 md:flex-row md:items-center md:justify-between
                ${hasSpecializations || program.description ? "mt-5 pt-1" : ""}
              `}
            >
              {programEligibility && (
                <div className="flex items-start gap-3.5 min-w-0 flex-1 rounded-xl border-l-4 border-l-[#E8871A] border-y border-r border-[#F5E6D3] bg-[#FFF8EC]/90 p-4 sm:p-4.5 shadow-sm">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8871A] text-white shadow-sm">
                    <CheckCircle2 size={15} strokeWidth={2.4} className="!text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[1.8px] text-[#9B5D0A]">
                      Eligibility Criteria
                    </span>
                    <p className="mt-0.5 text-[13px] font-semibold leading-[1.6] text-[#0A1F44] sm:text-[14px]">
                      {programEligibility}
                    </p>
                  </div>
                </div>
              )}

              {/* ROUTING URL FOR SINGLE PROGRAM (NO SPECIALIZATIONS) */}
              {!hasSpecializations && program.href && (
                <div className="shrink-0 pt-1 md:pt-0">
                  {program.href.startsWith("/") ? (
                    <Link
                      href={program.href}
                      className="
                        group/btn
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#E8871A]
                        px-5
                        py-3
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[1.2px]
                        !text-white
                        shadow-[0_6px_18px_rgba(232,135,26,0.28)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#D9780F]
                        hover:shadow-[0_8px_24px_rgba(232,135,26,0.38)]
                        sm:text-[13px]
                      "
                    >
                      <span className="!text-white">Explore Program Details</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2}
                        className="!text-white transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </Link>
                  ) : (
                    <a
                      href={program.href}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group/btn
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#E8871A]
                        px-5
                        py-3
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[1.2px]
                        !text-white
                        shadow-[0_6px_18px_rgba(232,135,26,0.28)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#D9780F]
                        hover:shadow-[0_8px_24px_rgba(232,135,26,0.38)]
                        sm:text-[13px]
                      "
                    >
                      <span className="!text-white">Explore Program Details</span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2}
                        className="!text-white transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function ProgramCourses({
  courses,
}: ProgramCoursesProps) {
  const [openProgramKey, setOpenProgramKey] = useState<string | null>(null);

  if (!courses || courses.length === 0) {
    return null;
  }

  return (
    <section
      id="programs"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* ======================================================
          VERY SUBTLE BACKGROUND DETAIL
          ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#E8871A]/[0.035]
          blur-3xl
        "
      />

      <div className="gu-container relative">
        {/* ====================================================
            SECTION HEADER
            ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-7
            border-b
            border-[#DCE2EB]
            pb-8
            md:flex-row
            md:items-end
            md:justify-between
            md:pb-10
          "
        >
          <div className="min-w-0">
            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-3">
              <span
                className="
                  h-[2px]
                  w-10
                  bg-[#E8871A]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#E8871A]
                  sm:text-[11px]
                "
              >
                Academic Directory
              </span>
            </div>

            {/* Main title */}

            <h2
              className="
                font-serif
                text-[40px]
                font-black
                leading-[1]
                tracking-[-1.5px]
                text-[#0A1F44]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[62px]
              "
            >
              Programs Offered
            </h2>

            {/* Small supporting line */}

            <p
              className="
                mt-4
                max-w-2xl
                text-[13px]
                leading-[1.65]
                text-[#64748B]
                sm:text-[14px]
              "
            >
              Explore undergraduate, postgraduate and
              doctoral programs available at Geeta
              University.
            </p>
          </div>

          {/* ==================================================
              SINGLE GLOBAL APPLY CTA
              ================================================== */}

          <a
            href="https://admissions.geetauniversity.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-[#E8871A]
              px-5
              py-3
              text-[12px]
              font-bold
              uppercase
              tracking-[1.6px]
              !text-white
              shadow-[0_10px_28px_rgba(232,135,26,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#D9780F]
              hover:shadow-[0_14px_32px_rgba(232,135,26,0.24)]
              sm:px-6
              sm:py-3.5
            "
          >
            <span className="!text-white">Apply Now</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.9}
              className="
                !text-white
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* ====================================================
            ACADEMIC LEVELS
            ==================================================== */}

        <div className="mt-8 sm:mt-10">
          {courses.map((category, categoryIndex) => {
            const meta = getCategoryMeta(
              categoryIndex,
              category.title
            );

            return (
              <section
                key={category.title}
                className="
                  mb-12
                  last:mb-0
                  sm:mb-14
                  md:mb-16
                "
              >
                {/* =================================================
                    LEVEL HEADING
                    ================================================= */}

                <div
                  className="
                    relative
                    mb-2
                    flex
                    items-end
                    gap-4
                    border-b
                    border-[#DCE2EB]
                    pb-3
                    sm:gap-5
                    sm:pb-4
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[12px]
                      border
                      border-[#E8871A]/35
                      bg-[#FFF8EC]
                      font-serif
                      text-[15px]
                      font-black
                      text-[#E8871A]
                      sm:h-12
                      sm:w-12
                    "
                  >
                    {meta.number}
                  </span>

                  <div className="min-w-0">
                    <span
                      className="
                        mb-1
                        block
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[2.5px]
                        text-[#94A3B8]
                        sm:text-[10px]
                      "
                    >
                      {meta.eyebrow}
                    </span>

                    <h3
                      className="
                        font-serif
                        text-[25px]
                        font-black
                        leading-[1.1]
                        tracking-[-0.5px]
                        text-[#0A1F44]
                        sm:text-[30px]
                        md:text-[34px]
                      "
                    >
                      {meta.title}
                    </h3>
                  </div>
                </div>

                {/* =================================================
                    PROGRAM LIST
                    ================================================= */}

                <div className="mt-1">
                  {(category.programs || (category as any).items || []).map(
                    (rawProgram: any, pIdx: number) => {
                      const rawName =
                        rawProgram.name ||
                        rawProgram.program ||
                        `prog-${pIdx}`;
                      const rowKey = `${categoryIndex}-${pIdx}-${rawName}`;
                      const isOpen = openProgramKey === rowKey;

                      return (
                        <ProgramRow
                          key={rowKey}
                          program={rawProgram as ProgramItem}
                          categoryDuration={(category as any).duration}
                          categoryEligibility={(category as any).eligibility}
                          open={isOpen}
                          onToggle={() =>
                            setOpenProgramKey((current) =>
                              current === rowKey ? null : rowKey
                            )
                          }
                        />
                      );
                    }
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}