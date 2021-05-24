export enum Routes {
  Login = "/login",
  Favorites = "/favorites",
  MostTraded = "/most-traded",
  UserTrades = "/my-trades",
  SpecificStock = "/specific-stock/:symbol?",
}

export const RoutesWithParams = {
  SpecificStock: "/specific-stock",
};
