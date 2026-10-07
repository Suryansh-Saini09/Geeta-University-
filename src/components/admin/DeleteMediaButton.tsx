"use client";

import { Trash2 } from "lucide-react";

import { deleteMediaAction } from "@/features/admin/media/actions";

export default function DeleteMediaButton({ id, fileName }: { id: string; fileName: string }) {
  return <form action={deleteMediaAction} onSubmit={(event) => { if (!window.confirm(`Delete "${fileName}" permanently?`)) event.preventDefault(); }}>
    <input type="hidden" name="id" value={id} />
    <button type="submit" title="Delete unused file" className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-bold text-red-700 hover:bg-red-50"><Trash2 className="h-3.5 w-3.5" /> Delete</button>
  </form>;
}
