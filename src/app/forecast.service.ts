import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ForecastService {
  constructor(private http: HttpClient) {}
  forecastUrl =
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/050fea87ec42a5c484110625a2178f2f/";

  getForecast(latitude, longitude) {
    return this.http.get(this.forecastUrl + latitude + "," + longitude);
  }
}
