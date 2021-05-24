import { AllStocksAction, SET_ALL_STOCKS } from "../actions/allStocksAction";
import { AllStocks } from "../consts/interfaces";

export type AllStocksState = {
  allStocks: AllStocks[];
};

export const allStocksInitialState: AllStocksState = {
  allStocks: [],
};

export const allStockReduer = (
  state = allStocksInitialState,
  action: AllStocksAction
) => {
  switch (action.type) {
    case SET_ALL_STOCKS:
      return { ...state, allStocks: action.allStocks };
    default:
      return state;
  }
};
