import { observable, computed, action } from "mobx";

import { ProfitTargetModel } from "../model";

export class ProfitTargetsStore {
  @observable profitTargets: ProfitTargetModel[] = [];

  @computed get profitTargetsLength(): number {
    return this.profitTargets.length 
  }

  @computed
  get projectedProfits(): number {
    return this.profitTargets
    .reduce((acc, item) => acc += item.projectedProfit as number, 0);
  }

  @action.bound
  public addProfitTarget(profitTarget: ProfitTargetModel) {
    this.profitTargets.push(profitTarget)
  }

  @action.bound
  public deleteProfitTarget(idx: string) {
    const profitTargets = this.profitTargets.filter((item) => idx !== item.index && item);
    this.profitTargets = profitTargets;
  }

  @action.bound
  public clearProfitTargets() {
    this.profitTargets = []
  }

}
