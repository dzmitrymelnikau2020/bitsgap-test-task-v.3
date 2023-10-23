import { observable, computed, action } from "mobx";

import { ProfitTargetModel } from "../model";

export class ProfitTargetStore {
  @observable profitTarget: ProfitTargetModel = {
    profit: 0,
    targetPrice: 0,
    amount: 0
  };
  
  @action.bound
  public setProfitTarget(profitTarget: ProfitTargetModel) {
    this.profitTarget = profitTarget;
  }

  @action.bound
  public clearProfitTarget() {
    this.profitTarget = {
      profit: 0,
      targetPrice: 0,
      amount: 0
    }
  }
}
