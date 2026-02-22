import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API_URL = "https://api.resend.com/emails";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const safeName = String(name ?? "").trim();
    const safeEmail = String(email ?? "").trim().toLowerCase();
    const safeMessage = String(message ?? "").trim();

    if (!safeName || !safeEmail || !safeMessage) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!emailPattern.test(safeEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Sri Lankan Chauffeur Guide <onboarding@resend.dev>";

    if (!resendApiKey || !to) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const normalizedMessage = safeMessage.replace(/\r\n/g, "\n");
    const html = `
      <h2>New Tour Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(normalizedMessage).replace(/\n/g, "<br/>")}</p>
    `.trim();
    const text = [
      "New Tour Request",
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      "",
      "Message:",
      normalizedMessage,
    ].join("\n");

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: safeEmail,
        subject: `New Tour Request from ${safeName}`,
        html,
        text,
        headers: {
          "X-Entity-Ref-ID": `contact-${Date.now()}`,
        },
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return NextResponse.json(
        { error: `Failed to send email: ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
