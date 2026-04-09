import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-pill border border-border bg-bg-surface text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
