import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PresenterFactory } from './ui/presenter/PresenterFactory';
import { withPresenter } from './ui/presenter/withPresenter';
import MyBalancePage from './ui/myBalance/MyBalancePage';

const presenterFactory = new PresenterFactory();

function Router() {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route path='/' component={withPresenter(MyBalancePage, presenterFactory.myBalance)} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
