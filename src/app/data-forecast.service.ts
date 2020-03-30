import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataForecastService {
  private content = new BehaviorSubject<any>([{ hello: "rohit" }]);
  public shareData = this.content.asObservable();

  constructor() {}
  getForecastData(data) {
    this.content.next(data);
  }
}
