import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// ✅ Put the JSON at: src/data/CPO_Type_IndividualPage_Data.json
import cpoTypeMap from "./CPO_Type_IndividualPage_Data.json";

type Hero = {
  title?: string;
  body?: string;
  trustPill?: string;
  actionText?: string;
};

type Consideration = {
  title?: string;
  subtitle?: string;
  cards?: Array<{ title?: string; text?: string; icon?: string }>;
  ctaCard?: string;
};

type Connection = {
  title?: string;
  subtitle?: string;
  checkboxGroups?: Array<{ label?: string; options?: string[] }>;
};

type Entry = {
  id: string;
  slug: string;
  label: string;
  segment: "residential" | "commercial" | "fleet" | "institutional" | string;
  hero?: Hero | null;
  consideration?: Consideration | null;
  connection?: Connection | null;
};

type EntryMap = Record<string, Entry>;

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function SegmentPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-mcn-stroke-soft bg-mcn-surface3 px-3 py-1 text-mt-down-1 text-mcn-text-secondary backdrop-blur-mcn">
      {children}
    </span>
  );
}

function Card({
  entry,
}: {
  entry: Entry;
}) {
  const heroTitle = entry.hero?.title || entry.label;
  const heroBody =
    entry.hero?.body ||
    "EV charging setup guidance for this scenario. Open to view details.";

  const hasHero = Boolean(entry.hero);
  const hasConsideration = Boolean(entry.consideration);
  const hasConnection = Boolean(entry.connection);

  return (
    <Link
      to={entry.slug}
      className={cx(
        "group block rounded-mcn border border-mcn-stroke-soft bg-mcn-surface shadow-mcn-soft",
        "transition duration-fast ease-ease-out-standard hover:shadow-mcn-card"
      )}
    >
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <SegmentPill>{entry.segment}</SegmentPill>
          {hasHero ? <SegmentPill>Hero</SegmentPill> : null}
          {hasConsideration ? <SegmentPill>Considerations</SegmentPill> : null}
          {hasConnection ? <SegmentPill>Connection</SegmentPill> : null}
        </div>

        <h3 className="mt-3 font-heading text-mt-up-1 text-mcn-text-primary group-hover:underline">
          {heroTitle}
        </h3>

        <p className="mt-2 text-mt-base text-mcn-text-muted line-clamp-3">
          {heroBody}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-mt-down-1 text-mcn-text-faint">
            <span className="font-mono">id:</span>{" "}
            <span className="font-mono">{entry.id}</span>
          </div>

          <span className="inline-flex items-center justify-center rounded-[8px] bg-mcn-red px-4 py-2 text-mt-down-1 font-medium text-mcn-text-inverse shadow-mcn-soft transition duration-fast ease-ease-out-standard group-hover:bg-mcn-red-hover">
            {entry.hero?.actionText || "Open"}
          </span>
        </div>
      </div>

      <div className="h-10 border-t border-mcn-stroke-soft bg-mcn-surface3 backdrop-blur-mcn" />
    </Link>
  );
}

export default function CPOTypeIndexPage() {
  const [segment, setSegment] = useState<
    "all" | "residential" | "commercial" | "fleet" | "institutional"
  >("all");
  const [query, setQuery] = useState("");

  const { segments, filtered } = useMemo(() => {
    const map = cpoTypeMap as EntryMap;
    const allEntries = Object.values(map);

    const segmentOrder = ["residential", "commercial", "fleet", "institutional"];

    const grouped: Record<string, Entry[]> = {};
    for (const e of allEntries) {
      const key = e.segment || "other";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(e);
    }

    // sort inside each segment by label
    for (const key of Object.keys(grouped)) {
      grouped[key].sort((a, b) => (a.label || "").localeCompare(b.label || ""));
    }

    // build final segment list order
    const orderedKeys = [
      ...segmentOrder.filter((k) => grouped[k]?.length),
      ...Object.keys(grouped).filter((k) => !segmentOrder.includes(k)).sort(),
    ];

    // apply filters
    const q = query.trim().toLowerCase();
    const matches = (e: Entry) => {
      const hay = [
        e.label,
        e.id,
        e.slug,
        e.hero?.title,
        e.hero?.body,
        e.consideration?.title,
        e.connection?.title,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const segOk = segment === "all" ? true : e.segment === segment;
      const qOk = q ? hay.includes(q) : true;
      return segOk && qOk;
    };

    const filteredBySegAndQuery: Record<string, Entry[]> = {};
    for (const key of orderedKeys) {
      const arr = grouped[key] || [];
      const keep = arr.filter(matches);
      if (keep.length) filteredBySegAndQuery[key] = keep;
    }

    return { segments: orderedKeys, filtered: filteredBySegAndQuery };
  }, [segment, query]);

  const segmentCounts = useMemo(() => {
    const map = cpoTypeMap as EntryMap;
    const counts: Record<string, number> = { all: 0 };
    for (const e of Object.values(map)) {
      counts.all += 1;
      counts[e.segment] = (counts[e.segment] || 0) + 1;
    }
    return counts;
  }, []);

  const SegButton = ({
    value,
    label,
  }: {
    value: typeof segment;
    label: string;
  }) => {
    const active = segment === value;
    return (
      <button
        type="button"
        onClick={() => setSegment(value)}
        className={cx(
          "rounded-full border px-3 py-1.5 text-mt-down-1 transition duration-fast ease-ease-out-standard",
          active
            ? "border-mcn-stroke-strong bg-mcn-surface text-mcn-text-primary shadow-mcn-soft"
            : "border-mcn-stroke-soft bg-mcn-surface3 text-mcn-text-secondary hover:bg-mcn-surface"
        )}
      >
        {label}{" "}
        <span className="ml-1 text-mcn-text-faint">
          ({segmentCounts[value] || 0})
        </span>
      </button>
    );
  };

  return (
    <main className="bg-mcn-bg">
      <header className="container py-10 md:py-14">
        <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface shadow-mcn-card overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-2">
              <SegmentPill>CPO Types</SegmentPill>
              <SegmentPill>Segment Index</SegmentPill>
              <SegmentPill>Slug-driven</SegmentPill>
            </div>

            <h1 className="mt-4 font-heading text-pf-up-3 md:text-pf-up-4 text-mcn-text-primary">
              Choose your scenario
            </h1>
            <p className="mt-3 max-w-2xl text-mt-base text-mcn-text-muted">
              Browse by category (Residential, Commercial, Fleet, Institutional)
              or search by keyword. Each card opens its slug page.
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                <SegButton value="all" label="All" />
                <SegButton value="residential" label="Residential" />
                <SegButton value="commercial" label="Commercial" />
                <SegButton value="fleet" label="Fleet" />
                <SegButton value="institutional" label="Institutional" />
              </div>

              <div className="w-full md:w-[360px]">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search: villa, hospital, fleet, society…"
                  className={cx(
                    "w-full rounded-[12px] border border-mcn-stroke-soft bg-mcn-surface2 px-4 py-2.5",
                    "text-mt-base text-mcn-text-primary placeholder:text-mcn-text-faint",
                    "focus:outline-none focus:ring-2 focus:ring-mcn-blue"
                  )}
                />
              </div>
            </div>
          </div>

          <div className="h-10 border-t border-mcn-stroke-soft bg-mcn-surface3 backdrop-blur-mcn" />
        </div>
      </header>

      <section className="container pb-14">
        <div className="grid gap-10">
          {segments.length === 0 ? (
            <div className="rounded-mcn border border-mcn-stroke-soft bg-mcn-surface p-6 shadow-mcn-soft">
              <h2 className="font-heading text-mt-up-1 text-mcn-text-primary">
                No matches
              </h2>
              <p className="mt-2 text-mt-base text-mcn-text-muted">
                Try clearing filters or using a different keyword.
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  className="rounded-[8px] bg-mcn-red px-4 py-2 text-mt-down-1 font-medium text-mcn-text-inverse shadow-mcn-soft hover:bg-mcn-red-hover"
                  onClick={() => {
                    setSegment("all");
                    setQuery("");
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          ) : null}

          {segments.map((segKey) => {
            const list = filtered[segKey] || [];
            if (!list.length) return null;

            const pretty =
              segKey.charAt(0).toUpperCase() + segKey.slice(1).toLowerCase();

            return (
              <div key={segKey}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-mt-up-2 text-mcn-text-primary">
                      {pretty}
                    </h2>
                    <p className="mt-1 text-mt-down-1 text-mcn-text-muted">
                      {list.length} scenario{list.length === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="hidden md:flex gap-2">
                    <SegmentPill>Hero</SegmentPill>
                    <SegmentPill>Considerations</SegmentPill>
                    <SegmentPill>Connection</SegmentPill>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {list.map((entry) => (
                    <Card key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}