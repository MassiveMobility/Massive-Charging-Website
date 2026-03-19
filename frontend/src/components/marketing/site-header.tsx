"use client";

import { useEffect, useMemo, useState } from "react";

import { FRONTPAGE_SIDEBAR_VISIBILITY_EVENT } from "@/lib/constants/ui-events";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; to: string; canHighlight?: boolean };

function isRouteActive(pathname: string, routePath: string) {
  if (routePath === "/") {
    return pathname === routePath;
  }

  return pathname === routePath || pathname.startsWith(`${routePath}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isScale125Like, setIsScale125Like] = useState(false);
  const [showBlackStrip, setShowBlackStrip] = useState(false);
  const pathname = usePathname();

  const CHARGING_GUIDE_ROUTE = "/charging-guide";
  const BUSINESS_ROUTE = "/ev-charging-station-business";
  const PRICING_ROUTE = "/plans-offers";

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Find Charging Stations", to: "/charging-stations-map", canHighlight: true },
      { label: "UPI Charging", to: "/upi-charging", canHighlight: true },
      { label: "Get Charging Guide", to: CHARGING_GUIDE_ROUTE, canHighlight: true },
      { label: "EV Charging Shop", to: "/ev-charging-shop", canHighlight: true },
      { label: "Pricing & Offers", to: PRICING_ROUTE, canHighlight: true }
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const frontHeroRoutes = ["/", "/home", "/front-page", "/front"];
    const isFrontHeroPage = frontHeroRoutes.includes(pathname);

    if (!isFrontHeroPage) {
      setShowBlackStrip(false);
      return;
    }

    const getSidebarVisibleFallback = () => {
      const eliteSection = document.getElementById("exclusive-membership");

      if (eliteSection) {
        const rect = eliteSection.getBoundingClientRect();
        return rect.top > window.innerHeight * 0.85;
      }

      return window.scrollY < window.innerHeight * 0.75;
    };

    const onSidebarVisibility = (event: Event) => {
      const customEvent = event as CustomEvent<{ visible?: boolean }>;
      const nextVisible = customEvent.detail?.visible;

      if (typeof nextVisible === "boolean") {
        setShowBlackStrip(nextVisible);
      }
    };

    setShowBlackStrip(getSidebarVisibleFallback());
    window.addEventListener(FRONTPAGE_SIDEBAR_VISIBILITY_EVENT, onSidebarVisibility as EventListener);

    return () => {
      window.removeEventListener(
        FRONTPAGE_SIDEBAR_VISIBILITY_EVENT,
        onSidebarVisibility as EventListener
      );
    };
  }, [pathname]);

  useEffect(() => {
    const updateDesktopScale = () => {
      const width = window.innerWidth;
      setIsScale125Like(width >= 1280 && width <= 1700);
    };

    updateDesktopScale();
    window.addEventListener("resize", updateDesktopScale);

    return () => window.removeEventListener("resize", updateDesktopScale);
  }, []);

  const headerScaleClass = isScale125Like ? "site-header-v2--scale-125" : "site-header-v2--scale-default";
  const blackStripClass = showBlackStrip
    ? "site-header-v2__black-strip--visible"
    : "site-header-v2__black-strip--hidden";

  return (
    <header className={`site-header-v2 ${headerScaleClass}`}>
      <div className="site-header-v2__row">
        <div className={`site-header-v2__black-strip ${blackStripClass}`} />

        <Link className="site-header-v2__logo-link" href="/">
          <img
            alt="Massive Charging"
            className="site-header-v2__logo"
            src="/massive-charging-logo.svg"
          />
        </Link>

        <div className="site-header-v2__desktop-nav-wrap">
          <ul className="site-header-v2__desktop-nav-list">
            {navItems.map((item) => {
              const isActive = item.canHighlight ? isRouteActive(pathname, item.to) : false;

              return (
                <li className="site-header-v2__desktop-nav-item" key={item.label}>
                  <Link
                    className={`site-header-v2__desktop-nav-link ${isActive ? "site-header-v2__desktop-nav-link--active" : ""}`}
                    href={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link className="site-header-v2__desktop-cta" href={BUSINESS_ROUTE}>
          Start Charging Station Business
        </Link>

        <div className="site-header-v2__mobile-trigger-wrap">
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="site-header-v2__mobile-trigger"
            onClick={() => setOpen(true)}
            type="button"
          >
            <span className="site-header-v2__mobile-bars">
              <span className="site-header-v2__mobile-bars-line" />
              <span className="site-header-v2__mobile-bars-line" />
              <span className="site-header-v2__mobile-bars-line" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="site-header-v2__mobile-overlay">
          <button
            aria-label="Close menu"
            className="site-header-v2__mobile-backdrop"
            onClick={() => setOpen(false)}
            type="button"
          />

          <div className="site-header-v2__mobile-drawer">
            <div className="site-header-v2__mobile-drawer-header">
              <Link className="site-header-v2__mobile-logo-link" href="/">
                <img
                  alt="Massive Charging"
                  className="site-header-v2__mobile-logo"
                  src="/massive-charging-logo.svg"
                />
              </Link>

              <button
                aria-label="Close menu"
                className="site-header-v2__mobile-close"
                onClick={() => setOpen(false)}
                type="button"
              >
                X
              </button>
            </div>

            <div className="site-header-v2__mobile-drawer-body">
              <div className="site-header-v2__mobile-links">
                {navItems.map((item) => {
                  const isActive = item.canHighlight ? isRouteActive(pathname, item.to) : false;

                  return (
                    <Link
                      className={`site-header-v2__mobile-link ${isActive ? "site-header-v2__mobile-link--active" : ""}`}
                      href={item.to}
                      key={`mobile-${item.to}-${item.label}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="site-header-v2__mobile-cta-wrap">
                <Link
                  className="site-header-v2__mobile-cta"
                  href={BUSINESS_ROUTE}
                  onClick={() => setOpen(false)}
                >
                  Start Charging Station Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
