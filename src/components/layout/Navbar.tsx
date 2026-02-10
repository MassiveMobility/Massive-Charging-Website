import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/MCN Logo.png";

type NavItem = { label: string; to: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const CHARGING_GUIDE_ROUTE = "/charging-guide";
  const BUSINESS_ROUTE = "/ev-charging-business";
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

  // Menu pill styles (faint)
  const pillBase =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium " +
    "transition whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15";

  const pillInactive =
    "text-black/75 hover:text-black hover:bg-black/5";

  const pillActive =
    "text-black bg-black/7 ring-1 ring-black/10";

  // Red button (white background)
  const businessBtn =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold " +
  "bg-red-600 text-white shadow-sm " +
  "hover:bg-red-700 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/40 transition";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* NAVBAR: White Glass */}
      {/* CHANGE THIS to adjust “faint white”: bg-white/70 -> bg-white/85 (more white) or bg-white/60 (more glass) */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-black/10">
        <div className="mx-auto flex max-w-[1280px] items-center px-4 py-3 md:px-6">
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
              className="inline-flex items-center justify-center rounded-xl bg-black/5 px-3 py-2 text-black ring-1 ring-black/10
                         hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
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
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-black/10">
            <div className="flex items-center justify-between px-4 py-4 border-b border-black/10">
              <Link to="/" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="h-9 w-auto" />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-black/5 px-3 py-2 text-black ring-1 ring-black/10 hover:bg-black/10
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <div className="mb-3 text-xs font-semibold tracking-wide text-black/45">
                MENU
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={"m-" + item.to + item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      "rounded-xl px-4 py-3 text-sm font-medium transition ring-1 " +
                      (isActive
                        ? "bg-black/7 text-black ring-black/10"
                        : "bg-white text-black/75 ring-black/10 hover:bg-black/5 hover:text-black")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-black/10">
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