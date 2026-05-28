"use client";

import { useState } from "react";
import Image from "next/image";
import { logos } from "@/data/content";

function CompanyLogo({ domain, name }: { domain: string; name: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = `https://logo.clearbit.com/${domain}?size=80`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: imgFailed ? 0 : 10,
      }}
    >
      {!imgFailed && (
        <div style={{ width: 28, height: 28, position: "relative", flexShrink: 0 }}>
          <Image
            src={src}
            alt={name}
            fill
            style={{
              objectFit: "contain",
              filter: "grayscale(1) opacity(0.7)",
              transition: "filter 0.2s",
            }}
            onError={() => setImgFailed(true)}
            unoptimized
          />
        </div>
      )}
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
          fontWeight: 600,
          whiteSpace: "pre-line",
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: "100%",
          transition: "color 0.2s",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogosStrip() {
  return (
    <div
      className="logos-strip"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* Label */}
      <div
        style={{
          textAlign: "center",
          padding: "16px 24px 0",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          fontWeight: 500,
        }}
      >
        Worked & studied at
      </div>

      {/* Logos row */}
      <div
        className="logos-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${logos.companies.length}, 1fr)`,
          padding: "12px 0 20px",
          width: "100%",
        }}
      >
        {logos.companies.map((company, i) => (
          <div
            key={company.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 16px",
              borderRight:
                i < logos.companies.length - 1
                  ? "1px solid var(--border)"
                  : "none",
              cursor: "default",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--surface)";
              const img = el.querySelector("img") as HTMLImageElement | null;
              if (img) img.style.filter = "grayscale(0) opacity(1)";
              const span = el.querySelector("span") as HTMLElement | null;
              if (span) span.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              const img = el.querySelector("img") as HTMLImageElement | null;
              if (img) img.style.filter = "grayscale(1) opacity(0.7)";
              const span = el.querySelector("span") as HTMLElement | null;
              if (span) span.style.color = "var(--text-secondary)";
            }}
          >
            <CompanyLogo domain={company.domain} name={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
