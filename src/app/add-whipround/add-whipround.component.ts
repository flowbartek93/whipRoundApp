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
import { exchanges } from "../shared/exchange.model";

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

  public selectedExchange: string = "USD";
  public exchangeRates; //list of all accessible currencies and base
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

  convertPrice(price: number) {
    let convertedValue = (price * this.rateValue).toFixed(2);

    if (price) {
      this.prices.control.controls.price.setValue(convertedValue);
    }
  }

  setRateValue() {
    //czy serwis zawiera obiekt exchanges

    switch (this.selectedExchange) {
      case "USD":
        this.rateValue = this.exchangeRates[0].mid;
        break;
      case "EUR":
        this.rateValue = this.exchangeRates[1].mid;
        break;
      case "GBP":
        this.rateValue = this.exchangeRates[2].mid;
        break;
      case "RUB":
        this.rateValue = this.exchangeRates[3].mid;
        break;
    }
  }

  ngOnInit(): void {
    this.converter.getExchanges().subscribe(exchanges => {
      this.exchangeRates = exchanges;
      console.log(this.exchangeRates);

      this.exchangesKeys = this.exchangeRates.map(singleData => {
        return singleData.code;
      });

      this.setRateValue();
    });

    //pobieranie obiektu exchanges

    // zwrotka w postaci tablicy z stringami(nazwami walut)

    // ustawienie selected exchange na pierwszy string exchangeKeys(PLN)

    //Ustawienie przelicznika walut
  }

  ngAfterViewChecked() {}

  ngOnChanges() {
    console.log("OnChange");
  }

  ngAfterViewInit() {}
}
