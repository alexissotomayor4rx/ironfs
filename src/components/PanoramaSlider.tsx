"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PanoramaSliderProps {
  images: { src: string; alt: string }[];
  aspectRatio?: string; // e.g. "16/5" for panoramic
}

export default function PanoramaSlider({
  images,
  aspectRatio = "16/5",
}: PanoramaSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  // Auto-advance every 5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [isHovered, next]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.7s ease",
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      ))}

      {/* Gradient overlay bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous image"
        style={{
          position: "absolute",
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)",
          border: "none",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          fontSize: "1.1rem",
          color: "var(--color-charcoal)",
          transition: "background 0.2s ease, transform 0.2s ease",
          zIndex: 5,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.85)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next image"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)",
          border: "none",
          borderRadius: "50%",
          width: "38px",
          height: "38px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          fontSize: "1.1rem",
          color: "var(--color-charcoal)",
          transition: "background 0.2s ease, transform 0.2s ease",
          zIndex: 5,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#fff";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.85)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ›
      </button>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 5,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              background: i === current ? "var(--color-primary)" : "rgba(255,255,255,0.7)",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
