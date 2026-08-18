import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const data = {
    name: String((body as Record<string, unknown>).name ?? "").trim(),
    email: String((body as Record<string, unknown>).email ?? "").trim(),
    phone: String((body as Record<string, unknown>).phone ?? "").trim(),
    comments: String((body as Record<string, unknown>).comments ?? "").trim(),
  };

  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // In development without config, return a clear error
    console.warn("[Contact API] RESEND_API_KEY or CONTACT_TO_EMAIL not configured.");
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Please set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment.",
      },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Garage Doors Glen Cove NY <noreply@garagedoorsglencoveny.com>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New Service Request from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        ``,
        `Message:`,
        data.comments,
      ].join("\n"),
      html: `
        <h2>New Service Request</h2>
        <table cellpadding="6" cellspacing="0">
          <tr><td><strong>Name:</strong></td><td>${escapeHtml(data.name)}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${escapeHtml(data.email)}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${escapeHtml(data.comments).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
