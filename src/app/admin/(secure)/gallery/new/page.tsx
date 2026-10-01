import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import GalleryForm from "@/components/admin/GalleryForm";
import { createAlbumAction } from "@/features/admin/gallery/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getGalleryMediaOptions } from "@/server/services/gallery";

export default async function NewAlbumPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, session, media] = await Promise.all([searchParams, requireAdminSession(), getGalleryMediaOptions()]);
  return <div className="space-y-6"><Link href="/admin/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to gallery</Link><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Album</h2>{error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}<GalleryForm action={createAlbumAction} media={media} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} /></div>;
}
