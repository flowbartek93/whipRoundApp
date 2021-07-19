export class whipRound {
  public whipName: string;
  public amount: number;
  public subscribers: string;
  public price: number;

  constructor(name, amount, subscribers, price) {
    this.whipName = name;
    this.amount = amount;
    this.subscribers = subscribers;
    this.price = price;
  }
}
