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

      <g transform="translate(500, 300) scale(0.6)">
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
            M 482 883
            C 790 463, 1225 329, 1710 360
            L 1649 579
            C 1200 430, 769 588, 484 887
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
            M 801 732
            C 1075 465, 1537 583, 1669 631
            L 1499 930
            C 1499 930, 1133 525, 805 730
            Z
          `}
          fill="url(#hs-grad-thin)"
          filter="url(#hs-soft)"
        />
      </g>
    </svg>
  );
}
