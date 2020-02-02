export interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  markerDescription(): string;
}
