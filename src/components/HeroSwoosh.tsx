/**
 * HeroSwoosh — logo-faithful crescent positioned on the RIGHT side
 * of the hero, flowing from upper-right corner down.
 *
 * The Iron Fab logo swoosh is a compact crescent/wing shape:
 *   - Starts thin at upper-right
 *   - Widens as it descends toward center-right
 *   - Tapers to a point at center
 *   - Two thinner arcs follow inside/below
 *
 * This version keeps the swoosh on the RIGHT HALF of the hero
 * so it doesn't interfere with the text on the left.
 */
import "./heroswoosh.css";

export default function HeroSwoosh() {
  return (
    <svg
      className="hs-swoosh-svg"
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="hs-soft" x="-5%" y="-20%" width="110%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Gradient: opaque in the center, fades at both tips */}
        <linearGradient id="hs-grad-fill" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1E2D4F" stopOpacity="0.0" />
          <stop offset="15%" stopColor="#1E2D4F" stopOpacity="0.8" />
          <stop offset="55%" stopColor="#1E2D4F" stopOpacity="0.85" />
          <stop offset="90%" stopColor="#3152A3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3152A3" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="hs-grad-mid" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3152A3" stopOpacity="0.0" />
          <stop offset="12%" stopColor="#3152A3" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#6B84C2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6B84C2" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="hs-grad-thin" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7B93CC" stopOpacity="0.0" />
          <stop offset="15%" stopColor="#7B93CC" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#A3B3F1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A3B3F1" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      <g transform="translate(180, 40) scale(0.9)">
        {/*
         * ── 1. MAIN CRESCENT (Darkest, Top) ──────────────────────
         * Starts furthest left, thickest.
         */}
        <path
          className="hs-crescent"
          d={`
            M 300 900
            C 600 400, 1100 150, 1600 100
            L 1600 300
            C 1100 300, 700 550, 300 900
            Z
          `}
          fill="url(#hs-grad-fill)"
          filter="url(#hs-soft)"
        />

        {/*
         * ── 2. MID ARC ───────────────────────────────────────────
         * Starts slightly further right, medium thickness.
         */}
        <path
          className="hs-arc-mid"
          d={`
            M 500 900
            C 800 600, 1200 340, 1600 340
            L 1600 460
            C 1200 430, 850 680, 500 900
            Z
          `}
          fill="url(#hs-grad-mid)"
          filter="url(#hs-soft)"
        />

        {/*
         * ── 3. THIN ARC ──────────────────────────────────────────
         * Starts furthest right, thinnest.
         */}
        <path
          className="hs-arc-thin"
          d={`
            M 700 900
            C 950 700, 1300 470, 1600 490
            L 1600 560
            C 1300 540, 1000 760, 700 900
            Z
          `}
          fill="url(#hs-grad-thin)"
          filter="url(#hs-soft)"
        />
      </g>
    </svg>
  );
}
