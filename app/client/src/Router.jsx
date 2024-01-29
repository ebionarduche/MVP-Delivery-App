import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import Registration from './pages/Registration';
import User from './pages/User';
import PrivateRoute from './utils/PrivateRoute';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route path="/login" component={ Login } />
            <Route path="/registration" component={ Registration } />
            <PrivateRoute path="/home" component={ Home } />
            <PrivateRoute path="/restaurant-details/:id" component={ RestaurantDetails } />
            <PrivateRoute path="/user" component={ User } />
        </Switch>
    );
}

export default Router;