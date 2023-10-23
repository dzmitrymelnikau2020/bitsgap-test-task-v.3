import { observable, computed, action } from "mobx";

import { OrderSide } from "../model";

export class PlaceOrderStore {
  @observable activeOrderSide: OrderSide = "buy";
  @observable price: number = 0;
  @observable amount: number = 0;

  @observable profit: number = 0;
  @observable targetPrice: number = 0;
  @observable amountProfit: number = 0;
  @observable projectedProfit: number = 0

  @computed get total(): number {
    return this.price * this.amount;
  }

  @action.bound
  setProjectedProfit(): void {
    this.projectedProfit = this.activeOrderSide === 'buy'
    ? this.amountProfit * (this.targetPrice - this.price)
    : this.amountProfit * (this.price - this.targetPrice)
  }

  @action.bound
  public setOrderSide(side: OrderSide) {
    this.activeOrderSide = side;
  }

  @action.bound
  public setPrice(price: number) {
    this.price = price;
  }

  @action.bound
  public setAmount(amount: number) {
    this.amount = amount;
  }

  @action.bound
  public setTotal(total: number) {
    this.amount = this.price > 0 ? total / this.price : 0;
  }

  @action.bound
  public setProfit(profit: number) {
    this.profit = profit;
  }

  @action.bound
  public setTargetPrice(targetPrice: number) {
    this.targetPrice = targetPrice;
  }

  @action.bound
  public setAmountProfit(amount: number) {
    this.amountProfit = amount;   
  }

  @action.bound
  public handleChangeTargetPrice() {
    this.targetPrice = this.activeOrderSide === 'buy' 
    ? Math.round(this.price * (1 + this.profit / 100))
    : Math.round(this.price * (1 - this.profit / 100));
  }

  @action.bound
  public handleChangeProfit() {
    this.profit = this.activeOrderSide === 'buy' 
    ? Math.round((this.targetPrice / this.price - 1) * 100)
    : Math.round((1 - this.targetPrice / this.price) * 100);
  }
}
