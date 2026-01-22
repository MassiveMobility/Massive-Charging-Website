/**
 * bringCars: Optimized for Strapi v5 with multi-field search (Brand or Model)
 * Endpoint: https://strapi.adirishi.net/api/ev-specs-4ws
 */
export const bringCars = async (query: string = "") => {
  const BASE_URL = "https://strapi.adirishi.net";
  const ENDPOINT = "/api/ev-specs-4ws";
  
  // [NEW] Use $or logic to search across both Brand AND Model fields
  const searchFilter = query 
    ? `?filters[$or][0][Brand][$containsi]=${encodeURIComponent(query)}&filters[$or][1][Model][$containsi]=${encodeURIComponent(query)}` 
    : "";

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}${searchFilter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Strapi Error: ${response.status}`);
    }

    const json = await response.json();
    return json.data || []; 
  } catch (error) {
    console.error("bringCars Connection Error:", error);
    return [];
  }
};