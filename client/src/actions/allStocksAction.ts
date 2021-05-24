import { AllStocks } from "../consts/interfaces";

export const SET_ALL_STOCKS = "SET_ALL_STOCKS";

type SetAllStocks = {
  readonly type: typeof SET_ALL_STOCKS;
  readonly allStocks: AllStocks[];
};

export const setAllStocks = (allStocks: AllStocks[]): SetAllStocks => ({
  type: SET_ALL_STOCKS,
  allStocks,
});

export type AllStocksAction = SetAllStocks;
