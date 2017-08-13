import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const Error404 = () => {
    return (
        <h1>404 - Page not found!</h1>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/search" component={Search} />
                    <Route component={Error404} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

render(<App />, document.getElementById('app'));