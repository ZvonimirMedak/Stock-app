import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginRegisterContaienr from '../containers/LoginRegisterContaienr';
import RouteGuard from '../components/RouteGuard';
import { Routes } from './Routes';
import FavoritesContainer from '../containers/FavoritesContainer';
import MostTradedContainer from '../containers/MostTradedContainer';
import UserTradesContainer from '../containers/UserTradesContainer';

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.Login} component={LoginRegisterContaienr} />
                <RouteGuard exact={true} path={Routes.Favorites}>
                    <FavoritesContainer />
                </RouteGuard>
                <RouteGuard exact={true} path={Routes.MostTraded}>
                    <MostTradedContainer />
                </RouteGuard>
                <RouteGuard exact={true} path={Routes.UserTrades}>
                    <UserTradesContainer />
                </RouteGuard>
            </Switch>
        </Router>
    );
}

export default MainRouter;
