import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Routes } from '../router/Routes';

interface Props {
    exact: boolean;
    path: string;
    children: JSX.Element;
}

const RouteGuard = (props: Props) => {
    //for now
    return true ? (
        <Route exact={props.exact} path={props.path}>
            {props.children}
        </Route>
    ) : (
        <Redirect to={Routes.Login} />
    );
}

export default RouteGuard;
