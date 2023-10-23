import React from "react";
import cn from 'classnames';

import {  Divider } from '@material-ui/core';
import { useStore } from "PlaceOrder/context";
import { NumberInput } from "../NumberInput/NumberInput";
import { QUOTE_CURRENCY } from "../../constants";

import styles from "../ProfitTarget/ProfitTarget.module.scss";

export const ProfitTargetInput = () => {
  
  const { placeOrderStore } = useStore();
  const {
    profit,
    setProfit,
    amountProfit,
    setAmountProfit,
    targetPrice,
    setTargetPrice,
    handleChangeTargetPrice,
    handleChangeProfit,
  } = placeOrderStore;

    return (
        <div className={styles.root}>
            <div className={styles.cellProfit}>
                <div className={styles.count}>
                    <NumberInput
                      value={profit}
                      onChange={(value) => setProfit(Number(value))}
                      onBlur={() => handleChangeTargetPrice()}
                      InputProps={{
                        endAdornment: <div>&#37;</div>
                      }}
                    />
                </div>
                <div className={styles.target}>
                    <NumberInput
                      value={targetPrice}
                      onChange={(value) => setTargetPrice(Number(value))}
                      onBlur={() => handleChangeProfit()}
                      InputProps={{
                        endAdornment: <div>{QUOTE_CURRENCY}</div>
                      }}
                    />
                </div>
                <div className={styles.amount}>
                    <NumberInput
                      value={amountProfit}
                      onChange={(value) => setAmountProfit(Number(value))}
                      InputProps={{
                        endAdornment: <div>&#37;</div>
                      }}
                    />
                </div>
            </div>
            <Divider className={styles.divider} />
        </div>
    )
}
