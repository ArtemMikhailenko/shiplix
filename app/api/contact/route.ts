import { NextResponse } from "next/server";
import {
  isContactMethod,
  isValidContact,
  phoneDigits,
  telegramUsername,
  type ContactMethod,
} from "@/app/lib/contactMethod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Telegram caps sendMessage at 4096 chars, and the labels below add ~200 —
// keep the message short enough that a long inquiry is never rejected.
const MAX = { name: 100, contact: 160, budget: 60, message: 3500 } as const;

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

const CONTACT_LABEL: Record<ContactMethod, string> = {
  email: "Email",
  telegram: "Telegram",
  phone: "Phone",
  whatsapp: "WhatsApp",
};

/** The contact as shown in the Telegram notification, linked where Telegram allows it. */
function contactLine(method: ContactMethod, value: string): string {
  const text = escapeHtml(value);
  if (method === "telegram") {
    const user = telegramUsername(value);
    if (user) return `<a href="https://t.me/${user}">@${user}</a>`;
  }
  if (method === "whatsapp") {
    const digits = phoneDigits(value);
    if (digits) return `<a href="https://wa.me/${digits}">${text}</a>`;
  }
  // Email and phone numbers are auto-linked by Telegram itself.
  return text;
}

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
  // Older clients send only `email`; treat that as the email method.
  const method: ContactMethod = isContactMethod(body.contactMethod)
    ? body.contactMethod
    : "email";
  const contact = clean(body.contact ?? body.email, MAX.contact);
  const budget = clean(body.budget, MAX.budget);
  const message = clean(body.message, MAX.message);
  const locale = clean(body.locale, 5);
  const page = clean(body.page, 200);

  if (!name || !contact || !message) {
    return NextResponse.json(
      { error: "Name, contact and message are required." },
      { status: 400 }
    );
  }
  if (!isValidContact(method, contact)) {
    return NextResponse.json(
      { error: "Please enter a valid contact." },
      { status: 400 }
    );
  }

  const text = [
    "🚀 <b>New project inquiry — shiplix.it.com</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>${CONTACT_LABEL[method]}:</b> ${contactLine(method, contact)}`,
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
