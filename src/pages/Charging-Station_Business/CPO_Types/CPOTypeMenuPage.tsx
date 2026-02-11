import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CPOTypeMaster from "./CPO_Type_Master.json";

type CPOChild = {
  id: string;
  label: string;
  slug: string;
  evType?: string | null;
  scale?: string | null;
  coreRequirement?: string | null;
};

type CPOSegment = {
  id: string;
  label: string;
  definition?: string | null;
  children: CPOChild[];
};

type CPOTypeMaster = {
  segments: CPOSegment[];
};

const data = CPOTypeMaster as unknown as CPOTypeMaster;

// true = route to landing page, false = just select (later you can render below)
const NAVIGATE_TO_SLUG = true;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function CPOTypeMenuPage() {
  const navigate = useNavigate();
  const segments = data?.segments ?? [];

  const [activeSegmentId, setActiveSegmentId] = useState<string>(
    segments[0]?.id ?? ""
  );

  const activeSegment = useMemo(
    () => segments.find((s) => s.id === activeSegmentId) ?? segments[0],
    [segments, activeSegmentId]
  );

  const onSelectChild = (child: CPOChild) => {
    if (NAVIGATE_TO_SLUG) navigate(child.slug);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Page background: infra-grid in whitish */}
      <div
        aria-hidden
        className={cx(
          "absolute inset-0",
          // soft bright wash
          "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.38),rgba(255,255,255,0.14)_50%,rgba(255,255,255,0)_100%)]",
          // grid lines
          "after:absolute after:inset-0 after:content-['']",
          "after:bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]",
          "after:bg-[size:46px_46px] after:opacity-70",
          // mild vignette so text pops
          "before:absolute before:inset-0 before:content-['']",
          "before:bg-gradient-to-b before:from-black/15 before:via-black/25 before:to-black/55"
        )}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        {/* Title + Caption (center aligned) */}
        <header className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Set-up your charging points
          </h1>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Select which type of charging set-up you require
          </p>
        </header>

        {/* One main card that contains BOTH rows */}
        <section
          className={cx(
            "rounded-3xl border border-white/10",
            "bg-black/45 backdrop-blur-xl",
            "shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
            "p-4 md:p-6"
            // TODO(tokenize): replace shadow class if you have token shadow utilities
          )}
        >
          {/* Inner grid-surface background (shared for both rows) */}
          <div
            className={cx(
              "rounded-2xl border border-white/10",
              "bg-white/6",
              "p-4 md:p-5",
              "relative overflow-hidden"
            )}
          >
            {/* subtle infra grid inside the main card */}
            <div
              aria-hidden
              className={cx(
                "absolute inset-0",
                "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)]",
                "after:absolute after:inset-0 after:content-['']",
                "after:bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)]",
                "after:bg-[size:52px_52px] after:opacity-60"
              )}
            />
            <div className="relative">
              {/* ROW 1: Parent Categories — single line row with compact cards */}
              <div className="mb-5">
                <div className="mb-3 text-xs font-medium tracking-wide text-white/60">
                  Primary Category
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
                  {segments.map((seg) => {
                    const isActive = seg.id === activeSegmentId;

                    return (
                      <button
                        key={seg.id}
                        onClick={() => setActiveSegmentId(seg.id)}
                        className={cx(
                          "min-w-[240px] md:min-w-[260px]",
                          "rounded-2xl border px-4 py-3 text-left transition",
                          // Parent is darker than children
                          "bg-black/55 backdrop-blur-xl border-white/10",
                          "hover:bg-black/65 hover:border-white/20",
                          isActive &&
                            "border-white/30 bg-black/70 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"
                          // TODO(tokenize): replace shadow if you have tokens
                        )}
                        aria-pressed={isActive}
                      >
                        <div className="text-sm font-semibold text-white md:text-base">
                          {seg.label}
                        </div>

                        {/* 1-line definition only */}
                        <div className="mt-1 line-clamp-1 text-xs text-white/60 md:text-sm">
                          {seg.definition ?? "—"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ROW 2: Children — bigger cards underneath */}
              <div>
                <div className="mb-3 text-xs font-medium tracking-wide text-white/60">
                  Select a subtype
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {(activeSegment?.children ?? []).map((child) => (
                    <button
                      key={child.id}
                      onClick={() => onSelectChild(child)}
                      className={cx(
                        "group rounded-2xl border p-5 text-left transition",
                        // Children are lighter than parent
                        "bg-white/12 backdrop-blur-md border-white/10",
                        "hover:bg-white/14 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-base font-semibold text-white md:text-lg">
                            {child.label}
                          </div>

                          {/* Keep this minimal, breathable */}
                          <div className="mt-2 text-sm text-white/70">
                            {[child.evType, child.scale]
                              .filter(Boolean)
                              .join(" • ") ||
                              child.coreRequirement ||
                              "Open details"}
                          </div>
                        </div>

                        <div className="mt-1 text-white/35 transition group-hover:text-white/70">
                          ↗
                        </div>
                      </div>
                    </button>
                  ))}

                  {(activeSegment?.children ?? []).length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-white/70">
                      No subtypes found for this category.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
