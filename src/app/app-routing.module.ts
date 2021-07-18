import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddWhiproundComponent } from "./add-whipround/add-whipround.component";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [{ path: "new-whip", component: AddWhiproundComponent, outlet: "new" }]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRouting {}
