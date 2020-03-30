import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { GeocodeService } from "./geocode.service";
import { ForecastService } from "./forecast.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LocationComponent } from "./location/location.component";
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [AppComponent, LocationComponent, ReportComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GeocodeService, ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
