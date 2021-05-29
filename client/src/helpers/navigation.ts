import { LocationState, History } from "history";
import { Routes, RoutesWithParams } from "../router/Routes";

export const replaceLoginScreen = (history: History<LocationState>) => {
  history.replace(Routes.Favorites);
};

export const goToSpecificStock = (
  history: History<LocationState>,
  symbol: string
) => {
  history.push(`${RoutesWithParams.SpecificStock}/${symbol}`);
};

export const goBack = (history: History<LocationState>) => {
  history.goBack();
};
