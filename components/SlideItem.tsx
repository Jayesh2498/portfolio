"use client";

import { useMemo } from "react";

type Slide = {
  id: string;
  icon: string;
  title: string;
  tags: string[];
  points: string[];
  ctaLabel: string;
  ctaLink: string;
  fileUrl?: string;
  period?: string;
  company?: string;
  domain?: string;
};

interface Props {
  slide: Slide;
  index: number;
  total: number;
  accent: string;
  category: string;
}

function renderBoldText(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 700 }}>
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function SlideItem({ slide, index, total, accent, category }: Props) {
  const link = slide.fileUrl ?? slide.ctaLink;
  const isPlaceholder = link === "#";
  const isExternal = typeof link === "string" && link.startsWith("http");

  const dateLabel = useMemo(() => {
    if (slide.period) return slide.period;
    if (category === "projects") return "Live project";
    if (category === "decks") return "Deck / PRD";
    return "";
  }, [slide.period, category]);

  return (
    <div className="slide-item" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420 }}>

      {/* LEFT — Visual */}
      <div
        className="slide-visual"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRight: "1px solid var(--border)",
          background: `linear-gradient(135deg, ${accent}08 0%, var(--surface) 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
        }}
      >
        {/* Glow blob */}
        <div style={{
          position: "absolute", width: 260, height: 260, borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}24 0%, transparent 70%)`,
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        {/* Mockup card */}
        <div style={{
          position: "relative", width: 180, borderRadius: 16,
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4)", padding: "28px 20px 24px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
        }}>
          <span style={{ fontSize: 36 }}>{slide.icon}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
            {[70, 90, 55].map((w, i) => (
              <div key={i} style={{
                height: 5, borderRadius: 3,
                backgroundColor: `${accent}20`, width: `${w}%`, margin: "0 auto",
              }} />
            ))}
          </div>
          {slide.tags[0] && (
            <span style={{
              fontSize: 9, fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", color: accent,
              backgroundColor: `${accent}15`, padding: "3px 8px", borderRadius: 999,
            }}>
              {slide.tags[0]}
            </span>
          )}
        </div>
      </div>

      {/* RIGHT — Info */}
      <div style={{ padding: "36px 36px 32px", display: "flex", flexDirection: "column" }}>

        {/* Counter + date */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em" }}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.04em" }}>
            {dateLabel}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: "clamp(17px, 1.8vw, 22px)", fontWeight: 800,
          color: "var(--text-primary)", letterSpacing: "-0.02em",
          marginBottom: 8, lineHeight: 1.2,
        }}>
          {slide.title}
        </h2>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 22 }}>
          {slide.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.05em",
              color: accent, backgroundColor: `${accent}12`,
              padding: "3px 8px", borderRadius: 999,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginBottom: 28, flex: 1 }}>
          {slide.points.map((point, i) => (
            <li key={i} style={{ position: "relative", paddingLeft: 16, fontSize: 11, lineHeight: 1.6, color: "var(--text-secondary)" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--text-muted)" }}>—</span>
              {renderBoldText(point)}
            </li>
          ))}
        </ul>

        {/* CTA — CSS-only hover, no useState */}
        {isPlaceholder ? (
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: 12, opacity: 0.3, cursor: "default" }}
          >
            <CtaCircle accent={accent} />
            <CtaLabel label={slide.ctaLabel} />
          </div>
        ) : (
          <a
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="cta-link"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              textDecoration: "none", color: "inherit", cursor: "pointer",
              // pass accent as CSS var so global CSS can read it
              ["--cta-accent" as string]: accent,
            }}
          >
            <CtaCircle accent={accent} />
            <CtaLabel label={slide.ctaLabel} />
          </a>
        )}
      </div>
    </div>
  );
}

function CtaCircle({ accent }: { accent: string }) {
  return (
    <div
      className="cta-circle"
      style={{
        width: 34, height: 34, borderRadius: "50%",
        backgroundColor: "var(--text-primary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "transform 0.2s, background-color 0.2s", flexShrink: 0,
        ["--cta-accent" as string]: accent,
      }}
    >
      <span style={{ fontSize: 14, color: "var(--bg)", lineHeight: 1 }}>→</span>
    </div>
  );
}

function CtaLabel({ label }: { label: string }) {
  return (
    <span
      className="cta-label"
      style={{
        fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "var(--text-secondary)",
        transition: "color 0.2s",
      }}
    >
      {label}
    </span>
  );
}
