import { NextResponse } from "next/server";
import { prisma } from "@/server/db/client";
import { admissionEnquirySchema } from "@/validations/admissionEnquiry";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ success: false, message: "Expected JSON form data." }, { status: 415 });
  }
  const contentLength = Number(request.headers.get("content-length"));
  if (contentLength > 10_000) {
    return NextResponse.json({ success: false, message: "Enquiry is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON form data." }, { status: 400 });
  }
  const parsed = admissionEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: "Please check all required enquiry fields." }, { status: 400 });
  }

  const { page_url, ...fields } = parsed.data;
  let sourcePath: string | null = null;
  if (page_url) {
    const url = new URL(page_url);
    if (url.origin === new URL(request.url).origin) sourcePath = url.pathname;
  }

  try {
    const submission = await prisma.contactSubmission.create({
      data: {
        type: "ADMISSION_ENQUIRY",
        name: fields.name,
        email: fields.email,
        phone: fields.mobile,
        subject: fields.course,
        payload: { state: fields.state, city: fields.city, discipline: fields.discipline, course: fields.course, consent: fields.agree },
        sourcePath,
      },
      select: { id: true },
    });
    return NextResponse.json({ success: true, leadId: submission.id, message: "Your enquiry has been received." }, { status: 201 });
  } catch (error) {
    console.error("Failed to save admission enquiry:", error);
    return NextResponse.json(
      { success: false, message: "We could not submit your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
