import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  title: string;
  icon: string;
  path: string;
  category: string;
};

export default function ChooseSetupSection() {
  const menuItems: MenuItem[] = useMemo(
    () => [
      { title: "Independent Home", icon: "🏠", path: "/home-charging", category: "Home" },
      { title: "Apartment Resident", icon: "🚗", path: "/apartment-resident", category: "Residential" },
      { title: "Apartment Society / RWA", icon: "🏢", path: "/society-charging", category: "Residential" },
      { title: "Gated Community", icon: "🏘️", path: "/community-charging", category: "Residential" },
      { title: "PG / Co-living", icon: "🛏️", path: "/pg-charging", category: "Residential" },
      { title: "Retail Shop", icon: "🏪", path: "/retail-charging", category: "Commercial" },
      { title: "Restaurant / Café", icon: "🍽️", path: "/restaurant-charging", category: "Commercial" },
      { title: "Mall / Commercial", icon: "🏬", path: "/mall-charging", category: "Commercial" },
      { title: "Delivery Fleet", icon: "🚚", path: "/fleet-charging", category: "Fleet" },
      { title: "Fuel Pump / Highway", icon: "⛽", path: "/highway-charging", category: "Highway" },
      { title: "Hospital / Institution", icon: "🏥", path: "/hospital-charging", category: "Commercial" },
    ],
    []
  );

  const categories = ["All", "Home", "Residential", "Commercial", "Fleet", "Highway"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery = !q || item.title.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [menuItems, activeCategory, query]);

  return (
    <section id="choose" className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle hero-style glow + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-electric-glow-cyan blur-[140px] opacity-55" />
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-electric-glow-ionBlue blur-[140px] opacity-55" />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-pf-up-4 text-mcn-text-primary">
              Choose your existing setup. We’ll show what you can build.
            </h2>
            <p className="mt-3 max-w-2xl text-mt-base text-mcn-text-muted">
              Pick a category, then open a plan. Each plan explains the setup, operations, and the business model.
            </p>
          </div>

          <div className="w-full md:w-[380px]">
            <label className="block text-mt-down-1 font-medium text-mcn-text-muted">Search</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., society, retail, fleet…"
              className="mt-2 w-full rounded-[18px] border border-mcn-stroke-soft bg-white px-4 py-3 text-mt-base text-mcn-text-primary outline-none ring-2 ring-transparent transition duration-fast ease-ease-out-standard focus:border-mcn-red focus:ring-[rgba(229,0,0,0.25)]"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === activeCategory;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={[
                  "rounded-full px-4 py-2 text-mt-down-1 font-semibold",
                  "transition duration-fast ease-ease-out-standard",
                  active
                    ? "border border-mcn-stroke-soft bg-mcn-ink-bg text-mcn-ink-text-primary shadow-mcn-soft"
                    : "border border-mcn-stroke-soft bg-white text-mcn-text-muted hover:bg-mcn-surface2",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link key={item.path} to={item.path} className="group">
              <div className="h-full rounded-[24px] border border-mcn-stroke-soft bg-white p-6 shadow-mcn-soft transition duration-fast ease-ease-out-standard group-hover:-translate-y-[2px] group-hover:shadow-mcn-card">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[34px] leading-none">{item.icon}</div>
                  <span className="rounded-full border border-mcn-stroke-soft bg-mcn-surface px-3 py-1 text-mt-down-2 text-mcn-text-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-mt-up-1 text-mcn-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-mt-down-1 text-mcn-text-muted">
                  See the recommended charger type, installation notes, and how payouts typically work for this setup.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 font-semibold text-mcn-blue">
                  View plan <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
