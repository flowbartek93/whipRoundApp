import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, from } from "rxjs";
import { map } from "rxjs/operators";
import { converterService } from "../shared/converter.service";
import { whipRound } from "./whip-round.model";
import { whipRoundsService } from "../shared/whip-rounds.service";

@Component({
  selector: "app-whip-round-list",
  templateUrl: "./whip-round-list.component.html",
  styleUrls: ["./whip-round-list.component.css"]
})
export class WhipRoundListComponent implements OnInit, OnDestroy {
  public allWhipRounds;

  subscription: Subscription;
  constructor(private whipRoundsService: whipRoundsService) {}

  priceIn: number; // price in selected currency (to de displayed in table)

  ngOnInit(): void {
    this.subscription = this.whipRoundsService.listChanged
      .pipe(
        map((whiproundArray: whipRound[]) => {
          from(whiproundArray).subscribe(singleWhipround => {
            singleWhipround.prices.pricein = parseInt(singleWhipround.prices.pricein).toFixed(2);

            singleWhipround.additionalData.pricePerPerson = +(
              singleWhipround.prices.price / +singleWhipround.subscribers
            ).toFixed(2);
          });

          return whiproundArray;
        })
      )
      .subscribe(whiprounds => {
        this.allWhipRounds = whiprounds;
      });

    //wyświetlenie tych które już są w tablicy
    // this.allWhipRounds = this.whipRoundsService.getWhipRounds();

    //firebase query
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
