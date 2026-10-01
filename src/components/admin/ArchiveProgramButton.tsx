"use client";

import { Archive } from "lucide-react";

import { archiveProgramAction } from "@/features/admin/programs/actions";

export default function ArchiveProgramButton({
  programId,
  programName,
}: {
  programId: string;
  programName: string;
}) {
  return (
    <form
      action={archiveProgramAction}
      onSubmit={(event) => {
        const confirmed = window.confirm(
          `Archive "${programName}"? This will remove it from active publishing flows.`
        );

        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={programId} />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-bold text-amber-700 transition hover:border-amber-300 hover:bg-amber-50"
      >
        <Archive className="h-3.5 w-3.5" />
        Archive
      </button>
    </form>
  );
}
