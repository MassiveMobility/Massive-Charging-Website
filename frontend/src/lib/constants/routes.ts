import type { Route } from "next";

/**
 * Route ownership and rendering contracts used across metadata, navigation, and links.
 */
export type RouteGroup = "marketing" | "platform";
export type RenderingStrategy = "SSG" | "ISR" | "DYNAMIC";
export type RouteOwner = "marketing-team" | "content-team" | "platform-team";
export type MigrationStatus = "placeholder" | "active" | "planned";

export type RouteInventoryItem = {
  path: Route;
  title: string;
  description: string;
  group: RouteGroup;
  owner: RouteOwner;
  rendering: RenderingStrategy;
  migrationStatus: MigrationStatus;
};

type RouteRegistry = Record<string, RouteInventoryItem>;

/**
 * Single source of truth for all application routes.
 * Add new routes here first, then consume from derived exports (`routePaths`, `routeInventory`).
 */
export const routeRegistry = {
  about: {
    description: "Company and operating-principles page for trust and discoverability.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "marketing-team",
    path: "/about",
    rendering: "SSG",
    title: "About"
  },
  admin: {
    description: "Admin landing route for authenticated operational workflows.",
    group: "platform",
    migrationStatus: "placeholder",
    owner: "platform-team",
    path: "/admin",
    rendering: "DYNAMIC",
    title: "Admin"
  },
  adminArticles: {
    description: "Editorial operations route for draft-review-publish workflows.",
    group: "platform",
    migrationStatus: "placeholder",
    owner: "content-team",
    path: "/admin/articles",
    rendering: "DYNAMIC",
    title: "Admin Articles"
  },
  articles: {
    description: "Public article index for editorial discovery and internal linking.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "content-team",
    path: "/articles",
    rendering: "ISR",
    title: "Articles"
  },
  contact: {
    description: "Public contact intake route for partnership and deployment requests.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "marketing-team",
    path: "/contact",
    rendering: "SSG",
    title: "Contact"
  },
  home: {
    description: "Public homepage for brand, value proposition, and architecture handoff.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/",
    rendering: "SSG",
    title: "Home"
  }
} as const satisfies RouteRegistry;

type RouteKey = keyof typeof routeRegistry;

function buildRoutePaths<T extends RouteRegistry>(registry: T) {
  return Object.fromEntries(
    Object.entries(registry).map(([key, value]) => [key, value.path])
  ) as { [K in keyof T]: T[K]["path"] };
}

/**
 * Canonical href map consumed by links and metadata.
 */
export const routePaths = buildRoutePaths(routeRegistry);

/**
 * Flat inventory for reporting/docs and rendering-strategy audit.
 */
export const routeInventory = Object.values(routeRegistry) as readonly RouteInventoryItem[];

/**
 * Helper for route lookups by key while preserving exact typing.
 */
export function getRoute(key: RouteKey) {
  return routeRegistry[key];
}
