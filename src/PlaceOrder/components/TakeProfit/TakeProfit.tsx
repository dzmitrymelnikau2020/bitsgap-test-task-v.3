/* eslint @typescript-eslint/no-use-before-define: 0 */
import React, { useState } from "react";

import cn from 'classnames';

import { QuestionTooltip, Switch } from "components";

import { ProfitTargets } from "../ProfitTargets/ProfitTargets";

import { useStore } from "PlaceOrder/context";


import styles from "./TakeProfit.module.scss";

import { observer } from "mobx-react";


export const TakeProfit = observer(() => {

  const { placeOrderStore, profitTargetsStore, profitTargetStore } = useStore();
  const {
    profit,
    setProfit,
    targetPrice,
    handleChangeTargetPrice,
    amountProfit,
    setAmountProfit,
    projectedProfit,
    setProjectedProfit,
  } = placeOrderStore;

  const {
    addProfitTarget,
    clearProfitTargets,
  } = profitTargetsStore;

  const {
    clearProfitTarget,
  } = profitTargetStore
  
  const [checked, setChecked] = useState(false);

  const handlePush = () => {
    setProfit(profit + 2);
    const index = `${Math.floor(Math.random() * 100)}-${profit}`;
    handleChangeTargetPrice();
    setProjectedProfit()
    const value = {
      index,
      profit,
      targetPrice,
      amount: amountProfit,
      projectedProfit
    }
    addProfitTarget(value)

  }
  
  const handleChange = (value: boolean) => {
    setChecked(!checked)
    if(checked) {
      clearProfitTargets()
      clearProfitTarget()
    } else {
      setProfit(2);
      handleChangeTargetPrice();
      setAmountProfit(100)
    }
  };

  return (
    <div className={cn(styles.root, {[styles.isChecked]: checked})}>
      <div className={styles.content}>
        <div className={styles.label}>
          <QuestionTooltip message="Take profit description" />
          Take Profit{" "}
        </div>
        <div className={styles.switcher}>
          <Switch checked={checked} onChange={handleChange}/>
        </div>
      </div>
      { checked && <ProfitTargets handlePush={handlePush}/>}
    </div>
    )
});
