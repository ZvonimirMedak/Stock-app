import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRegisterContaienr from "../containers/LoginRegisterContaienr";
import RouteGuard from "../components/RouteGuard";
import { Routes } from "./Routes";
import FavoritesContainer from "../containers/FavoritesContainer";
import MostTradedContainer from "../containers/MostTradedContainer";
import UserTradesContainer from "../containers/UserTradesContainer";
import AsideWrapper from "../wrappers/AsideWrapper";
import SpecificStockContainer from "../containers/SpecificStockContainer";

interface Props {
  authentificationToken: string;
}

const MainRouter = (props: Props) => {
  return (
    <Router>
      <AsideWrapper authentificationToken={props.authentificationToken} />
      <Switch>
        <Route exact path={Routes.Login} component={LoginRegisterContaienr} />
        <RouteGuard
          uid={props.authentificationToken}
          exact={true}
          path={Routes.Favorites}
        >
          <FavoritesContainer />
        </RouteGuard>
        <RouteGuard
          uid={props.authentificationToken}
          exact={true}
          path={Routes.MostTraded}
        >
          <MostTradedContainer />
        </RouteGuard>
        <RouteGuard
          uid={props.authentificationToken}
          exact={true}
          path={Routes.UserTrades}
        >
          <UserTradesContainer />
        </RouteGuard>
        <RouteGuard
          uid={props.authentificationToken}
          exact={true}
          path={Routes.SpecificStock}
        >
          <SpecificStockContainer />
        </RouteGuard>
      </Switch>
    </Router>
  );
};

export default MainRouter;
