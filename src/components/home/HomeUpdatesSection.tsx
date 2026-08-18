"use client";

import {
  eventUpdates,
  placementUpdates,
  type HomeUpdate,
} from "@/data/homeUpdates";

interface UpdateColumnProps {
  title: string;
  accent: "orange" | "blue";
  updates: HomeUpdate[];
}

function UpdateColumn({
  title,
  accent,
  updates,
}: UpdateColumnProps) {
  return (
    <div
      className="updates-column overflow-hidden rounded-3xl border border-[#D9E2EC] bg-white shadow-xl"
    >
      {/* Header */}
      <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6 sm:px-8">
        <div className="flex items-center gap-4">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${
              accent === "orange"
                ? "bg-[#F28C18] text-white"
                : "bg-[#06355F] text-white"
            }`}
          >
            {accent === "orange" ? "◈" : "↗"}
          </span>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C18]">
              Latest
            </p>

            <h3 className="font-serif text-2xl font-bold text-[#06355F] sm:text-3xl">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Scrolling viewport */}
      <div className="updates-viewport relative h-[500px] overflow-hidden bg-white">
        {/* Top fade */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-16 bg-gradient-to-b from-white via-white/80 to-transparent" />

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Animated track */}
        <div className="updates-track">
          {/* FIRST COPY */}
          <div className="updates-list">
            {updates.map((update, index) => (
              <UpdateItem
                key={`first-${update.title}-${index}`}
                update={update}
                accent={accent}
                isLast={index === updates.length - 1}
              />
            ))}
          </div>

          {/* SECOND COPY */}
          <div className="updates-list">
            {updates.map((update, index) => (
              <UpdateItem
                key={`second-${update.title}-${index}`}
                update={update}
                accent={accent}
                isLast={index === updates.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface UpdateItemProps {
  update: HomeUpdate;
  accent: "orange" | "blue";
  isLast: boolean;
}

function UpdateItem({
  update,
  accent,
  isLast,
}: UpdateItemProps) {
  return (
    <article className="group border-b border-[#E2E8F0] px-6 py-5 transition-colors duration-200 hover:bg-[#F8FAFC] sm:px-8">
      <div className="flex gap-4">
        {/* Timeline */}
        <div className="relative flex w-4 shrink-0 justify-center">
          <span
            className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
              accent === "orange"
                ? "bg-[#F28C18]"
                : "bg-[#06355F]"
            }`}
          />

          {!isLast && (
            <span className="absolute top-5 h-full w-px bg-[#D9E2EC]" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-bold leading-6 text-[#06355F] transition-colors duration-200 group-hover:text-[#F28C18] sm:text-base">
            {update.title}
          </h4>

          <p className="mt-1.5 text-xs leading-5 text-[#64748B] sm:text-sm">
            {update.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function HomeUpdatesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Top orange line */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#F28C18]" />

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Stay Connected
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            What&apos;s Happening at{" "}
            <span className="text-[#F28C18]">GU?</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Stay updated with the latest events, campus activities and
            career opportunities happening across Geeta University.
          </p>
        </div>

        {/* Update columns */}
        <div className="grid gap-7 lg:grid-cols-2">
          <UpdateColumn
            title="Event Updates"
            accent="orange"
            updates={eventUpdates}
          />

          <UpdateColumn
            title="Placement Updates"
            accent="blue"
            updates={placementUpdates}
          />
        </div>
      </div>
    </section>
  );
}