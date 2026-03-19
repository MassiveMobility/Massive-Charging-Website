"use client";

import type { LinkStyleConfig } from "@/lib/config/design-system";
import type { NavigationItem } from "@/lib/constants/navigation";

import { focusFirstElement, trapFocusInContainer } from "@/lib/a11y/focus";
import { useEffect, useId, useRef, useState } from "react";

import { buildLinkStyleVariables } from "@/components/ui/link-style";
import { cn } from "@/lib/utils/cn";
import NextLink from "next/link";

type MobileMenuProps = {
  ariaLabel: string;
  items: readonly NavigationItem[];
  linkStyleConfig: LinkStyleConfig;
  pathname: string;
  showActiveState: boolean;
};

/**
 * Mobile nav drawer with keyboard focus trap, Escape handling, and focus return.
 */
export function MobileMenu({
  ariaLabel,
  items,
  linkStyleConfig,
  pathname,
  showActiveState
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = `mobile-menu-${useId().replaceAll(":", "")}`;

  const closeMenu = () => {
    setIsOpen(false);
    triggerButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const panelElement = panelRef.current;
    const previousBodyOverflow = document.body.style.overflow;

    if (!panelElement) {
      return;
    }

    document.body.style.overflow = "hidden";

    const focusWasMoved = focusFirstElement(panelElement);

    if (!focusWasMoved) {
      panelElement.focus();
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      trapFocusInContainer(event, panelElement);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  const linkVariables = buildLinkStyleVariables(linkStyleConfig);

  return (
    <div className="mobile-menu">
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="mobile-menu__trigger"
        onClick={() => setIsOpen((previousValue) => !previousValue)}
        ref={triggerButtonRef}
        type="button"
      >
        <span aria-hidden="true" className="mobile-menu__trigger-icon" />
      </button>

      {isOpen ? (
        <div className="mobile-menu__overlay">
          <button
            aria-label="Close navigation menu"
            className="mobile-menu__backdrop"
            onClick={closeMenu}
            type="button"
          />
          <div
            aria-label={ariaLabel}
            aria-modal="true"
            className="mobile-menu__panel"
            id={menuId}
            ref={panelRef}
            role="dialog"
            tabIndex={-1}
          >
            <div className="mobile-menu__header">
              <p className="mobile-menu__title">Navigation</p>
              <button
                aria-label="Close navigation menu"
                className="mobile-menu__close"
                onClick={closeMenu}
                type="button"
              >
                Close
              </button>
            </div>

            <nav aria-label={ariaLabel}>
              <ul className="mobile-menu__list">
                {items.map((item) => {
                  const isActive = showActiveState && isRouteActive(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <NextLink
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "ui-link",
                          "ui-link--nav",
                          "mobile-menu__link",
                          isActive && "ui-link--active"
                        )}
                        href={item.href}
                        onClick={closeMenu}
                        style={linkVariables}
                      >
                        {item.label}
                      </NextLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function isRouteActive(currentPathname: string, routePath: string) {
  if (routePath === "/") {
    return currentPathname === routePath;
  }

  return currentPathname === routePath || currentPathname.startsWith(`${routePath}/`);
}
