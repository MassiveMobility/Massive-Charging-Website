/**
 * Reads the public Google Maps API key used on client-rendered map routes.
 * This key is safe to expose and should be restricted by domain/referrer.
 */
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";

export const getGoogleMapsApiKey = () => googleMapsApiKey;

export const hasGoogleMapsApiKey = googleMapsApiKey.length > 0;
