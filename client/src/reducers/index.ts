import { combineReducers, createStore } from 'redux';
import { authReducer, AuthState } from './authReducer';
import { StockState, userStocksReducer } from './stockReducer'

const reducer = combineReducers({
    auth: authReducer,
    userStocks: userStocksReducer
});

export interface State {
    auth: AuthState;
    userStocks: StockState
}

const store = createStore(reducer);
export default store;
