import React from "react";

import { Icon } from '@material-ui/core';
import { DeleteIcon } from "./DeleteIcon/DeleteIcon";

import { NumberInput } from "../NumberInput/NumberInput";
import { QUOTE_CURRENCY } from "../../constants";

import styles from "./ProfitTarget.module.scss";
import { ProfitTargetModel } from "PlaceOrder/model";


type Props = {
  handleDelete(): void;
  profitTarget: ProfitTargetModel;
}

export const ProfitTarget = ({handleDelete, profitTarget}: Props) => {
    return (
        <div className={styles.root}>
            <div className={styles.cellProfit}>
                <div className={styles.count}>
                    <NumberInput
                      value={profitTarget.profit}
                      InputProps={{
                        endAdornment: <span>&#37;</span>
                      }}
                    />
                </div>
                <div className={styles.target}>
                    <NumberInput
                      value={profitTarget.targetPrice}
                      InputProps={{
                        endAdornment: <span>{QUOTE_CURRENCY}</span>
                      }}
                    />
                </div>
                <div className={styles.amount}>
                    <NumberInput
                      value={profitTarget.amount}
                      InputProps={{
                        endAdornment: <span>&#37;</span>
                      }}
                    />
                </div>
                <div className={styles.iconDelete}>
                  <Icon onClick={handleDelete}>
                    <DeleteIcon />
                  </Icon>
                </div>
            </div>
        </div>
    )
}
