"use client";

import type { CpoSegment } from "@/features/marketing/data/cpo";

import { useMemo, useState } from "react";

import Link from "next/link";

type CpoIndexPageProps = {
  intro: {
    badge: string;
    title: string;
    description: string;
  };
  segments: CpoSegment[];
};

/**
 * Searchable CPO scenario index used by /cpo and /charging-station-biz.
 */
export function CpoIndexPage({ intro, segments }: CpoIndexPageProps) {
  const [query, setQuery] = useState("");
  const [segmentFilter, setSegmentFilter] = useState<string>("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredSegments = useMemo(() => {
    return segments
      .map((segment) => {
        const segmentMatches = segmentFilter === "all" || segment.id === segmentFilter;
        if (!segmentMatches) {
          return null;
        }

        const children = segment.children.filter((child) => {
          if (!normalizedQuery) {
            return true;
          }

          const haystack = `${child.label} ${child.id} ${child.evType ?? ""} ${child.coreRequirement ?? ""}`.toLowerCase();
          return haystack.includes(normalizedQuery);
        });

        if (!children.length) {
          return null;
        }

        return {
          ...segment,
          children
        };
      })
      .filter((segment): segment is CpoSegment => Boolean(segment));
  }, [normalizedQuery, segmentFilter, segments]);

  const segmentOptions = [
    { id: "all", label: "All" },
    ...segments.map((segment) => ({ id: segment.id, label: segment.label }))
  ];

  return (
    <div className="cpo-index">
      <section className="cpo-index__hero">
        <div className="cpo-index__container">
          <div className="cpo-index__badge">{intro.badge}</div>
          <h1 className="cpo-index__title">{intro.title}</h1>
          <p className="cpo-index__description">{intro.description}</p>

          <div className="cpo-index__controls">
            <label className="cpo-index__search-label" htmlFor="cpo-search">
              Search scenarios
            </label>
            <input
              className="cpo-index__search-input"
              id="cpo-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by category, vehicle type, or use case"
              type="search"
              value={query}
            />
            <div className="cpo-index__filter-row">
              {segmentOptions.map((option) => (
                <button
                  className={`cpo-index__filter-btn ${segmentFilter === option.id ? "cpo-index__filter-btn--active" : ""}`}
                  key={option.id}
                  onClick={() => setSegmentFilter(option.id)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cpo-index__section">
        <div className="cpo-index__container">
          {filteredSegments.length ? (
            filteredSegments.map((segment) => (
              <div className="cpo-index__segment" key={segment.id}>
                <div className="cpo-index__segment-header">
                  <h2 className="cpo-index__segment-title">{segment.label}</h2>
                  {segment.definition ? <p className="cpo-index__segment-description">{segment.definition}</p> : null}
                </div>
                <div className="cpo-index__cards">
                  {segment.children.map((child) => (
                    <article className="cpo-index__card" key={child.id}>
                      <h3 className="cpo-index__card-title">{child.label}</h3>
                      <p className="cpo-index__card-meta">
                        {child.evType ?? "EV type to be assessed"} | {child.scale ?? "Scalable deployment"}
                      </p>
                      <p className="cpo-index__card-description">{child.coreRequirement ?? "Detailed requirement mapping available on next page."}</p>
                      <div className="cpo-index__card-actions">
                        <Link className="cpo-index__card-link" href={child.slug}>
                          Open scenario
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <article className="cpo-index__empty-state">
              <h2>No matching scenarios</h2>
              <p>Try a broader keyword or clear filters to view all scenario types.</p>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
