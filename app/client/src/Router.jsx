import React from 'react';
import {Route, Switch} from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/login" component={ Login } />
            <Route path="/home" component={ Home } />
            <Route path="/restaurant-details/:id" component={ RestaurantDetails } />
        </Switch>
    );
}

export default Router;