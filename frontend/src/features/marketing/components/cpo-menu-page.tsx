"use client";

import type { CpoSegment } from "@/features/marketing/data/cpo";

import { useMemo, useState } from "react";

import Link from "next/link";

type CpoMenuPageProps = {
  segments: CpoSegment[];
};

/**
 * Legacy /charging-station-biz menu page with parent segment row + child cards.
 */
export function CpoMenuPage({ segments }: CpoMenuPageProps) {
  const [activeSegmentId, setActiveSegmentId] = useState(segments[0]?.id ?? "");

  const activeSegment = useMemo(
    () => segments.find((segment) => segment.id === activeSegmentId) ?? segments[0] ?? null,
    [activeSegmentId, segments]
  );

  return (
    <section className="cpo-menu">
      <div className="cpo-menu__overlay" />
      <div className="cpo-menu__container">
        <header className="cpo-menu__header">
          <h1>Set-up your charging points</h1>
          <p>Select the charging setup type that matches your property and EV operations.</p>
        </header>

        <div className="cpo-menu__shell">
          <div className="cpo-menu__segment-row" role="tablist" aria-label="CPO segments">
            {segments.map((segment) => {
              const isActive = segment.id === activeSegmentId;

              return (
                <button
                  aria-selected={isActive}
                  className={`cpo-menu__segment-btn ${isActive ? "cpo-menu__segment-btn--active" : ""}`}
                  key={segment.id}
                  onClick={() => setActiveSegmentId(segment.id)}
                  role="tab"
                  type="button"
                >
                  <span>{segment.label}</span>
                  <small>{segment.definition || "Select to view setup options"}</small>
                </button>
              );
            })}
          </div>

          <div className="cpo-menu__children">
            {(activeSegment?.children ?? []).map((child) => (
              <Link className="cpo-menu__child-card" href={child.slug} key={child.id}>
                <h2>{child.label}</h2>
                <p>{[child.evType, child.scale].filter(Boolean).join(" | ") || child.coreRequirement || "Open details"}</p>
                <span>Open Scenario &gt;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
