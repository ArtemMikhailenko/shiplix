"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.08)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleEnter = useCallback(() => setOpacity(1), []);
  const handleLeave = useCallback(() => setOpacity(0), []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(640px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.12), transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
