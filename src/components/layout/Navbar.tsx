import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

type NavItem = { label: string; to: string; canHighlight?: boolean };

const FONT_STYLE: React.CSSProperties = {
  fontFamily: "'TT Fors Trial', Inter, sans-serif",
  fontWeight: 400,
};
const SIDEBAR_VISIBILITY_EVENT = "frontpage-sidebar-visibility";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScale125Like, setIsScale125Like] = useState(false);
  const location = useLocation();

  const CHARGING_GUIDE_ROUTE = "/charging-guide";
  const BUSINESS_ROUTE = "/ev-charging-station-business";
  const PRICING_ROUTE = "/plans-offers";

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Find Charging Stations", to: "/charging-stations-map", canHighlight: true },
      { label: "UPI Charging", to: "/upi-charging", canHighlight: true },
      { label: "Get Charging Guide", to: CHARGING_GUIDE_ROUTE, canHighlight: true },
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

  const isFrontHeroPage = ["/", "/home", "/front-page", "/front"].includes(location.pathname);
  const [showBlackStrip, setShowBlackStrip] = useState(false);

  useEffect(() => {
    if (!isFrontHeroPage) {
      setShowBlackStrip(false);
      return;
    }
    const getSidebarVisibleFallback = () => {
      const eliteSection = document.getElementById("exclusive-membership");
      if (eliteSection) {
        const rect = eliteSection.getBoundingClientRect();
        return rect.top > window.innerHeight * 0.85;
      } else {
        return window.scrollY < window.innerHeight * 0.75;
      }
    };
    const onSidebarVisibility = (event: Event) => {
      const customEvent = event as CustomEvent<{ visible?: boolean }>;
      const nextVisible = customEvent.detail?.visible;
      if (typeof nextVisible === "boolean") {
        setShowBlackStrip(nextVisible);
      }
    };

    setShowBlackStrip(getSidebarVisibleFallback());

    window.addEventListener(SIDEBAR_VISIBILITY_EVENT, onSidebarVisibility as EventListener);
    return () => window.removeEventListener(SIDEBAR_VISIBILITY_EVENT, onSidebarVisibility as EventListener);
  }, [isFrontHeroPage]);

  // Approximate Windows 125% display scale on common 1920px screens.
  // In this range we intentionally render larger desktop typography.
  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };
    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);
    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  const desktopBarGapClass = isScale125Like
    ? "gap-[clamp(10px,1.15vw,24px)]"
    : "gap-[clamp(12px,1.55vw,32px)]";
  const desktopNavGapClass = isScale125Like
    ? "gap-[clamp(10px,1.05vw,28px)]"
    : "gap-[clamp(12px,1.35vw,40px)]";
  const desktopNavTextClass = isScale125Like
    ? "text-[clamp(12px,0.95vw,15px)] leading-[clamp(18px,1.35vw,24px)]"
    : "text-[clamp(13px,1.05vw,17px)] leading-[clamp(20px,1.58vw,28px)]";
  const desktopLogoHeight = isScale125Like ? "clamp(34px,2.3vw,43px)" : "clamp(36px,2.5vw,48px)";
  const desktopCtaPadding = isScale125Like
    ? "clamp(6px,0.55vw,9px) clamp(11px,1vw,17px)"
    : "clamp(7px,0.62vw,10.5px) clamp(13px,1.2vw,21px)";
  const desktopCtaFontSize = isScale125Like ? "clamp(12px,0.95vw,15px)" : "clamp(13px,1.05vw,17px)";
  const desktopCtaLineHeight = isScale125Like
    ? "clamp(18px,1.35vw,24px)"
    : "clamp(20px,1.55vw,28px)";
  // Keep this in sync with FrontPage social sidebar width for perfect alignment.
  const blackStripWidth = "clamp(96px, 7vw, 128px)";

  return (
    <header className="sticky top-0 z-[58] w-full">
      <div
        className={`relative flex items-center ${desktopBarGapClass} bg-white px-[clamp(16px,3.5vw,80px)] py-[clamp(14px,1.6vw,24px)] min-[1960px]:px-[240px] min-[2400px]:px-[480px]`}
      >
        {/* Black strip at the right edge - only on home page hero area */}
        <div
          className="absolute right-0 top-0 hidden h-full bg-[#1A1A1A] transition-all duration-300 lg:block"
          style={{
            width: blackStripWidth,
            opacity: showBlackStrip ? 1 : 0,
            transform: showBlackStrip ? "translateX(0)" : "translateX(100%)",
          }}
        />

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/massive-charging-logo.svg"
            alt="Massive Charging"
            style={{ height: desktopLogoHeight, width: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden min-w-0 flex-1 lg:flex lg:items-center lg:justify-center">
          <ul className={`m-0 flex list-none items-center ${desktopNavGapClass} p-0`}>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.canHighlight ? (
                  <NavLink
                    to={item.to}
                    style={FONT_STYLE}
                    className={({ isActive }) =>
                      `whitespace-nowrap pb-1 ${desktopNavTextClass} tracking-[0.002em] text-[#0C0C0C] no-underline transition-colors hover:no-underline ${
                        isActive ? "border-b-2 border-[#E50000]" : "border-b-2 border-transparent"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <Link
                    to={item.to}
                    style={FONT_STYLE}
                    className={`whitespace-nowrap border-b-2 border-transparent pb-1 ${desktopNavTextClass} tracking-[0.002em] text-[#0C0C0C] no-underline transition-colors hover:no-underline`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={BUSINESS_ROUTE}
          className="relative z-[60] ml-auto hidden flex-shrink-0 items-center no-underline transition-colors hover:bg-[#c20000] hover:no-underline lg:inline-flex"
          style={{
            borderRadius: 10.72,
            backgroundColor: "#E50000",
            padding: desktopCtaPadding,
            color: "#fff",
            fontSize: desktopCtaFontSize,
            lineHeight: desktopCtaLineHeight,
            letterSpacing: "0.002em",
            textDecoration: "none",
            whiteSpace: "nowrap",
            fontFamily: "'TT Fors Trial', Inter, sans-serif",
            fontWeight: 400,
          }}
        >
          Start Charging Station Business
        </Link>

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

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
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
                X
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
                      `rounded-lg px-4 py-3 text-[16px] leading-[26px] tracking-[0.002em] no-underline transition hover:no-underline ${
                        isActive
                          ? "border-l-2 border-[#E50000] bg-red-50 text-[#E50000]"
                          : "text-[#0C0C0C] hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <Link
                  to={BUSINESS_ROUTE}
                  className="inline-flex w-full items-center justify-center rounded-[10.72px] bg-[#E50000] px-[19.3px] py-[9.65px] text-[16px] leading-[26px] tracking-[0.002em] text-white no-underline transition-colors hover:bg-[#c20000] hover:no-underline"
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
