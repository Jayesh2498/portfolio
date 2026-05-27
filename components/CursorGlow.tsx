"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useCursorGlow } from "@/hooks/useCursorGlow";

export default function CursorGlow() {
  const glowRef = useCursorGlow();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Don't render until client-side theme is known
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  /*
   * Dark mode : white glow  — subtle lift on a near-black canvas
   * Light mode: amber tint  — warm spotlight, clearly visible on #f5f5f0
   */
  const gradient = isLight
    ? `radial-gradient(circle,
        rgba(251,191,36,0.18) 0%,
        rgba(251,191,36,0.08) 30%,
        transparent 70%)`
    : `radial-gradient(circle,
        rgba(255,255,255,0.055) 0%,
        rgba(255,255,255,0.02)  35%,
        transparent 70%)`;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: 520,
        height: 520,
        background: gradient,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 2,
        top: 0,
        left: 0,
        willChange: "left, top",
      }}
    />
  );
}
