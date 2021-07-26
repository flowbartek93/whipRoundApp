export class exchange {
  public base: string;
  public rate: {};

  constructor(base, rate) {
    this.base = base;
    this.rate = {
      pln: rate.pln,
      gbp: rate.gbp,
      usd: rate.usd,
      RUB: rate.rub
    };
  }
}
