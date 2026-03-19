import type { Route } from "next";

/**
 * Central route registry for ownership, rendering strategy, and migration status.
 * This file is intentionally explicit so route changes stay traceable during migration.
 */
export const routePaths = {
  home: "/",
  about: "/about",
  articles: "/articles",
  contact: "/contact",
  admin: "/admin",
  adminArticles: "/admin/articles"
} as const satisfies Record<string, Route>;

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

export const routeInventory = [
  {
    description: "Public homepage for brand, value proposition, and architecture handoff.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: routePaths.home,
    rendering: "SSG",
    title: "Home"
  },
  {
    description: "Company and operating-principles page for trust and discoverability.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "marketing-team",
    path: routePaths.about,
    rendering: "SSG",
    title: "About"
  },
  {
    description: "Public article index for editorial discovery and internal linking.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "content-team",
    path: routePaths.articles,
    rendering: "ISR",
    title: "Articles"
  },
  {
    description: "Public contact intake route for partnership and deployment requests.",
    group: "marketing",
    migrationStatus: "placeholder",
    owner: "marketing-team",
    path: routePaths.contact,
    rendering: "SSG",
    title: "Contact"
  },
  {
    description: "Admin landing route for authenticated operational workflows.",
    group: "platform",
    migrationStatus: "placeholder",
    owner: "platform-team",
    path: routePaths.admin,
    rendering: "DYNAMIC",
    title: "Admin"
  },
  {
    description: "Editorial operations route for draft-review-publish workflows.",
    group: "platform",
    migrationStatus: "placeholder",
    owner: "content-team",
    path: routePaths.adminArticles,
    rendering: "DYNAMIC",
    title: "Admin Articles"
  }
] as const satisfies readonly RouteInventoryItem[];
