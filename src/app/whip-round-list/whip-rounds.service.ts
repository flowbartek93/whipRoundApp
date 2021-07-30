import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { converterService } from "../shared/converter.service";
import { whipRound } from "./whip-round-item/whip-round.model";

@Injectable({
  providedIn: "root"
})
export class whipRoundsService implements OnInit {
  whipRounds: whipRound[] = [];
  listChanged = new Subject<whipRound[]>();

  constructor(private converterService: converterService) {}

  getWhipRounds() {
    return this.whipRounds.slice();
  }

  addNewWhip(whip) {
    this.converterService.setWhiprounds(whip);

    this.whipRounds.push(
      new whipRound(whip.whipName, whip.amount, whip.subscribers, whip.prices, { pricePerPerson: null })
    );
    this.listChanged.next(this.whipRounds.slice());
  }

  ngOnInit() {}
}
