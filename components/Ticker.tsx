"use client";

import { ticker } from "@/data/content";

export default function Ticker() {
  const doubled = [...ticker.skills, ...ticker.skills];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "12px 0",
      }}
    >
      <div className="ticker-track">
        {doubled.map((skill, i) => (
          <span
            key={i}
            style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                padding: "0 24px",
                whiteSpace: "nowrap",
              }}
            >
              {skill}
            </span>
            <span
              style={{
                width: 1,
                height: 10,
                backgroundColor: "var(--border)",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
