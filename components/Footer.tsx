"use client";

import { motion, useReducedMotion } from "framer-motion";
import { footer, meta } from "@/data/content";

export default function Footer() {
  const prefersReduced = useReducedMotion();

  return (
    <footer
      id="writing"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 6,
            fontWeight: 400,
          }}
        >
          {footer.message}
        </p>
        <a
          href={meta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 14,
            color: "var(--text-primary)",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.6")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          {footer.cta}
        </a>
      </motion.div>

      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "flex", gap: 20, alignItems: "center" }}
      >
        <FooterLink href={meta.linkedin} label="LinkedIn" />
        <span style={{ color: "var(--border)", fontSize: 12 }}>·</span>
        <FooterLink href={`mailto:${meta.email}`} label="Email" />
        <span style={{ color: "var(--border)", fontSize: 12 }}>·</span>
        <FooterLink href={meta.resumeUrl} label="Resume" />
      </motion.div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  return (
    <a
      href={href}
      target={isExternal && !href.startsWith("mailto") ? "_blank" : undefined}
      rel={isExternal && !href.startsWith("mailto") ? "noopener noreferrer" : undefined}
      style={{
        fontSize: 12,
        fontWeight: 500,
        color: "var(--text-secondary)",
        textDecoration: "none",
        letterSpacing: "0.04em",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
      }
    >
      {label} ↗
    </a>
  );
}
