"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { skills } from "@/data/content";

export default function SkillsSection() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="skills"
      style={{
        borderTop: "1px solid var(--border)",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "72px 24px",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          {skills.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={item}
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            marginBottom: 48,
          }}
        >
          {skills.heading}
        </motion.h2>

        {/* Category grid */}
        <motion.div
          variants={item}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {skills.categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

type Category = (typeof skills.categories)[number];

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = cat.accent + "55";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Card header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Accent dot */}
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: cat.accent,
            flexShrink: 0,
            boxShadow: `0 0 0 3px ${cat.accent}22`,
          }}
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: cat.accent,
          }}
        >
          {cat.label}
        </span>
      </div>

      {/* Skill pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {cat.items.map((skill) => (
          <SkillPill key={skill} label={skill} accent={cat.accent} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      style={{
        padding: "5px 11px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.02em",
        backgroundColor: accent + "14",
        border: `1px solid ${accent}30`,
        color: "var(--text-secondary)",
        cursor: "default",
        transition: "background-color 0.15s, color 0.15s, transform 0.15s",
        display: "inline-block",
        lineHeight: 1.4,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = accent + "28";
        el.style.color = accent;
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = accent + "14";
        el.style.color = "var(--text-secondary)";
        el.style.transform = "translateY(0)";
      }}
    >
      {label}
    </span>
  );
}
