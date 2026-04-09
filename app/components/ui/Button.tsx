import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-pill transition-all duration-200 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-accent-deep text-white hover:bg-[#7c3aed] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]",
    ghost:
      "bg-transparent text-text border border-border hover:border-border-hover hover:bg-bg-hover",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
