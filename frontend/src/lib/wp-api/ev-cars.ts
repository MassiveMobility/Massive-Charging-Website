/**
 * Fetch EV cars data from WordPress REST API
 * Source: /wp-json/wp/v2/ev-cars
 * Plugin: mc-ev-car-fix.php exposes ACF fields via REST API
 */

export interface WordPressEvCar {
  id: number;
  title: { rendered: string };
  acf: {
    make: string | null;
    model: string | null;
    price_inr: string | null;
    battery_kwh: string | null;
    range_km: string | null;
    connector: string | null;
    guide_slug: string | null;
  };
}

// Match the structure of LegacyVehicleCatalogueItem exactly
export type EvCarCatalogueItem = {
  Vehicle_ID: string;
  Manufacturer: string;
  Vehicle_Name: string;
  Category_ID: string;
  Vehicle_Variant?: string;
  Battery_Capacity?: string;
  Claimed_Range?: string;
  Price?: string;
  Charging_Type?: string;
  slug: string | null;
  title: string | null;
};

const WP_API_BASE = "https://content.massivecharging.com/wp-json/wp/v2";

export async function fetchEvCarsFromWordPress(): Promise<EvCarCatalogueItem[]> {
  try {
    // Fetch all EV cars (101 total as per X-WP-Total header)
    const response = await fetch(
      `${WP_API_BASE}/ev-cars?per_page=100&orderby=title&order=asc`,
      {
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    // Check if there are more pages
    const totalPages = response.headers.get("x-wp-totalpages");
    const wpCars: WordPressEvCar[] = await response.json();

    // If there are multiple pages, fetch the next ones
    if (totalPages && parseInt(totalPages, 10) > 1) {
      for (let page = 2; page <= parseInt(totalPages, 10); page++) {
        const pageResponse = await fetch(
          `${WP_API_BASE}/ev-cars?per_page=100&page=${page}&orderby=title&order=asc`,
          { next: { revalidate: 3600 } }
        );
        if (pageResponse.ok) {
          const pageData: WordPressEvCar[] = await pageResponse.json();
          wpCars.push(...pageData);
        }
      }
    }

    // Transform WordPress data to match legacy format
    return wpCars.map((car) => {
      const obj: EvCarCatalogueItem = {
        Vehicle_ID: `WP_${car.id}`,
        Manufacturer: car.acf.make || car.title.rendered.split(" ")[0] || "Unknown",
        Vehicle_Name: car.acf.model || car.title.rendered || "Unknown Model",
        Category_ID: "CAT_006", // All WordPress EV cars are 4-wheel vehicles
        slug: car.acf.guide_slug || null,
        title: car.acf.guide_slug || null,
      };

      // Add optional fields only if they have values
      if (car.acf.battery_kwh) obj.Battery_Capacity = car.acf.battery_kwh;
      if (car.acf.range_km) obj.Claimed_Range = car.acf.range_km;
      if (car.acf.price_inr) obj.Price = car.acf.price_inr;
      if (car.acf.connector) obj.Charging_Type = car.acf.connector;

      return obj;
    });
  } catch (error) {
    console.error("Failed to fetch EV cars from WordPress:", error);
    throw error;
  }
}
