import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type NavItem = { label: string; to: string };

const FONT_STYLE: React.CSSProperties = {
  fontFamily: "'TT Fors Trial', Inter, sans-serif",
  fontWeight: 400,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const CHARGING_GUIDE_ROUTE = "/charging-guide";
  const BUSINESS_ROUTE = "/ev-charging-station-business";
  const PRICING_ROUTE = "/plans-offers";

  const navItems = useMemo(
    () => [
      { label: "Find Charging Stations", to: CHARGING_GUIDE_ROUTE, canHighlight: true },
      { label: "UPI Charging", to: "/upi-charging", canHighlight: true },
      { label: "Get EV Charging Guide", to: "/ev-charging-guide", canHighlight: true },
      { label: "EV Charging Shop", to: "/ev-charging-shop", canHighlight: true },
      { label: "Pricing & Offers", to: PRICING_ROUTE, canHighlight: true },
    ],
    [],
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

  const isHomePage = location.pathname === "/";
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    if (!isHomePage) {
      setInHero(false);
      return;
    }
    const onScroll = () => {
      setInHero(window.scrollY < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const showBlackStrip = isHomePage && inHero;

  return (
    <header className="sticky top-0 z-[58] w-full">
      <div className="relative flex items-center gap-10 px-10 pt-6 pb-4 bg-white">
        {/* Black strip at the right edge – only on home page hero area */}
        <div
          className="hidden xl:block absolute right-0 top-0 h-full bg-[#1A1A1A] transition-opacity duration-300"
          style={{ width: 128, opacity: showBlackStrip ? 1 : 0 }}
        />
        {/* CTA Button – above sidebar z-[55], navbar bg doesn't create stacking context for this */}
        <Link
          to={BUSINESS_ROUTE}
          className="hidden xl:inline-flex items-center no-underline hover:no-underline hover:bg-[#c20000] transition-colors"
          style={{
            position: "absolute",
            top: "50%",
            right: 24,
            transform: "translateY(-50%)",
            zIndex: 60,
            borderRadius: 10.72,
            backgroundColor: "#E50000",
            padding: "9.65px 19.3px",
            color: "#fff",
            fontSize: 16,
            lineHeight: "26px",
            letterSpacing: "0.002em",
            textDecoration: "none",
            whiteSpace: "nowrap",
            fontFamily: "'TT Fors Trial', Inter, sans-serif",
            fontWeight: 400,
          }}
        >
          Start Charging Station Business
        </Link>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/massive-charging-logo.svg"
            alt="Massive Charging"
            style={{ height: 45, width: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.canHighlight ? (
                <NavLink
                  to={item.to}
                  style={FONT_STYLE}
                  className={({ isActive }) =>
                    `text-[16px] leading-[26px] tracking-[0.002em] text-[#0C0C0C] whitespace-nowrap pb-1 border-b-2 transition-colors no-underline hover:no-underline ${
                      isActive ? "border-[#E50000]" : "border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <Link
                  to={item.to}
                  style={FONT_STYLE}
                  className="text-[16px] leading-[26px] tracking-[0.002em] text-[#0C0C0C] whitespace-nowrap pb-1 border-b-2 border-transparent no-underline hover:no-underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Mobile hamburger */}
        <div className="ml-auto lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-xl bg-gray-100 px-3 py-2 text-[#131313] hover:bg-gray-200 focus:outline-none"
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

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl border-l border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/massive-charging-logo.svg"
                  alt="Massive Charging"
                  style={{ height: 36, width: "auto" }}
                />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gray-100 px-3 py-2 text-[#131313] hover:bg-gray-200 focus:outline-none"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={"m-" + item.to + item.label}
                    to={item.to}
                    style={FONT_STYLE}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-[16px] leading-[26px] tracking-[0.002em] no-underline hover:no-underline transition ${
                        isActive
                          ? "bg-red-50 text-[#E50000] border-l-2 border-[#E50000]"
                          : "text-[#0C0C0C] hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to={BUSINESS_ROUTE}
                  className="inline-flex items-center justify-center w-full rounded-[10.72px] bg-[#E50000] px-[19.3px] py-[9.65px] text-white text-[16px] leading-[26px] tracking-[0.002em] no-underline hover:bg-[#c20000] hover:no-underline transition-colors"
                  style={FONT_STYLE}
                >
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
