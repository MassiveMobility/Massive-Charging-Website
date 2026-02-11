import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  title: string;
  icon: string;
  path: string;
  category: string;
};

export function BusinessMenuDashboardSection() {
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
    <section id="choose" className="container pb-14">
      <div className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-5 shadow-mcn-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-mt-up-3">
              Choose what you own. We’ll show what you can build.
            </h2>
            <p className="mt-2 text-mt-base text-mcn-text-muted">
              Pick a category, then open a plan. Each plan explains the setup, operations,
              and the business model.
            </p>
          </div>

          <div className="w-full md:w-[360px]">
            <label className="block text-mt-down-1 text-mcn-text-muted">Search</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., society, retail, fleet…"
              className="mt-1 w-full rounded-mcn-lg border border-mcn-stroke-soft bg-mcn-surface2 px-4 py-3 text-mt-base outline-none ring-2 ring-transparent transition duration-fast ease-ease-out-standard focus:ring-mcn-blue"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === activeCategory;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={[
                  "rounded-full px-4 py-2 text-mt-down-1 font-semibold transition duration-fast ease-ease-out-standard",
                  active
                    ? "bg-mcn-ink-bg text-mcn-ink-text-primary shadow-mcn-soft"
                    : "border border-mcn-stroke-soft bg-mcn-surface2 text-mcn-text-muted hover:bg-mcn-surface3",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link key={item.path} to={item.path} className="group">
              <div className="h-full rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface2 p-5 shadow-mcn-soft transition duration-fast ease-ease-out-standard group-hover:translate-y-[-2px] group-hover:shadow-mcn-card">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[34px] leading-none">{item.icon}</div>
                  <span className="rounded-full border border-mcn-stroke-soft bg-mcn-surface px-3 py-1 text-mt-down-2 text-mcn-text-muted">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-mt-up-1">{item.title}</h3>
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

        {filtered.length === 0 && (
          <div className="mt-8 rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-bg p-6 text-center">
            <div className="font-heading text-mt-up-1">No matches.</div>
            <p className="mt-2 text-mt-base text-mcn-text-muted">
              Try searching “society”, “mall”, “fleet”, or switch categories.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "1) You bring the site",
            body: "A parking bay, a storefront, a society, a highway stop. If EVs pass by, you have a business.",
          },
          {
            title: "2) We deploy the stack",
            body: "Charger hardware + installation + software + payments + monitoring. Built for real operations.",
          },
          {
            title: "3) You earn per session",
            body: "Set tariffs, track usage, and get payouts. We keep the network healthy with support & maintenance.",
          },
        ].map((s) => (
          <div
            key={s.title}
            className="rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-surface p-5 shadow-mcn-soft"
          >
            <div className="font-heading text-mt-up-1">{s.title}</div>
            <div className="mt-2 text-mt-base text-mcn-text-muted">{s.body}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-mcn-xl border border-mcn-stroke-soft bg-mcn-ink-bg p-6 text-mcn-ink-text-primary shadow-mcn-ink-card">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="font-heading text-mt-up-3">Ready to become a CPO?</div>
            <div className="mt-2 text-mt-base text-mcn-ink-text-muted">
              Start with your property type. In minutes you’ll know what to install, what it costs, and how it pays back.
            </div>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#choose"
              className="inline-flex w-full items-center justify-center rounded-mcn-lg bg-mcn-red px-5 py-3 font-semibold text-mcn-text-inverse shadow-mcn-ink-overlay transition duration-fast ease-ease-out-standard hover:bg-mcn-red-hover lg:w-auto"
            >
              Choose a setup →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}