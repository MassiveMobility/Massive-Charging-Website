"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation, type NavMenu } from "@/lib/constants/navigation";
import { FRONTPAGE_SIDEBAR_VISIBILITY_EVENT } from "@/lib/constants/ui-events";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScale125Like, setIsScale125Like] = useState(false);
  const [showBlackStrip, setShowBlackStrip] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenDropdown(null);
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

  const renderNavDropdown = (item: NavMenu) => {
    if (!item.dropdown) return null;

    const isOpen = openDropdown === item.label;
    const gridColsClass = `site-header-v2__dropdown--cols-${item.dropdown.columns}`;

    return (
      <div
        key={`dropdown-${item.label}`}
        className={`site-header-v2__dropdown-wrap ${isOpen ? "site-header-v2__dropdown-wrap--open" : ""}`}
        onMouseEnter={() => setOpenDropdown(item.label)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          className="site-header-v2__desktop-nav-link"
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
          type="button"
        >
          {item.label}
        </button>

        {isOpen && (
          <div className={`site-header-v2__dropdown ${gridColsClass}`}>
            {item.dropdown.sections.map((section) => (
              <div key={section.title} className="site-header-v2__dropdown-section">
                {section.title && (
                  <h3 className="site-header-v2__dropdown-section-title">{section.title}</h3>
                )}
                <ul className="site-header-v2__dropdown-links">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`site-header-v2__dropdown-link ${
                          link.sub ? "site-header-v2__dropdown-link--sub" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

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
            {mainNavigation.map((item) => (
              <li className="site-header-v2__desktop-nav-item" key={item.label}>
                {item.dropdown ? (
                  renderNavDropdown(item)
                ) : (
                  <Link className="site-header-v2__desktop-nav-link" href={item.href || "#"}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Link className="site-header-v2__desktop-cta" href="/franchise">
          Get Started →
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
                {mainNavigation.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="site-header-v2__mobile-dropdown">
                        <button
                          className="site-header-v2__mobile-link site-header-v2__mobile-link--dropdown-trigger"
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }
                          type="button"
                        >
                          {item.label}
                          <span className="site-header-v2__mobile-dropdown-arrow">
                            {openDropdown === item.label ? "−" : "+"}
                          </span>
                        </button>
                        {openDropdown === item.label && (
                          <div className="site-header-v2__mobile-dropdown-content">
                            {item.dropdown.sections.map((section) => (
                              <div key={section.title}>
                                {section.title && (
                                  <h4 className="site-header-v2__mobile-dropdown-section-title">
                                    {section.title}
                                  </h4>
                                )}
                                {section.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`site-header-v2__mobile-dropdown-link ${
                                      link.sub ? "site-header-v2__mobile-dropdown-link--sub" : ""
                                    }`}
                                    onClick={() => setOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        className="site-header-v2__mobile-link"
                        href={item.href || "#"}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="site-header-v2__mobile-cta-wrap">
                <Link
                  className="site-header-v2__mobile-cta"
                  href="/franchise"
                  onClick={() => setOpen(false)}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
