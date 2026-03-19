/**
 * bringCars: Optimized for Strapi v5 flattened data
 * Endpoint: https://strapi.adirishi.net/api/ev-specs-4ws
 */
export const bringCars = async (query: string = "") => {
  const BASE_URL = "https://strapi.adirishi.net";
  const ENDPOINT = "/api/ev-specs-4ws";
  
  // Use $containsi (case-insensitive) to match your JSON keys
  const searchFilter = query 
    ? `?filters[Model][$containsi]=${encodeURIComponent(query)}` 
    : "";

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}${searchFilter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // If you get a 500 error here, it's a server-side permission or DB issue
    if (!response.ok) {
      throw new Error(`Strapi Error: ${response.status}`);
    }

    const json = await response.json();
    
    /* Mapping: Your JSON structure is { "data": [...] }
       We extract 'data' which contains the flattened car objects
    */
    return json.data || []; 
  } catch (error) {
    console.error("bringCars Connection Error:", error);
    return [];
  }
};