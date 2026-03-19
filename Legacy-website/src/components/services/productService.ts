/**
 * bringProducts: Fetches EV charging hardware from Strapi v5
 * Verified Endpoint: https://strapi.adirishi.net/api/product-cores
 */
export const bringProducts = async (query: string = "") => {
  const BASE_URL = "https://strapi.adirishi.net";
  
  /**
   * [FIX] Populate product_testimg to ensure images are returned in the payload.
   * Strapi v5 requires explicit population for media fields.
   */
  const ENDPOINT = "/api/product-cores?populate=product_testimg";
  
  /**
   * Search logic: Filters across display_name OR product_code OR technical_name
   * using Strapi v5 $containsi (case-insensitive) logic.
   * Prepended with '&' because ENDPOINT already contains a '?'
   */
  const searchFilter = query 
    ? `&filters[$or][0][display_name][$containsi]=${encodeURIComponent(query)}&filters[$or][1][product_code][$containsi]=${encodeURIComponent(query)}&filters[$or][2][technical_name][$containsi]=${encodeURIComponent(query)}` 
    : "";

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}${searchFilter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Strapi Product Error: ${response.status}`);
    }

    const json = await response.json();
    
    /**
     * Strapi v5 returns a flattened 'data' array.
     * Each product now contains the 'product_testimg' object with a 'url' property.
     */
    return json.data || []; 
  } catch (error) {
    console.error("bringProducts Connection Error:", error);
    return [];
  }
};

/**
 * fetchProductBySlug: Useful for individual product detail pages
 */
export const fetchProductBySlug = async (slug: string) => {
  const BASE_URL = "https://strapi.adirishi.net";
  
  // Also populating image for the individual product view
  const ENDPOINT = `/api/product-cores?filters[slug][$eq]=${slug}&populate[product_testimg]=*`;

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINT}`);
    
    if (!response.ok) {
      throw new Error(`Strapi Product Error: ${response.status}`);
    }
    
    const json = await response.json();
    return json.data?.[0] || null;
  } catch (error) {
    console.error("fetchProductBySlug Error:", error);
    return null;
  }
};