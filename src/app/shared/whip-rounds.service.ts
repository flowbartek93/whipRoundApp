import { Injectable, OnInit } from "@angular/core";
import { from, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { converterService } from "./converter.service";
import { whipRound } from "../whip-round-list/whip-round.model";

@Injectable({
  providedIn: "root"
})
export class whipRoundsService implements OnInit {
  whipRounds = [];
  listChanged = new Subject<whipRound[]>();

  constructor(private converterService: converterService) {}

  getWhipRounds() {
    return this.whipRounds.slice();
  }

  downloadWhiprounds() {
    this.converterService
      .getWhiprounds()
      .pipe(
        map(res => {
          return res;
        })
      )
      .subscribe(res => {
        const newArray = Object.values(res);

        this.whipRounds = newArray;
        console.log(this.whipRounds);
        this.listChanged.next(this.whipRounds.slice());
      });
  }

  addNewWhip(whip) {
    //query POST request
    this.converterService.setWhiprounds(
      new whipRound(whip.whipName, whip.amount, whip.subscribers, whip.prices, { pricePerPerson: 0 })
    );

    // this.whipRounds.push(new whipRound(whip.whipName, whip.amount, whip.subscribers, whip.prices, whip.additionalData));
    this.listChanged.next(this.whipRounds.slice());
  }

  ngOnInit() {}
}
