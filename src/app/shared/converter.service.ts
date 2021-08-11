import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { exchanges } from "./exchange.model";

@Injectable({
  providedIn: "root"
})
export class converterService {
  private firestoreUrl: string = "https://whiproundapp-6e743-default-rtdb.firebaseio.com/";

  constructor(private httpClient: HttpClient) {}

  public exchanges = new Subject<exchanges>();

  nbpapi: string = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";

  setWhiprounds(body) {
    this.httpClient.post(`${this.firestoreUrl}whiprounds.json`, body).subscribe(res => console.log(res));
  }

  getWhiprounds() {
    return this.httpClient.get(`${this.firestoreUrl}whiprounds.json`);
  }

  getExchanges() {
    this.httpClient
      .get(`${this.nbpapi}`)
      .pipe(
        map((arr: any) => {
          let arrayRates;

          from(arr).subscribe((val: any) => {
            arrayRates = val.rates.filter(
              currency =>
                currency.code === "USD" || currency.code === "GBP" || currency.code === "EUR" || currency.code === "RUB"
            );
          });

          return arrayRates;
        })
      )

      .subscribe(data => {
        this.exchanges.next(data);
      });

    return this.exchanges;
  }
}
