import "server-only";

import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { env } from "@/lib/env";

export const MAX_MEDIA_BYTES = 10 * 1024 * 1024;

const formats = [
  { mimeType: "image/jpeg", extension: "jpg", matches: (bytes: Buffer) => bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff },
  { mimeType: "image/png", extension: "png", matches: (bytes: Buffer) => bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) },
  { mimeType: "image/gif", extension: "gif", matches: (bytes: Buffer) => ["GIF87a", "GIF89a"].includes(bytes.toString("ascii", 0, 6)) },
  { mimeType: "image/webp", extension: "webp", matches: (bytes: Buffer) => bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP" },
  { mimeType: "application/pdf", extension: "pdf", matches: (bytes: Buffer) => bytes.toString("ascii", 0, 5) === "%PDF-" },
] as const;

function storageRoot() {
  if (env.NODE_ENV === "production" && !env.MEDIA_STORAGE_DIR) {
    throw new Error("MEDIA_STORAGE_DIR must point to persistent storage in production.");
  }
  return env.MEDIA_STORAGE_DIR
    ? path.resolve(/* turbopackIgnore: true */ env.MEDIA_STORAGE_DIR)
    : path.join(/* turbopackIgnore: true */ process.cwd(), "storage", "media");
}

function storagePath(key: string) {
  if (!/^[a-f0-9-]{36}\.(jpg|png|gif|webp|pdf)$/.test(key)) {
    throw new Error("Invalid media key.");
  }
  return path.join(storageRoot(), key);
}

export function detectMediaFormat(bytes: Buffer) {
  return formats.find((format) => format.matches(bytes)) ?? null;
}

export async function saveMedia(bytes: Buffer, extension: string) {
  const key = `${randomUUID()}.${extension}`;
  const root = storageRoot();
  await mkdir(root, { recursive: true });
  await writeFile(storagePath(key), bytes, { flag: "wx" });
  return key;
}

export function readMedia(key: string) {
  return readFile(storagePath(key));
}

export function removeMedia(key: string) {
  return unlink(storagePath(key));
}
