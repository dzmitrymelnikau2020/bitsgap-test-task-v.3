import React from "react";
import { observer } from "mobx-react";

import { Icon } from '@material-ui/core';
import { AddIcon } from "./AddIcon/AddIcon";

import { useStore } from "PlaceOrder/context";

import { ProfitTargetModel } from "PlaceOrder/model";

import { QUOTE_CURRENCY } from "../../constants";

import { ProfitTarget } from "../ProfitTarget/ProfitTarget";
import { ProfitTargetInput } from "../ProfitTarget/ProfitTargetInput";

import cn from 'classnames';

import styles from "./ProfitTargets.module.scss";

type Props = {
  handlePush():void
}
export const ProfitTargets = observer(({ handlePush }: Props) => {
  const { profitTargetsStore, placeOrderStore } = useStore();
  
  const { activeOrderSide } = placeOrderStore;

  const {
    profitTargets,
    deleteProfitTarget,
    profitTargetsLength,
    projectedProfit,
   } = profitTargetsStore;

  const handleDelete = (idx: string): void => {
    deleteProfitTarget(idx)
  }

  return (
    <div className={styles.root}>
      <div className={styles.cellProfit}>
          <div className={styles.count}>Profit</div>
          <div className={styles.target}>Target price</div>
          <div className={styles.amount}>Amount to {activeOrderSide}</div>
      </div>
      <div>
        { profitTargets?.map((profitTarget: ProfitTargetModel) => (
        <ProfitTarget
          key={profitTarget.index}
          profitTarget={profitTarget}
          handleDelete={() => handleDelete(profitTarget.index as string)}
        />))}
        { profitTargetsLength < 5 && <ProfitTargetInput />}
      </div>
      { profitTargetsLength < 5 && 
        <div className={styles.addProfitTarget}>
          <Icon
            onClick={() => handlePush()}
          >
            <AddIcon />
          </Icon> 
          <div className={styles.iconLabel}>
            Add profit target {profitTargetsLength}/5
            </div>
        </div>
      }
      <div className={styles.projectedProfit}>
        <div>Projected profit</div>
        <div>{projectedProfit} {QUOTE_CURRENCY}</div>
      </div>
    </div>
  )
});
