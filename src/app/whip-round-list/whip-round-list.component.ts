import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { whipRound } from "./whip-round-item/whip-round.model";
import { whipRoundsService } from "./whip-rounds.service";

@Component({
  selector: "app-whip-round-list",
  templateUrl: "./whip-round-list.component.html",
  styleUrls: ["./whip-round-list.component.css"]
})
export class WhipRoundListComponent implements OnInit {
  public allWhipRounds;

  subscription: Subscription;
  constructor(private whipRoundsService: whipRoundsService) {}

  ngOnInit(): void {
    this.subscription = this.whipRoundsService.listChanged.subscribe((whiprounds: whipRound[]) => {
      this.allWhipRounds = whiprounds;
    });

    this.allWhipRounds = this.whipRoundsService.getWhipRounds();

    console.log(this.allWhipRounds);
  }
}
