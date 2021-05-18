import { Stock } from "../consts/interfaces";

export const SET_USER_STOCKS = 'SET_USER_STOCKS';


type SetUserStocks = {
    readonly type: typeof SET_USER_STOCKS;
    readonly userStocks: Stock[];
};


export const setUserStocks = (userStocks: Stock[]): SetUserStocks => ({
    type: SET_USER_STOCKS,
    userStocks,
});


export type UserStocksAction = SetUserStocks;
