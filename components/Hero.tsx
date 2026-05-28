"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { hero, meta } from "@/data/content";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const [photoExists, setPhotoExists] = useState(true);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      setParallax({ x: nx * 8, y: ny * 6 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced]);

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      className="hero-section"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 0 0 16px",
        display: "grid",
        gridTemplateColumns: "0.85fr 1.15fr",
        gap: 0,
        alignItems: "stretch",
        flex: 1,
      }}
    >
      {/* LEFT — Text */}
      <div className="hero-text" style={{ display: "flex", flexDirection: "column", gap: 0, justifyContent: "center", paddingTop: 72, paddingBottom: 56, paddingRight: 48 }}>
        <motion.p
          {...fadeUp(0)}
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Name block */}
        <div style={{ lineHeight: 0.88, marginBottom: 28 }}>
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontSize: "clamp(56px, 7vw, 80px)",
              fontWeight: 900,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              display: "block",
              fontFeatureSettings: '"kern" 1',
            }}
          >
            {hero.firstName}
          </motion.h1>
          <motion.h1
            {...fadeUp(0.18)}
            style={{
              fontSize: "clamp(56px, 7vw, 80px)",
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "1.5px var(--name-stroke)",
              letterSpacing: "-0.02em",
              display: "block",
              fontFeatureSettings: '"kern" 1',
            }}
          >
            {hero.lastName}
          </motion.h1>
        </div>

        <motion.p
          {...fadeUp(0.26)}
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-primary)",
            opacity: 0.9,
            marginBottom: 6,
            letterSpacing: "0.01em",
          }}
        >
          {hero.tagline1}
        </motion.p>

        <motion.p
          {...fadeUp(0.32)}
          style={{
            fontSize: 12,
            color: "var(--text-secondary)",
            marginBottom: 36,
            letterSpacing: "0.01em",
          }}
        >
          {hero.tagline2}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <button
            onClick={() => {
              const el = document.getElementById("work");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              backgroundColor: "var(--text-primary)",
              color: "var(--bg)",
              fontSize: 13,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            {hero.cta1}
          </button>

          <a
            href={meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              fontSize: 13,
              fontWeight: 600,
              border: "1px solid var(--border)",
              cursor: "pointer",
              letterSpacing: "0.02em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
            }}
          >
            {hero.cta2}
          </a>
        </motion.div>
      </div>

      {/* RIGHT — Photo */}
      <motion.div
        {...fadeUp(0.2)}
        ref={containerRef}
        className="hero-photo"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: 400,
          marginTop: -32,
          height: "calc(100% + 32px)",
        }}
      >
        {/* Parallax wrapper */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {photoExists ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/photo.jpg"
              alt="Jayesh Dhanuka"
              onError={() => setPhotoExists(false)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "right center",
                display: "block",
                filter: isLight ? "brightness(1.35) contrast(0.92)" : "none",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--surface)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: 40,
                }}
              >
                👤
              </div>
            </div>
          )}
        </div>

        {/* Dark mode: left edge fade into text column + top/bottom edge fades */}
        {!isLight && (<>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0a0a0a 0%, transparent 28%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 18%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0a0a0a 0%, transparent 18%)", pointerEvents: "none" }} />
        </>)}

        {/* Light mode: edge fades — left stronger to blend into text */}
        {isLight && (<>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--bg) 0%, transparent 28%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--bg) 0%, transparent 16%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg) 0%, transparent 16%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, var(--bg) 0%, transparent 10%)", pointerEvents: "none" }} />
        </>)}

      </motion.div>

    </section>
  );
}

