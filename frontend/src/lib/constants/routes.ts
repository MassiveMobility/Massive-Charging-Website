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
    migrationStatus: "active",
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
    migrationStatus: "active",
    owner: "content-team",
    path: "/articles",
    rendering: "ISR",
    title: "Articles"
  },
  apartmentResident: {
    description: "Scenario page for apartment-resident EV charging setup planning.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/apartment-resident",
    rendering: "SSG",
    title: "Apartment Resident Charging"
  },
  chargingGuide: {
    description: "Guide hub for EV charging education and article discovery.",
    group: "marketing",
    migrationStatus: "active",
    owner: "content-team",
    path: "/charging-guide",
    rendering: "SSG",
    title: "Charging Guide"
  },
  chargingGuideCars: {
    description: "Vehicle catalogue route linked to EV charging guide articles.",
    group: "marketing",
    migrationStatus: "active",
    owner: "content-team",
    path: "/charging-guide/ev-cars",
    rendering: "SSG",
    title: "EV Cars Catalogue"
  },
  chargingStationBiz: {
    description: "Scenario menu route for charging station business setup choices.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/charging-station-biz",
    rendering: "SSG",
    title: "Charging Station Biz"
  },
  chargingStationsMap: {
    description: "Canonical live map route for station discovery and directions.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/charging-stations-map",
    rendering: "DYNAMIC",
    title: "Charging Stations Map"
  },
  chargingScootationsMap: {
    description: "Legacy typo alias that redirects to the canonical charging stations map route.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/charging-scootations-map",
    rendering: "DYNAMIC",
    title: "Charging Scootations Map"
  },
  communityCharging: {
    description: "Scenario page for gated-community charging deployment planning.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/community-charging",
    rendering: "SSG",
    title: "Community Charging"
  },
  contact: {
    description: "Public contact intake route for partnership and deployment requests.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/contact",
    rendering: "SSG",
    title: "Contact"
  },
  cpoIndex: {
    description: "CPO index route containing segment-wise charging scenarios.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/cpo",
    rendering: "SSG",
    title: "CPO"
  },
  evChargingShop: {
    description: "EV charging shop migration page with product category guidance.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/ev-charging-shop",
    rendering: "SSG",
    title: "EV Charging Shop"
  },
  evChargingStationBusiness: {
    description: "Business landing route for EV charging station setup and operations.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/ev-charging-station-business",
    rendering: "SSG",
    title: "EV Charging Station Business"
  },
  evTripReport: {
    description: "Narrative EV trip report route with route-level charging insights.",
    group: "marketing",
    migrationStatus: "active",
    owner: "content-team",
    path: "/EV-Trip-Report",
    rendering: "SSG",
    title: "EV Trip Report"
  },
  fleetCharging: {
    description: "Scenario page for fleet and depot charging planning.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/fleet-charging",
    rendering: "SSG",
    title: "Fleet Charging"
  },
  getChargers: {
    description: "Requirement intake route for EV charger setup planning.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/get-chargers",
    rendering: "DYNAMIC",
    title: "Get Chargers"
  },
  highwayCharging: {
    description: "Scenario page for highway and corridor charging deployments.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/highway-charging",
    rendering: "SSG",
    title: "Highway Charging"
  },
  home: {
    description: "Public homepage for brand, value proposition, and architecture handoff.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/",
    rendering: "SSG",
    title: "Home"
  },
  homeCharging: {
    description: "Scenario page for individual-home EV charging setup.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/home-charging",
    rendering: "SSG",
    title: "Home Charging"
  },
  hospitalCharging: {
    description: "Scenario page for institutional and hospital charging setups.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/hospital-charging",
    rendering: "SSG",
    title: "Hospital Charging"
  },
  mallCharging: {
    description: "Scenario page for mall and commercial charging deployments.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/mall-charging",
    rendering: "SSG",
    title: "Mall Charging"
  },
  pgCharging: {
    description: "Scenario page for PG and co-living EV charging setups.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/pg-charging",
    rendering: "SSG",
    title: "PG Charging"
  },
  plansOffers: {
    description: "Pricing route for EV charging plans and operational offers.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/plans-offers",
    rendering: "SSG",
    title: "Pricing and Offers"
  },
  restaurantCharging: {
    description: "Scenario page for restaurant and cafe charging deployments.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/restaurant-charging",
    rendering: "SSG",
    title: "Restaurant Charging"
  },
  retailCharging: {
    description: "Scenario page for retail storefront charging setups.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/retail-charging",
    rendering: "SSG",
    title: "Retail Charging"
  },
  societyCharging: {
    description: "Scenario page for apartment-society and RWA charging rollouts.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/society-charging",
    rendering: "SSG",
    title: "Society Charging"
  },
  upiCharging: {
    description: "UPI-first charging flow route for quick session starts.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/upi-charging",
    rendering: "SSG",
    title: "UPI Charging"
  },
  platform: {
    description: "Operator platform page for white-label EV charging CMS and apps.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/platform",
    rendering: "SSG",
    title: "Platform"
  },
  forCpos: {
    description: "CPO segment page covering the full Massive stack for charging point operators.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/for/cpos",
    rendering: "SSG",
    title: "For CPOs"
  },
  chargersDc: {
    description: "DC fast charger category page with deployment guidance and requirement intake.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/chargers/dc",
    rendering: "SSG",
    title: "DC Chargers"
  },
  chargersAc: {
    description: "AC charger category page covering residential and commercial charging.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/chargers/ac",
    rendering: "SSG",
    title: "AC Chargers"
  },
  chargersType67: {
    description: "Type-6/7 charger category page for 2W and 3W EV segments.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/chargers/type-6-7",
    rendering: "SSG",
    title: "Type-6/7 Chargers"
  },
  gridwatch: {
    description: "Gridwatch product page — third-party audit software for EV charging networks.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/gridwatch",
    rendering: "SSG",
    title: "Gridwatch"
  },
  franchise: {
    description: "EV charging franchise page with investment models and economics.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/franchise",
    rendering: "SSG",
    title: "Franchise"
  },
  manufacturing: {
    description: "EV charger manufacturing page covering AC, Type-6/7, and DC product range.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/manufacturing",
    rendering: "SSG",
    title: "Manufacturing"
  },
  marketplace: {
    description: "EV chargers marketplace for sourcing AC and DC charging hardware.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/marketplace",
    rendering: "SSG",
    title: "Marketplace"
  },
  forFleetOperators: {
    description: "Fleet operator segment page covering captive charging and fleet management.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/for/fleet-operators",
    rendering: "SSG",
    title: "For Fleet Operators"
  },
  forOems: {
    description: "Vehicle OEM segment page covering the four-layer charging ecosystem.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/for/oems",
    rendering: "SSG",
    title: "For Vehicle OEMs"
  },
  forEvseManufacturers: {
    description: "EVSE manufacturer and installer segment page for charger OEM partnerships.",
    group: "marketing",
    migrationStatus: "active",
    owner: "marketing-team",
    path: "/for/evse-manufacturers-installers",
    rendering: "SSG",
    title: "For EVSE Manufacturers & Installers"
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
