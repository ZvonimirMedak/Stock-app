import { combineReducers, createStore } from "redux";
import { authReducer, AuthState } from "./authReducer";
import { notificationReducer, NotificationState } from "./notificationReducer";
import { StockState, userStocksReducer } from "./stockReducer";

const reducer = combineReducers({
  auth: authReducer,
  userStocks: userStocksReducer,
  notification: notificationReducer,
});

export interface State {
  auth: AuthState;
  userStocks: StockState;
  notification: NotificationState;
}

const store = createStore(reducer);

export default store;
