import { combineReducers, createStore } from "redux";
import { authReducer, AuthState } from "./authReducer";
import { notificationReducer, NotificationState } from "./notificationReducer";

const reducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
});

export interface State {
  auth: AuthState;
  notification: NotificationState;
}

const store = createStore(reducer);

export default store;
