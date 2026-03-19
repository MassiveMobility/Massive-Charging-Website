import type { Route } from "next";

import { routePaths } from "@/lib/constants/routes";

export type NavigationItem = {
  href: Route;
  label: string;
  description: string;
};

export const marketingPrimaryNavigation = [
  {
    description: "Overview of mission, reliability focus, and operating approach.",
    href: routePaths.about,
    label: "About"
  },
  {
    description: "Public insights and articles about EV charging operations.",
    href: routePaths.articles,
    label: "Articles"
  },
  {
    description: "Partnership and deployment inquiry entry point.",
    href: routePaths.contact,
    label: "Contact"
  }
] as const satisfies readonly NavigationItem[];

export const marketingFooterNavigation = [
  {
    description: "Return to homepage",
    href: routePaths.home,
    label: "Home"
  },
  ...marketingPrimaryNavigation
] as const satisfies readonly NavigationItem[];
