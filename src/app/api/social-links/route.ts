import { NextResponse } from "next/server";

const SOCIAL_API_URL = process.env.NEXT_PUBLIC_SOCIAL_API_URL || "";

export async function GET() {
  try {
    if (!SOCIAL_API_URL) {
      return NextResponse.json(
        { success: false, error: "NEXT_PUBLIC_SOCIAL_API_URL is not defined" },
        { status: 500 }
      );
    }

    const response = await fetch(SOCIAL_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: `Upstream error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error proxies to Google Apps Script:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch social data" },
      { status: 500 }
    );
  }
}
