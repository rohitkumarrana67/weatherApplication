import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataForecastService } from "../data-forecast.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
  report: any;
  constructor(
    private route: ActivatedRoute,
    private dataForecastRequest: DataForecastService
  ) {}

  ngOnInit() {
    this.dataForecastRequest.shareData.subscribe(x => (this.report = x));
  }
}
