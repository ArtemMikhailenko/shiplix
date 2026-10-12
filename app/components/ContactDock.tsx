"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/app/lib/constants";
import { trackEvent } from "@/app/lib/analytics";
import { useDictionary } from "@/app/lib/i18n/DictionaryProvider";

const icon = "w-[18px] h-[18px]";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={icon} aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={icon} aria-hidden="true">
    <path d="M21.9 4.3 18.6 19.9c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.4l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.5 2.9c.9-.3 1.7.2 1.4 1.4z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={icon} aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={icon} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

type Channel = {
  id: "telegram" | "phone" | "whatsapp" | "email";
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

/**
 * Floating contact button: one tap away from Telegram, a call, WhatsApp or
 * email on every page except /contact, which already lists all of them.
 */
export default function ContactDock() {
  const dict = useDictionary();
  const t = dict.contactDock;
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const digits = CONTACT.phone.replace(/\D/g, "");
  const channels: Channel[] = [
    {
      id: "telegram",
      label: t.telegram,
      value: CONTACT.telegram,
      href: `https://t.me/${CONTACT.telegram.replace("@", "")}`,
      icon: <TelegramIcon />,
      external: true,
    },
    {
      id: "phone",
      label: t.call,
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
      icon: <PhoneIcon />,
    },
    {
      id: "whatsapp",
      label: t.whatsapp,
      value: CONTACT.phoneDisplay,
      href: `https://wa.me/${digits}`,
      icon: <WhatsAppIcon />,
      external: true,
    },
    {
      id: "email",
      label: t.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: <MailIcon />,
    },
  ];

  // Close on route change, Escape, and a tap outside the dock.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  if (/\/contact\/?$/.test(pathname)) return null;

  const toggle = () => {
    if (!open) trackEvent("contact_dock_open");
    setOpen((v) => !v);
  };

  return (
    <div
      ref={rootRef}
      className="fixed right-4 md:right-6 z-40 flex flex-col items-end gap-3"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            id="contact-dock-menu"
            className="flex flex-col items-end gap-2.5"
            initial="hidden"
            animate="shown"
            exit="hidden"
            variants={{
              shown: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              hidden: { transition: { staggerChildren: 0.03 } },
            }}
          >
            {channels.map((c) => (
              <motion.li
                key={c.id}
                variants={{
                  hidden: { opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion ? 1 : 0.96 },
                  shown: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => trackEvent("contact_click", { channel: c.id, source: "dock" })}
                  className="group flex items-center gap-3 pl-2 pr-5 py-2 rounded-pill bg-bg-elevated/95 backdrop-blur-md border border-white/[0.08] hover:border-accent/40 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)] transition-colors"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    {c.icon}
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text">
                      {c.label}
                    </span>
                    <span className="text-[13px] text-text-secondary">{c.value}</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="contact-dock-menu"
        aria-label={open ? t.close : t.open}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-deep text-white hover:bg-accent hover:text-bg shadow-[0_8px_28px_-6px_rgba(124,58,237,0.65)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <motion.span
          key={open ? "close" : "open"}
          initial={reduceMotion ? false : { rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          {open ? <CloseIcon /> : <ChatIcon />}
        </motion.span>
      </button>
    </div>
  );
}
