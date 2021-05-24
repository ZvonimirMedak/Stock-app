import { combineReducers, createStore } from "redux";
import { allStockReduer, AllStocksState } from "./allStocksReducer";
import { authReducer, AuthState } from "./authReducer";
import { StockState, userStocksReducer } from "./stockReducer";

const reducer = combineReducers({
  auth: authReducer,
  userStocks: userStocksReducer,
  allStocks: allStockReduer,
});

export interface State {
  auth: AuthState;
  userStocks: StockState;
  allStocks: AllStocksState;
}

const store = createStore(reducer);

export default store;
