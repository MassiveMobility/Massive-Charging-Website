import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Adjust these import paths to your project structure
import CPOTypeMaster from "./CPO_Type_Master.json";
import IndividualPageData from "./CPO_Type_IndividualPage_Data.json";

type Hero = {
  title?: string;
  body?: string;
  trustPill?: string;
  actionText?: string;
};

type ConsiderationCard = {
  title: string;
  text: string;
  icon?: string;
};

type Consideration = {
  title?: string;
  subtitle?: string;
  cards?: ConsiderationCard[];
  ctaCard?: string;
};

type CheckboxGroup = {
  label: string;
  options: string[];
};

type Connection = {
  title?: string;
  subtitle?: string;
  checkboxGroups?: CheckboxGroup[];
};

type PageContent = {
  id: string;
  slug: string;
  label: string;
  segment: string;
  hero?: Hero | null;
  consideration?: Consideration | null;
  connection?: Connection | null;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function CPOTypeIndividualPage() {
  const navigate = useNavigate();
  const { segment, cpoId } = useParams<{ segment: string; cpoId: string }>();

  const masterLeaf = useMemo(() => {
    const segs = (CPOTypeMaster as any)?.segments ?? [];
    for (const seg of segs) {
      for (const child of seg.children ?? []) {
        if (child.id === cpoId) return { ...child, segmentId: seg.id };
      }
    }
    return null;
  }, [cpoId]);

  // Primary content source: IndividualPageData (by id)
  const page: PageContent | null = useMemo(() => {
    if (!cpoId) return null;
    const p = (IndividualPageData as any)?.[cpoId] ?? null;
    return p;
  }, [cpoId]);

  // Basic guard
  if (!cpoId || !page) {
    return (
      <div className="min-h-screen bg-mcn-bg text-mcn-text-primary">
        <div className="container py-16">
          <div className="rounded-mcn border border-mcn-stroke-soft bg-mcn-surface p-6 shadow-mcn-soft">
            <div className="text-mt-up-2 font-heading font-semibold">
              Page not found
            </div>
            <div className="mt-2 text-sm text-mcn-text-muted">
              No IndividualPage data found for <b>{cpoId ?? "unknown"}</b>.
              <br />
              Make sure <code>CPO_Type_IndividualPage_Data.json</code> contains
              this id as a key.
            </div>

            <button
              className="mt-5 inline-flex items-center justify-center rounded-[8px] bg-mcn-red px-4 py-2 text-sm font-semibold text-mcn-text-inverse hover:bg-mcn-red-hover"
              onClick={() => navigate("/cpo")}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Prefer page content; fallback to master label if hero missing
  const title = page.hero?.title || masterLeaf?.label || page.label;

  const subtitleLine = [
    masterLeaf?.evType,
    masterLeaf?.scale,
    masterLeaf?.coreRequirement,
  ]
    .filter(Boolean)
    .join(" • ");

  // Simple local selection state for checkboxGroups
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});

  const toggleOption = (groupLabel: string, option: string) => {
    setSelected((prev) => {
      const next = { ...prev };
      const set = new Set(next[groupLabel] ?? []);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      next[groupLabel] = set;
      return next;
    });
  };

  const scrollToConnect = () => {
    const el = document.getElementById("connect");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-mcn-bg text-mcn-text-primary">
      {/* Top bar */}
      <div className="border-b border-mcn-stroke-soft bg-mcn-surface3 backdrop-blur-mcn">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => navigate("/cpo")}
            className="text-sm font-semibold text-mcn-text-muted hover:text-mcn-text-primary"
          >
            ← Back
          </button>

          <div className="text-xs text-mcn-text-faint">
            {page.slug || (segment && `/cpo/${segment}/${cpoId}`) || ""}
          </div>
        </div>
      </div>

      <main className="container py-10 md:py-14">
        {/* HERO */}
        <section className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-6 shadow-mcn-card md:p-8">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="text-mt-up-3 font-heading font-semibold md:text-mt-up-4">
              {title}
            </div>

            {page.hero?.body ? (
              <p className="max-w-3xl text-mt-base text-mcn-text-muted">
                {page.hero.body}
              </p>
            ) : (
              <p className="max-w-3xl text-mt-base text-mcn-text-muted">
                {subtitleLine || "Explore EV charging setup for this category."}
              </p>
            )}

            {page.hero?.trustPill ? (
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-mcn-stroke-soft bg-mcn-surface3 px-3 py-1 text-sm text-mcn-text-muted">
                <span>✅</span>
                <span>{page.hero.trustPill}</span>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                className="inline-flex items-center justify-center rounded-[8px] bg-mcn-red px-4 py-2 text-sm font-semibold text-mcn-text-inverse hover:bg-mcn-red-hover"
                onClick={scrollToConnect}
              >
                {page.hero?.actionText || "Connect with Massive"}
              </button>

              <div className="text-sm text-mcn-text-faint">{subtitleLine}</div>
            </div>
          </div>
        </section>

        {/* CONSIDERATIONS */}
        {page.consideration ? (
          <section className="mt-8 md:mt-10">
            <div className="mb-3 text-mt-up-1 font-heading font-semibold">
              {page.consideration.title || "Things to Consider"}
            </div>

            {page.consideration.subtitle ? (
              <div className="mb-5 text-sm text-mcn-text-muted">
                {page.consideration.subtitle}
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {(page.consideration.cards ?? []).map((card, idx) => (
                <div
                  key={`${card.title}-${idx}`}
                  className="rounded-mcn border border-mcn-stroke-soft bg-mcn-surface2 p-5 shadow-mcn-soft"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl">{card.icon || "•"}</div>
                    <div>
                      <div className="text-base font-semibold">
                        {card.title}
                      </div>
                      <div className="mt-1 text-sm text-mcn-text-muted">
                        {card.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {page.consideration.ctaCard ? (
              <div className="mt-4 rounded-mcn border border-mcn-stroke-soft bg-mcn-surface3 p-4 text-sm text-mcn-text-muted">
                {page.consideration.ctaCard}
              </div>
            ) : null}
          </section>
        ) : null}

        {/* CONNECT FORM */}
        {page.connection ? (
          <section id="connect" className="mt-10 md:mt-12">
            <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-6 shadow-mcn-card md:p-8">
              <div className="text-mt-up-2 font-heading font-semibold">
                {page.connection.title || "Connect"}
              </div>

              {page.connection.subtitle ? (
                <div className="mt-2 text-sm text-mcn-text-muted">
                  {page.connection.subtitle}
                </div>
              ) : null}

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {(page.connection.checkboxGroups ?? []).map((group, gi) => (
                  <div
                    key={`${group.label}-${gi}`}
                    className="rounded-mcn border border-mcn-stroke-soft bg-mcn-surface2 p-5"
                  >
                    <div className="text-sm font-semibold text-mcn-text-primary">
                      {group.label}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(group.options ?? []).map((opt) => {
                        const isOn = selected[group.label]?.has(opt) ?? false;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleOption(group.label, opt)}
                            className={cx(
                              "rounded-full border px-3 py-1 text-sm transition",
                              isOn
                                ? "border-mcn-stroke-strong bg-mcn-surface3 text-mcn-text-primary"
                                : "border-mcn-stroke-soft bg-mcn-surface text-mcn-text-muted hover:bg-mcn-surface3"
                            )}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  className="inline-flex items-center justify-center rounded-[8px] bg-mcn-red px-4 py-2 text-sm font-semibold text-mcn-text-inverse hover:bg-mcn-red-hover"
                  onClick={() => {
                    const payload: Record<string, string[]> = {};
                    for (const [k, v] of Object.entries(selected)) {
                      payload[k] = Array.from(v);
                    }
                    console.log("CPO Connect Payload:", {
                      id: page.id,
                      slug: page.slug,
                      segment,
                      payload,
                    });
                    alert("Captured selections (see console). Next: wire to API.");
                  }}
                >
                  Submit
                </button>

                <div className="text-sm text-mcn-text-faint">
                  Captures selections locally (console). Next we’ll wire this to
                  your backend / Sheet / CRM.
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}