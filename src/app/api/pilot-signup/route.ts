import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FSM_VALUES = new Set(["jobber", "housecall-pro", "other", "none"]);

type PilotSignupPayload = {
  businessName: string;
  email: string;
  fsm?: string;
  website?: string; // honeypot — real users never see or fill this field
};

export async function POST(request: Request) {
  let payload: Partial<PilotSignupPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // honeypot: bots fill every field, real users never see this one
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const businessName = (payload.businessName ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim();
  const fsm = (payload.fsm ?? "").toString().trim();

  if (!businessName || businessName.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Business name is required." },
      { status: 400 },
    );
  }

  if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 },
    );
  }

  if (fsm && !FSM_VALUES.has(fsm)) {
    return NextResponse.json({ ok: false, error: "Invalid field service tool." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.PILOT_NOTIFY_EMAIL;

  if (!resendApiKey || !notifyEmail) {
    console.warn(
      "[pilot-signup] RESEND_API_KEY / PILOT_NOTIFY_EMAIL not configured — logging submission instead of emailing it.",
      { businessName, email, fsm: fsm || "unspecified" },
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nelio Pilot <pilot@nelioapp.com>",
        to: [notifyEmail],
        reply_to: email,
        subject: `New pilot signup: ${businessName}`,
        html: `<p><strong>Business:</strong> ${escapeHtml(businessName)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Field service tool:</strong> ${escapeHtml(fsm || "unspecified")}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("[pilot-signup] Resend API error", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "Could not send your request right now. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[pilot-signup] Failed to reach Resend", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your request right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
