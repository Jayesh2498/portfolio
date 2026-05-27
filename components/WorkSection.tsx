"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Slider from "@/components/Slider";
import { corporate, projects, decks } from "@/data/content";

type Category = "corporate" | "projects" | "decks";

// Projects first, then Corporate, then Decks
const PANELS: {
  id: Category;
  label: string;
  accent: string;
  sub1: string;
  sub2: string;
}[] = [
  {
    id: "projects",
    label: "Projects",
    accent: "#34d399",
    sub1: "POS · ATS · ERP · Quiz",
    sub2: "Vibe-coded live products",
  },
  {
    id: "corporate",
    label: "Experience",
    accent: "#fbbf24",
    sub1: "SuperAGI · GoKiwi · Navi",
    sub2: "Full-time & internship roles",
  },
  {
    id: "decks",
    label: "Decks",
    accent: "#60a5fa",
    sub1: "PRDs · Teardowns",
    sub2: "Strategy & spec writing",
  },
];

export default function WorkSection() {
  const [active, setActive] = useState<Category>("projects");
  const prefersReduced = useReducedMotion();

  const slideData = {
    corporate: corporate.slides,
    projects: projects.slides,
    decks: decks.slides,
  };

  return (
    <section id="work" style={{ borderTop: "1px solid var(--border)" }}>
      {/* Panels row */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="work-panels"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {PANELS.map((panel, i) => (
          <Panel
            key={panel.id}
            panel={panel}
            isActive={active === panel.id}
            isLast={i === PANELS.length - 1}
            onClick={() => setActive(panel.id)}
          />
        ))}
      </motion.div>

      {/* Slider */}
      <Slider
        activeCategory={active}
        slides={slideData[active]}
        accent={PANELS.find((p) => p.id === active)!.accent}
      />

    </section>
  );
}

function Panel({
  panel,
  isActive,
  isLast,
  onClick,
}: {
  panel: (typeof PANELS)[number];
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const show = isActive || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "28px 28px 26px",
        textAlign: "left",
        background: isActive ? "rgba(255,255,255,0.025)" : "transparent",
        borderRight: isLast ? "none" : "1px solid var(--border)",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        transition: "background 0.2s",
      }}
    >
      {/* Radial gradient accent from bottom-left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 0% 100%, ${panel.accent}14 0%, transparent 65%)`,
          opacity: show ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: panel.accent,
              transform: isActive ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.2s",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "color 0.2s",
              letterSpacing: "0.01em",
            }}
          >
            {panel.label}
          </span>
        </div>

        <span
          style={{
            fontSize: 13,
            color: panel.accent,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.2s, transform 0.2s",
          }}
        >
          ↗
        </span>
      </div>

      <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3, position: "relative", letterSpacing: "0.01em" }}>
        {panel.sub1}
      </p>
      <p style={{ fontSize: 11, color: "var(--text-muted)", position: "relative", letterSpacing: "0.01em" }}>
        {panel.sub2}
      </p>
    </button>
  );
}
