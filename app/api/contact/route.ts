import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Telegram caps sendMessage at 4096 chars, and the labels below add ~200 —
// keep the message short enough that a long inquiry is never rejected.
const MAX = { name: 100, email: 160, budget: 60, message: 3500 } as const;

/** Best-effort throttle. Serverless instances are short-lived, so this only
 *  blocks bursts from one warm instance — real abuse protection lives upstream. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const LIMIT = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) hits.clear();
  return recent.length > LIMIT;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set");
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const budget = clean(body.budget, MAX.budget);
  const message = clean(body.message, MAX.message);
  const locale = clean(body.locale, 5);
  const page = clean(body.page, 200);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const text = [
    "🚀 <b>New project inquiry — shiplix.it.com</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    budget ? `<b>Budget:</b> ${escapeHtml(budget)}` : null,
    "",
    "<b>Project:</b>",
    escapeHtml(message),
    "",
    `<i>${escapeHtml(locale || "-")} · ${escapeHtml(page || "/contact")}</i>`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // Log the Telegram error server-side; never surface it to the client.
      console.error("[contact] telegram error", res.status, await res.text());
      return NextResponse.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] telegram request failed", err);
    return NextResponse.json(
      { error: "Could not send your message. Please email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
