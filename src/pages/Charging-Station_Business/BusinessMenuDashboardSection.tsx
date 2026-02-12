import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// --- Copied from UPIChargingPage (dark variant only) ---
const ElectricDawnBackdrop: React.FC<{ variant?: "light" | "dark" }> = ({
  variant = "light",
}) => {
  if (variant === "dark") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#121418]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(0,209,255,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(30,255,136,0.08),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.00),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
      </div>
    );
  }

  return null;
};

// Minimal red-glow CTA button (same spirit as UPI page)
const RedGlowButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { rightIcon?: React.ReactNode }
> = ({ className = "", children, rightIcon, ...props }) => {
  return (
    <button
      {...props}
      className={
        "group relative inline-flex items-center justify-center gap-2 rounded-mcn-xl px-5 py-3 text-mt-down-1 font-semibold text-mcn-text-inverse " +
        "bg-mcn-red shadow-[0_14px_40px_rgba(229,0,0,0.28)] " +
        "ring-1 ring-[rgba(229,0,0,0.30)] " +
        "transition duration-normal ease-out-standard " +
        "hover:bg-mcn-red-hover hover:shadow-[0_16px_48px_rgba(229,0,0,0.34)] " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-mcn-red " +
        "active:translate-y-[1px] " +
        className
      }
    >
      <span className="pointer-events-none absolute inset-0 rounded-mcn-xl bg-[radial-gradient(70%_80%_at_30%_20%,rgba(255,255,255,0.30),rgba(255,255,255,0)_60%)] opacity-70" />
      <span className="pointer-events-none absolute -inset-0.5 rounded-[22px] bg-[radial-gradient(60%_80%_at_50%_50%,rgba(229,0,0,0.40),rgba(229,0,0,0)_70%)] opacity-60 blur-md transition group-hover:opacity-75" />
      <span className="relative z-10">{children}</span>
      {rightIcon ? (
        <span className="relative z-10 transition group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
};

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
    
    <section id="how-it-works" className="pb-20">
      {/* =========================
          FULL-WIDTH DARK BLOCK
         ========================= */}
      <section className="relative overflow-hidden">
        <ElectricDawnBackdrop variant="dark" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-14 md:px-6 md:py-16">
          {/* How It Works (NO bodyline) */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-5 font-heading text-[49px] leading-[1.05] tracking-[-0.02em] text-white">
              How It Works
            </h2>
          </div>

          {/* 3 cards */}
          <div className="mt-10 grid gap-3 md:grid-cols-3">
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
                className="rounded-[22px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <div className="text-mt-up-1 font-semibold text-white">{s.title}</div>
                <div className="mt-2 text-mt-down-1 text-white/80">{s.body}</div>
              </div>
            ))}
          </div>

          {/* Ready to become a CPO */}
          <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-mt-up-2 font-semibold text-white">Ready to become a CPO?</div>
                <div className="mt-2 max-w-xl text-mt-down-1 text-white/80">
                  Start with your property type. In minutes you’ll know what to install,
                  what it costs, and how it pays back.
                </div>
              </div>

              <a href="#choose" className="shrink-0">
                <RedGlowButton rightIcon={<ArrowRight size={16} />}>Choose a setup</RedGlowButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DASHBOARD MENU (REDESIGNED)
         ========================= */}
      <section id="choose" className="relative overflow-hidden pt-10">
        {/* Dark + grid + glow accents like Hero */}
        <div className="pointer-events-none absolute inset-0">
  <div className="absolute inset-0 bg-[#161A22]" />

  <div className="absolute inset-0 bg-[radial-gradient(900px_540px_at_18%_12%,rgba(0,209,255,0.08),transparent_60%),radial-gradient(820px_520px_at_82%_18%,rgba(30,255,136,0.06),transparent_62%)]" />

  <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.18]" />
</div>


        <div className="relative z-10 mx-auto max-w-[1280px] px-4 pb-4 md:px-6">
          {/* Glass wrapper */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-heading text-[32px] leading-tight tracking-[-0.01em] text-white md:text-[36px]">
                  Choose your existing setup. We’ll show what you can build.
                </h3>
                <p className="mt-2 max-w-2xl text-mt-base text-white/75">
                  Pick a category, then open a plan. Each plan explains the setup, operations, and the business model.
                </p>
              </div>

              <div className="w-full md:w-[380px]">
                <label className="block text-mt-down-1 font-medium text-white/70">Search</label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., society, retail, fleet…"
                  className={[
                    "mt-2 w-full rounded-[18px] border border-white/10",
                    "bg-white/5 px-4 py-3 text-mt-base text-white outline-none",
                    "placeholder:text-white/35",
                    "ring-2 ring-transparent transition duration-fast ease-ease-out-standard",
                    "focus:border-[rgba(229,0,0,0.35)] focus:ring-[rgba(229,0,0,0.25)]",
                  ].join(" ")}
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
                        ? "border border-white/10 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <Link key={item.path} to={item.path} className="group">
                  <div
                    className={[
                      "h-full rounded-[24px] border border-white/10",
                      "bg-white/5 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-md",
                      "transition duration-fast ease-ease-out-standard",
                      "group-hover:-translate-y-[2px] group-hover:bg-white/8",
                      "group-hover:shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-[34px] leading-none">{item.icon}</div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-mt-down-2 text-white/70">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-mt-up-1 text-white">{item.title}</h3>
                    <p className="mt-2 text-mt-down-1 text-white/75">
                      See the recommended charger type, installation notes, and how payouts typically work for this setup.
                    </p>

                    {/* View plan: red glow on hover */}
                    <div
                      className={[
                        "mt-4 inline-flex items-center gap-2 font-semibold",
                        "text-white/80",
                        "transition duration-fast ease-ease-out-standard",
                        "group-hover:text-mcn-red",
                        "group-hover:drop-shadow-[0_0_14px_rgba(229,0,0,0.65)]",
                      ].join(" ")}
                    >
                      View plan <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
