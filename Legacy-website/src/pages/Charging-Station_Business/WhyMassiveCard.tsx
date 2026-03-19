import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type DetailSection = {
  title: string;
  points: string[];
};

type WhyMassiveCardProps = {
  icon: string;
  title: string;
  description: string;
  keyPointers: string[];
  details: DetailSection[];
};

export default function WhyMassiveCard({
  icon,
  title,
  description,
  keyPointers,
  details,
}: WhyMassiveCardProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking/tapping outside (mainly for mobile)
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!open) return;
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () =>
      window.removeEventListener("pointerdown", onPointerDown, { capture: true } as any);
  }, [open]);

  // Desktop-only: close when cursor leaves the card area
  const handleMouseLeave = () => {
    // Only close on desktop devices that actually have hover
    if (window.matchMedia && window.matchMedia("(hover: hover)").matches) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={rootRef}
      onMouseLeave={handleMouseLeave}
      onClick={() => setOpen((v) => !v)} // click/tap toggles open
      className={[
        "relative group cursor-pointer overflow-hidden rounded-mcn-xl",
        // glass surface
        "border border-white/18 bg-mcn-ink-glass text-mcn-ink-text-primary",
        "backdrop-blur-mcn shadow-mcn-ink-card",
        // compact sizing
        "p-5",
        // hover = pop only (no open)
        "transition-all duration-normal ease-out hover:-translate-y-1 hover:shadow-mcn-ink-overlay",
        // open styling
        open ? "scale-[1.02] ring-2 ring-white/25 shadow-mcn-ink-overlay" : "ring-1 ring-white/10",
      ].join(" ")}
    >
      {/* subtle neutral glow accents (no colors) */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[220px] w-[220px] rounded-full blur-3xl opacity-80"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.16), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[220px] w-[220px] rounded-full blur-3xl opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-mcn bg-white/10 flex items-center justify-center text-mcn-ink-text-primary">
                {icon}
              </div>
              <h3 className="font-heading text-mt-up-1 leading-snug">{title}</h3>
            </div>

            <p className="mt-2 text-mt-down-1 text-mcn-ink-text-muted">{description}</p>
          </div>

          <ChevronDown
            className={[
              "mt-1 transition-transform duration-normal",
              open ? "rotate-180 text-mcn-ink-text-primary" : "text-mcn-ink-text-faint",
            ].join(" ")}
          />
        </div>

        {/* Key pointers */}
        <ul className="mt-4 space-y-1.5 text-mt-down-1 text-mcn-ink-text-secondary">
          {keyPointers.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Expanded content (only opens on click/tap) */}
        <div
          className={[
            "mt-5 border-t border-white/12",
            "text-mt-down-1 text-mcn-ink-text-muted",
            "overflow-hidden transition-all duration-300 ease-out",
            open ? "max-h-[520px] pt-5 opacity-100" : "max-h-0 pt-0 opacity-0 border-transparent",
          ].join(" ")}
        >
          <div className="space-y-5">
            {details.map((section, i) => (
              <div key={i}>
                <h4 className="text-mt-base font-semibold text-mcn-ink-text-primary mb-2">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-mcn-ink-text-faint">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <p className="mt-4 text-xs text-mcn-ink-text-faint">
          {open ? "Click/tap to close" : "Click/tap to open"}
        </p>
      </div>
    </div>
  );
}
