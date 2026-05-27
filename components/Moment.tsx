"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { moment } from "@/data/content";

function renderBoldText(text: string) {
  const parts = text.split(/\{([^}]+)\}/g);
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

export default function Moment() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = prefersReduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section
      style={{
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
        <motion.p
          variants={item}
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {moment.label}
        </motion.p>

        <motion.p
          variants={item}
          style={{
            fontSize: "clamp(16px, 2.2vw, 22px)",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            maxWidth: 680,
            marginBottom: 28,
            fontWeight: 400,
          }}
        >
          {renderBoldText(moment.text)}
        </motion.p>

        {/* Tags */}
        <motion.div
          variants={item}
          style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
        >
          {moment.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "5px 12px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.03em",
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--text-secondary)",
        cursor: "default",
        transition: "transform 0.15s, background-color 0.15s, color 0.15s",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-2px)";
        el.style.color = "var(--text-primary)";
        el.style.backgroundColor = "rgba(255,255,255,0.07)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.color = "var(--text-secondary)";
        el.style.backgroundColor = "var(--surface)";
      }}
    >
      {label}
    </span>
  );
}
