"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type TouchEvent,
} from "react";
import SlideItem from "@/components/SlideItem";

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
  screenshot?: string;
};

interface Props {
  activeCategory: string;
  slides: Slide[];
  accent: string;
}

export default function Slider({ activeCategory, slides, accent }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);

  useEffect(() => {
    setCurrent(0);
  }, [activeCategory]);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(slides.length - 1, c + 1)),
    [slides.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) next();
    if (delta < -40) prev();
  };

  const canPrev = current > 0;
  const canNext = current < slides.length - 1;

  return (
    <div
      style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide track */}
      <div
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 500ms cubic-bezier(0.77, 0, 0.18, 1)",
          willChange: "transform",
        }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} style={{ minWidth: "100%", maxWidth: "100%", width: "100%", flexShrink: 0, overflow: "hidden" }}>
            <SlideItem
              slide={slide}
              index={i}
              total={slides.length}
              accent={accent}
              category={activeCategory}
            />
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      {slides.length > 1 && (
        <NavArrow
          direction="prev"
          onClick={prev}
          disabled={!canPrev}
          accent={accent}
        />
      )}

      {/* Next arrow */}
      {slides.length > 1 && (
        <NavArrow
          direction="next"
          onClick={next}
          disabled={!canNext}
          accent={accent}
        />
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: 6,
                width: i === current ? 24 : 6,
                borderRadius: 999,
                backgroundColor:
                  i === current ? accent : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background-color 0.2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavArrow({
  direction,
  onClick,
  disabled,
  accent,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "prev" ? "left" : "right"]: 16,
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: hovered && !disabled
          ? accent
          : "rgba(255,255,255,0.08)",
        border: `1px solid ${hovered && !disabled ? accent : "rgba(255,255,255,0.12)"}`,
        color: hovered && !disabled ? "#000" : "rgba(255,255,255,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.2 : 1,
        transition: "background-color 0.2s, border-color 0.2s, color 0.2s, opacity 0.2s",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 10,
        flexShrink: 0,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "prev" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  );
}
