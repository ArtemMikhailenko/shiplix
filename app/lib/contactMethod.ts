// Shared by the contact form and /api/contact, so both sides accept the same input.

export const CONTACT_METHODS = ["email", "telegram", "phone", "whatsapp"] as const;
export type ContactMethod = (typeof CONTACT_METHODS)[number];

export function isContactMethod(v: unknown): v is ContactMethod {
  return typeof v === "string" && (CONTACT_METHODS as readonly string[]).includes(v);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Telegram usernames: 5–32 chars, start with a letter; a t.me link is fine too.
const TG_USERNAME_RE = /^(?:@|(?:https?:\/\/)?t\.me\/)?([a-zA-Z][a-zA-Z0-9_]{4,31})$/;

/** Digits of a phone number, or null unless it has a plausible length (E.164 allows up to 15). */
export function phoneDigits(v: string): string | null {
  if (!/^\+?[\d\s().-]+$/.test(v)) return null;
  const digits = v.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15 ? digits : null;
}

export function telegramUsername(v: string): string | null {
  const m = v.trim().match(TG_USERNAME_RE);
  return m ? m[1] : null;
}

export function isValidContact(method: ContactMethod, value: string): boolean {
  const v = value.trim();
  switch (method) {
    case "email":
      return EMAIL_RE.test(v);
    case "telegram":
      return telegramUsername(v) !== null || phoneDigits(v) !== null;
    case "phone":
    case "whatsapp":
      return phoneDigits(v) !== null;
  }
}
