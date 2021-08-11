export interface rateList {
  EUR: number;
  GBP: number;
  USD: number;
  RUB: number;
}

export class exchanges {
  public rate: rateList;

  constructor(rate) {
    this.rate = {
      EUR: rate.pln,
      GBP: rate.gbp,
      USD: rate.usd,
      RUB: rate.rub
    };
  }
}
