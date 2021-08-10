export interface rateList {
  PLN: number;
  GBP: number;
  USD: number;
  RUB: number;
}

export class exchange {
  public base: string;
  public rate: rateList;

  constructor(base, rate) {
    this.base = base;
    this.rate = {
      PLN: rate.pln,
      GBP: rate.gbp,
      USD: rate.usd,
      RUB: rate.rub
    };
  }
}
