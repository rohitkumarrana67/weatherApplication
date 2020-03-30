import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GeocodeService {
  constructor(private http: HttpClient) {}

  geoAddressUrlPart1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  geoAdresssUrlPart2 =
    ".json?access_token=pk.eyJ1Ijoicm9oaXRrdW1hcnJhbmE2NyIsImEiOiJjazYwejNvdjgwYzhjM2ZvYTg3eGg1M3N4In0.uRO7HKRoy_LVtId0D_Logw&limit=1";

  getCoordinates(address) {
    return this.http.get(
      this.geoAddressUrlPart1 + address + this.geoAdresssUrlPart2
    );
  }
}
