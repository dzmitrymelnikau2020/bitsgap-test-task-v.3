import React, { createContext, useContext } from "react";

import { PlaceOrderStore } from "./store/PlaceOrderStore";
import { ProfitTargetsStore } from "./store/ProfitTargetsStore";
import { ProfitTargetStore } from "./store/ProfitTargetStore";
class RootStore {
  placeOrderStore = new PlaceOrderStore();
  profitTargetsStore = new ProfitTargetsStore();
  profitTargetStore = new ProfitTargetStore();

}
const store = new RootStore();
const storeContext = createContext(store);

const useStore = () => {
  return useContext(storeContext);
};

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <storeContext.Provider value={store}>{children}</storeContext.Provider>
);

export { useStore, StoreProvider };
