import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/MCN Logo.png";

type NavItem = { label: string; to: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const CHARGING_GUIDE_ROUTE = "/charging-guide";
  const BUSINESS_ROUTE = "/ev-charging-station-business";
  const PRICING_ROUTE = "/plans-offers";

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Find Charging Stations", to: CHARGING_GUIDE_ROUTE },
      { label: "UPI Charging", to: "/upi-charging" },
      { label: "Get EV Charging Guide", to: CHARGING_GUIDE_ROUTE },
      { label: "EV Charging Shop", to: "/ev-charging-shop" },
      { label: "Pricing & Offers", to: PRICING_ROUTE },
    ],
    []
  );

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Escape to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Menu pill styles (dark glass navbar)
  const pillBase =
    "inline-flex items-center justify-center rounded-[12px] px-4 py-2 text-sm font-medium " +
    "transition whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const pillInactive = "text-white/75 hover:text-white hover:bg-white/6";

  const pillActive = "text-white bg-white/10 ring-1 ring-white/15";

  // CTA button (outline, muted emphasis)
  const businessBtn =
    "inline-flex items-center justify-center rounded-[12px] px-5 py-2.5 text-sm font-semibold " +
    "bg-white/0 text-white/85 ring-1 ring-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] " +
    "hover:bg-white/8 hover:text-white hover:shadow-[0_12px_34px_rgba(229,0,0,0.18)] " +
    "active:bg-white/10 active:shadow-[0_8px_24px_rgba(229,0,0,0.24)] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 transition";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* NAVBAR: Dark Glass */}
      <div className="relative bg-[#0f1114]/85 backdrop-blur-mcn border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        {/* subtle sheen + warm accents */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 to-transparent" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[rgba(229,0,0,0.18)] blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 -top-12 h-36 w-36 rounded-full bg-[rgba(30,255,136,0.12)] blur-3xl" />
        <div className="pointer-events-none absolute right-10 -top-12 h-28 w-28 rounded-full bg-[rgba(255,215,110,0.16)] blur-3xl" />

        <div className="relative mx-auto flex max-w-[1280px] items-center px-4 py-3 md:px-6">
          {/* Left: Logo -> Home */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={Logo} alt="Logo" className="h-9 w-auto" />
          </Link>

          {/* Right: Desktop menu */}
          <nav className="ml-auto hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to + item.label}
                to={item.to}
                className={({ isActive }) =>
                  `${pillBase} ${isActive ? pillActive : pillInactive}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Business CTA */}
            <Link to={BUSINESS_ROUTE} className={businessBtn}>
              Start Charging Station Business
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <div className="ml-auto md:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-white/8 px-3 py-2 text-white ring-1 ring-white/12
                         hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
                <span className="h-0.5 w-6 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[rgba(11,11,12,0.92)] backdrop-blur-mcn shadow-2xl border-l border-white/12">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="h-9 w-auto" />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/8 px-3 py-2 text-white ring-1 ring-white/12 hover:bg-white/12
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <div className="mb-3 text-xs font-semibold tracking-wide text-white/45">
                MENU
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={"m-" + item.to + item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      "rounded-[12px] px-4 py-3 text-sm font-medium transition ring-1 " +
                      (isActive
                        ? "bg-white/10 text-white ring-white/15"
                        : "bg-white/0 text-white/75 ring-white/12 hover:bg-white/6 hover:text-white")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <Link to={BUSINESS_ROUTE} className={businessBtn + " w-full"}>
                  Start Charging Station Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
