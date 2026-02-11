import React, { useEffect, useMemo, useState } from "react";

type ROIGrowthChartProps = {
  /** Width/Height are responsive via CSS; viewBox is fixed */
  className?: string;
  /** If true, regenerates points slowly for a “live” feel */
  live?: boolean;
  /** Line color */
  stroke?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

/**
 * A compact, premium-looking ROI growth chart:
 * X: kW consumption (units sold)
 * Y: revenue
 * Draw animation on mount.
 */
export default function ROIGrowthChart({
  className = "w-full h-full",
  live = false,
  stroke = "#10b981",
}: ROIGrowthChartProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Optional live regeneration every ~2.5s (subtle)
  useEffect(() => {
    if (!live) return;
    const id = window.setInterval(() => setSeed((s) => s + 1), 2500);
    return () => window.clearInterval(id);
  }, [live]);

  // Generate smooth-ish exponential points with gentle jitter
  const points = useMemo(() => {
    const pts: string[] = [];
    const totalPoints = 44;
    const width = 400;
    const height = 250;

    // Deterministic-ish random using seed
    let r = 12345 + seed * 999;
    const rand = () => {
      r = (1103515245 * r + 12345) % 2147483647;
      return (r / 2147483647) * 1; // 0..1
    };

    for (let i = 0; i <= totalPoints; i++) {
      const x = (i / totalPoints) * width;

      const t = i / totalPoints;
      const exponential = Math.pow(t, 2.35) * 180; // growth curve
      const jitter = Math.sin(i * 0.75) * 6; // soft wave
      const noise = (rand() - 0.5) * 4; // +/-2 px
      const y = height - 20 - (exponential + jitter + noise);

      pts.push(`${x},${clamp(y, 22, height - 20)}`);
    }
    return pts.join(" ");
  }, [seed]);

  return (
    <div className={className}>
      <svg viewBox="0 0 400 250" className="h-full w-full overflow-visible" preserveAspectRatio="none" role="img" aria-label="Revenue vs Consumption growth chart">
        {/* defs */}
        <defs>
          <linearGradient id="roiArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>

          <filter id="roiGlow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* grid */}
        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          <line x1="0" y1="50" x2="400" y2="50" />
          <line x1="0" y1="110" x2="400" y2="110" />
          <line x1="0" y1="170" x2="400" y2="170" />
        </g>
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="2">
          <line x1="0" y1="230" x2="400" y2="230" />
          <line x1="0" y1="0" x2="0" y2="230" />
        </g>

        {/* x axis labels */}
        <text x="0" y="246" fill="rgba(255,255,255,0.55)" fontSize="10" textAnchor="start">
          0
        </text>
        <text x="398" y="246" fill="rgba(255,255,255,0.55)" fontSize="10" textAnchor="end">
          kW Consumption (Units Sold)
        </text>

        {/* area fill */}
        <polyline
          points={`0,230 ${points} 400,230`}
          fill="url(#roiArea)"
          opacity={isLoaded ? 1 : 0}
          style={{ transition: "opacity 900ms ease" }}
        />

        {/* main line */}
        <polyline
          points={points}
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#roiGlow)"
          style={{
            strokeDasharray: 1100,
            strokeDashoffset: isLoaded ? 0 : 1100,
            transition: "stroke-dashoffset 2.8s ease-out",
          }}
        />

        {/* end marker pulse (approx last point x=400, y near top) */}
        {isLoaded && (
          <circle cx="400" cy="34" r="6" fill={stroke} opacity="0.95">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
}
