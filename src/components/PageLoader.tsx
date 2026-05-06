"use client";

import { useEffect, useState, useRef } from "react";
import "./pageloader.css";

export default function PageLoader() {
  const [phase, setPhase] = useState<
    "idle" | "swoosh" | "logo" | "build" | "exit" | "done"
  >("idle");
  const swooshRef = useRef<SVGPathElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Short delay so first paint completes
    const t0 = setTimeout(() => setPhase("swoosh"), 80);
    const t1 = setTimeout(() => setPhase("logo"), 900);
    const t2 = setTimeout(() => setPhase("build"), 1500);
    const t3 = setTimeout(() => setPhase("exit"), 2600);
    const t4 = setTimeout(() => setPhase("done"), 3500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`pl-overlay pl-phase-${phase}`} aria-hidden="true">
      {/* Particle sparks – welding heat */}
      <div className="pl-sparks">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="pl-spark"
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Background gradient panels — raw steel → warm weld */}
      <div className="pl-bg-panel pl-bg-steel" />
      <div className="pl-bg-panel pl-bg-weld" />

      {/* SVG Swoosh — the living logo stroke */}
      <svg
        className="pl-swoosh-svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E2D4F" />
            <stop offset="40%" stopColor="#3152A3" />
            <stop offset="75%" stopColor="#C0152A" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>

          {/* Glow filter for the swoosh tip */}
          <filter id="swooshGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main sweeping arc */}
        <path
          ref={swooshRef}
          className="pl-swoosh-path"
          d="M -60 130 C 200 170, 450 40, 720 100 C 990 160, 1240 30, 1500 90"
          fill="none"
          stroke="url(#swooshGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#swooshGlow)"
        />

        {/* Thin echo strokes for depth */}
        <path
          className="pl-swoosh-echo pl-echo-1"
          d="M -60 118 C 200 158, 450 28, 720 88 C 990 148, 1240 18, 1500 78"
          fill="none"
          stroke="rgba(49,82,163,0.25)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="pl-swoosh-echo pl-echo-2"
          d="M -60 142 C 200 182, 450 52, 720 112 C 990 172, 1240 42, 1500 102"
          fill="none"
          stroke="rgba(192,21,42,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Center stage: Logo + tagline */}
      <div className="pl-center" ref={logoRef}>
        {/* Steel grid lines (engineering raw) */}
        <div className="pl-grid-lines">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="pl-grid-line"
              style={{ "--gi": i } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Logo lockup */}
        <div className="pl-logo-lockup">
          <div className="pl-logo-wrap">
            <img
              src="/images/logo/Logo_fab_remove.PNG"
              alt="Iron Fabrication Services"
              className="pl-logo-img"
            />
          </div>
        </div>

        {/* Weld spark line under logo */}
        <div className="pl-weld-line">
          <span className="pl-weld-dot" />
        </div>

        {/* Tagline */}
        <p className="pl-tagline">
          Precision in every <em>Beam.</em> Quality in every <em>Weld.</em>
        </p>
      </div>

      {/* Exit curtain — steel plate sliding away */}
      <div className="pl-curtain pl-curtain-top" />
      <div className="pl-curtain pl-curtain-bottom" />
    </div>
  );
}
