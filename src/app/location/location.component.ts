import { Component, OnInit } from "@angular/core";
import { GeocodeService } from "../geocode.service";
import { Coordinates } from "../coordinates";
import { ForecastService } from "../forecast.service";
import { Router } from "@angular/router";
import { DataForecastService } from "../data-forecast.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"]
})
export class LocationComponent implements OnInit {
  constructor(
    private GeocodeRequest: GeocodeService,
    private forecastRequest: ForecastService,
    private router: Router,
    private UpdateForecastRequest: DataForecastService
  ) {}
  address: any;
  coordinates = new Coordinates("", "");

  showWeatherReport(latitude, longitude) {
    this.forecastRequest.getForecast(latitude, longitude).subscribe(data => {
      this.updataForecastData(data);
    });
  }
  showCoordinates() {
    this.GeocodeRequest.getCoordinates(this.address).subscribe(data => {
      this.coordinates.latitude =
        data["features"][0]["geometry"]["coordinates"][1];
      this.coordinates.longitude =
        data["features"][0]["geometry"]["coordinates"][0];

      this.showWeatherReport(
        this.coordinates.latitude,
        this.coordinates.longitude
      );
    });
  }

  updataForecastData(data) {
    this.UpdateForecastRequest.getForecastData(data);
  }

  ngOnInit() {}
}
