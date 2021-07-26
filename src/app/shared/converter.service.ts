import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { exchange } from "./exchange.model";

@Injectable({
  providedIn: "root"
})
export class converterService {
  private basicUrl: string = "http://api.exchangeratesapi.io/v1/latest";
  private apiKey: string = "908a441d5c8a2f57dfd54300f580f227";

  constructor(private httpClient: HttpClient) {}

  public exchanges: exchange;

  getExchanges() {
    // this.httpClient
    //   .get<any>(`${this.basicUrl}`, { params: { access_key: this.apiKey } })
    //   .pipe(
    //     map(props => {
    //       return {
    //         base: props.base,
    //         rate: {
    //           pln: props.rates.PLN,
    //           gbp: props.rates.GBP,
    //           usd: props.rates.USD,
    //           RUB: props.rates.RUB
    //         }
    //       };
    //     })
    //   )
    //   .subscribe(data => {
    //     this.exchanges = data;
    //     console.log(this.exchanges);
    //   });

    return (this.exchanges = {
      base: "EUR",
      rate: {
        PLN: 2,
        GBP: 4,
        USD: 10,
        RUB: 20
      }
    });
  }
}
