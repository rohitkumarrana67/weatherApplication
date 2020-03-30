import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportComponent } from "./report/report.component";
import { LocationComponent } from "./location/location.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
