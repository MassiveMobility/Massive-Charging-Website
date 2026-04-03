export type NavigationItem = {
  label: string;
  href: string;
};

export type DropdownLink = {
  label: string;
  href: string;
  sub?: boolean;
};

export type DropdownSection = {
  title: string;
  links: DropdownLink[];
};

export type NavDropdown = {
  label: string;
  columns: number;
  sections: DropdownSection[];
};

export type NavMenu = {
  label: string;
  href?: string;
  dropdown?: NavDropdown;
};

export type FooterLink = {
  label: string;
  href: string;
  indent?: boolean;
  divider?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const mainNavigation: NavMenu[] = [
  {
    label: "Chargers",
    dropdown: {
      label: "Chargers",
      columns: 2,
      sections: [
        {
          title: "AC Chargers",
          links: [
            { label: "AC Overview", href: "/chargers/ac" },
            { label: "7.4kW", href: "/chargers/ac/7-4-kw", sub: true },
            { label: "22kW", href: "/chargers/ac/22-kw", sub: true },
            { label: "Type 2/Combo", href: "/chargers/type-6-7" },
            { label: "3kW", href: "/chargers/type-6-7/3-kw", sub: true }
          ]
        },
        {
          title: "DC Chargers",
          links: [
            { label: "DC Overview", href: "/chargers/dc" },
            { label: "60kW", href: "/chargers/dc/60-dual-gun", sub: true },
            { label: "120kW", href: "/chargers/dc/120-dual-gun", sub: true },
            { label: "180kW", href: "/chargers/dc/180-dual-gun", sub: true },
            { label: "240kW", href: "/chargers/dc/240-dual-gun", sub: true }
          ]
        }
      ]
    }
  },
  {
    label: "Solutions",
    dropdown: {
      label: "Solutions",
      columns: 3,
      sections: [
        {
          title: "By Role",
          links: [
            { label: "For CPOs", href: "/for/cpos" },
            { label: "Fleet Operators", href: "/for/fleet-operators" },
            { label: "For OEMs", href: "/for/oems" },
            { label: "EVSE Manufacturers", href: "/for/evse-manufacturers-installers" }
          ]
        },
        {
          title: "Residential",
          links: [
            { label: "Home", href: "/home-charging" },
            { label: "Apartment", href: "/apartment-resident" },
            { label: "PG", href: "/pg-charging" },
            { label: "Society", href: "/society-charging" },
            { label: "Community", href: "/community-charging" }
          ]
        },
        {
          title: "Commercial",
          links: [
            { label: "Workplace", href: "/workplace-charging" },
            { label: "Mall", href: "/mall-charging" },
            { label: "Restaurant", href: "/restaurant-charging" },
            { label: "Hospital", href: "/hospital-charging" },
            { label: "Retail", href: "/retail-charging" },
            { label: "Highway", href: "/highway-charging" }
          ]
        }
      ]
    }
  },
  {
    label: "Business",
    dropdown: {
      label: "Business",
      columns: 1,
      sections: [
        {
          title: "",
          links: [
            { label: "Franchise", href: "/franchise" },
            { label: "Platform", href: "/platform" },
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Marketplace", href: "/marketplace" },
            { label: "EV Charging Business", href: "/ev-charging-business" }
          ]
        }
      ]
    }
  },
  {
    label: "Resources",
    dropdown: {
      label: "Resources",
      columns: 1,
      sections: [
        {
          title: "",
          links: [
            { label: "Charging Guide", href: "/charging-guide" },
            { label: "EV Cars Guide", href: "/charging-guide/ev-cars", sub: true },
            { label: "EV Charging Guide", href: "/ev-charging-guide" },
            { label: "EV Shop", href: "/ev-charging-shop" }
          ]
        }
      ]
    }
  },
  {
    label: "Find EV Chargers",
    href: "/charging-stations-map"
  },
  {
    label: "UPI Charging",
    href: "/upi-charging"
  },
  {
    label: "EV Charging Guide",
    href: "/charging-guide"
  }
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Chargers",
    links: [
      { label: "AC Chargers", href: "/chargers/ac" },
      { label: "7.4kW AC", href: "/chargers/ac/7-4-kw", indent: true },
      { label: "22kW AC", href: "/chargers/ac/22-kw", indent: true },
      { label: "DC Chargers", href: "/chargers/dc" },
      { label: "60kW DC", href: "/chargers/dc/60-dual-gun", indent: true },
      { label: "120kW DC", href: "/chargers/dc/120-dual-gun", indent: true },
      { label: "180kW DC", href: "/chargers/dc/180-dual-gun", indent: true },
      { label: "240kW DC", href: "/chargers/dc/240-dual-gun", indent: true },
      { label: "3kW Type 6/7", href: "/chargers/type-6-7/3-kw", indent: true }
    ]
  },
  {
    title: "By Use Case",
    links: [
      { label: "For CPOs", href: "/for/cpos" },
      { label: "Fleet Operators", href: "/for/fleet-operators" },
      { label: "For OEMs", href: "/for/oems" },
      { label: "EVSE Manufacturers", href: "/for/evse-manufacturers-installers" },
      { label: "EV Charging Business", href: "/ev-charging-business" },
      { label: "Franchise", href: "/franchise", divider: true },
      { label: "Platform", href: "/platform" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Marketplace", href: "/marketplace" }
    ]
  },
  {
    title: "Residential",
    links: [
      { label: "Home Charging", href: "/home-charging" },
      { label: "Apartment Resident", href: "/apartment-resident" },
      { label: "PG Charging", href: "/pg-charging" },
      { label: "Society Charging", href: "/society-charging" },
      { label: "Community Charging", href: "/community-charging" }
    ]
  },
  {
    title: "Commercial",
    links: [
      { label: "Workplace Charging", href: "/workplace-charging" },
      { label: "Mall Charging", href: "/mall-charging" },
      { label: "Restaurant Charging", href: "/restaurant-charging" },
      { label: "Hospital Charging", href: "/hospital-charging" },
      { label: "Retail Charging", href: "/retail-charging" },
      { label: "Highway Charging", href: "/highway-charging" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Charging Guide", href: "/charging-guide" },
      { label: "EV Cars Guide", href: "/charging-guide/ev-cars", indent: true },
      { label: "EV Charging Guide", href: "/ev-charging-guide" },
      { label: "Shop", href: "/ev-charging-shop" },
      { label: "Prices & Offers", href: "/plans-offers" }
    ]
  }
];
