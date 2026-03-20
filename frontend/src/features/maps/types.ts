/**
 * Shared map domain types used by the Google Maps wrapper and route-level map pages.
 */
export type GeoPoint = {
  lat: number;
  lng: number;
};

export type GoogleMapMarker = {
  id: string;
  position: GeoPoint;
  title: string;
  subtitle?: string;
  accentColor?: string;
};
