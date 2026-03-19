import type { GeoPoint } from "./types";

const formatCoordinate = (value: number) => value.toFixed(6);

export const buildGoogleMapsPlaceUrl = (point: GeoPoint, label?: string) => {
  const query = label
    ? `${formatCoordinate(point.lat)},${formatCoordinate(point.lng)} (${label})`
    : `${formatCoordinate(point.lat)},${formatCoordinate(point.lng)}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

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
