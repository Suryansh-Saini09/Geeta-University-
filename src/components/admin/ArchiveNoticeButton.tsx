"use client";

import { Archive } from "lucide-react";
import { archiveNoticeAction } from "@/features/admin/notices/actions";

export default function ArchiveNoticeButton({ id, title }: { id: string; title: string }) {
  return <form action={archiveNoticeAction} onSubmit={(event) => { if (!window.confirm(`Archive "${title}"?`)) event.preventDefault(); }}>
    <input type="hidden" name="id" value={id} />
    <button type="submit" className="inline-flex items-center gap-1 rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-bold text-amber-700 hover:bg-amber-50"><Archive className="h-3.5 w-3.5" /> Archive</button>
  </form>;
}
