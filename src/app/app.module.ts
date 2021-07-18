import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { WhipRoundListComponent } from './whip-round-list/whip-round-list.component';
import { WhipRoundItemComponent } from './whip-round-list/whip-round-item/whip-round-item.component';
import { AddWhiproundComponent } from './add-whipround/add-whipround.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, WhipRoundListComponent, WhipRoundItemComponent, AddWhiproundComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
