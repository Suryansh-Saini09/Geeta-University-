import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, state, city, discipline, course, agree } = body;

    // Validate essential fields
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Mobile)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Basic mobile validation (at least 10 digits)
    const cleanedMobile = mobile.replace(/\D/g, "");
    if (cleanedMobile.length < 10) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const enquiryLead = {
      id: `GU-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: cleanedMobile,
      state: state || "",
      city: city || "",
      discipline: discipline || "",
      course: course || "",
      agree: Boolean(agree),
      timestamp,
      source: "website_enquiry_form",
    };

    // Log the lead for server telemetry
    console.log("[Admission Enquiry Received]", JSON.stringify(enquiryLead, null, 2));

    // Optional: forward to NoPaperForms webhook/API server-side if NPF endpoints are configured
    try {
      // In server environment, requests to NPF or CRM can be dispatched without browser domain blocking
    } catch {
      // Graceful fallback - never fail the user submission
    }

    return NextResponse.json(
      {
        success: true,
        leadId: enquiryLead.id,
        message: "Thank you for your enquiry! Our admissions counselor will get in touch with you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry Submission Error]", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while submitting your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
