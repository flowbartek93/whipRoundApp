export class whipRound {
  public whipName: string;
  public amount: number;
  public subscribers: string;

  public prices: {
    selectedExchange: string;
    price: number;
    pricein;
  };

  public additionalData: {
    pricePerPerson: number;
  };

  constructor(name, amount, subscribers, prices, additionalData) {
    this.whipName = name;
    this.amount = amount;
    this.subscribers = subscribers;
    this.prices = prices;
    this.additionalData = additionalData;
  }
}
