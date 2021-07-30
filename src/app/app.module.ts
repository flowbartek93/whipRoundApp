import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { WhipRoundListComponent } from "./whip-round-list/whip-round-list.component";
import { AddWhiproundComponent } from "./add-whipround/add-whipround.component";
import { appRouting } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { whipRoundsService } from "./shared/whip-rounds.service";
import { providePrice } from "./add-whipround/form.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WhipRoundListComponent,
    AddWhiproundComponent,
    HomeComponent,
    providePrice
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, appRouting],
  providers: [whipRoundsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
