import { combineReducers, createStore } from "redux";
import { allStockReduer, AllStocksState } from "./allStocksReducer";
import { authReducer, AuthState } from "./authReducer";
import { notificationReducer, NotificationState } from "./notificationReducer";
import { StockState, userStocksReducer } from "./stockReducer";

const reducer = combineReducers({
  auth: authReducer,
  userStocks: userStocksReducer,
  allStocks: allStockReduer,
  notification: notificationReducer,
});

export interface State {
  auth: AuthState;
  userStocks: StockState;
  allStocks: AllStocksState;
  notification: NotificationState;
}

const store = createStore(reducer);

export default store;
