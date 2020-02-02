import { Mappable } from './interfaces/mappable';
class CustomMap {
  private googleMap: google.maps.Map;

  constructor(map: string) {
    this.googleMap = new google.maps.Map(document.getElementById(map), {
      zoom: 0,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mapData: Mappable): void {
    let marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapData.location.lat,
        lng: mapData.location.long
      }
    });

    marker.addListener('click', () => {
      let info = new google.maps.InfoWindow({
        content: mapData.markerDescription()
      });

      info.open(this.googleMap, marker);
    });
  }
}
export default CustomMap;
