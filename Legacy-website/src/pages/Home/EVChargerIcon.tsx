import React, { useId } from "react";

type EvChargerSvgProps = {
  /** Pixel size for width/height (keeps square aspect) */
  size?: number;
  /** Optional className for responsive sizing (e.g. "w-full h-auto") */
  className?: string;
};

/**
 * EVChargerIcon.tsx
 * - Inline SVG with unique <defs> ids (safe to render multiple times on a page)
 * - Removed the bottom "cable hint" paths (grey + animated green strip)
 */
export function EvChargerSvg({ size = 320, className = "" }: EvChargerSvgProps) {
  const uid = useId();
  const p = `ev_${uid}_`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      role="img"
      aria-label="Wall-mounted EV charger icon (charging animation)"
      className={className}
    >
      <defs>
        {/* Dark vibrant background */}
        <linearGradient id={`${p}bgGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B0F14" />
          <stop offset="0.55" stopColor="#111827" />
          <stop offset="1" stopColor="#0A0A0A" />
        </linearGradient>

        <linearGradient id={`${p}caseGrad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A0A0A" />
          <stop offset="1" stopColor="#050607" />
        </linearGradient>

        <linearGradient id={`${p}screenGrad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0B1220" />
          <stop offset="1" stopColor="#070A10" />
        </linearGradient>

        <linearGradient id={`${p}boltGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDE047" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>

        {/* Soft shadow */}
        <filter id={`${p}shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
          <feOffset dx="0" dy="10" result="off" />
          <feColorMatrix
            in="off"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.4 0"
            result="shadow"
          />
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Screen glow */}
        <filter id={`${p}screenGlow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Green glow */}
        <filter id={`${p}greenGlow`} x="-60%" y="-80%" width="220%" height="260%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <style>{`
          .ui { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Helvetica Neue", sans-serif; }
          .muted { fill: rgba(255,255,255,0.72); }
          .strokeSoft { stroke: rgba(255,255,255,0.14); }
        `}</style>

        {/* moving highlight overlay clipped to bar */}
        <clipPath id={`${p}barClip`}>
          <rect x="202" y="284" width="93.96" height="10" rx="5" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect x="32" y="32" width="448" height="448" rx="96" fill={`url(#${p}bgGrad)`} />
      <rect
        x="44"
        y="44"
        width="424"
        height="424"
        rx="88"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="2"
      />

      {/* Wall plate */}
      <g filter={`url(#${p}shadow)`}>
        <rect
          x="140"
          y="88"
          width="232"
          height="336"
          rx="40"
          fill="rgba(255,255,255,0.06)"
          className="strokeSoft"
          strokeWidth="2"
        />
      </g>

      {/* Charger body */}
      <g filter={`url(#${p}shadow)`}>
        <rect
          x="160"
          y="110"
          width="192"
          height="300"
          rx="34"
          fill={`url(#${p}caseGrad)`}
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2"
        />
        {/* edge shine */}
        <path
          d="M332 132
             C346 144, 352 160, 352 182
             L352 338
             C352 360, 346 376, 332 388
             L332 132 Z"
          fill="rgba(255,255,255,0.05)"
        />
      </g>

      {/* Top badge + bolt */}
      <g transform="translate(256 150)">
        <circle r="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
        <path d="M6 -26 L-14 6 H0 L-8 30 L18 -2 H2 L14 -26 Z" fill={`url(#${p}boltGrad)`} />
      </g>

      {/* Red indicator (blinks) */}
      <g>
        <circle cx="325" cy="132" r="7" fill="#ef4444">
          <animate attributeName="opacity" values="0.25;1;0.25" dur="1.1s" repeatCount="indefinite" />
        </circle>
        {/* subtle red halo */}
        <circle cx="325" cy="132" r="12" fill="none" stroke="rgba(239,68,68,0.55)" strokeWidth="2">
          <animate attributeName="opacity" values="0.05;0.55;0.05" dur="1.1s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Display */}
      <g filter={`url(#${p}screenGlow)`}>
        <rect
          x="184"
          y="196"
          width="144"
          height="122"
          rx="18"
          fill={`url(#${p}screenGrad)`}
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2"
        />

        {/* 87% text (subtle pulse) */}
        <text
          x="256"
          y="252"
          textAnchor="middle"
          className="ui"
          fontSize="42"
          fontWeight="800"
          fill="#22C55E"
          filter={`url(#${p}greenGlow)`}
        >
          87%
          <animate attributeName="opacity" values="0.75;1;0.75" dur="1.2s" repeatCount="indefinite" />
        </text>

        <text
          x="256"
          y="272"
          textAnchor="middle"
          className="ui muted"
          fontSize="12"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          CHARGING
        </text>

        {/* Progress track */}
        <rect x="202" y="284" width="108" height="10" rx="5" fill="rgba(255,255,255,0.10)" />

        {/* Green bar (charging shimmer) */}
        <g>
          <rect
            x="202"
            y="284"
            width="93.96"
            height="10"
            rx="5"
            fill="#22C55E"
            filter={`url(#${p}greenGlow)`}
          />
          <g clipPath={`url(#${p}barClip)`}>
            <rect x="180" y="280" width="30" height="18" rx="9" fill="rgba(255,255,255,0.22)">
              <animate attributeName="x" values="180;310" dur="1.0s" repeatCount="indefinite" />
            </rect>
            <rect x="150" y="280" width="14" height="18" rx="7" fill="rgba(255,255,255,0.14)">
              <animate attributeName="x" values="150;320" dur="1.0s" begin="0.12s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* subtle pulse rings inside screen 
        <g transform="translate(256 245)" opacity="0.6">
          <circle r="10" fill="none" stroke="rgba(34,197,94,0.7)" strokeWidth="3" filter={`url(#${p}greenGlow)`}>
            <animate attributeName="r" values="8;30" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="10" fill="none" stroke="rgba(34,197,94,0.55)" strokeWidth="2" filter={`url(#${p}greenGlow)`}>
            <animate attributeName="r" values="8;38" dur="1.2s" begin="0.25s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="1.2s" begin="0.25s" repeatCount="indefinite" />
          </circle>
        </g> */}
      </g>

      {/* Info line */}
      <g className="ui">
        <text x="256" y="344" textAnchor="middle" fontSize="14" className="muted" fontWeight="600">
          Full Time to charge: 31m
        </text>
      </g>

      {/* Bottom port */}
      <g>
        <rect
          x="238"
          y="360"
          width="36"
          height="34"
          rx="10"
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="2"
        />
        <circle cx="250" cy="377" r="3.5" fill="rgba(255,255,255,0.55)" />
        <circle cx="262" cy="377" r="3.5" fill="rgba(255,255,255,0.55)" />
      </g>

      {/* NOTE: Removed the "Cable hint with animated energy dash" paths here */}

      {/* Small sparkles (subtle twinkle) */}
      <g opacity="0.9">
        <path
          d="M96 164 L104 184 L124 192 L104 200 L96 220 L88 200 L68 192 L88 184 Z"
          fill="rgba(255,255,255,0.18)"
        >
          <animate attributeName="opacity" values="0.1;0.45;0.1" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path
          d="M412 292 L418 306 L432 312 L418 318 L412 332 L406 318 L392 312 L406 306 Z"
          fill="rgba(255,255,255,0.16)"
        >
          <animate attributeName="opacity" values="0.08;0.4;0.08" dur="2.0s" begin="0.35s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

export default EvChargerSvg;
