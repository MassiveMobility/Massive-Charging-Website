const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim() ?? "";

export const getGoogleMapsApiKey = () => googleMapsApiKey;

export const hasGoogleMapsApiKey = googleMapsApiKey.length > 0;
