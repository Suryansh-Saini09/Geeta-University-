"use client";

import { Archive } from "lucide-react";
import { archiveFacultyAction } from "@/features/admin/faculty/actions";

export default function ArchiveFacultyButton({ id, name }: { id: string; name: string }) {
  return <form action={archiveFacultyAction} onSubmit={(event) => { if (!window.confirm(`Archive ${name}?`)) event.preventDefault(); }}>
    <input type="hidden" name="id" value={id} />
    <button type="submit" className="inline-flex items-center gap-1 rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-bold text-amber-700 hover:bg-amber-50"><Archive className="h-3.5 w-3.5" /> Archive</button>
  </form>;
}
