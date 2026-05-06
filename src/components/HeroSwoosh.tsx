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
          <stop offset="0%"   stopColor="#1E2D4F" stopOpacity="0.0" />
          <stop offset="15%"  stopColor="#1E2D4F" stopOpacity="0.72" />
          <stop offset="55%"  stopColor="#1E2D4F" stopOpacity="0.78" />
          <stop offset="90%"  stopColor="#3152A3" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3152A3" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="hs-grad-mid" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor="#3152A3" stopOpacity="0.0" />
          <stop offset="12%"  stopColor="#3152A3" stopOpacity="0.55" />
          <stop offset="80%"  stopColor="#6B84C2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6B84C2" stopOpacity="0.0" />
        </linearGradient>

        <linearGradient id="hs-grad-thin" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor="#7B93CC" stopOpacity="0.0" />
          <stop offset="15%"  stopColor="#7B93CC" stopOpacity="0.4" />
          <stop offset="80%"  stopColor="#A3B3F1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A3B3F1" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/*
       * ── 1. MAIN CRESCENT ─────────────────────────────────────
       *
       * Positioned on the RIGHT side of the hero.
       * Right tip starts off-screen at upper-right corner.
       * Sweeps down-left through the right half.
       * Left tip ends around center (x ~520).
       *
       * Outer edge (top curve): wider arc, sweeps higher
       * Inner edge (bottom curve): tighter, creates the crescent width
       */}
      <path
        className="hs-crescent"
        d={`
          M 1520 -50
          C 1380 30, 1180 160, 1000 260
          C 820 360, 660 420, 520 430

          C 650 390, 810 330, 980 240
          C 1160 145, 1340 50, 1520 -10
          Z
        `}
        fill="url(#hs-grad-fill)"
        filter="url(#hs-soft)"
      />

      {/*
       * ── 2. MID ARC ───────────────────────────────────────────
       * Just inside/below the crescent.
       */}
      <path
        className="hs-arc-mid"
        d="M 1530 10
           C 1370 70, 1180 190, 1010 300
           C 830 410, 670 470, 500 480"
        fill="none"
        stroke="url(#hs-grad-mid)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/*
       * ── 3. THIN ARC ──────────────────────────────────────────
       * Innermost, most subtle.
       */}
      <path
        className="hs-arc-thin"
        d="M 1540 40
           C 1380 100, 1190 230, 1030 340
           C 850 460, 690 520, 490 530"
        fill="none"
        stroke="url(#hs-grad-thin)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
