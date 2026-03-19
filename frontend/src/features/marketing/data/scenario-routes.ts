/**
 * Route-to-scenario mapping for legacy setup pages.
 * These routes render specific scenario content pulled from CPO data.
 */
export const scenarioRouteToCpoId = {
  "/home-charging": "individual-home-owner-independent-house",
  "/apartment-resident": "apartment-resident-individual",
  "/society-charging": "apartment-society-rwa",
  "/community-charging": "gated-community",
  "/pg-charging": "pg-co-living-owner",
  "/retail-charging": "retail-shop-owner",
  "/restaurant-charging": "restaurant-caf",
  "/mall-charging": "mall-owner",
  "/fleet-charging": "delivery-fleet-amazon-flipkart-partners",
  "/highway-charging": "fuel-pump-owner",
  "/hospital-charging": "hospital"
} as const;

export type ScenarioRoutePath = keyof typeof scenarioRouteToCpoId;
