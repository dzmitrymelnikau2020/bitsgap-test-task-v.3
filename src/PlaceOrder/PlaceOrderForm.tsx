import React from "react";
import { observer } from "mobx-react";

import { NumberInput, Button, QuestionTooltip, TextButton } from "components";

import { BASE_CURRENCY, QUOTE_CURRENCY } from "./constants";
import { useStore } from "./context";
import { PlaceOrderTypeSwitch } from "./components/PlaceOrderTypeSwitch/PlaceOrderTypeSwitch";
import { TakeProfit } from "./components/TakeProfit/TakeProfit";

import styles from "./PlaceOrderForm.module.scss";

export const PlaceOrderForm = observer(() => {
  const { placeOrderStore } = useStore()
  const {
    activeOrderSide,
    price,
    total,
    amount,
    setPrice,
    setAmount,
    setTotal,
    setOrderSide
  } = placeOrderStore;

  return (
    <form className={styles.root}>
      <div className={styles.label}>
        Market direction{" "}
        <QuestionTooltip message="Market direction description" />
      </div>
      <div className={styles.content}>
        <div className={styles.typeSwitch}>
          <PlaceOrderTypeSwitch
            activeOrderSide={activeOrderSide}
            onChange={setOrderSide}
          />
        </div>
        <NumberInput
          label={`Price, ${QUOTE_CURRENCY}`}
          value={price}
          onChange={(value) => setPrice(Number(value))}
        />
        <NumberInput
          value={amount}
          label={`Amount, ${BASE_CURRENCY}`}
          onChange={(value) => setAmount(Number(value))}
        />
        <NumberInput
          value={total}
          label={`Total, ${QUOTE_CURRENCY}`}
          onChange={(value) => setTotal(Number(value))}
        />
        <TakeProfit />
        <div className={styles.submit}>
          <Button
            color={activeOrderSide === "buy" ? "green" : "red"}
            type="submit"
            fullWidth
          >
            {activeOrderSide === "buy"
              ? `Buy ${BASE_CURRENCY}`
              : `Sell ${QUOTE_CURRENCY}`}
          </Button>
        </div>
      </div>
    </form>
  );
});
