import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exchange } from "./exchange.model";

@Injectable({
  providedIn: "root"
})
export class converterService {
  private firestoreUrl: string = "https://whiproundapp-6e743-default-rtdb.firebaseio.com/";

  constructor(private httpClient: HttpClient) {}

  public exchanges: exchange;

  nbpapi: string = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";

  setWhiprounds(body) {
    this.httpClient.post(`${this.firestoreUrl}whiprounds.json`, body).subscribe(res => console.log(res));
  }

  getWhiprounds() {
    return this.httpClient.get(`${this.firestoreUrl}whiprounds.json`);
  }

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

    return <exchange>(this.exchanges = {
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
