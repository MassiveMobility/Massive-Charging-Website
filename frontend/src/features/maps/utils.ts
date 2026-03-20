import type { GeoPoint } from "@/features/maps/types";

const formatCoordinate = (value: number) => value.toFixed(6);

/**
 * Builds a Google Maps search URL for a destination point and optional label.
 */
export const buildGoogleMapsPlaceUrl = (point: GeoPoint, label?: string) => {
  const query = label
    ? `${formatCoordinate(point.lat)},${formatCoordinate(point.lng)} (${label})`
    : `${formatCoordinate(point.lat)},${formatCoordinate(point.lng)}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

/**
 * Builds Google Maps directions URL with destination and optional origin point.
 */
export const buildGoogleMapsDirectionsToUrl = (destination: GeoPoint, origin?: GeoPoint) => {
  const destinationValue = `${formatCoordinate(destination.lat)},${formatCoordinate(destination.lng)}`;
  if (!origin) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      destinationValue
    )}`;
  }

  const originValue = `${formatCoordinate(origin.lat)},${formatCoordinate(origin.lng)}`;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    originValue
  )}&destination=${encodeURIComponent(destinationValue)}`;
};
