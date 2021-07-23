import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModelGroup } from "@angular/forms";

import { whipRoundsService } from "../whip-round-list/whip-rounds.service";

@Component({
  selector: "app-add-whipround",
  templateUrl: "./add-whipround.component.html",
  styleUrls: ["./add-whipround.component.css"]
})
export class AddWhiproundComponent implements OnInit, AfterViewChecked {
  @ViewChild("f", { static: false }) addWhipRoundForm: NgForm;
  // @ViewChild("prices", { static: false }) prices: NgModelGroup;

  @Input() priceValue: number;

  constructor(private whipRoundsService: whipRoundsService) {}

  onSubmit() {
    // console.log(this.prices.value);

    this.whipRoundsService.addNewWhip(this.addWhipRoundForm.value);
  }

  ngAfterViewChecked() {
    console.log(this.priceValue);
  }
  ngOnInit(): void {}
}
