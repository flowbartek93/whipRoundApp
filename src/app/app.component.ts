import { Component, OnInit } from "@angular/core";
import { whipRoundsService } from "./shared/whip-rounds.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private whipRoundService: whipRoundsService) {}

  ngOnInit() {
    this.whipRoundService.downloadWhiprounds();
  }
}
