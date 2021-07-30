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
import { converterService } from "../shared/converter.service";
import { exchange } from "../shared/exchange.model";

import { whipRoundsService } from "../shared/whip-rounds.service";

@Component({
  selector: "app-add-whipround",
  templateUrl: "./add-whipround.component.html",
  styleUrls: ["./add-whipround.component.css"]
})
export class AddWhiproundComponent implements OnInit, AfterViewChecked, OnChanges, AfterViewInit {
  @ViewChild("f", { static: false }) addWhipRoundForm: NgForm;
  @ViewChild("prices", { static: false }) prices: NgModelGroup;

  @Input() priceValue: number;
  @Input() priceinValue: number;

  selectedExchange;

  exchanges;
  exchangesKeys;

  constructor(
    private whipRoundsService: whipRoundsService,
    private converter: converterService,
    private changeDetector: ChangeDetectorRef
  ) {}

  onSubmit() {
    this.whipRoundsService.addNewWhip(this.addWhipRoundForm.value);
  }

  ngAfterViewChecked() {
    let exchangeRates;
    let convertedValue;

    if (this.converter.exchanges) {
      exchangeRates = this.converter.exchanges.rate;
    } else {
      return;
    }

    if (exchangeRates) {
      if (this.prices.control) {
        let rateValue;
        let rateName;
        if (exchangeRates.hasOwnProperty(this.selectedExchange)) {
          rateName = this.selectedExchange;

          switch (rateName) {
            case "PLN":
              rateValue = exchangeRates.PLN;
              break;
            case "USD":
              rateValue = exchangeRates.USD;
              break;
            case "GBP":
              rateValue = exchangeRates.GBP;
              break;
            case "RUB":
              rateValue = exchangeRates.RUB;
              break;
          }

          convertedValue = (this.priceinValue * rateValue).toFixed(2);

          if (this.priceinValue !== undefined || null) {
            this.prices.control.controls.price.setValue(convertedValue);
          }
        }

        this.changeDetector.detectChanges();
      }
    } else {
      return;
    }
  }

  ngOnChanges() {}

  ngAfterViewInit() {}

  setExchange(exchange) {
    this.selectedExchange = exchange.value;
  }

  ngOnInit(): void {
    this.exchanges = this.converter.getExchanges();
    //pobieranie obiektu exchanges

    this.exchangesKeys = Object.keys(this.exchanges.rate);
    //zwrotka w postaci tablicy z stringami(nazwami walut)

    this.selectedExchange = this.exchangesKeys[0];

    //istawienie selected exchange na pierwszy string exchangeKeys
  }
}
