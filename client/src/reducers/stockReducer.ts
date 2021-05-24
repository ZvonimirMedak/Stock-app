import { SET_USER_STOCKS, UserStocksAction } from "../actions/stockAction";
import { Stock } from "../consts/interfaces";

export type StockState = {
  userStocks: Stock[];
};

export const stockInitialState: StockState = {
  userStocks: [],
};

export const userStocksReducer = (
  state = stockInitialState,
  action: UserStocksAction
) => {
  switch (action.type) {
    case SET_USER_STOCKS:
      return { ...state, userStocks: action.userStocks };
    default:
      return state;
  }
};
