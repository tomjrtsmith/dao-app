import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';
import { routes } from './routes';

export default function App() {
    return (
        <Switch>
            {routes.map((route): ReactElement => <Route {...route} key={route.key} />)}
        </Switch>
    );
}