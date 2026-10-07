import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import GalleryForm from "@/components/admin/GalleryForm";
import { updateAlbumAction } from "@/features/admin/gallery/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminAlbumById, getGalleryMediaOptions } from "@/server/services/gallery";

export default async function EditAlbumPage({ params, searchParams }: { params: Promise<{ albumId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { albumId } = await params;
  const [{ error }, session, album] = await Promise.all([searchParams, requireAdminSession(), getAdminAlbumById(albumId)]);
  if (!album) notFound();
  const media = await getGalleryMediaOptions(album.images.map((image) => image.mediaId));
  return <div className="space-y-6"><div className="flex flex-wrap items-end justify-between gap-4"><div><Link href="/admin/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to gallery</Link><h2 className="mt-4 font-serif text-3xl font-bold text-[#0A1F44]">Edit {album.title}</h2></div>{album.status === "PUBLISHED" ? <Link href={`/gallery/${album.slug}`} target="_blank" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A1F44]"><ExternalLink className="h-4 w-4" /> View album</Link> : null}</div>{error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}<GalleryForm album={{ id: album.id, title: album.title, slug: album.slug, description: album.description, status: album.status, sortOrder: album.sortOrder, imageIds: album.images.map((image) => image.mediaId) }} media={media} action={updateAlbumAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} /></div>;
}
