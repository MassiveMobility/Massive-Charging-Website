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
