import { NextResponse } from "next/server";
import {
  sendContactEmail,
  sendConfirmationEmail,
  verifyEmailConfig,
} from "@/lib/email";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Verify email configuration
    const isConfigValid = await verifyEmailConfig();
    if (!isConfigValid) {
      console.error("Email configuration is invalid");
      return NextResponse.json(
        {
          error:
            "Email service is currently unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send email to you (admin)
    const adminEmailResult = await sendContactEmail({
      name,
      email,
      subject,
      message,
    });

    // Send confirmation email to the sender
    const confirmationEmailResult = await sendConfirmationEmail({
      name,
      email,
      subject,
    });

    console.log("Contact form submission processed:", {
      name,
      email,
      subject,
      adminEmailSent: adminEmailResult.success,
      confirmationEmailSent: confirmationEmailResult.success,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your message! I'll get back to you soon. You should also receive a confirmation email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again or email me directly at hello@sohanthink.com",
      },
      { status: 500 }
    );
  }
}
