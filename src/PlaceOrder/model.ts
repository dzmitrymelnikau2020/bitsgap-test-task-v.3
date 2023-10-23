export type OrderSide = "buy" | "sell";

export type ProfitTargetModel = {
    index?: string;
    profit: number;
    targetPrice: number;
    amount: number;
    projectedProfit?: number
}
