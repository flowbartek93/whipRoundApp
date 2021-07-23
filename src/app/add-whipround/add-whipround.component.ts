import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild
} from "@angular/core";
import { NgForm, NgModelGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { converterService } from "../shared/converter.service";

import { whipRoundsService } from "../whip-round-list/whip-rounds.service";

@Component({
  selector: "app-add-whipround",
  templateUrl: "./add-whipround.component.html",
  styleUrls: ["./add-whipround.component.css"]
})
export class AddWhiproundComponent implements OnInit, AfterViewChecked {
  @ViewChild("f", { static: false }) addWhipRoundForm: NgForm;
  @ViewChild("prices", { static: false }) prices: NgModelGroup;

  @Input() priceValue: number;
  @Input() priceinValue: number;

  priceinValueChanges = new Subject();

  constructor(
    private whipRoundsService: whipRoundsService,
    private converter: converterService,
    private changeDetector: ChangeDetectorRef
  ) {}

  onSubmit() {
    this.whipRoundsService.addNewWhip(this.addWhipRoundForm.value);
  }

  ngAfterViewChecked() {
    let exchangeRate;
    let convertedValue;

    if (this.converter.exchanges) {
      exchangeRate = this.converter.exchanges.rate;
      console.log(exchangeRate);
    } else {
      return;
    }

    if (exchangeRate) {
      if (this.prices.control.controls.pricein.touched) {
        convertedValue = this.priceinValue * exchangeRate;
        this.prices.control.controls.price.setValue(convertedValue);

        this.changeDetector.detectChanges();
      }
    } else {
      return;
    }
  }

  ngOnInit(): void {}
}
