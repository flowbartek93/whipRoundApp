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
import { FormControl, NgForm, NgModelGroup } from "@angular/forms";
import { converterService } from "../shared/converter.service";
import { exchange } from "../shared/exchange.model";

import { whipRoundsService } from "../shared/whip-rounds.service";

@Component({
  selector: "app-add-whipround",
  templateUrl: "./add-whipround.component.html",
  styleUrls: ["./add-whipround.component.css"]
})
export class AddWhiproundComponent implements OnInit, AfterViewChecked, OnChanges, AfterViewInit {
  @ViewChild("f", { static: false }) addWhipRoundForm: NgForm; // Overall form
  @ViewChild("prices", { static: false }) prices: NgModelGroup; // forms that have prices

  public priceValue: number;
  public priceinValue: number;

  public selectedExchange: string;
  public exchanges: exchange; //list of all accessible currencies and base
  public exchangesKeys: string[];

  public rateValue: number;

  constructor(private whipRoundsService: whipRoundsService, private converter: converterService) {}

  onSubmit() {
    this.whipRoundsService.addNewWhip(this.addWhipRoundForm.value);
  }

  setExchange(exchange) {
    console.log("setExchange() fires");
    this.selectedExchange = exchange.value;
    this.setRateValue();
  }

  OnPriceInProvided(pricein: FormControl) {
    pricein.valueChanges.subscribe((val: number) => {
      this.convertPrice(val);
    });
  }

  convertPrice(price: number) {}

  setRateValue() {
    //czy serwis zawiera obiekt exchanges
    if (this.converter.exchanges) {
      let exchangeRates = this.converter.exchanges.rate;

      switch (this.selectedExchange) {
        case "PLN":
          this.rateValue = exchangeRates.PLN;
          break;
        case "USD":
          this.rateValue = exchangeRates.USD;
          break;
        case "GBP":
          this.rateValue = exchangeRates.GBP;
          break;
        case "RUB":
          this.rateValue = exchangeRates.RUB;
          break;
      }
    }
  }

  ngOnInit(): void {
    this.exchanges = this.converter.getExchanges();

    //pobieranie obiektu exchanges

    this.exchangesKeys = Object.keys(this.exchanges.rate);
    //zwrotka w postaci tablicy z stringami(nazwami walut)

    this.selectedExchange = this.exchangesKeys[0];
    this.setRateValue();
    //ustawienie selected exchange na pierwszy string exchangeKeys(PLN)
  }

  ngAfterViewChecked() {}

  ngOnChanges() {
    console.log("OnChange");
  }

  ngAfterViewInit() {}
}
