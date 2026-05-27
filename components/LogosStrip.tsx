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
        gap: imgFailed ? 0 : 8,
      }}
    >
      {/* Only reserve space for logo if it actually loaded */}
      {!imgFailed && (
        <div style={{ width: 24, height: 24, position: "relative", flexShrink: 0 }}>
          <Image
            src={src}
            alt={name}
            fill
            style={{
              objectFit: "contain",
              filter: "grayscale(1) opacity(0.55)",
              transition: "filter 0.2s",
            }}
            onError={() => setImgFailed(true)}
            unoptimized
          />
        </div>
      )}
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          fontWeight: 600,
          whiteSpace: "pre-line",
          textAlign: "center",
          lineHeight: 1.4,
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
      }}
    >
      {/* Label row — stays centred at full width */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 24px 0",
          fontSize: 9,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          fontWeight: 500,
          opacity: 0.6,
        }}
      >
        Worked & studied at
      </div>

      {/* Logos row — full screen width, equal columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${logos.companies.length}, 1fr)`,
          padding: "14px 0 18px",
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
              padding: "16px 0",
              borderRight:
                i < logos.companies.length - 1
                  ? "1px solid var(--border)"
                  : "none",
              cursor: "default",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "0.65";
              const img = el.querySelector("img") as HTMLImageElement | null;
              if (img) img.style.filter = "grayscale(0) opacity(0.85)";
              const span = el.querySelector("span") as HTMLElement | null;
              if (span) span.style.color = "var(--text-secondary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = "1";
              const img = el.querySelector("img") as HTMLImageElement | null;
              if (img) img.style.filter = "grayscale(1) opacity(0.55)";
              const span = el.querySelector("span") as HTMLElement | null;
              if (span) span.style.color = "var(--text-muted)";
            }}
          >
            <CompanyLogo domain={company.domain} name={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
