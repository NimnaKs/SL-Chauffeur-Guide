import { NextResponse } from "next/server";

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "contact@srilankanchauffeurguide.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let payload: { name?: string; email?: string; message?: string };

  try {
    payload = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body. Please send JSON." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and message." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Mail service is not configured." },
      { status: 500 }
    );
  }

  const emailPayload = {
    from: "Sri Lankan Chauffeur Guide <onboarding@resend.dev>",
    to: [CONTACT_TO_EMAIL],
    reply_to: email,
    subject: `New contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New contact message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const errorMessage =
      typeof errorBody.error === "string"
        ? errorBody.error
        : "Unable to send your message at this time.";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
