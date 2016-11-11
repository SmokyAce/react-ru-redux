import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import App from './containers/App';
import Home from './components/home';


export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home}/>
            <Route path="/photos" component={App}/>
        </Route>
    </Router>
)